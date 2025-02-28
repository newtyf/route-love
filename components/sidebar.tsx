import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
  param?: string;
};

export const Sidebar = ({ className, param }: SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="#">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/love-icon.png" alt="Mascot" height={40} width={40} />

          <h1 className="text-2xl font-extrabold tracking-wide text-red-600">
            Route Love
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="Our house" href={"/route/"+param} iconSrc="/learn.svg" />
      </div>
    </div>
  );
};
