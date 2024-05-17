import type { IDataType } from "./IDataType";

export class Comparison implements IDataType {
  constructor(private type: ComparisonType) {}

  transform() {
    return this.type;
  }
}

enum ComparisonType {
  lessThan = "<",
  lessOrEqualThen = "<=",
  graterThan = ">",
  graterOrEqualThen = ">=",
  equal = "==",
  notEqual = "!=",
}

export const LESS_THAN = new Comparison(ComparisonType.lessThan);
export const LESS_OR_EQUAL_THEN = new Comparison(
  ComparisonType.lessOrEqualThen
);
export const GRATER_THAN = new Comparison(ComparisonType.graterThan);
export const GRATER_OR_EQUAL_THEN = new Comparison(
  ComparisonType.graterOrEqualThen
);
export const EQUAL = new Comparison(ComparisonType.equal);
export const NOT_EQUAL = new Comparison(ComparisonType.notEqual);
