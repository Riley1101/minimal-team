import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <div className="flex flex-col py-12 md:py-24 md:pt-12 md:flex-row ">
      <div className="basis-1/2 p-4 md:pl-[10%] md:pr-[2%] flex flex-col justify-center gap-6">
        <span className="text-md text-theme-accent">
          PT. Digital Media Nusantara
        </span>
        <h1 className="font-bold leading-[1.2] uppercase text-theme-primary title ">
          Digital Marketing Agency
        </h1>
        <p className="leading-[1.5] text-theme-muted md:w-3/4 text-lg md:mb-4 font-light">
          We examine the top of funnel to figure out how to make people to a
          subscribe newsletter then turn prospects into leads.
        </p>
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
          <button className="px-8 py-3 font-bold text-white transition-all rounded-md duration-250 hover:-translate-y-1 bg-theme-accent max-w-max hover:shadow-xl">
            Contact Us
          </button>
          <button className="flex items-center gap-4 px-8 py-3 transition-all border border-transparent rounded-md hover:text-theme-accent max-w-max hover:border-gray-200 hover:-translate-y-1 hover:shadow-lg">
            <span>Our Pricing</span> <ArrowLongRightIcon className="w-6 " />
          </button>
        </div>
      </div>
      <div className="grid px-4 md:p-0 basis-1/2 place-items-center">
        <Image
          src="/images/hero.png"
          width={500}
          height={500}
          alt="hero"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
