import { FaHeart } from "react-icons/fa6";

interface CreditoAutorProps{
    href:string
    name: string
}

export default function CreditoAutor ({href, name}: CreditoAutorProps){
    return(
        <div className="text-center mt-8">
            <div className="flex items-center">
              <p className="dark:text-gray-400 text-slate-900 "> Feito com</p>
              <FaHeart className="dark:text-white text-black ml-2" />
              <p className="dark:text-gray-400 text-slate-900 ml-2">por</p>
              <a
                href={href}
                className="dark:text-gray-400 text-slate-900 ml-2 underline"
              >
               {name}
              </a>
            </div>
          </div>
    )
}