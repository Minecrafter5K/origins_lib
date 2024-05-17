import type { ICondition } from "../ICondition";
import type { IMetaCondition } from "./IMetaCondition";

export class And implements IMetaCondition {
  constructor(public conditions: ICondition[]) {}

  transform() {
    return {
      condition: {
        type: "origins:and",
        conditions: this.conditions.map((condition) => condition.transform()),
      },
    };
  }
}
