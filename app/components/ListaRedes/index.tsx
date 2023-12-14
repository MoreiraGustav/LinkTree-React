

export default function ListaRedes(){
    return(
        <>
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
                className="block p-4 mt-8 bg-slate-400  border rounded-lg border-gray-300 hover:bg-gray-200 transition duration-300"
              >
                Siga-me no X
              </a>
            </li>
          </ul>
        </>
    )
}