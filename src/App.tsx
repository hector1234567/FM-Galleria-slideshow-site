import Header from "./layout/header";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("page_title");
  }, [t, i18n.language]);

  return (
    <div className="bg-white font-serif">
      <div className="container mx-auto py-7.5 md:p-10">
        <Header />
      </div>
    </div>
  );
}

export default App;
