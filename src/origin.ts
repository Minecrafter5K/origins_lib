import type IPower from "./Power";

export class Origin {
  private powers: IPower[] = [];
  private description: string = "";

  constructor(
    public id: string,
    public name: string,
    public icon: string,
    public order: number,
    public impact: number
  ) {}

  withDescription(description: string) {
    this.description = description;
    return this;
  }

  addPower(power: IPower) {
    this.powers.push(power);
    return this;
  }

  public get getPowers() {
    return this.powers;
  }

  transform(packId: string) {
    const powers = this.powers.map((power) => {
      return `${packId}:${power.getId}`;
    });

    return {
      powers: powers,
      icon: this.icon,
      order: this.order,
      impact: this.impact,
      name: this.name,
      description: this.description,
    };
  }
}
