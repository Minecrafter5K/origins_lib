import type { Origin } from "./Origin";
import type Power from "./Power";

import { readdir, mkdir } from "node:fs/promises";
import { CustomPower } from "./Power";

export class Transformer {
  constructor(
    private pack: Pack,
    public origins: Origin[],
    public powers?: Power[]
  ) {}

  async transform() {
    const powers = this.origins.map((origin) => origin.getPowers).flat();
    if (this.powers) {
      powers.map((power) => powers.push(power));
    }

    console.log(
      `Transforming ${this.origins.length} origins and ${powers.length} powers`
    );

    try {
      await this.prepDirs();
    } catch (error) {
      console.warn("Error while preparing directories, exiting");
      return;
    }

    await this.writePackMcmeta();
    console.log("generated pack.mcmeta");

    await this.writeOrigins(this.origins);
    console.log("generated origins");

    await this.writePowers(powers);
    console.log("generated powers");
  }

  private async prepDirs() {
    try {
      await mkdir("./dist");
      console.log("Created dist directory");
    } catch (mkdirError) {}

    const files = await readdir("./dist");
    if (files.length > 0) {
      console.log("Dist directory is not empty, exiting");
      throw new Error("Dist directory is not empty");
    }

    await mkdir(`./dist/data/${this.pack.id}/origins`, { recursive: true });
    await mkdir(`./dist/data/${this.pack.id}/powers`, { recursive: true });
  }

  private async writePackMcmeta() {
    try {
      await Bun.write(
        "./dist/pack.mcmeta",
        JSON.stringify({
          name: this.pack.name,
          id: this.pack.id,
          pack_format: this.pack.packFormat,
          description: this.pack.description || "",
        })
      );
    } catch (error) {
      console.warn("Error while writing pack.mcmeta", error);
      return;
    }
  }

  private async writeOrigins(origins: Origin[]) {
    try {
      origins.map((origin) => {
        Bun.write(
          `./dist/data/${this.pack.id}/origins/${origin.id}.json`,
          JSON.stringify(origin.transform())
        );
      });
    } catch (error) {
      console.warn("Error while writing pack.mcmeta", error);
      return;
    }
  }

  private async writePowers(powers: Power[]) {
    try {
      powers.map((power) => {
        if (power instanceof CustomPower) {
          Bun.write(
            `./dist/data/${this.pack.id}/powers/${power.getId}.json`,
            JSON.stringify(power.transform())
          );
        }
      });
    } catch (error) {
      console.warn("Error while writing pack.mcmeta", error);
      return;
    }
  }
}

type Pack = {
  name: string;
  id: string;
  packFormat: number;
  description?: string;
};
