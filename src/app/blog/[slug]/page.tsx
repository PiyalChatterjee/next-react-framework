// import { GetServerSidePropsContext } from "next";
import React from "react";
import styles from "../../page.module.css";

interface Params {
  slug: string;
}

async function BLogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>The Blog Post</h1>
        <p>The Blog Post with ID: {slug}</p>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { params } = context;
//   return {
//     props: { params },
//   };
// }

export default BLogPostPage;
