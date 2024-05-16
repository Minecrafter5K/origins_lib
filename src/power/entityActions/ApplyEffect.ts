import type { StatusEffectInstance } from "../dataTypes/StatusEffectInstance";
import type { IEntityAction } from "./IEntityAction";

export class ApplyEffect implements IEntityAction {
  effectArray: StatusEffectInstance[];

  constructor(public effect: StatusEffectInstance | StatusEffectInstance[]) {
    if (!Array.isArray(effect)) {
      this.effectArray = [effect];
    } else {
      this.effectArray = effect;
    }
  }

  build() {
    return {
      type: "origins:apply_effect",
      effect: this.effectArray.map((effect) => effect.build()),
    };
  }
}
