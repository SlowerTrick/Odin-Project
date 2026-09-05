import styles from "../../styles/Home.module.css";

export default function PillarCard({ icon, title, desc }) {
    return (
        <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>{icon}</span>
            <h3 className={styles.pillarTitle}>{title}</h3>
            <p className={styles.pillarText}>{desc}</p>
        </div>
    );
}
