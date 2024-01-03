import { useTranslation } from 'react-i18next';

export function AboutContent() {
  const { t } = useTranslation('about');

  const aboutData = [
    {
      title: t("0.SoftwareDevelopment"),
      duration: t("0.duration"),
      icon: "/assets/about/experience.png",
    },
    {
      title: t("1.WebFrontendCertification"),
      duration: t("1.duration"),
      icon: "/assets/about/graduation.png",
    },
    {
      title: t("2.ComputerProgrammingCertification"),
      duration: t("2.duration"),
      icon: "/assets/about/graduation.png",
    },
    {
      title: t("3.TEFLCertification"),
      duration: t("3.duration"),
      icon: "/assets/about/graduation.png",
    },
  ];

  return aboutData;
}
