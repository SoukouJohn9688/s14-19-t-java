import CardParents from "@/components/CardParents/CardParents";
import CardProfile from "@/components/CardProfile/CardProfile";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 grid lg:grid-cols-[400px_2fr] p-10 lg:space-x-5 grid-rows-[auto]">
      <div className="grid row-span-2">
        <CardProfile />
        <CardParents />
      </div>
    </div>
  );
};

export default Home;
