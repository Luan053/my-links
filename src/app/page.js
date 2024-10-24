import Image from "next/image";
import emojipc from "../public/emojipc.png";

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

          <div className="flex flex-col gap-2 w-full">
            <button className="group relative inline-flex h-12 items-center rounded-lg bg-neutral-950 px-16 font-medium text-neutral-50">
              <div className=" absolute left-1 pl-[10px] z-10">img</div>
              <span className="z-10">github.com/luan053</span>
              <div className="absolute left-1 inline-flex h-10 w-12 items-center justify-end rounded-md bg-zinc-900 transition-[width] group-hover:w-[calc(100%-8px)]"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
