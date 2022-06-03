import html from "../assets/svg/habilidades/html.svg";

import css from "../assets/svg/habilidades/css.svg";

import javascript from "../assets/svg/habilidades/javascript.svg";

import react from "../assets/svg/habilidades/react.svg";

import mysql from "../assets/svg/habilidades/mysql.svg";

import python from "../assets/svg/habilidades/python.svg";

import aws from "../assets/svg/habilidades/aws.svg";

import firebase from "../assets/svg/habilidades/firebase.svg";
import bootstrap from "../assets/svg/habilidades/bootstrap.svg";

import git from "../assets/svg/habilidades/git.svg";

import materialui from "../assets/svg/habilidades/materialui.svg";
import nginx from "../assets/svg/habilidades/nginx.svg";

import figma from "../assets/svg/habilidades/figma.svg";

import canva from "../assets/svg/habilidades/canva.svg";

export const habilidadesImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;

    case "css":
      return css;

    case "javascript":
      return javascript;

    case "react":
      return react;

    case "bootstrap":
      return bootstrap;

    case "mysql":
      return mysql;

    case "python":
      return python;

    case "aws":
      return aws;

    case "firebase":
      return firebase;

    case "git":
      return git;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;

    case "figma":
      return figma;

    case "canva":
      return canva;
    default:
      break;
  }
};
