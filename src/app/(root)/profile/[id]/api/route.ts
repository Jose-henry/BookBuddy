import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id; // Keep ID as string

  try {
    if (!id) {
      return NextResponse.json({ message: "Missing user ID" }, { status: 400 });
    }

    const user = await prisma.User.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error finding user:", error);
    return NextResponse.json({ message: "Error finding user" }, { status: 500 });
  }
}

// Add revalidation logic for data freshness
export async function onAfterRender(event: any) { // Adjust type as needed
    const id = event.request.url.searchParams.get('id'); // Extract id from URL
  
    if (id) {
      await revalidatePath('/profile/' + id);
    } else {
      console.error("Missing 'id' parameter in request URL for revalidation");
    }
  }
