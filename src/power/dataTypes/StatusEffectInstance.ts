import type { Identifier } from "./Identifier";

export class StatusEffectInstance {
  constructor(private fields: Partial<fields> & { effect: Identifier }) {
    this.fields = {
      effect: fields.effect,
      duration: fields.duration || 100,
      amplifier: fields.amplifier || 0,
      isAmbient: fields.isAmbient || false,
      showParticles: fields.showParticles || false,
      showIcon: fields.showIcon || false,
    };
  }
}

type fields = {
  duration: number;
  amplifier: number;
  isAmbient: boolean;
  showParticles: boolean;
  showIcon: boolean;
};
