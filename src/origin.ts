import type { Power } from "./power";

export class Origin {
  powers: Power[] = [];
  constructor(
    public name: string,
    private icon: string,
    private order: number,
    private impact: number
  ) {}

  addPower(power: Power) {
    this.powers.push(power);
    return this;
  }

  setIcon(icon: string) {
    this.icon = icon;
    return this;
  }

  get getIcon() {
    return this.icon;
  }

  build() {
    return JSON.stringify({
      powers: this.powers.map((power) => power.id),
      icon: this.icon,
      order: this.order,
      impact: this.impact,
    });
  }
}
