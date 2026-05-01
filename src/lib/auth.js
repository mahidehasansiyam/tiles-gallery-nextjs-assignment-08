// import dns from 'node:dns';
// dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.MDB_URL);
const db = client.db('tiles-gallery');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId:'770701869220-3dh9i5f1dr11ti87vfkpc3rcmahrvi6f.apps.googleusercontent.com',
      clientSecret:"GOCSPX - _Xsm3xo0lHSYu2IffBH - GAEBSZSm",
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});
