import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <Skeleton className="mx-auto mb-4 h-12 w-3/4 max-w-2xl" />
        <Skeleton className="mx-auto h-4 w-full max-w-3xl" />
        <Skeleton className="mx-auto mt-2 h-4 w-full max-w-2xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="rounded-lg bg-white p-6 shadow-md">
              <Skeleton className="mb-2 h-6 w-3/4" />
              <Skeleton className="mb-3 h-4 w-1/3" />
              <Skeleton className="mb-4 h-4 w-full" />
              <Skeleton className="mb-4 h-4 w-full" />
              <Skeleton className="mb-4 h-4 w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
