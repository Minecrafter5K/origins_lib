import { v4 as uuidv4 } from "uuid";
import type { IPowerType } from "./power/powerTypes/IPowerType";

export class ExistingPower implements IPower {
  constructor(private id: string) {}

  get getId(): string {
    return this.id;
  }

  build() {
    throw new Error("Method not implemented.");
  }
}

export class CustomPower implements IPower {
  public description: string = "";
  public id: string = uuidv4();

  constructor(public name: string, public type: IPowerType) {}

  get getId() {
    return this.id;
  }

  withId(id: string) {
    this.id = this.id;
    return this;
  }

  withDescription(description: string) {
    this.description = description;
    return this;
  }

  build() {
    const { type, ...rest } = this.type.build();
    return JSON.stringify({
      name: this.name,
      description: this.description,
      type: type,
      ...rest,
    });
  }
}

export default interface IPower {
  getId: string;
}
