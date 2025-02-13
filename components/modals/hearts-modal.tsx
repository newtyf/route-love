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
import { useDate } from "@/store/use-date";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
  const { isOpen, close } = useHeartsModal();
  const { data } = useDate();

  const images = data.media ? (data.media.split(",").length > 3 ? data.media.split(",") : ["/", "/", "/"] ) : ["/", "/", "/"]

  const onClick = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="absolute -top-28 mb-5 flex w-full items-center justify-center">
            <div className="-rotate-6 bg-gray-300 p-2 pb-6">
              <Image src={images[0]} alt="media" height={130} width={110} />
            </div>
            <div className="mb-10 bg-gray-300 p-2 pb-6">
              <Image src={images[1]} alt="media" height={130} width={110} />
            </div>

            <div className="rotate-6 bg-gray-300 p-2 pb-6">
              <Image
                src={images[2]}
                alt="media"
                height={130}
                width={120}
              />
            </div>
          </div>

          <DialogTitle className="pt-16 text-center text-2xl font-bold">
            {data.title}
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
