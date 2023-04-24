import Header from "@/components/Header";
import Main from "@/components/Main";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full dark:bg-gray-950 relative bg-white text-black dark:text-white pb-12">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
