import SmallButton from "./buttons/smallButton";
import SmallButtonWithText from "./buttons/button-with-text";
import styles from "./function-keys.module.css";

let smallButtons = [];
for (let i = 0; i < 6; i++) {
  smallButtons.push(
    <SmallButtonWithText text={`F${i + 1}`} bgColor="#808080" key={i + 1}>
      <SmallButton bgColor="#ECE3CE" />
    </SmallButtonWithText>
  );
}

export default function FunctionKeys() {
  return (
    <>
      <section className={styles.functionKeys}>{smallButtons}</section>
    </>
  );
}
