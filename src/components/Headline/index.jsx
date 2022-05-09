import styles from "src/styles/Home.module.scss";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </div>
  );
};
