PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_dates` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`date` text,
	`title` text,
	`description` text,
	`media` text,
	`isViewed` integer,
	`isLocked` integer,
	`created_at` text,
	`updated_at` text,
	`couple_id` integer NOT NULL,
	FOREIGN KEY (`couple_id`) REFERENCES `couples`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_dates`("id", "name", "date", "title", "description", "media", "isViewed", "isLocked", "created_at", "updated_at", "couple_id") SELECT "id", "name", "date", "title", "description", "media", "isViewed", "isLocked", "created_at", "updated_at", "couple_id" FROM `dates`;--> statement-breakpoint
DROP TABLE `dates`;--> statement-breakpoint
ALTER TABLE `__new_dates` RENAME TO `dates`;--> statement-breakpoint
PRAGMA foreign_keys=ON;