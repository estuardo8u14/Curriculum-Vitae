import React, { useContext } from "react";

import "./Voluntariado.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { voluntariadoData } from "../../data/voluntariadoData";
import VoluntariadoCard from "./VoluntariadoCard";

function Voluntariado() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {voluntariadoData.voluntariados.length > 0 && (
        <div
          className="voluntariado"
          id="voluntariado"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="voluntariado-body">
            <h1 style={{ color: theme.primary }}>
              Experiencia de voluntariado y liderazgo
            </h1>
            <h4 style={{ color: theme.tertiary }}>{voluntariadoData.bio}</h4>
          </div>
          <div className="voluntariado-cards">
            {voluntariadoData.voluntariados.map((achieve) => (
              <VoluntariadoCard
                key={achieve.id}
                id={achieve.id}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                image={achieve.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Voluntariado;
