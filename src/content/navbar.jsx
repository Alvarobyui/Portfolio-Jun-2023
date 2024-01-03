import { useTranslation } from "react-i18next";

export function NavbarContent() {
  const { t } = useTranslation('navbar');
  const navbarData = [
    { title: t("0.services") },
    { title: t("1.projects") },
    { title: t("2.about") },
    { title: t("3.activities") },
    { title: t("4.contact") },
  ];

  return navbarData;
}
