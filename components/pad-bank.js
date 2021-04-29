import MediumButtonWithTextLight from "./buttons/button-with-text-light";
import ButtonSectionHeading from "./buttons/button-section-heading";
import styles from "./pad-bank.module.css";

export default function PadBank() {
  return (
    <div className={styles.padBanks}>
      <ButtonSectionHeading headingText="Pad Bank" />
      <MediumButtonWithTextLight text="A" />
      <MediumButtonWithTextLight text="B" />
      <MediumButtonWithTextLight text="C" />
      <MediumButtonWithTextLight text="D" />
    </div>
  );
}
