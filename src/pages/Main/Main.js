import React from "react";
import { Helmet } from "react-helmet";

import {
  Footer,
  Landing,
  Info,
  Habilidades,
  Educacion,
  Experiencia,
  Servicios,
  Voluntariado,
} from "../../components";

function Main() {
  return (
    <div>
      <Helmet>
        <title>Estuardo Ureta - CV</title>
      </Helmet>
      <Landing />
      <Info />
      <Educacion />
      <Habilidades />
      <Experiencia />
      <Voluntariado />
      <Servicios />
      <Footer />
    </div>
  );
}

export default Main;
