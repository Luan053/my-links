import Image from "next/image";
import emojipc from "../public/emojipc.png";
import Link from "next/link";
import { Github } from "./components/icons/github.js";
import { Button } from "./components/button";

export default function Home() {
  const infos = {
    github: {
      logo: <Github />,
      linkName: "GitHub",
      linkDesc: "github.com/Luan053",
      href: "https://github.com/Luan053",
    },
    email: {
      logo: <Github />,
      linkName: "Email",
      linkDesc: "luanschulz.contato@gmail.com",
      href: "mailto:luanschulz.contato@gmail.com",
    },
    linkedin: {
      logo: <Github />,
      linkName: "LinkedIn",
      linkDesc: "linkedin.com/in/luanrs-",
      href: "https://www.linkedin.com/in/luanrs-/",
    },
    instagram: {
      logo: <Github />,
      linkName: "Instagram",
      linkDesc: "instagram.com/luanschz",
      href: "https://www.instagram.com/luanschz",
    },
  };
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-zinc-900 md:w-1/3 flex flex-col items-center p-4 rounded-md gap-8">
          <Image
            width={110}
            height={110}
            className="rounded-full"
            alt="foto emoji"
            src={emojipc}
          />
          <div className="flex flex-col gap-2 w-full">
            {Object.keys(infos).map((key) => (
              <Button
                key={key}
                logo={infos[key].logo}
                linkName={infos[key].linkName}
                linkDesc={infos[key].linkDesc}
                href={infos[key].href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
