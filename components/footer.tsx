import Link from "next/link"
import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-700 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 font-serif text-xl font-bold">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300">Stay updated with new products and special offers</p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-gray-600 bg-[#3D291E] text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#D4A762] text-[#2C1810] hover:bg-[#C69C58]">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Coffee className="h-8 w-8 text-[#D4A762]" />
              <span className="font-serif text-xl font-bold">
                Rekebot <span className="text-[#D4A762]">ረከቦት</span>
              </span>
            </div>
            <p className="mb-6 text-gray-300">
              Premium coffee distribution and retail, bringing the finest beans from around the world to your cup.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#D4A762]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#D4A762]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#D4A762]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-[#D4A762]">
                  Shop Coffee
                </Link>
              </li>
              <li>
                <Link href="/distribution" className="text-gray-300 hover:text-[#D4A762]">
                  Distribution Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#D4A762]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#D4A762]">
                  Coffee Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#D4A762]">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#D4A762]" />
                <span className="text-gray-300">123 Coffee Street, Roastery District, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[#D4A762]" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-[#D4A762]" />
                <span className="text-gray-300">info@rekebot.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">Business Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Rekebot (ረከቦት). All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link href="/privacy" className="hover:text-[#D4A762]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D4A762]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
