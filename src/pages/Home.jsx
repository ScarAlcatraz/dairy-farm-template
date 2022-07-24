import React from "react";
import Homeproducts from "../components/Homeproducts/Homeproducts";
import Homesection from "../components/Homesection/Homesection";
import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Homesection />
      <Intro />
      <Homeproducts />
      <Footer />
    </div>
  );
}

export default Home;
