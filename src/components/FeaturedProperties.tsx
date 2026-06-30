import { useState, useRef } from "react"
import { MapPin, Bed, Maximize, ArrowRight, Heart, Eye } from "lucide-react"
import { motion, useReducedMotion, useInView } from "motion/react"
import { cn } from "@/lib/utils"

interface Property {
  id: number
  title: string
  subtitle: string
  location: string
  price: string
  bhk: string
  sqft: string
  image: string
  tag: string
  tagColor: string
  isNew?: boolean
}

const properties: Property[] = [
  {
    id: 1,
    title: "The Minimalist Garden Studio",
    subtitle: "A serene retreat blending indoor comfort with lush garden views",
    location: "Bandra West, Mumbai",
    price: "$1,850,000",
    bhk: "3 BHK",
    sqft: "2,400 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=75",
    tag: "Garden View",
    tagColor:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
    isNew: true,
  },
  {
    id: 2,
    title: "Mid-Century Penthouse",
    subtitle: "Iconic architecture with panoramic skyline vistas",
    location: "Lower Parel, Mumbai",
    price: "$3,200,000",
    bhk: "4 BHK",
    sqft: "3,800 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=75",
    tag: "Penthouse",
    tagColor:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
  },
  {
    id: 3,
    title: "Modern Industrial Loft",
    subtitle: "Raw elegance meets contemporary comfort in open living",
    location: "Powai, Mumbai",
    price: "$1,450,000",
    bhk: "2 BHK",
    sqft: "1,950 sqft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=75",
    tag: "Loft",
    tagColor:
      "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-800/50 dark:text-stone-300 dark:border-stone-700",
  },
  {
    id: 4,
    title: "The Riverside Villa",
    subtitle: "Waterfront luxury with private dock and sunset terraces",
    location: "Alibaug, Maharashtra",
    price: "$4,800,000",
    bhk: "5 BHK",
    sqft: "5,200 sqft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=75",
    tag: "Waterfront",
    tagColor:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800",
    isNew: true,
  },
  {
    id: 5,
    title: "Scandinavian Townhouse",
    subtitle: "Clean lines, warm wood, and abundant natural light",
    location: "Juhu, Mumbai",
    price: "$2,100,000",
    bhk: "3 BHK",
    sqft: "2,800 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=75",
    tag: "Townhouse",
    tagColor:
      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800",
  },
  {
    id: 6,
    title: "The Glass Pavilion",
    subtitle: "Floor-to-ceiling transparency in a private forest setting",
    location: "Lonavala, Maharashtra",
    price: "$3,600,000",
    bhk: "4 BHK",
    sqft: "4,100 sqft",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=75",
    tag: "Architectural",
    tagColor:
      "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800",
  },
]

