import Image from "next/image"
import { Check, Coffee, Truck, Package, Users, BarChart, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DistributionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-[#2C1810]">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Coffee distribution"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Coffee Distribution Services
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Premium coffee beans delivered to your business with reliability and exceptional quality.
          </p>
          <Button size="lg" className="bg-[#D4A762] text-black hover:bg-[#C69C58]">
            Request a Quote
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl">Our Distribution Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We provide premium coffee solutions for businesses of all sizes, from small cafes to large restaurant
              chains.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {distributionServices.map((service) => (
              <Card key={service.id} className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A762]">
                    {service.icon}
                  </div>
                  <CardTitle className="font-serif text-xl text-[#2C1810]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F9F5F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl">
                Why Choose Our Distribution Services?
              </h2>
              <p className="mb-8 text-gray-600">
                We pride ourselves on providing exceptional coffee distribution services that set us apart from the
                competition. Our commitment to quality, reliability, and customer satisfaction makes us the preferred
                choice for businesses.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start">
                    <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4A762]">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-[#2C1810]">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Coffee distribution warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl">Distribution Plans</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Flexible plans designed to meet the needs of your business, from small cafes to large chains.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`overflow-hidden ${
                  plan.popular ? "border-[#D4A762] shadow-xl" : "border-gray-200 shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#D4A762] py-1 text-center text-sm font-semibold text-white">Most Popular</div>
                )}
                <CardHeader className={plan.popular ? "bg-[#F9F5F0]" : ""}>
                  <CardTitle className="font-serif text-xl text-[#2C1810]">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="font-serif text-3xl font-bold text-[#2C1810]">${plan.price}</span>
                    <span className="text-gray-500"> / month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-[#D4A762]" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-[#D4A762] text-white hover:bg-[#C69C58]" : "bg-[#2C1810] hover:bg-[#3D291E]"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F9F5F0] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Find answers to common questions about our coffee distribution services.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left font-medium text-[#2C1810]">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2C1810] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-gray-300">
                Contact our team today to discuss your coffee distribution needs and get a customized quote.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-[#D4A762] text-[#2C1810] hover:bg-[#C69C58]">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-4 w-4" /> Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const distributionServices = [
  {
    id: 1,
    title: "Wholesale Coffee Supply",
    description: "Premium coffee beans in bulk quantities for cafes, restaurants, and offices at competitive prices.",
    icon: <Coffee className="h-6 w-6 text-white" />,
  },
  {
    id: 2,
    title: "Scheduled Deliveries",
    description:
      "Regular, reliable delivery schedules tailored to your business needs to ensure you never run out of stock.",
    icon: <Truck className="h-6 w-6 text-white" />,
  },
  {
    id: 3,
    title: "Custom Packaging",
    description:
      "Branded packaging options for businesses looking to maintain their brand identity with their coffee offerings.",
    icon: <Package className="h-6 w-6 text-white" />,
  },
  {
    id: 4,
    title: "Barista Training",
    description:
      "Professional training for your staff to ensure they can prepare the perfect cup of coffee every time.",
    icon: <Users className="h-6 w-6 text-white" />,
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Smart inventory solutions to help you track usage, predict needs, and optimize your coffee stock.",
    icon: <BarChart className="h-6 w-6 text-white" />,
  },
  {
    id: 6,
    title: "Custom Blends",
    description: "Create your signature coffee blend tailored to your specific taste requirements and brand identity.",
    icon: <Coffee className="h-6 w-6 text-white" />,
  },
]

const benefits = [
  {
    id: 1,
    title: "Direct Sourcing Relationships",
    description: "We work directly with coffee farmers to ensure fair prices and the highest quality beans.",
  },
  {
    id: 2,
    title: "Freshly Roasted Beans",
    description: "All our coffee is roasted to order, ensuring maximum freshness when it reaches your business.",
  },
  {
    id: 3,
    title: "Flexible Delivery Options",
    description: "Choose delivery schedules that work for your business, from weekly to monthly deliveries.",
  },
  {
    id: 4,
    title: "Quality Guarantee",
    description: "We stand behind the quality of our coffee with a 100% satisfaction guarantee.",
  },
  {
    id: 5,
    title: "Dedicated Account Manager",
    description: "Each business is assigned a dedicated account manager to ensure personalized service.",
  },
]

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for small cafes and offices",
    price: 199,
    features: [
      "Up to 20 lbs of coffee monthly",
      "2 coffee varieties",
      "Monthly delivery",
      "Basic brewing equipment",
      "Email support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Business",
    description: "Ideal for medium-sized cafes",
    price: 399,
    features: [
      "Up to 50 lbs of coffee monthly",
      "5 coffee varieties",
      "Bi-weekly delivery",
      "Professional brewing equipment",
      "Barista training (2 sessions)",
      "Priority email & phone support",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For large chains and restaurants",
    price: 799,
    features: [
      "100+ lbs of coffee monthly",
      "10+ coffee varieties",
      "Weekly delivery",
      "Complete equipment setup",
      "Regular barista training",
      "Custom blends available",
      "24/7 dedicated support",
    ],
    popular: false,
  },
]

const faqs = [
  {
    id: 1,
    question: "What is the minimum order quantity for coffee distribution?",
    answer:
      "Our minimum order quantity is 10 pounds of coffee per delivery. This ensures we can provide you with the best possible pricing while maintaining our high quality standards.",
  },
  {
    id: 2,
    question: "How often can we schedule deliveries?",
    answer:
      "We offer flexible delivery schedules including weekly, bi-weekly, and monthly options. We can also create custom delivery schedules based on your specific business needs.",
  },
  {
    id: 3,
    question: "Do you offer custom coffee blends for businesses?",
    answer:
      "Yes, we offer custom blending services for businesses looking to create their signature coffee blend. Our coffee experts will work with you to develop a unique blend that matches your taste preferences and brand identity.",
  },
  {
    id: 4,
    question: "What if we're not satisfied with the coffee quality?",
    answer:
      "We stand behind our products with a 100% satisfaction guarantee. If you're not completely satisfied with your coffee, we'll replace it or provide a refund, no questions asked.",
  },
  {
    id: 5,
    question: "Do you provide coffee equipment for businesses?",
    answer:
      "Yes, we offer a range of coffee equipment options from basic brewing equipment to professional espresso machines. These can be purchased outright or included as part of our premium distribution packages.",
  },
  {
    id: 6,
    question: "How do you ensure coffee freshness during distribution?",
    answer:
      "We roast our coffee to order and use specialized packaging that preserves freshness. Our efficient distribution network ensures that coffee reaches your business within days of roasting.",
  },
]
