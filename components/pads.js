import styles from "./pads.module.css";

let pads = []
for(let i = 0; i < 16; i++) {
    pads.push(<div className={styles.pad} key={i}></div>)
}

export default function Pads() {
  return (
    <div className={styles.pads}>
      {pads}
    </div>
  );
}
