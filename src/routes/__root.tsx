import { useEffect } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../layout/header";
import { useTranslation } from "react-i18next";
import useLoadPaints from "../hooks/useLoadPaints";
import { PaintsContext } from "../contexts";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { t, i18n } = useTranslation();
  const paintsHook = useLoadPaints();

  useEffect(() => {
    document.title = t("page_title");
  }, [t, i18n.language]);

  return (
    <div className="bg-white font-serif">
      <div className="container mx-auto py-6 sm:py-7.5 md:p-10">
        <PaintsContext.Provider value={paintsHook}>
          <header className="border-grey-150 border-b px-6 pb-6 sm:px-10 sm:pb-6 md:px-0 md:pb-10">
            <Header />
          </header>
          <main className="px-6 pt-6 pb-10 sm:px-10 sm:pt-7.5 md:px-0">
            <Outlet />
          </main>
        </PaintsContext.Provider>
      </div>
      <TanStackRouterDevtools />
    </div>
  );
}
