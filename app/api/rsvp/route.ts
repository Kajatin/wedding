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

  if (!body.names || body.names.length === 0) {
    return NextResponse.json(
      {
        error: "At least one name is required.",
      },
      { status: 400 }
    );
  }

  const email = body.email ? body.email : "no-email";
  const phone = body.phone ? body.phone : "no-phone";

  // For each name in the list, add a new RSVP entry.
  for (const name of body.names) {
    await db.none(
      `INSERT INTO rsvp (name, email, phone, wishes, attending) VALUES ($1, $2, $3, $4, $5)`,
      [name, email, phone, body.specialWishes, body.canCome]
    );
  }

  return NextResponse.json({ success: true });
}
