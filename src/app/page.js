import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-zinc-900 md:w-1/3 flex flex-col items-center p-4 rounded-md gap-8">
          <div>img</div>
          <div className="flex flex-col gap-2">
            <button className="group relative inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-16 font-medium text-neutral-50">
              <div className=" absolute left-1 pl-[11px] z-10">img</div>
              <span className="z-10">github</span>
              <div className="absolute left-1 inline-flex h-10 w-12 items-center justify-end rounded-md bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]"></div>
            </button>
            <button className="group relative inline-flex h-12 items-center justify-center rounded-lg bg-neutral-950 px-16 font-medium text-neutral-50">
              <div className=" absolute left-1 pl-[11px] z-10">img</div>
              <span className="z-10">linkdin</span>
              <div className="absolute left-1 inline-flex h-10 w-12 items-center justify-end rounded-md bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
