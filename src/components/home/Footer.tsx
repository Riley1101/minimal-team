import React from "react";
import Link from "next/link";
type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-white rounded-lg md:pb-12 wrapper">
      <div className="w-full mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-theme-muted sm:text-center ">
          © 2023 . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-theme-muted sm:mt-0">
          <li>
            <Link
              href="/"
              className="mr-4 hover:underline md:mr-6 hover:text-theme-accent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mr-4 hover:underline hover:text-theme-accent md:mr-6"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="mr-4 hover:underline md:mr-6 hover:text-theme-accent"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
