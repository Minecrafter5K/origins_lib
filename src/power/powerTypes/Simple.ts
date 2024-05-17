import type { IPowerType } from "./IPowerType";

export class Simple implements IPowerType {
  constructor() {}

  transform() {
    return {
      type: "origins:simple",
    };
  }
}
