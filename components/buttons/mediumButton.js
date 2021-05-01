import styles from './mediumButton.module.css'

export default function MediumButton({orange}) {
    return (<div className={`${styles.button} ${orange ? styles.orange : ''}`}></div>)
}