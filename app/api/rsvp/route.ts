export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/helpers/auth-options";

import getDb from "@/helpers/db";
const { db } = getDb();

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "You must be logged in." },
      { status: 401 }
    );
  }

  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      {
        error: "Name is required",
      },
      { status: 400 }
    );
  }

  const email = body.email ? body.email : "no-email";

  await db.none(
    `INSERT INTO rsvp (name, email, wishes, attending)
    VALUES ($1, $2, $3, $4)`,
    [body.name, email, body.specialWishes, body.canCome]
  );

  return NextResponse.json({ success: true });
}
