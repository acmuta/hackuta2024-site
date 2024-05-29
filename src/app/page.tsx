import { Button } from "@/components/Button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex-col w-full h-screen flex justify-center items-center">
      <Link
        className="bg-lime-600 px-4 py-2 rounded-md  text-white"
        href={"/api/auth/signin"}
      >
        Sign In
      </Link>
    </div>
  )
}
