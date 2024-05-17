import type { ICondition } from "../ICondition";

export interface IMetaCondition extends ICondition {
  transform(): { condition: { type: string } };
}
