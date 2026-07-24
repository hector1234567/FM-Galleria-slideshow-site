import { Link } from "@tanstack/react-router";
import logo from "../assets/shared/logo.svg";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img src={logo} alt="Logo" className="h-8 md:h-12" />
    </Link>
  );
}
