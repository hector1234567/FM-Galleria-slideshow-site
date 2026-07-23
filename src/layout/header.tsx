import { useTranslation } from "react-i18next";

import Logo from "../components/logo";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between">
      <Logo />
      <button className="text-grey-400 cursor-pointer items-center text-[9px] font-bold tracking-[2px] uppercase hover:text-black sm:text-[12px] sm:tracking-[2.5px]">
        {t("Start_slideshow")}
      </button>
    </div>
  );
}
