# Detcord

A Ready Room–inspired Discord clone built with **Next.js**, **TypeScript**, **Prisma**, and **Clerk**.  
~~Database configured manually with PostgreSQL.~~  
Database now managed and fully operational through **Supabase**.

---

## Status
Currently in **early development**. Core structure, authentication, and database connectivity are confirmed working.  
The Prisma ↔ Supabase integration is fully resolved after extensive configuration, networking, and environment debugging.

> _(Yes, finally, the connection war was won. After spending 6 straight hours trying to get prisma to work with pooling...... "Ladies and Gentlemen, we got him.")

---

## In Progress
- Modal and API creation  
- Server and channel logic design  
- UI structure refinements  

---

## Current Progress
- ✅ Next.js 14 project initialized  
- ✅ Clerk authentication functional  
- ✅ Supabase database connected and verified  
- ✅ Prisma schema + client operational  
- ✅ Environment configuration stable across environments  

---

## Next Steps
- Implement real-time messaging  
- Add server and channel management  
- Introduce message persistence and timestamps  
- Refine Tailwind UI components  

---

## Stack
| Layer | Tool |
|-------|------|
| **Framework** | Next.js 14 |
| **Language** | TypeScript |
| **Auth** | Clerk |
| **Database** | Supabase (PostgreSQL) |
| **ORM** | Prisma |
| **Styling** | Tailwind CSS |

---

## Setup

```bash
git clone https://github.com/yourusername/detcord.git
cd detcord
npm install

# Create a .env file with the following keys:
DATABASE_URL="your_supabase_connection_string"
DIRECT_URL="your_supabase_connection_string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"
CLERK_SECRET_KEY="your_secret"

npm run dev
