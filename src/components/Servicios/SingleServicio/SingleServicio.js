import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../../contexts/ThemeContext";

import "./SingleServicio.css";

function SingleServicio({ id, title, icon }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade bottom>
      <div
        key={id}
        className="single-servicio"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="servicio-content" style={{ color: theme.tertiary }}>
          <i className="servicio-icon">{icon}</i>
          <h4 style={{ color: theme.tertiary }}>{title}</h4>
        </div>
      </div>
    </Fade>
  );
}

export default SingleServicio;
