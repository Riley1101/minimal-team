import React from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/home/Footer";
type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="w-full ">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
