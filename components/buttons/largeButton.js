import styles from "./largeButton.module.css"


export default function LargeButton({red}) {
    return <div className={`${styles.button} ${red ? styles.red : ''}`}></div>
}