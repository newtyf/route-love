import { eq } from "drizzle-orm";

import { db } from "./drizzle";
import { couples, dates } from "./schema";

const getDatesByUsername = async (username: string) => {
  const couple = await db.select().from(couples).where(eq(couples.username, username))

  if (!couple.length) return null;

  const coupleId = Number(couple[0].id);

  const data = await db.select().from(dates).where(eq(dates.couple_id, coupleId)).orderBy(dates.date);

  console.log(data);

  return data
};

const validateUser = async (username: string, password: string) => {
  const user = await db.query.couples.findFirst({
    where: eq(couples.username, username),
  });

  return user ? user.password === password : false;
};

const getUserByUsername = async (username: string) => 
  await db.query.couples.findFirst({ where: eq(couples.username, username) });

export { getDatesByUsername, validateUser, getUserByUsername };
