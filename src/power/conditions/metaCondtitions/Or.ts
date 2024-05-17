import type { ICondition } from "../ICondition";
import type { IMetaCondition } from "./IMetaCondition";

export class Or implements IMetaCondition {
  constructor(public conditions: ICondition[]) {}

  transform() {
    return {
      condition: {
        type: "origins:or",
        conditions: this.conditions.map((condition) => condition.transform()),
      },
    };
  }
}
