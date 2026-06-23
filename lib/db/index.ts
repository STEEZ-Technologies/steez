import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && process.env.NODE_ENV === 'production') {
  console.warn('⚠️ DATABASE_URL is not set. Database queries will fail.');
}

const sql = neon(databaseUrl || 'postgres://placeholder:placeholder@localhost:5432/placeholder');
export const db = drizzle(sql, { schema });
