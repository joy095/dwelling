import { Skeleton } from "./ui/skeleton"

export function InsightsSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <Skeleton className="mx-auto mb-4 h-4 w-32" />
        <Skeleton className="mx-auto mb-6 h-10 w-64" />
        <Skeleton className="mx-auto h-6 w-full max-w-2xl" />
      </div>

      {/* Locality Selector */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        <Skeleton className="h-10 w-28 rounded-full" />
        <Skeleton className="h-10 w-20 rounded-full" />
        <Skeleton className="h-10 w-20 rounded-full" />
        <Skeleton className="h-10 w-28 rounded-full" />
      </div>

      {/* Tabs */}
      <div className="mb-8 flex justify-center">
        <Skeleton className="h-12 w-80 rounded-xl" />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />
      </div>

      {/* Summary */}
      <Skeleton className="h-32 rounded-2xl" />
    </div>
  )
}
