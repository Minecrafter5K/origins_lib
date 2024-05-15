import { v4 as uuidv4 } from "uuid";
import type { PowerType } from "./power/powerTypes/PowerType";

export class ExistingPower implements Power {
  constructor(private id: string) {}

  get getId(): string {
    return this.id;
  }
}

export class CustomPower implements Power {
  private fullId: string;

  constructor(
    private datapackId: string,
    public name: string,
    public type: PowerType,
    private id: string,
    public description: string = ""
  ) {
    const powerId = id || uuidv4();
    this.fullId = `${datapackId}:${powerId}`;
  }

  get getId() {
    return this.fullId;
  }
}

export default interface Power {
  getId: string;
}
