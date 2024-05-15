import type { DamageCondition } from "../damageConditions/DamageCondition";
import type { EntityAction } from "../entityActions/EntityAction";
import type { HudRenderer } from "../hudRenderer/HudRenderer";
import type { TargetCondition } from "../targetConditions/TargetCondition";
import { PowerType } from "./PowerType";

export class TargetActionOnHit extends PowerType {
  constructor(private fields: fields) {
    super();
  }
}

type fields = {
  enitityAction: EntityAction;
  cooldown: number;
  hudRenderer?: HudRenderer;
  damageCondetion?: DamageCondition;
  targetCondition?: TargetCondition;
};
