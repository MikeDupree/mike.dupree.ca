import Head from "next/head";
import Link from "next/link";
import Profile from '@/components/Profile';
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Dupree</title>
        <meta name="description" content="Personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
 
       <Profile />
        <div style={{ flexGrow: 1 }} />

        <footer className={styles.footer}>
          <div className={styles.link}>
            <Link href="/projects">
              <h3>Projects</h3>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
