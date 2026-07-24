import Header from "./layout/header";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Grid from "./layout/grid";
import useLoadPaints from "./hooks/useLoadPaints";

function App() {
  const { t, i18n } = useTranslation();
  const { paints, loading } = useLoadPaints();

  useEffect(() => {
    document.title = t("page_title");
  }, [t, i18n.language]);

  return (
    <div className="bg-white font-serif">
      <div className="container mx-auto py-6 sm:py-7.5 md:p-10">
        <header className="border-grey-150 border-b px-6 pb-6 sm:px-10 sm:pb-6 md:px-0 md:pb-10">
          <Header />
        </header>
        <main className="px-6 pt-6 pb-10 sm:px-10 sm:pt-7.5 md:px-0">
          {loading ? <span>Loading...</span> : <Grid paints={paints} />}
        </main>
      </div>
    </div>
  );
}

export default App;
