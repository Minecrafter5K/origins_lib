import type { IDataType } from "./IDataType";
import type { Identifier } from "./Identifier";
import type { ModifierOperation } from "./ModifierOperation";

export class AttributedAttributeModifier implements IDataType, IModifier {
  public name?: string;
  constructor(
    public attribute: Identifier,
    public operation: ModifierOperation,
    public value: number
  ) {}

  withName(name: string) {
    this.name = name;
    return this;
  }

  transform() {
    return {
      name: this.name,
      attribute: this.attribute.transform(),
      value: this.value,
      operation: this.operation.transform(),
    };
  }
}

export interface IModifier {
  transform(): { name?: string; attribute: any; value: number; operation: any };
}
