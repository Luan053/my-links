import Image from "next/image";
import emojipc from "../public/emojipc.png";
import Link from "next/link";
import { Github } from "./components/icons/github.js";

export default function Home() {
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
          <Link
            className="flex flex-col gap-2 w-full"
            target="_blank"
            href="https://github.com/Luan053"
          >
            <button className="group relative inline-flex h-12 items-center rounded-lg bg-neutral-950 px-16 font-medium text-neutral-50">
              <span className="z-10">github.com/luan053</span>
              <div className="absolute left-1 inline-flex h-10 w-12 items-center rounded-md bg-zinc-900 transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="ml-4">
                  <Github />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
