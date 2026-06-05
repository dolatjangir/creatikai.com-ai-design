import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

// ─── POST /api/contact ───────────────────────────────────
// Submit a new contact form
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, subject, message, department } = body;

    // ─── Validation ───────────────────────────────────────
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Name is required" },
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

    if (!subject || !subject.trim()) {
      return NextResponse.json(
        { success: false, message: "Subject is required" },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // ─── Create in DB ───────────────────────────────────
    const contact = await prisma.contactus.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        department: department?.trim() || "general",
        message: message.trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! We will get back to you shortly.",
        data: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          department: contact.department,
          createdAt: contact.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// ─── GET /api/contact ──────────────────────────────────
// Get all contact submissions (for admin panel)
export async function GET() {
  try {
    const contacts = await prisma.contactus.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        email: true,
        subject: true,
        department: true,
        message: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get contacts error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}