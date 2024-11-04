import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const feedback = await req.json();

    // Validate feedback data using zod
    // const validation = feedbackSchema.safeParse(feedback);

    // console.log("validation", validation);

    if (!feedback) {
      return NextResponse.json(
        { success: false, error: "no feedback data" },
        { status: 400 }
      );
    }

    // Save feedback to database
    const submitFeedback = await prisma.feedback.create({
      data: {
        name: feedback?.name,
        email: feedback?.email,
        feedback: feedback?.feedback,
        rating: feedback?.rating,
        projectId: feedback?.projectId,
      },
    });
    revalidatePath("/dashboard/feedbacks/[id]");

    // console.log("submitFeedback: ", submitFeedback);

    return NextResponse.json(
      {
        success: true,
        message: "Feedback received successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}
