import type { Identifier } from "./Identifier";

export class StatusEffectInstance {
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
}
