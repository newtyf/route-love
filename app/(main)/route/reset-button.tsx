'use client'
import { restartSteps } from "@/actions/udapte-date";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import React from "react";

type ResetButtonProps = {
  routeId: string;
  coupleId: number;
};

export const ResetButton = ({ coupleId, routeId }: ResetButtonProps) => {
  const handleReset = async () => {
    await restartSteps(coupleId, routeId);
  };

  return (
    <Button
      onClick={handleReset}
      size="rounded"
      variant="danger"
      className="h-[35px] w-[35px] border-b-8"
    >
      <RotateCcw
        className={cn(
          "h-5 w-5",
          "fill-primary-foreground text-primary-foreground",
          "fill-none stroke-[2]"
        )}
      />
    </Button>
  );
};
