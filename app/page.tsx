import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Coffee, Truck, ShoppingBag, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-[#2C1810]">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Coffee beans background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Rekebot <span className="text-[#D4A762]">ረከቦት</span> <br /> Premium Coffee Distribution
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Sourcing the finest coffee beans from around the world, delivering exceptional quality to businesses and
            coffee lovers alike.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-[#D4A762] text-black hover:bg-[#C69C58]">
              Shop Now <ShoppingBag className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Distribution Services <Truck className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#F9F5F0] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl">
              Our Premium Coffee Selection
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Carefully selected beans from the world's finest coffee regions, roasted to perfection to bring out their
              unique flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coffeeProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-[#2C1810]">{product.name}</h3>
                  <p className="mb-4 text-sm text-gray-600">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#2C1810]">${product.price.toFixed(2)}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#D4A762] text-[#2C1810] hover:bg-[#D4A762] hover:text-white"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/shop">
              <Button className="bg-[#2C1810] hover:bg-[#3D291E]">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Distribution Services */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl">
              Coffee Distribution Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We provide premium coffee beans to cafes, restaurants, and businesses with reliable delivery and
              exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {distributionServices.map((service) => (
              <div
                key={service.id}
                className="rounded-lg bg-[#F9F5F0] p-8 text-center shadow-md transition-all hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A762]">
                  {service.icon}
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-[#2C1810]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/distribution">
              <Button className="bg-[#2C1810] hover:bg-[#3D291E]">
                Learn More About Distribution <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#2C1810] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Hear from businesses and coffee enthusiasts who trust our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-lg bg-[#3D291E] p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-200">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#D4A762] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="mb-2 font-serif text-2xl font-bold text-[#2C1810] md:text-3xl">
                Ready to Order or Inquire About Distribution?
              </h2>
              <p className="text-[#2C1810]">Contact us today to discuss your coffee needs or place an order.</p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-[#2C1810] hover:bg-[#3D291E]">
                Contact Us <Phone className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white"
              >
                Shop Online <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const coffeeProducts = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright, fruity notes with a floral aroma. Medium roast with exceptional clarity.",
    price: 18.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Sweet caramel and nutty flavors with a smooth finish. Medium-dark roast.",
    price: 16.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Earthy, full-bodied with low acidity and notes of dark chocolate. Dark roast.",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=600",
  },
]

const distributionServices = [
  {
    id: 1,
    title: "Wholesale Supply",
    description: "Premium coffee beans in bulk quantities for cafes, restaurants, and offices at competitive prices.",
    icon: <Coffee className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    title: "Reliable Delivery",
    description: "Scheduled deliveries to ensure you never run out of stock, with flexible frequency options.",
    icon: <Truck className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    title: "Custom Blends",
    description: "Create your signature coffee blend tailored to your specific taste requirements.",
    icon: <ShoppingBag className="h-8 w-8 text-white" />,
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Cafe Owner",
    quote:
      "The quality and consistency of their coffee beans have helped us build a loyal customer base. Their delivery is always on time!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Restaurant Manager",
    quote:
      "We've been working with them for over 3 years now. Their distribution service is reliable and the coffee quality is exceptional.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emma Chen",
    role: "Coffee Enthusiast",
    quote:
      "As someone who loves brewing coffee at home, finding their online shop was a game-changer. The freshness is unmatched!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]
