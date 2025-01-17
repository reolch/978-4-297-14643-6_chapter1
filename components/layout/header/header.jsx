import React from 'react';
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <a href="index.html">
                    <img src="/images/logo.svg" alt="Dry Flower Life" />
                </a>
            </h1>
            <nav className={styles.nav}>
                <ul>
                <li><a href="/">Profile</a></li>
                <li><a href="/Works">Works</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
