import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./Habilidades.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import { habilidadesData } from "../../data/habilidadesData";
import { habilidadesImage } from "../../utils/habilidadesImage";

function Habilidades() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className="habilidades" style={{ backgroundColor: theme.secondary }}>
      <div className="habilidadesHeader">
        <h2 style={{ color: theme.primary }}>Habilidades</h2>
      </div>
      <div className="habilidadesContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {habilidadesData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={habilidadesImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
