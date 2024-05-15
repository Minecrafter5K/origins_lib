export class Power {
  constructor(private name: string, public id: string) {}

  public get getName(): string {
    return this.name;
  }
}
