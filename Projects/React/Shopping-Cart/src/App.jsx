import { Outlet } from "react-router-dom";
import Sidebar from "./components/Common/Sidebar";
import { CartProvider } from "./context/CartContext";
import styles from "./styles/App.module.css";

export default function App() {
    return (
        <CartProvider>
            <div className={styles.appContainer}>
                <Sidebar />
                <Outlet />
            </div>
        </CartProvider>
    );
}
