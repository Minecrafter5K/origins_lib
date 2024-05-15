import type Power from "./Power";

export class Origin {
  powers: Power[] = [];
  constructor(
    public name: string,
    public icon: string,
    public order: number,
    public impact: number
  ) {}

  addPower(power: Power) {
    this.powers.push(power);
    return this;
  }

  build() {
    return JSON.stringify({
      powers: this.powers.map((power) => power.getId),
      icon: this.icon,
      order: this.order,
      impact: this.impact,
    });
  }
}
