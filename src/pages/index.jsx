import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.scss";

const Index = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
      </Head>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Index;
