import SmallButton from "./buttons/smallButton";
import styles from "./numeric-mode-keys.module.css";
import SmallButtonWithText from "./buttons/button-with-text"

let every3 = [];
let every3Counter = 0;
let smallButtons = [];
for (let i = 12; i >= 0; i--) {
    if(every3Counter == 3) {
        every3.reverse()
        smallButtons.push.apply(smallButtons, every3)
        every3 = [];
        every3Counter = 0;
    }
    every3.push(
    <SmallButtonWithText text={i - 1} key={`NumericButton${i - 1}`}>
      <SmallButton bgColor="#214D7E" />
    </SmallButtonWithText>);

    every3Counter++;
}

export default function NumericModeKeys() {
  return <section className={styles.numericModeKeys}>{smallButtons}</section>;
}
