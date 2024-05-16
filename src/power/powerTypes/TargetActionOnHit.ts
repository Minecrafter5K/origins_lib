import type { IDamageCondition } from "../damageConditions/IDamageCondition";
import type { IEntityAction } from "../entityActions/IEntityAction";
import type { IHudRenderer } from "../hudRenderer/IHudRenderer";
import type { ITargetCondition } from "../targetConditions/ITargetCondition";
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

  build() {
    return {
      type: "origins:target_action_on_hit",
      entity_action: this.entityAction.build(),
      cooldown: this.cooldown,
      hudRenderer: this.hudRenderer?.build(),
      damage_condition: this.damageCondetion?.build(),
      target_condition: this.targetCondition?.build(),
    };
  }
}
