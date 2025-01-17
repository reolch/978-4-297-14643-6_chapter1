import React from 'react';
import styles from "./works.module.css";

    const Works = () => {
    return (
        <>
            <section id="Works" className={styles.works}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.en}>Works</span>
                    <span className={styles.ja}>ワークス</span>
                </h2>
                
                <ul className={styles.works_list}>
                    <li><img src="/images/works1.jpg" alt="works_01" /></li>
                    <li><img src="/images/works2.jpg" alt="works_02" /></li>
                    <li><img src="/images/works3.jpg" alt="works_03" /></li>
                    <li><img src="/images/works4.jpg" alt="works_04" /></li>
                    <li><img src="/images/works5.jpg" alt="works_05" /></li>
                    <li><img src="/images/works6.jpg" alt="works_06" /></li>
                </ul>
            </section>
        </>
    );
};

export default Works;

