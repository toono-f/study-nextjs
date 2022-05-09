import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import styles from "src/styles/Home.module.scss";

const Index = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
      </Head>
      <main className={styles.main}>
        <Headline page="index" />
        <Links />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
