import type { Metadata } from "next"
import EthiopianCoffeeMap from "@/components/ethiopian-coffee-map"

export const metadata: Metadata = {
  title: "Ethiopian Coffee Regions | Rekebot (ረከቦት)",
  description:
    "Explore Ethiopia's diverse coffee growing regions and discover the unique flavor profiles from each area.",
}

export default function CoffeeRegionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-[#2C1810] md:text-4xl lg:text-5xl">
          Ethiopian Coffee Regions
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Ethiopia is the birthplace of coffee, with diverse growing regions that produce unique flavor profiles.
          Explore the map to learn about each region's characteristics and the coffees they produce.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <EthiopianCoffeeMap />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {coffeeRegions.map((region) => (
          <div key={region.id} className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <h3 className="mb-2 font-serif text-xl font-semibold text-[#2C1810]">{region.name}</h3>
            <div className="mb-3 flex items-center text-sm text-gray-500">
              <span className="mr-2 inline-block h-3 w-3 rounded-full" style={{ backgroundColor: region.color }}></span>
              <span>{region.altitude}</span>
            </div>
            <p className="mb-4 text-gray-600">{region.description}</p>
            <div className="space-y-2">
              <div>
                <span className="font-medium text-[#2C1810]">Flavor Profile: </span>
                <span className="text-gray-600">{region.flavorProfile}</span>
              </div>
              <div>
                <span className="font-medium text-[#2C1810]">Processing: </span>
                <span className="text-gray-600">{region.processing}</span>
              </div>
              <div>
                <span className="font-medium text-[#2C1810]">Notable Varieties: </span>
                <span className="text-gray-600">{region.varieties}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const coffeeRegions = [
  {
    id: 1,
    name: "Sidamo",
    color: "#8BC34A",
    altitude: "1,550 - 2,200 meters",
    description:
      "Located in the fertile highlands south of Lake Awassa in the Great Rift Valley. Sidamo coffees are known for their complexity and full body.",
    flavorProfile: "Citrus notes, lemon, bright acidity, medium body with floral aromatics",
    processing: "Primarily washed, some natural processing",
    varieties: "Heirloom Ethiopian varieties",
  },
  {
    id: 2,
    name: "Yirgacheffe",
    color: "#4CAF50",
    altitude: "1,750 - 2,200 meters",
    description:
      "A microregion within Sidamo, Yirgacheffe is perhaps the most famous Ethiopian coffee region, known for producing distinctively floral and fruity coffees.",
    flavorProfile: "Floral, jasmine, bergamot, citrus, with a light to medium body",
    processing: "Washed and natural process",
    varieties: "Heirloom Ethiopian varieties including Kudhume, Diga, Wolisho",
  },
  {
    id: 3,
    name: "Guji",
    color: "#009688",
    altitude: "1,800 - 2,200 meters",
    description:
      "A relatively newer designation, Guji is adjacent to Sidamo and produces coffees with distinctive fruit-forward characteristics.",
    flavorProfile: "Bright, complex acidity, stone fruits, berries, and floral notes",
    processing: "Washed and natural process",
    varieties: "Heirloom Ethiopian varieties",
  },
  {
    id: 4,
    name: "Harrar",
    color: "#FF9800",
    altitude: "1,400 - 2,000 meters",
    description:
      "Located in the eastern highlands of Ethiopia, Harrar produces distinctive naturally processed coffees with wine and fruit characteristics.",
    flavorProfile: "Wild berries, wine, spice notes, chocolate, full body with a dry finish",
    processing: "Primarily natural process",
    varieties: "Heirloom Ethiopian varieties, Mocha varieties",
  },
  {
    id: 5,
    name: "Limu",
    color: "#03A9F4",
    altitude: "1,600 - 2,000 meters",
    description:
      "Located in southwestern Ethiopia, Limu produces balanced, clean coffees with mild acidity and pleasant sweetness.",
    flavorProfile: "Balanced, wine-like acidity, spice notes, medium body with a clean finish",
    processing: "Primarily washed process",
    varieties: "Heirloom Ethiopian varieties",
  },
  {
    id: 6,
    name: "Jimma/Kaffa",
    color: "#673AB7",
    altitude: "1,400 - 1,800 meters",
    description:
      "The birthplace of coffee, located in southwestern Ethiopia. This region produces earthy, full-bodied coffees.",
    flavorProfile: "Earthy, spicy, with chocolate notes and medium acidity",
    processing: "Washed and natural process",
    varieties: "Wild coffee varieties, heirloom Ethiopian varieties",
  },
]
