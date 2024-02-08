import { NextRequest, NextResponse } from 'next/server';
import {uploadToBucket} from "../../../lib/spaces"
import {createImg2} from "../../../lib/image"

async function getResponse(req: NextRequest): Promise<NextResponse> {
  uploadToBucket(`${Math.floor(Math.random() * 1000000000)}.png`, await createImg2())
  return new NextResponse('Success!');
}

export async function GET(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
