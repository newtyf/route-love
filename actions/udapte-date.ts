"use server";

import { resetDates, setViewStepAndUnlockNext } from "@/db/queries";
import { revalidatePath } from "next/cache";

export async function updateStep(id: number, routeId: string) {
  await setViewStepAndUnlockNext(id);

  revalidatePath(`/dates/${routeId}`);
}

export async function restartSteps(id: number, routeId: string) {
  await resetDates(id);

  revalidatePath(`/dates/${routeId}`);
}

