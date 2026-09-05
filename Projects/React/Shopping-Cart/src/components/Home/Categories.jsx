import CategoryCard from "./CategoryCard";
import styles from "../../styles/Home.module.css";

export default function Categories() {
    const categories = [
        { name: "Electronics", icon: "💻" },
        { name: "Jewelry", icon: "💍" },
        { name: "Men's Clothing", icon: "👔" },
        { name: "Women's Clothing", icon: "👗" },
    ];

    return (
        <section>
            <h2 className={styles.sectionTitle}>Categories</h2>
            <div className={styles.categoriesGrid}>
                {categories.map((cat, idx) => (
                    <CategoryCard key={idx} name={cat.name} icon={cat.icon} />
                ))}
            </div>
        </section>
    );
}
