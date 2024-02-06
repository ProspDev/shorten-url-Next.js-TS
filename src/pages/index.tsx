import type { NextPage } from "next";
import MainLayout from "layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout pageTitle="Home">
      <p className="text-center">Hello World</p>
    </MainLayout>
  );
};

export default Home;
