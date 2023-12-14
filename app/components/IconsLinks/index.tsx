import Link from "next/link";
import { ReactNode } from "react";
import { FaInstagram, FaSoundcloud, FaXTwitter } from "react-icons/fa6";

interface IconsLinksProps {
  icon: ReactNode;
  href: string;
}

export default function IconsLinks({ icon, href }: IconsLinksProps) {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <Link href={href} target="blank">
          {icon}
        </Link>
      </div>
    </>
  );
}
