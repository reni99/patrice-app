import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET(req: NextApiRequest) {
  return NextResponse.json({ "reni": "hallo" })
}