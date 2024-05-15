import { v4 as uuidv4 } from "uuid";
import type { PowerType } from "./power/powerTypes/PowerType";

export class ExistingPower implements Power {
  constructor(private id: string) {}

  get getId(): string {
    return this.id;
  }
}

export class CustomPower implements Power {
  public description: string = "";
  public id: string = uuidv4();

  constructor(public name: string, public type: PowerType) {}

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
}

export default interface Power {
  getId: string;
}
