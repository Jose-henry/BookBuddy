import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  try {
    const data = await request.json();

    // Validate request body (optional)
    if (!data || !data.id || !data.name || !data.username) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const { name, username, image, bio } = data;

    // Update user profile
    const user = await prisma.User.update({
      where: { id },
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
  const id = event.request.url.searchParams.get('id'); // Extract id from URL

  if (id) {
    await revalidatePath('/profile/' + id);
  } else {
    console.error("Missing 'id' parameter in request URL for revalidation");
  }
}
