import { and, asc, eq, gt } from "drizzle-orm";

import { db } from "./drizzle";
import { couples, dates } from "./schema";

const getDatesByUsername = async (username: string) => {
  const couple = await db
  .select()
  .from(couples)
  .where(eq(couples.username, username));

  if (!couple.length) return null;

  const coupleId = Number(couple[0].id);

  const data = await db
  .select()
  .from(dates)
  .where(eq(dates.couple_id, coupleId))
  .orderBy(asc(dates.date)).limit(1000);

  console.log(data);

  return data;
};

const validateUser = async (username: string, password: string) => {
  const user = await db.query.couples.findFirst({
    where: eq(couples.username, username),
  });

  return user ? user.password === password : false;
};

const getUserByUsername = async (username: string) =>
  await db.query.couples.findFirst({ where: eq(couples.username, username) });

const setViewStepAndUnlockNext = async (id: number) => {
  const currentDate = await db
    .select()
    .from(dates)
    .where(eq(dates.id, id))
    .orderBy(asc(dates.date))
    .limit(1);

  if (!currentDate.length) return;

  const currentId = currentDate[0].id;
  const currentDateValue = currentDate[0].date;

  await db.update(dates).set({ isViewed: true }).where(eq(dates.id, currentId));

  const nextDate = await db
    .select()
    .from(dates)
    .where(gt(dates.date, currentDateValue!))
    .orderBy(asc(dates.date))
    .limit(1);

  if (nextDate.length) {
    await db
      .update(dates)
      .set({ isLocked: false })
      .where(eq(dates.id, nextDate[0].id));
  }
};

const resetDates = async (coupleId: number) => {
  const firstDate = await db
    .select()
    .from(dates)
    .where(eq(dates.couple_id, coupleId))
    .orderBy(asc(dates.date))
    .limit(1);

  if (!firstDate.length) return;

  const firstDateValue = firstDate[0].date!;

  await db
    .update(dates)
    .set({ isViewed: false, isLocked: false })
    .where(and(eq(dates.couple_id, coupleId), eq(dates.id, firstDate[0].id)));

  await db
    .update(dates)
    .set({ isViewed: false, isLocked: true })
    .where(and(eq(dates.couple_id, coupleId), gt(dates.date, firstDateValue)));
};

export {
  getDatesByUsername,
  validateUser,
  getUserByUsername,
  setViewStepAndUnlockNext,
  resetDates,
};
