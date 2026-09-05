import PillarCard from "./PillarCard";
import styles from "../../styles/Home.module.css";

export default function Pillars() {
    const pillars = [
        {
            icon: "🚚",
            title: "Fast Delivery",
            desc: "Receive your orders quickly and safely with tracked shipping.",
        },
        {
            icon: "⭐",
            title: "Quality Guaranteed",
            desc: "Carefully selected items tested for top performance and durability.",
        },
        {
            icon: "💬",
            title: "Dedicated Support",
            desc: "Customer care team always ready to assist you anytime.",
        },
    ];

    return (
        <section className={styles.pillarsGrid}>
            {pillars.map((item, idx) => (
                <PillarCard
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </section>
    );
}
