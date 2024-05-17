import type { IDataType } from "./IDataType";

export class Key implements IDataType {
  constructor(public key: string, public continuos: boolean) {}
}
