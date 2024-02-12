'use client'

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()
  return !session ? (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/login' className="border px-4 py-2 text-red-400 rounded hover:underline">no one is gonna brother you</Link>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-green-400 border p-5">you have been brothered😁</p>
    </div>
  )
}
