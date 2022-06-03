import React, { useContext } from "react";

import "./Info.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { infoData } from "../../data/infoData";

function Info() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="info"
      id="info"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="info-body">
        <div className="info-description">
          <h2 style={{ color: theme.primary }}>{infoData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {infoData.description1}
            <br />
            <br />
            {infoData.description2}
          </p>
        </div>
        <div className="info-img">
          <img
            src={infoData.image === 1 ? theme.infoimg1 : theme.infoimg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
