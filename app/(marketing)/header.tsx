"use client";
import Image from "next/image";
import Link from "next/link";

import { links } from "@/config";
import { cn } from "@/lib/utils";

export const Header = () => {

  return (
    <>
      <header
        className={cn(
          "h-20 w-full border-b-2 border-slate-200 px-4 mt-0"        )}
      >
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
          <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
            <Image src="/love-icon.png" alt="Hearth" height={40} width={40} className="mt-3" />

            <h1 className="text-2xl font-extrabold tracking-wide text-red-600">
              Route Love
            </h1>
          </Link>

          <div className="flex gap-x-3">
              <Link
                href={links.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/github.svg"
                  alt="Source Code"
                  height={20}
                  width={20}
                />
              </Link>
          </div>
        </div>
      </header>
    </>
  );
};
