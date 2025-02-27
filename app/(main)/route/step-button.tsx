"use client";

import { Check, Crown, Heart } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { updateStep } from "@/actions/udapte-date";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "react-circular-progressbar/dist/styles.css";
import { useDate } from "@/store/use-date";
import { useHeartsModal } from "@/store/use-hearts-modal";

type StepButtonProps = {
  id: number;
  index: number;
  data: object;
  date: Date;
  totalCount?: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
  routeId: string;
};

export const StepButton = ({
  id,
  index,
  data,
  date,
  totalCount,
  locked,
  current,
  percentage,
  routeId,
}: StepButtonProps) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 2) indentationLevel = cycleIndex;
  else if (cycleIndex <= 4) indentationLevel = 4 - cycleIndex;
  else if (cycleIndex <= 6) indentationLevel = 4 - cycleIndex;
  else indentationLevel = cycleIndex - 8;

  const rightPosition = indentationLevel * 40;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : Heart;

  const { open } = useHeartsModal();
  const { set } = useDate();

  const handleClickStep = () => {
    open();
    set(data);
    if (!isCompleted) {
      updateStep(id, routeId).catch(() => {})
    }
  };

  return (
    <a
      onClick={handleClickStep}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="relative h-[102px] w-[102px]">
            <div className="absolute -left-6 -top-6 z-10 w-[150px] animate-bounce rounded-xl border-2 bg-white px-3 py-2.5 text-center font-bold uppercase tracking-wide text-red-500">
              {date.toLocaleDateString() || "Start"}
              <div
                className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent"
                aria-hidden
              />
            </div>
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: "#ff2056",
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <Button
                size="rounded"
                variant={locked ? "locked" : "danger"}
                className="h-[70px] w-[70px] border-b-8"
              >
                <Icon
                  className={cn(
                    "h-10 w-10",
                    locked
                      ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",
                    isCompleted && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            size="rounded"
            variant={locked ? "locked" : "danger"}
            className="h-[70px] w-[70px] border-b-8"
          >
            <Icon
              className={cn(
                "h-10 w-10",
                locked
                  ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            />
          </Button>
        )}
      </div>
    </a>
  );
};
