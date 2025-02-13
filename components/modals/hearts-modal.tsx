"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { useDate } from "@/store/use-date";

export const HeartsModal = () => {
  const { isOpen, close } = useHeartsModal();
  const {data} = useDate();
  const onClick = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image
              src={data.media}
              alt="media"
              height={80}
              width={80}
            />
          </div>

          <DialogTitle className="text-center text-2xl font-bold">
            {data.name}
          </DialogTitle>

          <DialogDescription className="text-center text-base">
          {data.description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-4">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant="danger"
              className="w-full"
              size="lg"
              onClick={onClick}
            >
              Da click si quieres un abrazo ❣
            </Button>

            <Button
              variant="dangerOutline"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Da click si quieres un beso ❣
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
