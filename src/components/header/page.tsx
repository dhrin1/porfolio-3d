import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" w-full flex justify-center h-12">
      <div className="flex max-w-4xl w-full  justify-between items-center">
        <div>
          <h2>
            <Link href="/">Logo</Link>
          </h2>
        </div>
        <nav>
          <ul className="inline-flex space-x-2">
            <li>
              <Link href="/about">About</Link>{" "}
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
