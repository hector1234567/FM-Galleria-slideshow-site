import Logo from "../components/logo";
import GalleryButton from "../components/gallery-button";
import LanguageButton from "../components/language-button";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Logo />
      <div className="flex items-center gap-10">
        <LanguageButton />
        <GalleryButton />
      </div>
    </div>
  );
}
