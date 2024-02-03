CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	CONSTRAINT "users_id_unique" UNIQUE("id")
);
