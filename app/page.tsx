import Image from "next/image";
import styles from "./page.module.css";
import MainVisual from "@/components/layout/mainvisual/mainvisual";
import Profile from "@/components/layout/profile/profile";
import Works from "@/components/layout/works/works";
export default function Home() {
  return (
    <main className={styles.main}>
        <MainVisual />
        <Profile />
        <Works />
    </main>
  );
}
