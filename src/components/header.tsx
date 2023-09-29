import Link from "next/link"
import React from "react"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="static left-0 top-0 flex w-auto items-center justify-center gap-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:fixed lg:w-full">
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Home
      </Link>
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "default" })}
      >
        Dashboard
      </Link>
      <Button variant="default">click me</Button>
      <ModeToggle />
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}
