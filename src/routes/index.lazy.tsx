import { createLazyFileRoute } from "@tanstack/react-router";
import Grid from "../layout/grid";
import { useContext } from "react";
import { PaintsContext } from "../contexts";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { paints, loading } = useContext(PaintsContext);
  return <>{loading ? <span>Loading...</span> : <Grid paints={paints} />}</>;
}
