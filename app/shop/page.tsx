import Image from "next/image"
import { Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-4 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl">Coffee Shop</h1>
        <p className="text-gray-600">
          Browse our selection of premium coffee beans, ready to be delivered to your doorstep.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="sticky top-24 rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#2C1810]">Filters</h2>
              <Filter className="h-5 w-5 text-gray-500" />
            </div>

            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="mb-2 block text-sm font-medium text-gray-700">
                Search
              </label>
              <Input type="text" id="search" placeholder="Search coffee..." className="w-full" />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox id={`category-${category.id}`} />
                    <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-600">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Roast Level */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">Roast Level</h3>
              <div className="space-y-2">
                {roastLevels.map((roast) => (
                  <div key={roast.id} className="flex items-center">
                    <Checkbox id={`roast-${roast.id}`} />
                    <label htmlFor={`roast-${roast.id}`} className="ml-2 text-sm text-gray-600">
                      {roast.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Origin */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">Origin</h3>
              <div className="space-y-2">
                {origins.map((origin) => (
                  <div key={origin.id} className="flex items-center">
                    <Checkbox id={`origin-${origin.id}`} />
                    <label htmlFor={`origin-${origin.id}`} className="ml-2 text-sm text-gray-600">
                      {origin.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">Price Range</h3>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="Min" className="w-full" />
                <span className="text-gray-500">-</span>
                <Input type="number" placeholder="Max" className="w-full" />
              </div>
              <Button className="mt-3 w-full bg-[#2C1810] hover:bg-[#3D291E]">Apply</Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full lg:w-3/4">
          {/* Sort Controls */}
          <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-lg border bg-white p-4 shadow-sm sm:flex-row">
            <p className="text-gray-600">Showing 1-12 of 36 products</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="bestselling">Best Selling</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {product.isNew && (
                    <div className="absolute left-2 top-2 rounded-full bg-[#D4A762] px-3 py-1 text-xs font-semibold text-white">
                      New
                    </div>
                  )}
                </div>
                <CardHeader className="p-4 pb-0">
                  <div className="text-sm text-gray-500">{product.origin}</div>
                  <CardTitle className="font-serif text-lg text-[#2C1810]">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="mb-2 text-sm text-gray-600">{product.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#F9F5F0] px-2 py-1 text-xs text-[#2C1810]">
                      {product.roastLevel}
                    </span>
                    <span className="rounded-full bg-[#F9F5F0] px-2 py-1 text-xs text-[#2C1810]">{product.size}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <span className="text-lg font-bold text-[#2C1810]">${product.price.toFixed(2)}</span>
                  <Button size="sm" className="bg-[#2C1810] hover:bg-[#3D291E]">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              1
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              2
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              3
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const categories = [
  { id: 1, name: "Single Origin" },
  { id: 2, name: "Blends" },
  { id: 3, name: "Espresso" },
  { id: 4, name: "Decaf" },
  { id: 5, name: "Specialty" },
]

const roastLevels = [
  { id: 1, name: "Light Roast" },
  { id: 2, name: "Medium Roast" },
  { id: 3, name: "Medium-Dark Roast" },
  { id: 4, name: "Dark Roast" },
]

const origins = [
  { id: 1, name: "Ethiopia" },
  { id: 2, name: "Colombia" },
  { id: 3, name: "Brazil" },
  { id: 4, name: "Guatemala" },
  { id: 5, name: "Kenya" },
  { id: 6, name: "Indonesia" },
]

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright, fruity notes with a floral aroma. Medium roast with exceptional clarity.",
    price: 18.99,
    image: "/placeholder.svg?height=400&width=600",
    origin: "Ethiopia",
    roastLevel: "Medium Roast",
    size: "12 oz",
    isNew: true,
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Sweet caramel and nutty flavors with a smooth finish. Medium-dark roast.",
    price: 16.99,
    image: "/placeholder.svg?height=400&width=600",
    origin: "Colombia",
    roastLevel: "Medium-Dark Roast",
    size: "12 oz",
    isNew: false,
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Earthy, full-bodied with low acidity and notes of dark chocolate. Dark roast.",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=600",
    origin: "Indonesia",
    roastLevel: "Dark Roast",
    size: "12 oz",
    isNew: false,
  },
  {
    id: 4,
    name: "Guatemala Antigua",
    description: "Smooth with a spicy kick and subtle chocolate undertones. Medium roast.",
    price: 17.99,
    image: "/placeholder.svg?height=400&width=600",
    origin: "Guatemala",
    roastLevel: "Medium Roast",
    size: "12 oz",
    isNew: false,
  },
  {
    id: 5,
    name: "Kenya AA",
    description: "Bold, vibrant with wine-like acidity and blackcurrant notes. Medium-light roast.",
    price: 21.99,
    image: "/placeholder.svg?height=400&width=600",
    origin: "Kenya",
    roastLevel: "Medium-Light Roast",
    size: "12 oz",
    isNew: true,
  },
  {
    id: 6,
    name: "Brazil Santos",
    description: "Nutty, mild with notes of chocolate and caramel. Low acidity. Medium roast.",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=600",
    origin: "Brazil",
    roastLevel: "Medium Roast",
    size: "12 oz",
    isNew: false,
  },
]
