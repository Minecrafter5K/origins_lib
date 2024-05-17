import type { ICondition } from "../ICondition";

export interface IDamageCondition extends ICondition {
  transform(): { damage_condition: { type: string } };
}
