import { useTranslation } from "react-i18next";

export function ActivitiesContent() {
  const { t } = useTranslation('activities');

  const activitiesData = [
    {
      title: t("0.title"),
      text: t("0.text"),
    },
    {
      title: t("1.title"),
      text: t("1.text"),
    },
    {
      title: t("2.title"),
      text: t("2.text"),
    },
  ];

  return activitiesData;
}