import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''

  if (host === 'remodex.phodex.app') {
    const url = request.nextUrl.clone()
    if (!url.pathname.startsWith('/remodex')) {
      url.pathname = `/remodex${url.pathname === '/' ? '' : url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
}
