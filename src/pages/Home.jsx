import React from "react";
import Map from "../components/Map";

const Home = () => {

  return (
    <Map
      center={[59.82934196, 30.42423701]}
      zoom={10}
    />
  );
};

export default Home;
