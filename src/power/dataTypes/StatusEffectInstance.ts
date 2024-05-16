import type { IDataType } from "./IDataType";
import type { Identifier } from "./Identifier";

export class StatusEffectInstance implements IDataType, IStatusEffectInstance {
  amplifier: number = 0;
  duration: number = 100;
  isAmbient: boolean = false;
  showParticles: boolean = true;
  showIcon: boolean = true;

  constructor(public effect: Identifier) {}

  withDuration(duration: number) {
    this.duration = duration;
    return this;
  }

  withAmplifier(amplifier: number) {
    this.amplifier = amplifier;
    return this;
  }

  withIsAmbient(isAmbient: boolean) {
    this.isAmbient = isAmbient;
    return this;
  }

  withShowParticles(showParticles: boolean) {
    this.showParticles = showParticles;
    return this;
  }

  withShowIcon(showIcon: boolean) {
    this.showIcon = showIcon;
    return this;
  }

  build() {
    return {
      effect: this.effect.build(),
      duration: this.duration,
      amplifier: this.amplifier,
      isAmbient: this.isAmbient,
      showParticles: this.showParticles,
      showIcon: this.showIcon,
    };
  }
}

export interface IStatusEffectInstance {
  build(): {
    effect: string;
    duration: number;
    amplifier: number;
    isAmbient: boolean;
    showParticles: boolean;
    showIcon: boolean;
  };
}
