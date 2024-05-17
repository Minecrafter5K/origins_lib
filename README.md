# origins_test

## Quickstart

1. Init new project via `bun init`.
2. Add origins_lib to dependencies:

```json
"dependencies": {
  "origins_lib": "git+https://github.com/Minecrafter5K/origins_lib.git"
}
```

3. (Optional) Install TypeScript with this tutorial https://bun.sh/guides/runtime/typescript
4. Now you can start developing your Origins:

```ts
// define your packId
const PACKID = "youPackId";

// define you power
const power = new CustomPower(
  "Health increase",
  new Attribute(
    new AttributedAttributeModifier(
      new Identifier({ type: "minecraft:generic.max_health" }),
      ModifierOperation.ADDITION,
      4
    ).withName("Max Health Increase")
  )
);

// define your origin
const myOrigin = new Origin(
  "sample_origin",
  "Sample Origin",
  "minecraft:nether_star",
  1,
  1
)
  .addPower(new ExistingPower("origins:sample_power"))
  .addPower(power);

// init transformer with origins and/or powers
const transformer = new Transformer(
  { id: PACKID, name: "myName", packFormat: 10 },
  [myOrigin],
  []
);

// transform everything and save to ./dist
transformer.transform();
```

_Happy coding!_
