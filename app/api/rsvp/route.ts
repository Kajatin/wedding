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

  if (!body.name || !body.email) {
    return NextResponse.json(
      {
        error: "Name and email are required",
      },
      { status: 400 }
    );
  }

  await db.none(
    `INSERT INTO rsvp (name, email, wishes, attending)
    VALUES ($1, $2, $3, $4)`,
    [body.name, body.email, body.specialWishes, body.canCome]
  );

  return NextResponse.json({ success: true });
}
