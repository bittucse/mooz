import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'


const MobileNav = () => {
  return (
    <section className=' w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg"
          height={36}
          width={36}
          alt='hamburger icon' 
          className=' cursor-pointer sm:hidden'/>

        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav
