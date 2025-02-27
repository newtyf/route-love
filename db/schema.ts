import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const couples = sqliteTable("couples", {
  id: integer("id").primaryKey(),
  username: text("username").notNull().default("User"),
  password: text("password").notNull().default("User"),
  whatsapp: text("whatsapp").notNull().default("User"),
  created_at: integer("created_at", { mode: "timestamp"}),
  updated_at: integer("updated_at", { mode: "timestamp"}),
});

export const dates  = sqliteTable("dates", {
  id: integer("id").primaryKey(),
  date: integer("date", {mode: "timestamp"}),
  title: text("title"),
  description: text("description"),
  media: text("media"),
  isViewed: integer("isViewed", {mode: "boolean"}),
  isLocked: integer("isLocked", {mode: "boolean"}),
  created_at: integer("created_at", { mode: "timestamp"}),
  updated_at: integer("updated_at", { mode: "timestamp"}),
  couple_id: integer("couple_id").notNull().references(() => couples.id),
})

