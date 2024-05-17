import type { IDataType } from "./IDataType";

export class Identifier implements IDataType {
  constructor(private fields: fields) {}

  transform() {
    return this.fields.type;
  }
}
type fields = {
  type: string;
  T?: string;
};
