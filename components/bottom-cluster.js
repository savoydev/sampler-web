import styles from "./bottom-cluster.module.css";
import ButtonSectionHeading from "./buttons/button-section-heading";
import {
  MediumButtonWithText,
  LargeButtonWithText,
  LargeRedButtonWithText
} from "./buttons/button-with-text";

export default function BottomCluster() {
  return (
    <section className={styles.bottomCluster}>
      <div></div>
      <div>
        <LargeButtonWithText text="Tap Tempo Note Repeat" />
        <MediumButtonWithText text="Undo Seq" />
        <MediumButtonWithText text="Erase" />
      </div>
      <div className={styles.cursor}>
        <div className={styles.leftWrap}>
          <div className={styles.left}></div>
        </div>
        <div className={styles.upWrap}>
          <div className={styles.up}></div>
        </div>
        <div className={styles.rightWrap}>
          <div className={styles.right}></div>
        </div>
        <div className={styles.downWrap}>
          <div className={styles.down}></div>
        </div>
      </div>
      <div>
        <div className={styles.padBanks}>
          <ButtonSectionHeading headingText="Locate" />
          <MediumButtonWithText text="<" />
          <MediumButtonWithText text=">" />
          <MediumButtonWithText text="Go To" />
          <MediumButtonWithText text="<<" />
          <MediumButtonWithText text=">>" />
        </div>
      </div>
      <div>
        <div className={styles.largeButtonRow}>
          <LargeRedButtonWithText text="Rec" />
          <LargeRedButtonWithText text="Overdub" />
          <LargeButtonWithText text="Stop" />
          <LargeButtonWithText text="Play" />
          <LargeButtonWithText text="Play Start" />
        </div>
      </div>
    </section>
  );
}
