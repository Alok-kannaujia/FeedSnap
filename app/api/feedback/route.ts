import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string(),
  email: z.string(),
  feedback: z.string(),
  rating: z.number().int().min(1).max(5),
  projectid: z.string(),
});

export async function POST(req: any) {
  try {
    const feedback = await req.json();

    // Validate feedback data using zod
    // const validation = feedbackSchema.safeParse(feedback);

    // console.log("validation", validation);

    // if (!validation.success) {
    //   // console.log(validation);
    //   return NextResponse.json(
    //     { success: false, error: "Invalid feedback data" },
    //     { status: 400 }
    //   );
    // }

    // Save feedback to database
    const submitFeedback = await prisma.feedback.create({
      data: {
        name: feedback.name,
        email: feedback.email,
        feedback: feedback.feedback,
        rating: feedback.rating,
        projectId: feedback.projectId,
      },
    });

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
