CREATE TABLE `couples` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text DEFAULT 'User' NOT NULL,
	`password` text DEFAULT 'User' NOT NULL,
	`created_at` text,
	`updated_at` text
);
--> statement-breakpoint
CREATE TABLE `dates` (
	`id` integer,
	`name` text,
	`date` text,
	`title` text,
	`description` text,
	`media` blob,
	`isViewed` integer,
	`isLocked` integer,
	`created_at` text,
	`updated_at` text,
	`couple_id` integer
);
