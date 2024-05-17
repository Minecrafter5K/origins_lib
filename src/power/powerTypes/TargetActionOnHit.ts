import type { IDamageCondition } from "../conditions/damageConditions/IDamageCondition";
import type { IEntityAction } from "../entityActions/IEntityAction";
import type { IHudRenderer } from "../hudRenderer/IHudRenderer";
import type { ITargetCondition } from "../conditions/targetConditions/ITargetCondition";
import type { IPowerType } from "./IPowerType";

export class TargetActionOnHit implements IPowerType {
  public hudRenderer?: IHudRenderer;
  public damageCondetion?: IDamageCondition;
  public targetCondition?: ITargetCondition;

  constructor(public entityAction: IEntityAction, public cooldown: number) {}

  withHudRenderer(hudRenderer: IHudRenderer) {
    this.hudRenderer = hudRenderer;
    return this;
  }

  withDamageCondition(damageCondition: IDamageCondition) {
    this.damageCondetion = damageCondition;
    return this;
  }

  withTargetCondition(targetCondition: ITargetCondition) {
    this.targetCondition = targetCondition;
    return this;
  }

  transform() {
    return {
      type: "origins:target_action_on_hit",
      entity_action: this.entityAction.transform(),
      cooldown: this.cooldown,
      hudRenderer: this.hudRenderer?.transform(),
      damage_condition: this.damageCondetion?.transform(),
      target_condition: this.targetCondition?.transform(),
    };
  }
}
