import type { NextPage } from "next";
// layouts
import MainLayout from "layouts/MainLayout";
// views
import HomeView from "views/Home";

const Home: NextPage = () => {
  return (
    <MainLayout pageTitle="Home">
      <HomeView />
    </MainLayout>
  );
};

export default Home;
