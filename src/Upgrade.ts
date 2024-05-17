import type { Origin } from "./Origin";
import type { Identifier } from "./exports/DataType";

export class Upgrade {
  public announcement?: string;

  constructor(public condition: Identifier, public Origin: Origin) {}

  withAnnouncement(announcement: string) {
    this.announcement = announcement;
    return this;
  }

  transform() {
    return {
      condition: this.condition,
      origin: this.Origin,
      announcement: this.announcement,
    };
  }
}
