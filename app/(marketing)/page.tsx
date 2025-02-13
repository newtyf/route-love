"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function MarketingPage() {

  const router = useRouter()

  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src="/love-icon.png" alt="Hearth" fill className="object-contain" />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
          Hi my love, I made this web to show all the love that <br /> I have for you, and <br /> I have a route where I show our dates with photos and messages
        </h1>

        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
          <Button size="lg" variant="danger" className="w-full" onClick={() => router.push("/route/mar-newt")}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
