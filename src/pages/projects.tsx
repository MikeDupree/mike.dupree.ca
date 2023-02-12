import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: 'CypressStaged',
    description: 'A cypress test runner that runs against git staged files.',
    image: '/projects/cypress.png',
    git: 'https://github.com/MikeDupree/cypress-staged',
    download: '',
  },
  {
    title: 'Rust LS',
    description: 'A custom ls command written in rust',
    image: '/projects/rls.png',
    git: 'https://github.com/MikeDupree/rls',
    download: '',
  },
  {
    title: 'Rust CLI Survivor',
    description: 'A CLI survival game written in rust',
    image: '/projects/rust-cli.png',
    git: 'https://github.com/MikeDupree/rust-dungeon-cli',
    download: '',
  },
  {
    title: 'Danger Pong',
    description: 'A Pong game with a dangerous twist',
    image: '/projects/pong.png',
    git: 'https://github.com/MikeDupree/Pong',
    download: '',
  }
];

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

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {

            projects.map(project => (<>
              <ProjectCard project={project} />
            </>))
          }
        </div>
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

