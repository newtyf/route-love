import { relations } from "drizzle-orm";
import { blob, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const couples = sqliteTable("couples", {
  id: integer("id").primaryKey(),
  username: text("username").notNull().default("User"),
  password: text("password").notNull().default("User"),
  created_at: text("created_at", { mode: "text"}),
  updated_at: text("updated_at", { mode: "text"}),
});

export const dates  = sqliteTable("dates", {
  id: integer("id").primaryKey(),
  name: text("name"),
  date: text("date"),
  title: text("title"),
  description: text("description"),
  media: text("media"),
  isViewed: integer("isViewed", {mode: "boolean"}),
  isLocked: integer("isLocked", {mode: "boolean"}),
  created_at: text("created_at", { mode: "text"}),
  updated_at: text("updated_at", { mode: "text"}),
  couple_id: integer("couple_id").notNull().references(() => couples.id),
})

