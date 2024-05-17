import type { AttributedAttributeModifier } from "../dataTypes/AttributedAttributeModifier";
import type { Key } from "../dataTypes/Key";
import type { IEntityAction } from "../entityActions/IEntityAction";
import type { IHudRenderer } from "../hudRenderer/IHudRenderer";
import type { IPowerType } from "./IPowerType";

export class ActiveSelf implements IPowerType {
  constructor(
    public entityAction: IEntityAction,
    public cooldown: number,
    public hudRenderer: IHudRenderer,
    public key: Key
  ) {}

  transform() {
    return {
      type: "origins:active_self",
      entityAction: this.entityAction.transform(),
      cooldown: this.cooldown,
      hudRenderer: this.hudRenderer.transform(),
    };
  }
}
