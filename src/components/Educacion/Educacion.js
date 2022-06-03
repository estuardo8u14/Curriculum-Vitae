import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Educacion.css";
import EducacionCard from "./EducacionCard";

import { educacionData } from "../../data/educacionData";

function Educacion() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="educacion"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="educacion-body">
        <div className="educacion-description">
          <h1 style={{ color: theme.primary }}>Educación</h1>
          {educacionData.map((edu) => (
            <EducacionCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
        <div className="educacion-image">
          <img src={theme.eduimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Educacion;
