import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  pgEnum,
  jsonb,
} from "drizzle-orm/pg-core";

export const matchStatusEnum = pgEnum("match_status", [
  "scheduled",
  "finished",
  "live",
]);

// MATCHES TABLE
export const matches = pgTable("matches", {
  id: serial("id").primaryKey(),
  sport: text("sport").notNull(),
  home_team: text("home_team").notNull(),
  away_team: text("away_team").notNull(),

  status: matchStatusEnum("status").notNull().default("scheduled"),

  start_time: timestamp("start_time"),
  end_time: timestamp("end_time"),

  home_score: integer("home_score").notNull().default(0),
  away_score: integer("away_score").notNull().default(0),

  created_at: timestamp("created_at").defaultNow().notNull(),
});

// COMMENTARY TABLE
export const commentary = pgTable("commentary", {
  id: serial("id").primaryKey(),

  match_id: integer("match_id")
    .notNull()
    .references(() => matches.id),

  minute: integer("minute"),
  sequence: integer("sequence"),
  period: text("period"),

  event_type: text("event_type"),

  actor: text("actor"),
  team: text("team"),

  message: text("message").notNull(),

  meta_data: jsonb("meta_data"),

  tags: text("tags").array(),

  created_at: timestamp("created_at").defaultNow().notNull(),
});
