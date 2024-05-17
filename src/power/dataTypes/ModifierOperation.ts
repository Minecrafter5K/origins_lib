import type { IDataType } from "./IDataType";

export class ModifierOperation implements IDataType {
  constructor(private type: Operation) {}

  transform() {
    return this.type;
  }
}

enum Operation {
  addition = "addition",
  multiply_base = "multiply_base",
  multiply_total = "multiply_total",
}

export const ADDITION = new ModifierOperation(Operation.addition);
export const MULTIPLY_BASE = new ModifierOperation(Operation.multiply_base);
export const MULTIPLY_TOTAL = new ModifierOperation(Operation.multiply_total);
