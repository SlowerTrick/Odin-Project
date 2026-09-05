import { Link } from "react-router-dom";
import styles from "../../styles/Home.module.css";

export default function CategoryCard({ name, icon }) {
    return (
        <Link to="/shop" className={styles.categoryCard}>
            <span className={styles.categoryIcon}>{icon}</span>
            <span className={styles.categoryName}>{name}</span>
            <span className={styles.categoryLink}>View products →</span>
        </Link>
    );
}
