import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    // If TikTok returns an error
    if (error) {
        console.error('TikTok Auth Error:', searchParams.get('error_description') || error);
        return NextResponse.redirect(new URL('/?error=tiktok_auth_failed', request.url));
    }

    // If we have a successful authorization code
    if (code) {
        console.log('Received TikTok auth code (private/server-side only)');

        // TODO: Exchange this code for an access token using your actual TikTok App credentials.
        // This happens securely on the server, keeping your secret safe.
        /*
        const tokenResponse = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            client_key: process.env.TIKTOK_CLIENT_KEY!,
            client_secret: process.env.TIKTOK_CLIENT_SECRET!,
            code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://www.4playglobal.com/api/auth/tiktok/callback'
          })
        });
        const tokenData = await tokenResponse.json();
        */

        // After handling the code, redirect the user back to the main site or a success page.
        return NextResponse.redirect(new URL('/?success=tiktok_connected', request.url));
    }

    // Fallback redirect if accessed without any parameters
    return NextResponse.redirect(new URL('/', request.url));
}
