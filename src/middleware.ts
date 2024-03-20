import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  // your middleware stuff here
  return NextResponse.next();
}

export const config = {
    matcher:[
        '/((?!api|_next/static|_next/image|favicon.icon|favicon.ico).*)',
        '/api/secure/:path*'
    ]
}