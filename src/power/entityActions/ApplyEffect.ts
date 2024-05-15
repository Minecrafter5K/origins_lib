import type { StatusEffectInstance } from "../dataTypes/StatusEffectInstance";
import type { EntityAction } from "./EntityAction";

export class ApplyEffect implements EntityAction {
  constructor(public effect: StatusEffectInstance | StatusEffectInstance[]) {
    if (!Array.isArray(effect)) {
      this.effect = [effect];
    }
    console.log(this.effect);
  }
}
