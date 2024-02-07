import { auth } from "@/lib/auth";
import { authUrl } from "@/lib/routes";
import { redirect } from "next/navigation";

export default async function () {
  const session = await auth();
  if (!session) redirect(authUrl);

  return session.user;
}
