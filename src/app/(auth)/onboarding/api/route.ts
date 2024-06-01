import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export async function PATCH({ userId, request }: { userId: string, request: Request }) {
  const id = userId;
  const User = await currentUser()
  try {
    const data = await request.json();

    // Validate request body (optional)
    if (!User) {
    console.error("User not found"); 
    }

    const { name, username, image, bio } = data;

    // Update user profile
    const user = await prisma.User.upsert({
      where: { id: id },

      data: {
        name,
        username,
        image,
        bio,
        onboarded: true
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Error updating user" }, { status: 500 });
  }
}

// Add revalidation logic for data freshness
export async function onAfterRender(event: any) { // Adjust type as needed
  // No need to extract id, use the static path directly
  await revalidatePath('/onboarding'); // Assuming your profile page is at '/profile'
}