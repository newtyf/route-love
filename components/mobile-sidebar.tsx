import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Sidebar } from "./sidebar";

type SidebarProps = {
  param?: string;
};

export const MobileSidebar = ({param}: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>

      <SheetContent className="z-[100] p-0" side="left">
        <Sidebar param={param} />
      </SheetContent>
    </Sheet>
  );
};
