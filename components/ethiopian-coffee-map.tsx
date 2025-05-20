"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"

// Ethiopia GeoJSON simplified for this example
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/ethiopia/ethiopia-regions.json"

export default function EthiopianCoffeeMap() {
  const [selectedRegion, setSelectedRegion] = useState<CoffeeRegion | null>(null)
  const [tooltipContent, setTooltipContent] = useState("")

  return (
    <div className="relative">
      <div className="mb-4 rounded-lg border bg-white p-4 shadow-sm">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 3500,
            center: [40, 9],
          }}
          width={800}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup zoom={1} center={[40, 9]} maxZoom={5}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#F9F5F0"
                    stroke="#D4A762"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#EADDC7", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {coffeeRegions.map((region) => (
              <TooltipProvider key={region.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Marker
                      coordinates={region.coordinates}
                      onClick={() => setSelectedRegion(region)}
                      onMouseEnter={() => setTooltipContent(region.name)}
                      onMouseLeave={() => setTooltipContent("")}
                    >
                      <circle
                        r={10}
                        fill={region.color}
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        className="cursor-pointer transition-all hover:r-12"
                      />
                      <text
                        textAnchor="middle"
                        y={-15}
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "10px",
                          fontWeight: "bold",
                          fill: "#2C1810",
                          pointerEvents: "none",
                        }}
                      >
                        {region.name}
                      </text>
                    </Marker>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{region.name}</p>
                    <p className="text-xs text-gray-500">{region.altitude}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {selectedRegion && (
        <Card className="mb-6 border-t-4" style={{ borderTopColor: selectedRegion.color }}>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-[#2C1810]">{selectedRegion.name}</h3>
              <span className="text-sm text-gray-500">{selectedRegion.altitude}</span>
            </div>
            <p className="mb-3 text-gray-600">{selectedRegion.description}</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div>
                <h4 className="text-sm font-medium text-[#2C1810]">Flavor Profile</h4>
                <p className="text-sm text-gray-600">{selectedRegion.flavorProfile}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#2C1810]">Processing</h4>
                <p className="text-sm text-gray-600">{selectedRegion.processing}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#2C1810]">Varieties</h4>
                <p className="text-sm text-gray-600">{selectedRegion.varieties}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mb-4 text-center text-sm text-gray-500">
        <p>Click on a region marker to view detailed information</p>
        <p>Use mouse wheel to zoom in/out and drag to pan the map</p>
      </div>
    </div>
  )
}

interface CoffeeRegion {
  id: number
  name: string
  coordinates: [number, number]
  color: string
  altitude: string
  description: string
  flavorProfile: string
  processing: string
  varieties: string
}

const coffeeRegions: CoffeeRegion[] = [
  {
    id: 1,
    name: "Sidamo",
    coordinates: [38.5, 6.7],
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
    coordinates: [38.2, 6.1],
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
    coordinates: [39.1, 5.8],
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
    coordinates: [42.1, 9.3],
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
    coordinates: [36.8, 8.1],
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
    coordinates: [36.0, 7.5],
    color: "#673AB7",
    altitude: "1,400 - 1,800 meters",
    description:
      "The birthplace of coffee, located in southwestern Ethiopia. This region produces earthy, full-bodied coffees.",
    flavorProfile: "Earthy, spicy, with chocolate notes and medium acidity",
    processing: "Washed and natural process",
    varieties: "Wild coffee varieties, heirloom Ethiopian varieties",
  },
]
