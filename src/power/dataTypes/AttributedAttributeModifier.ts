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

  build() {
    return {
      name: this.name,
      attribute: this.attribute.build(),
      value: this.value,
      operation: this.operation.build(),
    };
  }
}

export interface IModifier {
  build(): { name?: string; attribute: any; value: number; operation: any };
}
