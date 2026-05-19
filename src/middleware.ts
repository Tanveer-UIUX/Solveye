import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  const USERNAME = 'admin';
  const PASSWORD = 'Solveye77@#23'; 

  if (authHeader) {
    try {
      const auth = authHeader.split(' ')[1];
      const decoded = atob(auth).split(':');
      
      if (decoded[0] === USERNAME && decoded[1] === PASSWORD) {
        return NextResponse.next();
      }
    } catch (e) {
      console.error('Auth decoding failed');
    }
  }

  return new NextResponse('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// This tells Next.js to protect every single page on your site
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};