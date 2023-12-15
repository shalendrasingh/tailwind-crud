import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="flex flex-wrap bg-white border-card-border w-auto gap-20 p-14">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
