import { Layout } from "src/components/layout";
import "src/styles/globals.scss";

const MyApp = ({ Component }) => {
  return (
    <>
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default MyApp;
