"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-[#D4A762]" />
          <span className="font-serif text-xl font-bold text-[#2C1810]">
            Rekebot <span className="text-[#D4A762]">ረከቦት</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-[#2C1810] hover:text-[#D4A762]">
            Home
          </Link>
          <Link href="/shop" className="text-[#2C1810] hover:text-[#D4A762]">
            Shop
          </Link>
          <Link href="/distribution" className="text-[#2C1810] hover:text-[#D4A762]">
            Distribution
          </Link>
          <Link href="/coffee-regions" className="text-[#2C1810] hover:text-[#D4A762]">
            Coffee Regions
          </Link>
          <Link href="/about" className="text-[#2C1810] hover:text-[#D4A762]">
            About Us
          </Link>
          <Link href="/contact" className="text-[#2C1810] hover:text-[#D4A762]">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-[#2C1810]" />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A762] text-xs font-bold text-white">
              3
            </span>
          </Link>
          <Button className="hidden bg-[#2C1810] hover:bg-[#3D291E] md:inline-flex">Order Now</Button>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 pt-16">
                <Link
                  href="/"
                  className="text-lg font-medium text-[#2C1810] hover:text-[#D4A762]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-lg font-medium text-[#2C1810] hover:text-[#D4A762]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/distribution"
                  className="text-lg font-medium text-[#2C1810] hover:text-[#D4A762]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Distribution
                </Link>
                <Link
                  href="/coffee-regions"
                  className="text-lg font-medium text-[#2C1810] hover:text-[#D4A762]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Coffee Regions
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-[#2C1810] hover:text-[#D4A762]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-[#2C1810] hover:text-[#D4A762]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button className="mt-4 w-full bg-[#2C1810] hover:bg-[#3D291E]">Order Now</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
