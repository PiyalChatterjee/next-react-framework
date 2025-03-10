import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Welcome to this page</h1>

        <p>This is a Next.js project with TypeScript, ESLint and Prettier</p>
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
