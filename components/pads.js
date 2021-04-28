import ButtonSectionHeading from "./buttons/button-section-heading";
import styles from "./pads.module.css";

let pads = [];
let every4 = [];
let every4Counter = 0;
for (let i = 16; i >= 0; i--) {
  if (every4Counter == 4) {
    every4.reverse();
    pads.push.apply(pads, every4);
    every4 = [];
    every4Counter = 0;
  }
  every4.push(
    <div className={styles.padWrap}>
      <div className={styles.padName}>Pad {i}</div>
      <div className={styles.pad} key={i}></div>
    </div>
  );

  every4Counter++;
}

export default function Pads() {
  return (
    <div className={styles.drums}>
      <div className={styles.sectionHeading}>
        <div className={styles.line}></div>
        <div>Drums</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.pads}>{pads}</div>
    </div>
  );
}
