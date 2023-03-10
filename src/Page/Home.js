import React from "react";
import BarraDos from "../Components/BarraDos";
import BarraTres from "../Components/BarraTres";
import Botones from "../Components/Botones";
import Docentes from "../Components/Docentes";

import General from "../Components/General";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BarraDos />
      <BarraTres />
      <Docentes />
      <General />
      <Botones />
    </div>
  );
};

export default Home;
