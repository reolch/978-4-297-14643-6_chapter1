


import React from 'react';
import styles from "./profile.module.css";

const Profile = () => {
    return (
        <>
            <section className={styles.profile}>
                <div className={styles.profile_img}>
                    <img src="/images/profile.jpg" alt="profile" />
                </div>

                <div className={styles.profile_detail}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.en}>Profile</span>
                        <span className={styles.ja}>プロフィール</span>
                    </h2>

                    <p>
                        趣味でドライフラワー作りを始め、現在はドライフラワー作家として活動しています。<br />
                        インテリアとしてだけでなく、お誕生日や記念日等、お祝い用のフラワーアレンジメントも行っています。
                    </p>
                </div>
            </section>
        </>
    );
};

export default Profile;

