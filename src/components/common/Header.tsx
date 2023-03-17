import React from "react";
import Link from "next/link";
import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

export function Header({}: Props) {
  return (
    <header className="wrapper h-[5em] flex items-center md:justify-between gap-4 ">
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="logo" width={120} height={120} />
      </Link>
      <ul className="hidden gap-12 pointer-events-none md:pointer-events-auto md:flex md:items-center ">
        <li>
          <Link href="/about" className="hover:text-theme-accent">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-theme-accent">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-theme-accent">
            Blog
          </Link>
        </li>
      </ul>
      <button className="p-2 ml-auto group md:ml-0">
        <ShoppingBagIcon className="w-7 h-7 text-theme-muted text-gray-800d group-hover:text-theme-accent" />
      </button>
      <button className="p-2 border rounded-md group md:hidden md:pointer-events-none">
        <Bars3Icon className="w-6 h-6 text-gray-800d group-hover:text-theme-accent" />
      </button>
    </header>
  );
}
