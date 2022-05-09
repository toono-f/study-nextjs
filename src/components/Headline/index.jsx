import styles from "src/styles/Headline.module.scss";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>Get started by editing {props.children}</p>
    </div>
  );
};
