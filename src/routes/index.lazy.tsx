import { createLazyFileRoute } from "@tanstack/react-router";
import Grid from "../layout/grid";
import { useContext } from "react";
import { PaintsContext } from "../contexts";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { paints, loading } = useContext(PaintsContext);

  if (loading) return <span>Loading...</span>;
  if (!paints) return <span>Error!</span>;

  return <Grid paints={paints} />;
}
