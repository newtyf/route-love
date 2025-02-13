import type { ReactNode } from "react";

import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
interface MainLayoutProps {
  children: ReactNode;
  params: {
    routeId: string;
  };
}


const MainLayout = ({ children, params }: MainLayoutProps) => {
  return (
    <>
      <MobileHeader param={params.routeId} />
      <Sidebar className="hidden lg:flex" param={params.routeId} />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
