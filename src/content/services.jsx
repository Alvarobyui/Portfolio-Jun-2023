import { useTranslation } from "react-i18next";

/* import colorWheel from "../assets/services/color-wheel.png";
import teamWork from "../assets/services/Team_work_Isometric.png";
import UI from "../assets/services/ui.png";
import designer from "../assets/services/Designer_Isometric.png";
import bilingual from "../assets/services/Bilingual.png"
 */
export function ServicesContent() {
  const { t } = useTranslation("services");
  return( 
    [
      {
        icon: "/assets/services/ui.png",
        title: t("0.title"),
        description: t("0.description"),
      },
      {
        icon: "/assets/services/Designer_Isometric.png",
        title: t("1.title"),
        description: t("1.description"),
      },
      {
        icon: "/assets/services/color-wheel.png",
        title: t("2.title"),
        description: t("2.description"),
      },
      {
        icon: "/assets/services/Team_work_Isometric.png",
        title: t("3.title"),
        description: t("3.description"),
      },
      {
        icon: "/assets/services/ui.png",
        title: t("4.title"),
        description: t("4.description"),
      },
      {
        icon: "/assets/services/Bilingual.png",
        title: t("5.title"),
        description: t("5.description"),
      },
    ]
  )
}