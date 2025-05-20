import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ethiopian Coffee Regions | Rekebot (ረከቦት)",
  description:
    "Explore Ethiopia's diverse coffee growing regions and discover the unique flavor profiles from each area.",
}

export default function CoffeeRegionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#F9F5F0]">{children}</div>
}
