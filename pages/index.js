import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout';
import Featured from '@/components/Featured';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzaroo</title>
        <meta name="description" content="Best Pizza " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  );
}
