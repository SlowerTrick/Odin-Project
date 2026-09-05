import PageWrapper from "../Common/PageWrapper";
import { useCart } from "../../context/CartContext";
import Hero from "./Hero";
import Pillars from "./Pillars";
import Categories from "./Categories";
import styles from "../../styles/Home.module.css";

export default function Home() {
    const { totalItemsCount } = useCart();

    return (
        <PageWrapper>
            <div className={styles.homeContainer}>
                <Hero totalItemsCount={totalItemsCount} />
                <Pillars />
                <Categories />
            </div>
        </PageWrapper>
    );
}
