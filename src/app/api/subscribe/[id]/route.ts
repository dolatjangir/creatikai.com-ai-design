import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

// DELETE /api/subscribers/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Subscriber ID is required" },
        { status: 400 }
      );
    }

    const existing = await prisma.subscriber.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { success: false, message: "Subscriber not found" },
        { status: 404 }
      );
    }

    await prisma.subscriber.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Subscriber deleted successfully",
        deletedId: id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete subscriber error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}