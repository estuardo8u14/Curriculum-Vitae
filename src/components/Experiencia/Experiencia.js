import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Experiencia.css";

import { experienciaData } from "../../data/experienciaData";
import ExperienciaCard from "./ExperienciaCard";

function Experiencia() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="experiencia"
      id="experiencia"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="experiencia-body">
        <div className="experiencia-image">
          <img src={theme.expimg} alt="" />
        </div>
        <div className="experiencia-description">
          <h1 style={{ color: theme.primary }}>Experiencia</h1>
          {experienciaData.map((exp) => (
            <ExperienciaCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
