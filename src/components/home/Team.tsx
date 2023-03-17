import Link from "next/link";
import Image from "next/image";
import { PersonCard } from "@/components/common/PersonCard";

type Props = {};

export const Team = (props: Props) => {
  return (
    <section>
      <div className="wrapper ">
        <div className="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-theme-primary ">
            Our Team
          </h2>
          <p className="font-light text-theme-muted lg:mb-16 sm:text-xl ">
            We are a team of creative and passionate people who love to create
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {[1, 2, 3, 4].map((item, index) => (
           <PersonCard key={item}/> 
          ))}
        </div>
      </div>
    </section>
  );
};
