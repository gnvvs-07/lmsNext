import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth(); // User login details from Clerk
    const { title } = await req.json();

    // Check if userId is present
    if (!userId) {
      return new NextResponse("Unauthorized user", { status: 401 });
    }

    // Course creation
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("[courses]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
