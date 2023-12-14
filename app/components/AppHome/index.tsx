import { useTheme } from "next-themes";
import FotoPerfil from "../FotoPerfil";
import ThemeSwitcher from "../ThemeSwitcher";
import ListaRedes from "../ListaRedes";
import IconsLinks from "../IconsLinks";
import { FaInstagram, FaSoundcloud, FaTwitter } from "react-icons/fa6";
import CreditoAutor from "../CreditoAutor";

export default function AppHome() {
  const { theme } = useTheme();
  return (
    <div className="bg-image  bg-cover bg-top  bg-no-repeat h-screen">
      <div className="container mx-auto py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <FotoPerfil
            src={theme === "light" ? "/avatar-light.png" : "/Avatar meu.png"}
            altura={115}
            largura={115}
          />
          <p className="font-medium dark:text-white text-slate-800 mt-2 ">
            @Pacotada
          </p>
          <div className="flex justify-center mt-2">
            <ThemeSwitcher />
          </div>

          <ListaRedes />
          <div className="flex justify-center">
            <IconsLinks
              icon={
                <FaInstagram className=" cursor-pointer text 3x1 dark:text-gray-300 text-slate-600 mx-2 w-12 h-12" />
              }
              href={"https://www.instagram.com/pacotada/"}
            />
            <IconsLinks
              icon={
                <FaSoundcloud className=" cursor-pointer text 3x1 dark:text-gray-300 text-slate-600 mx-2 w-12 h-12" />
              }
              href={"https://soundcloud.com/pacotada"}
            />
            <IconsLinks
              icon={
                <FaTwitter className=" cursor-pointer text 3x1  dark:text-gray-300 text-slate-600 mx-2 w-12 h-12" />
              }
              href={"https://twitter.com/pacoteBFR"}
            />
          </div>
          <CreditoAutor
            href={"https://www.instagram.com/pacotada/"}
            name={"@Pacotada"}
          />
        </div>
      </div>
    </div>
  );
}