const filters = ["All", "Penthouse", "Loft", "Villa", "Townhouse"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, easeIn: [0.25, 0.1, 0.25, 1] },
  },
}

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [likedProperties, setLikedProperties] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const toggleLike = (id: number) => {
    setLikedProperties((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const filtered =
    activeFilter === "All"
      ? properties
      : properties.filter((p) =>
          activeFilter === "Villa"
            ? p.tag === "Waterfront"
            : p.tag === activeFilter
        )

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 } }
    : { initial: "hidden", animate: isInView ? "visible" : "hidden" }

  return (
    <section
      id="properties"
      ref={sectionRef}
      className="py-24 lg:py-32"
      aria-labelledby="properties-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          {...motionProps}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-16 text-center"
        >
          <span className="section-label">Curated Collection</span>
          <h2
            id="properties-heading"
            className="mb-6 font-serif text-4xl font-semibold text-dwelling-charcoal md:text-5xl dark:text-white"
          >
            Featured Properties
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-dwelling-slate dark:text-white/50">
            Each property in our collection has been handpicked for its
            architectural merit, location excellence, and the unique lifestyle
            it offers.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          {...motionProps}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
          className="mb-12 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Filter properties by type"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={activeFilter === filter}
              aria-label={`Filter by ${filter}`}
              className={cn(
                "cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300",
                activeFilter === filter
                  ? "bg-dwelling-charcoal shadow-lg shadow-dwelling-charcoal/20 dark:bg-dwelling-gold dark:text-dwelling-charcoal dark:text-white dark:shadow-dwelling-gold/20"
                  : "border border-dwelling-stone bg-white text-dwelling-slate hover:border-dwelling-charcoal hover:text-dwelling-charcoal dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:border-dwelling-gold dark:hover:text-white"
              )}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Property Grid */}
        <motion.div
          {...motionProps}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="tabpanel"
        >
          {filtered.map((property) => (
            <motion.article
              key={property.id}
              variants={cardVariants}
              layout
              className="group card-premium overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={property.image}
                  alt={`Exterior view of ${property.title}`}
                  className="h-full w-full rounded-t-xl object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dwelling-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm",
                      property.tagColor
                    )}
                  >
                    {property.tag}
                  </span>
                  {property.isNew && (
                    <span className="animate-pulse-soft rounded-full bg-dwelling-gold px-3 py-1 text-xs font-medium text-white">
                      New
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <motion.button
                    onClick={() => toggleLike(property.id)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className={cn(
                      "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-md transition-all duration-300",
                      likedProperties.has(property.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/90 text-dwelling-warm hover:bg-white dark:bg-black/60 dark:text-white"
                    )}
                    aria-label={
                      likedProperties.has(property.id)
                        ? `Remove ${property.title} from favorites`
                        : `Add ${property.title} to favorites`
                    }
                    aria-pressed={likedProperties.has(property.id)}
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4",
                        likedProperties.has(property.id) && "fill-current"
                      )}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dwelling-warm backdrop-blur-md transition-all duration-300 hover:bg-white dark:bg-black/60 dark:text-white"
                    aria-label={`View details of ${property.title}`}
                  >
                    <Eye className="h-4 w-4" />
                  </motion.button>
                </div>

                {/* Price Overlay on Hover */}
                <div className="absolute right-4 bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="glass-card dark:glass-card-dark flex items-center justify-between rounded-xl px-4 py-3">
                    <span className="font-serif text-xl font-semibold text-dwelling-charcoal text-white">
                      {property.price}
                    </span>
                    <button className="flex cursor-pointer items-center gap-2 text-sm font-medium text-dwelling-gold text-white transition-colors hover:text-dwelling-charcoal">
                      View Details <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-1 font-serif text-xl font-semibold text-dwelling-charcoal transition-colors duration-300 group-hover:text-dwelling-gold dark:text-white">
                  {property.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-dwelling-slate dark:text-white/50">
                  {property.subtitle}
                </p>

                <div className="mb-4 flex items-center gap-2 text-sm text-dwelling-slate dark:text-white/50">
                  <MapPin className="h-4 w-4 text-dwelling-gold" />
                  {property.location}
                </div>

                <div className="flex items-center gap-4 border-t border-dwelling-stone/50 pt-4 dark:border-white/10">
                  <div className="flex items-center gap-1.5 text-sm text-dwelling-warm dark:text-white/70">
                    <Bed className="h-4 w-4 text-dwelling-slate dark:text-white/40" />
                    {property.bhk}
                  </div>
                  <div className="h-4 w-px bg-dwelling-stone dark:bg-white/10" />
                  <div className="flex items-center gap-1.5 text-sm text-dwelling-warm dark:text-white/70">
                    <Maximize className="h-4 w-4 text-dwelling-slate dark:text-white/40" />
                    {property.sqft}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          {...motionProps}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8 } },
          }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 rounded-xl border-2 border-dwelling-charcoal px-8 py-4 font-medium text-dwelling-charcoal transition-all duration-300 hover:bg-dwelling-charcoal hover:text-white active:scale-[0.98] dark:border-dwelling-gold dark:text-dwelling-gold dark:hover:bg-dwelling-gold dark:hover:text-dwelling-charcoal"
          >
            View All Properties
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
