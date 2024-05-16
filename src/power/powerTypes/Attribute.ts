import type { AttributedAttributeModifier } from "../dataTypes/AttributedAttributeModifier";
import type { IPowerType } from "./IPowerType";

export class Attribute implements IPowerType {
  private modifierArray: AttributedAttributeModifier[];

  constructor(
    public modifier: AttributedAttributeModifier | AttributedAttributeModifier[]
  ) {
    if (!Array.isArray(modifier)) {
      this.modifierArray = [modifier];
    } else {
      this.modifierArray = modifier;
    }
  }

  build() {
    return {
      type: "origins:attribute",
      modifier: this.modifierArray.map((m) => m.build()),
    };
  }
}
