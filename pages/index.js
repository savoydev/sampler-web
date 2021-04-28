import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pads from "../components/pads";
import Knob from "../components/knob";
import MediumButton from "../components/buttons/mediumButton";
import FunctionKeys from "../components/function-keys";
import NumericModeKeys from "../components/numeric-mode-keys";
import Screen from "../components/Screen";
import SamplerBody from "../components/SamplerBody";
import { MediumButtonWithText } from "../components/buttons/button-with-text";
import MediumButtonWithTextLight from "../components/buttons/button-with-text-light";
import PadBank from "../components/pad-bank";
import GainKnobs from "../components/gain-knobs";
import PadOptions from "../components/pad-options";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SamplerBody>
          <div id="left">
            <Screen />
            <FunctionKeys />
            <div id="numberKeysAndDataDial">
              <NumericModeKeys />
              <div id="dialContainer">
                <div id="dialButtons">
                  <MediumButtonWithText text="Main Screen">
                    <MediumButton />
                  </MediumButtonWithText>
                  <MediumButtonWithText text="Open Window">
                    <MediumButton />
                  </MediumButtonWithText>
                </div>
                <div id="jogDial"></div>
              </div>
            </div>
            <div id="bottomButtons"></div>
          </div>
          <div id="right">
            <div id="logo"></div>
            <div id="options">
              <div id="leftOptions">
                <PadOptions />
              </div>
              <div id="rightOptions">
                <GainKnobs />
                <PadBank />
              </div>
            </div>
            <Pads />
          </div>
        </SamplerBody>
      </main>
    </div>
  );
}
