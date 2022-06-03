import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { serviciosData } from "../../data/serviciosData";

import "./Servicio.css";
import SingleServicio from "./SingleServicio/SingleServicio";

function Servicios() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {serviciosData.length > 0 && (
        <div
          className="servicios"
          id="servicios"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="servicios-header">
            <h1 style={{ color: theme.primary }}>Sevicios</h1>
          </div>
          <div className="servicios-body">
            <p style={{ color: theme.tertiary80 }}>
              Estos son los servicios que ofrezco en major parte pero, siempre
              estoy abierto a nuevas experiencias.
            </p>
            <div className="servicios-bodycontainer">
              {serviciosData.map((servicios) => (
                <SingleServicio
                  key={servicios.id}
                  id={servicios.id}
                  title={servicios.title}
                  icon={servicios.icon}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Servicios;
