import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="bg-image bg-cover bg-top bg-center bg-no-repeat h-screen">
      <div className="container mx-auto py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mx-auto">
            <Image
              src="/Avatar meu.png"
              width={115}
              height={115}
              alt="Minha foto de perfil"
              className="mx-auto "
            />
          </div>
          {/* <img src="/Avatar meu.png" className="w-28 m-auto" /> */}
          <p className="font-medium text-white mt-2 ">@Pacotada</p>

          <ul className="mt-8 md:space-y-8 font-medium ">
            <li>
              <a
                href="https://www.instagram.com/pacotada/"
                target="blank"
                className="block p-4 mt-8 bg-slate-400 border rounded-lg border-gray-300 hover:bg-gray-200 transition duration-300"
              >
                {" "}
                Siga-me no Instagram
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/pacotada"
                target="blank"
                className="block p-4 mt-8 bg-slate-400 border rounded-lg border-gray-300 hover:bg-gray-200 transition duration-300"
              >
                {" "}
                Siga-me no SoundCloud
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/pacotada"
                target="blank"
                className="block p-4 mt-8 bg-slate-400 border rounded-lg border-gray-300 hover:bg-gray-200 transition duration-300"
              >
                Siga-me no X
              </a>
            </li>
          </ul>
          <div className="flex justify-center items-center mt-8">
            <Link href={"https://www.instagram.com/pacotada/"} target="blank">
              <FaInstagram className=" cursor-pointer text 3x1 text-gray-300 mx-2 w-12 h-12" />
            </Link>
            <Link href={"https://soundcloud.com/pacotada"} target="blank">
              <FaSoundcloud className="cursor-pointer text 3x1 text-gray-300 mx-2 w-12 h-12" />
            </Link>

            <Link href={"https://twitter.com/pacoteBFR"} target="blank">
              <FaXTwitter className=" cursor-pointer text 3x1 text-gray-300 mx-2 w-12 h-12" />
            </Link>
          </div>
          <div className="text-center mt-8">
            <div className="flex items-center">
              <p className="text-gray-400 "> Feito com</p>
              <FaHeart className="text-white ml-2" />
              <p className="text-gray-400 ml-2">por</p>
              <a href="https://www.instagram.com/pacotada/" className="text-gray-400 ml-2 underline">@Pacotada</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
