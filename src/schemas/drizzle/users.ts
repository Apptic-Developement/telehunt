import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { v4 as uuid4 } from "uuid";

const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .unique()
    .$defaultFn(() => uuid4()),
  name: text("name"),
  email: text("email"),
});

export default users;
