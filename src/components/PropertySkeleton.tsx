import { Skeleton } from "@/components/ui/skeleton"

export function PropertySkeleton() {
  return (
    <div className="card-premium overflow-hidden">
      <Skeleton className="aspect-[4/3] w-full rounded-t-xl" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  )
}

export function PropertyGridSkeleton() {
  return (
    <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <PropertySkeleton />
      <PropertySkeleton />
      <PropertySkeleton />
      <PropertySkeleton />
      <PropertySkeleton />
      <PropertySkeleton />
    </div>
  )
}
