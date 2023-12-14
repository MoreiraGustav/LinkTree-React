import Image from "next/image";
interface FotoPerfilProps{
    src: string;
    altura: number
    largura: number
}
export default function FotoPerfil ({src, altura, largura}: FotoPerfilProps){
    return (
        <>
         <div className="flex justify-center mx-auto">
            <Image
              src={src}
              width={largura}
              height={altura}
              alt="Minha foto de perfil"
              className="mx-auto "
            />
          </div>
        </>
    )
}