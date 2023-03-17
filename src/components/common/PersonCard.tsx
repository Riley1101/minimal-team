import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export const PersonCard = (props: Props) => {
  return (
    <div
      className="relative flex flex-col items-center rounded-lg shadow md:flex-row bg-gray-50"
    >
      <Image
        width={200}
        height={200}
        className="w-full h-full md:w-[40%] rounded-lg "
        src="/images/person.jpg"
        alt="Avatar"
      />
      <div className="p-5 md:basis-[70%]">
        <h3 className="text-xl font-bold tracking-tight text-theme-primary ">
          <Link href="/">Green</Link>
        </h3>
        <span className="text-sm text-gray-500 ">CEO & Web Developer</span>
        <p className="mt-3 mb-4 font-light text-theme-muted ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam 
        </p>
      </div>
    </div>
  );
};
