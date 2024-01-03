import { useTranslation } from "react-i18next";
/* import tictactoeImg from "../assets/projects/Tic_tac_toe_generated-vecteezy.com.jpg"
import weatherImg from "../assets/projects/weather-app.png"
import houstonImg from "../assets/projects/Houston_Isometric.png"
import houseImg from "../assets/projects/Real Estate Agent_Monochromatic.png"
import calculatorImg from "../assets/projects/Data_Arranging_Monochromatic.png"
import UniversityImg from "../assets/projects/university.png"
 */ 
export function ProjectsContent() {
  const { t } = useTranslation("projects");
  return (
    [
      {
        title: t("0.title"),
        description: t("0.description"),
        image: "/assets/projects/weather-app.png",
        link: "https://forecast-weather-web-app.vercel.app/"
      },
      {
        title: t("1.title"),
        description: t("1.description"),
        image: "/assets/projects/Houston_Isometric.png",
        link: "https://alvarobyui.github.io/Temple-Inn-Suite-Website/"
      },
      {
        title: t("2.title"),
        description: t("2.description"),
        image: "/assets/projects/university.png",
        link: "https://universidadwebapp.000webhostapp.com/"
      },
      {
        title: t("3.title"),
        description: t("3.description"),
        image: "/assets/projects/Tic_tac_toe_generated-vecteezy.com.jpg",
        link: "https://alvarobyui.github.io/Tic-Tac-Toe/"
      },
      {
        title: t("4.title"),
        description: t("4.description"),
        image: "/assets/projects/Data_Arranging_Monochromatic.png",
        link: "https://alvarobyui.github.io/Tip-Calculator/"
      },
      {
        title: t("5.title"),
        description: t("5.description"),
        link: "https://alvarobyui.github.io/Mini-project/#"
      },
      {
        title: t("6.title"),
        description: t("6.description"),
        image: "/assets/projects/university.png",
        link: "https://github.com/Alvarobyui/small_school_API"
      },
    ]
  );
}