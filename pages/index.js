import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pads from "../components/pads";
import FunctionKeys from "../components/function-keys";
import NumericModeKeys from "../components/numeric-mode-keys";
import Screen from "../components/screen";
import SamplerBody from "../components/samplerBody";
import { MediumButtonWithText, MediumOrangeButtonWithText } from "../components/buttons/button-with-text";
import PadBank from "../components/pad-bank";
import GainKnobs from "../components/gain-knobs";
import PadOptions from "../components/pad-options";
import BottomCluster from "../components/bottom-cluster";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MPC Sampler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SamplerBody>
          <div id="left">
            <Screen />
            <FunctionKeys />
            <section id="numberKeysAndDataDial">
              <NumericModeKeys />
              <div id="dialContainer">
                <div id="dialButtons">
                  <MediumButtonWithText text="Main Screen" />
                  <MediumOrangeButtonWithText text="Open Window" />
                </div>
                <div id="jogDial"></div>
              </div>
            </section>
            <BottomCluster />
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
