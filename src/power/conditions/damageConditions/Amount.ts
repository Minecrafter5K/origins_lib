import type { Comparison } from "../../dataTypes/Comparision";
import type { IDamageCondition } from "./IDamageCondition";

export class Amount implements IDamageCondition {
  constructor(public comparison: Comparison, public amount: number) {}

  transform() {
    return {
      damage_condition: {
        type: "origins:amount",
        comparison: this.comparison,
        amount: this.amount,
      },
    };
  }
}
