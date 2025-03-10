import Link from "next/link";
import styles from "./page.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Header />

        <p>This is a Next.js project with TypeScript, ESLint and Prettier</p>
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
