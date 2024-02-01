import connectDB from "./connect-db";
import { User, UserModel } from "@/models/user";
import { getSession } from "@auth0/nextjs-auth0";
import { UserProfile } from "@auth0/nextjs-auth0/client";

type UserData = {
  user: UserProfile | null;
  db: UserModel | null;
};

export default async function (): Promise<UserData> {
  const session = await getSession();
  if (session?.user) {
    await connectDB();
    const exists = await User.findOne({
      email: session.user.email,
    });
    if (exists) {
      return { user: session.user, db: exists };
    }
    return {
      user: session.user,
      db: await User.create({
        email: session.user.email,
        isNewUser: true,
        name: session.user.name,
      }),
    };
  }
  return {
    user: null,
    db: null,
  };
}