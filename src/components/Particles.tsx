import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

export class ParticlesContainer extends React.PureComponent<object> {
  async customInit(engine: Engine): Promise<void> {
    await loadFirePreset(engine);
  }

  render() {
    const options = {
      background: {
        image: "none",
      },
      preset: "fire",
      particles: {
        color: {
          value: "#AC2B29",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
        },
        move: {
          speed: 1,
        },
      },
    };

    return <Particles options={options} init={this.customInit} />;
  }
}
