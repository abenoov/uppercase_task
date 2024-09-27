import Card from "../components/Card/Card";
import Layout from "../layout/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div>
        <h2>You searched for:</h2>
        <Card />
      </div>
    </Layout>
  );
};

export default HomePage;
