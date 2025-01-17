

import React from 'react';
import styles from "./mainvisual.module.css";

const MainVisual = () => {
    return (
        <>
            <div className={styles.mainvisual}>
                <img src="/images/mainvisual.jpg" alt="mainvisual" />
            </div>

            <div className={styles.introduction}>
                <p className={styles.catchphrase}>
                    ドライフラワーのある生活で暮らしを豊かに
                </p>
                <p className={styles.text}>
                    アンティークな雰囲気を持ったドライフラワーは、インテリアとして生活を彩るだけでなく香りを楽しむこともできます。<br />
                    あなたの暮らしにもドライフラワーを取り入れてみませんか？
                </p>
            </div>
        </>
    );
};

export default MainVisual;
