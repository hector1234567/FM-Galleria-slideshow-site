import Logo from "../components/logo";
import GalleryButton from "../components/gallery-button";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Logo />
      <GalleryButton />
    </div>
  );
}
