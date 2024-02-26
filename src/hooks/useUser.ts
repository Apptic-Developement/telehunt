import { auth } from "@/lib/auth";
import { authUrl } from "@/lib/routes";
import { redirect } from "next/navigation";

export default async function useUser() {
  const session = await auth();
  if (!session || typeof session.user === "undefined") redirect(authUrl);

  return session.user;
}
