import { useTranslation } from "react-i18next";

export default function LanguageButton() {
  const { i18n } = useTranslation();

  function handleClick() {
    if (i18n.language !== "es") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }

  return (
    <button
      className="text-grey-400 cursor-pointer items-center text-[6px] font-bold tracking-[2px] uppercase hover:text-black sm:text-[9px] sm:tracking-[2.5px]"
      onClick={handleClick}
    >
      {i18n.language}
    </button>
  );
}
