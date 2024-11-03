import prisma from "@/lib/prisma";

export async function POST(req: any) {
  try {
    const feedback = await req.json();

    if (!feedback) {
      return new Response(
        JSON.stringify({ success: false, error: "no feedback data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
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

    return new Response(
      JSON.stringify({
        success: true,
        message: "Feedback received successfully",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to process feedback" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
