import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Time to get started!
        </h1>
      </div>
    </div>
  );
}
