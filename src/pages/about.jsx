import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import styles from "src/styles/Home.module.scss";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <main className={styles.main}>
        <Headline page="about" />
        <Links />
      </main>
      <Footer />
    </div>
  );
};

export default About;
