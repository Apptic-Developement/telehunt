import connectDB from "@/lib/connect-db"
import { Dog, DogModel } from "@/models/Todo";
export async function GET() {
    const conn = await connectDB();
    await DogModel.create({
        name: "Posta"
    })
    return Response.json({ name: "Pranoy" })
}