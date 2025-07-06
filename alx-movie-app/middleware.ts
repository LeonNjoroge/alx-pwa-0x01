import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    // Example: simple auth check (optional, based on your logic)
    const isLoggedIn = req.cookies.get('token')

    if (!isLoggedIn && req.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
}

// ✅ This tells Next.js NOT to run this middleware on these paths
export const config = {
    matcher: [
        '/((?!_next|favicon.ico|manifest.json|sw.js|workbox-|icons).*)',
    ],
}