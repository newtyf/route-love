import { MobileSidebar } from "./mobile-sidebar";

type SidebarProps = {
  param?: string;
};

export const MobileHeader = ({param}: SidebarProps) => {
  return (
    <nav className="fixed top-0 z-50 flex h-[50px] w-full items-center border-b bg-rose-500 px-4 lg:hidden">
      <MobileSidebar param={param} />
      <h2 className="mx-auto text-xl text-white font-bold">Route Love</h2>
    </nav>
  );
};
