import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

export const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 py-12 md:py-24 md:flex-row wrapper md:gap-24">
      <div className="grid basis-1/2 place-items-center">
        <Image
          src="/images/hero.png"
          width={500}
          height={500}
          alt="hero"
          className="object-cover w-full md:w-4/5 aspect-square"
        />
      </div>
      <div className="flex flex-col justify-center gap-6 basis-1/2">
        <span className="text-md text-theme-muted">
          PT. Digital Media Nusantara
        </span>
        <h2 className="font-bold uppercase md:leading-[1.2] text-theme-primary md:text-5xl ">
          Improve Performance and Growth your Website
        </h2>
        <p className="text-lg md:leading-[2] text-theme-muted md:w-full md:mb-4 font-light">
          It&lsquo;s a theory of psychology that prioritizes the most
          fundamental human needs (​like air, water, and physical safety) over
          more advanced needs. We examine the top of funnel to figure out how to
          make people to a subscribe newsletter then turn prospects into leads.
        </p>

        <button className="flex items-center gap-4 px-4 py-3 transition-all border border-transparent rounded-md md:px-8 text-theme-accent hover:border-gray-200 max-w-max hover:-translate-y-1 hover:shadow-lg">
          <span>Explore Our Strategies</span>
          <ArrowLongRightIcon className="w-6 " />
        </button>
      </div>
    </div>
  );
};
