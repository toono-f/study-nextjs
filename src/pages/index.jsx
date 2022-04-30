import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Links } from "src/components/Links";
import styles from "src/styles/Home.module.scss";

const Index = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Index</title>
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Index Page</h1>
          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.js</code>
          </p>
          <Links />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
