/**
 * Import CSS Module Navbar
 * Disimpan di object styles
 */
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>Home</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;