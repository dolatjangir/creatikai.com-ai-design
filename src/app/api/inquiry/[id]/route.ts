import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

// PATCH /api/inquiry/:id — update status
export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await _req.json();
    const { status } = body;

    const validStatuses = ["new", "contacted", "enrolled", "closed"];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status" },
        { status: 400 }
      );
    }

    const updated = await prisma.inquiry.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(
      { success: true, data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update inquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/inquiry/:id
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.inquiry.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true, message: "Inquiry deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete inquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}