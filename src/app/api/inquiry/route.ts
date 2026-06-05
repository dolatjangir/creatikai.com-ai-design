import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

// ─── POST /api/inquiry ───────────────────────────────────
// Submit a new course inquiry
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, preferredCourse, message } = body;

    // ─── Validation ───────────────────────────────────────
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Full name is required" },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!preferredCourse || !preferredCourse.trim()) {
      return NextResponse.json(
        { success: false, message: "Preferred course is required" },
        { status: 400 }
      );
    }

    // ─── Create in DB ───────────────────────────────────
    const inquiry = await prisma.inquiry.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        preferredCourse: preferredCourse.trim(),
        message: message?.trim() || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully! We'll get back to you within 24 hours.",
        data: {
          id: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          preferredCourse: inquiry.preferredCourse,
          createdAt: inquiry.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// ─── GET /api/inquiry ──────────────────────────────────
// Get all inquiries (for admin panel)
export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: inquiries,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get inquiries error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}