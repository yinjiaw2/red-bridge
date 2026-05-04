import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const sheetUrl = process.env.NEXT_PUBLIC_BOOKING_SHEET_URL;
  if (!sheetUrl) {
    return NextResponse.json({ result: "error", error: "Missing sheet URL" }, { status: 500 });
  }

  const body = await request.text();
  const res = await fetch(sheetUrl, { method: "POST", body });

  const text = await res.text();
  try {
    const json = JSON.parse(text);
    return NextResponse.json(json);
  } catch {
    return NextResponse.json({ result: "error", error: text }, { status: 500 });
  }
}
