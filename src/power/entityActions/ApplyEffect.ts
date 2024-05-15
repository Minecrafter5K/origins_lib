import type { StatusEffectInstance } from "../dataTypes/StatusEffectInstance";
import { EntityAction } from "./EntityAction";

export class ApplyEffect extends EntityAction {
  constructor(public effect: StatusEffectInstance | StatusEffectInstance[]) {
    super();
    if (!Array.isArray(effect)) {
      this.effect = [effect];
    }
    console.log(this.effect);
  }
}
