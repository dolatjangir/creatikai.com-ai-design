import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

// PATCH /api/contact/:id — update status (read, replied, etc.)
export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await _req.json();
    const { status } = body;

    if (!status || !["unread", "read", "replied"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status" },
        { status: 400 }
      );
    }

    const updated = await prisma.contactus.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(
      { success: true, data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update contact error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/contact/:id — delete a submission
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.contactus.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true, message: "Contact deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete contact error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}