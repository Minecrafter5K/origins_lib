import type { IMetaCondition } from "./IMetaCondition";

export class Constant implements IMetaCondition {
  constructor(public value: boolean) {}
  transform() {
    return {
      condition: {
        type: "origins:constant",
        value: this.value,
      },
    };
  }
}
