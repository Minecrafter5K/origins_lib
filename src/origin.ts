import type { Power } from "./power";

export class Origin {
  powers: Power[] = [];
  constructor(public name: string) {}

  addPower(power: Power) {
    this.powers.push(power);
    console.log(`${this.name} has a new power power ${power.getName}!`);
    return this;
  }
}
