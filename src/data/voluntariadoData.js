import basket from "../assets/img/basket.png";
import puravida from "../assets/img/puravida.png";
import musica from "../assets/img/musica.png";

export const voluntariadoData = {
  bio: "",
  voluntariados: [
    {
      id: 1,
      title: "Fundación Pura Vida",
      details:
        "Voluntario en organizaciones ecológicas para manejo alternativo de desechos sólidos (fundación Pura Vida)",
      date: "2015",
      field: "Valuntariado",
      image: puravida,
    },
    {
      id: 2,
      title: "Mouseion Records",
      details: "Voluntario organizado de exposición de arte local",
      date: "2020",
      field: "Musica y arte",
      image: musica,
    },
    {
      id: 3,
      title: "Club de baloncesto",
      details: "Administración colectiva en club de baloncesto UVG (4 años)",
      date: "2017 - 2022",
      field: "Deporte",
      image: basket,
    },
  ],
};

// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const voluntariadoData = {
    bio : "",
    voluntariados : []
}

*/
