import { v4 as uuidv4 } from "uuid";

export class ExistingPower implements Power {
  constructor(private id: string) {}

  get getId(): string {
    return this.id;
  }
}

export class CustomPower implements Power {
  private id: string;

  constructor(private datapackId: string, private name?: string) {
    const powerId = name || uuidv4();
    this.id = `${datapackId}:${powerId}`;
  }

  get getId() {
    return this.id;
  }
}

export default interface Power {
  getId: string;
}
