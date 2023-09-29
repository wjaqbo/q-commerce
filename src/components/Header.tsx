import Link from 'next/link';
import React from 'react';
import { UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 flex gap-4 w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
