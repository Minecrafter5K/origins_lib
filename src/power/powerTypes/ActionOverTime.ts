import type { AttributedAttributeModifier } from "../dataTypes/AttributedAttributeModifier";
import type { IEntityAction } from "../entityActions/IEntityAction";
import type { IPowerType } from "./IPowerType";

export class ActionOverTime implements IPowerType {
  public entityAction?: IEntityAction;
  public risingAction?: IEntityAction;
  public fallingAction?: IEntityAction;

  constructor(public interval: number) {}

  withEntityAction(entityAction: IEntityAction) {
    this.entityAction = entityAction;
    return this;
  }

  withRisingAction(risingAction: IEntityAction) {
    this.risingAction = risingAction;
    return this;
  }

  withFallingAction(fallingAction: IEntityAction) {
    this.fallingAction = fallingAction;
    return this;
  }

  transform() {
    return {
      type: "origins:action_over_time",
      interval: this.interval,
      entityAction: this.entityAction?.transform(),
      risingAction: this.risingAction?.transform(),
      fallingAction: this.fallingAction?.transform(),
    };
  }
}
