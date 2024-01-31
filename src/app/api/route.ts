import connectDB from "@/lib/connect-db";
import { User } from "@/models/user";
export async function GET() {
  await connectDB();
  console.log(await User.find().deleteMany());
  return Response.json({ name: "Pranoy" });
}
