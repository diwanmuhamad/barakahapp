import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Transfer from './transfer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barakah App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Barakah App</h2>
        <p className={styles.description}>"Empowering Shodaqoh with Decentralized Trust and Infinite Blessings"</p>
        <ConnectButton />
        <Transfer />
       
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
