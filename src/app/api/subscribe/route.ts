import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){
    try{
        const {email} = await req.json();
        if(!email){
            return NextResponse.json(
                {success:false, message:"Email is Required"},
                {status:400}
            );
        }

        if(!email.includes("@")){
            return NextResponse.json(
                {success:false, message:"Invalid Email"},
                {status:400}
            );

        }

        const existing = await prisma.subscriber.findUnique({
            where: {email},
        })
        if(existing){
            return NextResponse.json(
                {success:false, message:"Already Subscriber"},
                {status:409}
            )
        }


        // db
        await prisma.subscriber.create({
            data:{email},
        })
        return NextResponse.json(
            {success:true , message:"Subscribed successfully 🎉"}
        );
    }catch(error){
        console.log("subscribe error",error);
        return NextResponse.json(
            { success: false, message: "Server error" },
      { status: 500 }
        )
    }
}


export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: {
        id: "desc", // change according to your schema
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: subscribers,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get subscribers error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}

