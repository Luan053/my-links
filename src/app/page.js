import Image from "next/image";
import emojipc from "../public/emojipc.png";
import { Github } from "./components/icons/github.js";
import { Button } from "./components/button";
import { Email } from "./components/icons/email";
import { LinkedIn } from "./components/icons/linkedin";
import { Instagram } from "./components/icons/instagram";
import { ViewCounter } from "./components/viewCounter";

export default function Home() {
  const infos = {
    github: {
      logo: <Github />,
      linkName: "GitHub",
      linkDesc: "github.com/Luan053",
      href: "https://github.com/Luan053",
    },
    email: {
      logo: <Email />,
      linkName: "Email",
      linkDesc: "luanschulz.contato@gmail.com",
      href: "mailto:luanschulz.contato@gmail.com",
    },
    linkedin: {
      logo: <LinkedIn />,
      linkName: "LinkedIn",
      linkDesc: "linkedin.com/in/luanrs-",
      href: "https://www.linkedin.com/in/luanrs-/",
    },
    instagram: {
      logo: <Instagram />,
      linkName: "Instagram",
      linkDesc: "instagram.com/luanschz",
      href: "https://www.instagram.com/luanschz",
    },
  };
  return (
    <>
      <div className="absolute p-2">
        <ViewCounter />
      </div>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-zinc-900 select-none z-0 lg:w-1/3 flex flex-col items-center p-4 rounded-md gap-4">
          <Image
            width={110}
            height={110}
            className="rounded-full"
            alt="foto emoji"
            src={emojipc}
          />
          <span className="font-[family-name:var(--font-geist-sans)]">
            Luan Schulz
          </span>
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
