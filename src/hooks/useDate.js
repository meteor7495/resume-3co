// import { useTranslation } from "react-i18next";
import momentJ from "jalali-moment";

const useDate = () => {
  // const { t } = useTranslation();
  const getDate = (date) => {
    // momentJ.locale(t("locale") === "fa" ? "fa" : "en");
    momentJ.locale("en");
    const dateMoment = momentJ(new Date(date));
    return dateMoment;
  };
  return getDate;
};

export default useDate;
