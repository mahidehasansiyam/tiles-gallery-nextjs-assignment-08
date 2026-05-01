import { createAuthClient } from 'better-auth/react';
export const authClient = createAuthClient({
  
  baseURL: process.env.BETTER_AUTH_URL,
});

export const { signIn, signUp, signOut, useSession } = createAuthClient();


console.log('AUTH CHECK:', {
  id: process.env.GOOGLE_CLIENT_ID,
  secret: process.env.GOOGLE_CLIENT_SECRET,
});