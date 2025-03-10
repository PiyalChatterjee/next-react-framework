import Link from "next/link";
import React from "react";
import styles from "../page.module.css";
const Blogs = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>The Blogs</h1>
        <p>
          <Link href={"/blog/1"}>Blog 1</Link>
        </p>
        <p>
          <Link href={"/blog/2"}>Blog 2</Link>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
