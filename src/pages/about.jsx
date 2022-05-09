import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.scss";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;
