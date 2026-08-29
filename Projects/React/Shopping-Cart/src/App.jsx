import { Outlet } from "react-router-dom";
import Sidebar from './components/Common/Sidebar';
import styles from './styles/App.module.css'

export default function App() {
    return (
        <div className={styles.appContainer}>
            <Sidebar />
            <Outlet />
        </div>
    )
}
