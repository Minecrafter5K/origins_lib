import type IPower from "./Power";

export class Origin {
  powers: IPower[] = [];
  constructor(
    public name: string,
    public icon: string,
    public order: number,
    public impact: number
  ) {}

  addPower(power: IPower) {
    this.powers.push(power);
    return this;
  }

  // build() {
  //   return JSON.stringify({
  //     powers: this.powers.map((power) => power.getId),
  //     icon: this.icon,
  //     order: this.order,
  //     impact: this.impact,
  //   });
  // }
}
