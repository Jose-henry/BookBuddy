"use client"
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Topbar() {
  const [isClick, setisClick] = useState(false)
  const toggleMenubar = () => {
    setisClick(!isClick)
  }

  return (
    <nav className=" bg-glassmorphism p-4 backdrop-blur-lg  topbar rounded-b-xl md:rounded-none">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo2.svg" alt="logo" width={45} height={45} />
        <p className="text-heading3-bold text-light-1 hidden sm:block">BookBuddy</p>
      </Link>
      <div className="flex items-center gap-1 md:flex-grow ">
      <motion.div 
      className={`block md:hidden absolute top-full right-1 w-40 bg-glassmorphism p-2 rounded-3xl shadow-sm`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isClick ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
    <SignedIn>
      <SignOutButton>
        <div className="flex cursor-pointer py-1 px-3 text-sm">
          <Image src="/assets/logout.svg" alt="logout" width={20} height={20} />
          <span className="ml-2 text-gray-300">Sign Out</span>
        </div>
      </SignOutButton>
      <div className="organization-switcher">
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-1 px-4 text-sm",
            },
          }}
        />
      </div>


    </SignedIn>
  </motion.div>
</div>
      <div className="md:hidden flex items-center">
        <button className={`inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white ${isClick ? 'focus:ring-2 focus:ring-inset focus:ring-primary-500' : ''}`}
        aria-label="Menu"
        onClick={() => toggleMenubar()}>
          <Bars3CenterLeftIcon className="size-6 text-light-1 " />
        </button>
      </div>
      <div className="hidden sm:block">
                <OrganizationSwitcher  appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-1 px-4 text-sm",
        }
      }} />

      </div>
    </nav>
  )
}
