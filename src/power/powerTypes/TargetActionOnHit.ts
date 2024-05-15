import type { DamageCondition } from "../damageConditions/DamageCondition";
import type { EntityAction } from "../entityActions/EntityAction";
import type { HudRenderer } from "../hudRenderer/HudRenderer";
import type { TargetCondition } from "../targetConditions/TargetCondition";
import type { PowerType } from "./PowerType";

export class TargetActionOnHit implements PowerType {
  public hudRenderer?: HudRenderer;
  public damageCondetion?: DamageCondition;
  public targetCondition?: TargetCondition;

  constructor(public entityAction: EntityAction, public cooldown: number) {}

  withHudRenderer(hudRenderer: HudRenderer) {
    this.hudRenderer = hudRenderer;
    return this;
  }

  withDamageCondition(damageCondition: DamageCondition) {
    this.damageCondetion = damageCondition;
    return this;
  }

  withTargetCondition(targetCondition: TargetCondition) {
    this.targetCondition = targetCondition;
    return this;
  }
}
