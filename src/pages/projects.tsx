import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Michael Dupree</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Projects</h1>
        <h3>Sorry, I haven&apos;t got to this yet =/</h3>
        <div style={{ flexGrow: 1 }} />
        <footer className={styles.footer}>
          <div className={styles.link}>
            <Link href="/articles">
              <h3>Articles</h3>
            </Link>

            <Link href="/projects">
              <h3>Projects</h3>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
