import Image from "next/image";
type Props = {};

export const Company = (props: Props) => {
  const data = [1, 2, 3, 4,5];
  return (
    <div className="py-8 md:py-12 wrapper">
      <div className="flex flex-row flex-wrap justify-center gap-8 px-2 md:gap-12 md:px-24">
        {data.map((itme) => (
          <Image
            key={itme}
            src={"/images/ESPRIT.png"}
            width={180}
            height={180}
            alt="Some Image"
            className="w-[80px] md:basis-[180px]"
          />
        ))}
      </div>
    </div>
  );
};
