import { useState, useRef } from "react"
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  Footprints,
  Train,
  Building2,
  TreePine,
  Coffee,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
} from "lucide-react"
import { motion, useReducedMotion, useInView } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface TrendData {
  label: string
  value: string
  change: number
  period: string
}

interface Amenity {
  icon: React.ElementType
  label: string
  distance: string
  rating: number
}

interface ScoreData {
  label: string
  score: number
  icon: React.ElementType
  color: string
  bgColor: string
  description: string
}

const priceTrends: TrendData[] = [
  {
    label: "Avg. Price / sqft",
    value: "$485",
    change: 4.2,
    period: "vs last quarter",
  },
  {
    label: "Rental Yield",
    value: "6.8%",
    change: 1.5,
    period: "annual growth",
  },
  {
    label: "Price Appreciation",
    value: "12.4%",
    change: 2.1,
    period: "YoY growth",
  },
  { label: "Inventory", value: "142", change: -8.3, period: "units available" },
]

const scores: ScoreData[] = [
  {
    label: "Safety Index",
    score: 92,
    icon: Shield,
    color: "text-emerald-600",
    bgColor: "bg-emerald-600",
    description: "Very safe neighborhood with 24/7 patrol",
  },
  {
    label: "Walkability",
    score: 87,
    icon: Footprints,
    color: "text-amber-600",
    bgColor: "bg-amber-600",
    description: "Most errands accomplished on foot",
  },
  {
    label: "Transit Access",
    score: 78,
    icon: Train,
    color: "text-sky-600",
    bgColor: "bg-sky-600",
    description: "Metro & bus lines within 500m radius",
  },
]

const amenities: Amenity[] = [
  {
    icon: Building2,
    label: "Business District",
    distance: "1.2 km",
    rating: 4.8,
  },
  { icon: TreePine, label: "Central Park", distance: "800 m", rating: 4.9 },
  { icon: Coffee, label: "Artisan Cafés", distance: "300 m", rating: 4.7 },
  { icon: ShoppingBag, label: "Premium Mall", distance: "1.5 km", rating: 4.6 },
  {
    icon: GraduationCap,
    label: "International School",
    distance: "2.1 km",
    rating: 4.9,
  },
  {
    icon: HeartPulse,
    label: "Multi-Specialty Hospital",
    distance: "1.8 km",
    rating: 4.8,
  },
]

const localities = [
  { id: "bandra", name: "Bandra West" },
  { id: "juhu", name: "Juhu" },
  { id: "powai", name: "Powai" },
  { id: "lower-parel", name: "Lower Parel" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, easeOut: [0.25, 0.1, 0.25, 1] },
  },
}

function TrendIndicator({ change }: { change: number }) {
  if (change > 0) {
    return (
      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
        <TrendingUp className="h-4 w-4" aria-hidden="true" />
        <span className="text-sm font-semibold">+{change}%</span>
      </div>
    )
  }
  if (change < 0) {
    return (
      <div className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
        <TrendingDown className="h-4 w-4" aria-hidden="true" />
        <span className="text-sm font-semibold">{change}%</span>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-1 text-dwelling-slate dark:text-white/50">
      <Minus className="h-4 w-4" aria-hidden="true" />
      <span className="text-sm font-semibold">0%</span>
    </div>
  )
}

function CircularScore({
  score,
  color,

  size = 80,
}: {
  score: number
  color: string
  bgColor: string
  size?: number
}) {
  const radius = (size - 8) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Score: ${score} out of 100`}
    >
      <svg className="-rotate-90 transform" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-dwelling-stone/50 dark:text-white/10"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className={color}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-dwelling-charcoal dark:text-white">
          {score}
        </span>
      </div>
    </div>
  )
}

export default function LocalityInsights() {
  const [activeLocality, setActiveLocality] = useState("bandra")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 } }
    : { initial: "hidden", animate: isInView ? "visible" : "hidden" }

  return (
    <section
      id="insights"
      ref={sectionRef}
      className="bg-dwelling-sand/30 py-24 lg:py-32 dark:bg-white/[0.02]"
      aria-labelledby="insights-heading"
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
          <span className="section-label">Market Intelligence</span>
          <h2
            id="insights-heading"
            className="mb-6 font-serif text-4xl font-semibold text-dwelling-charcoal md:text-5xl dark:text-white"
          >
            Locality Insights
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-dwelling-slate dark:text-white/50">
            Real-time market data and neighborhood analytics to help you make
            informed decisions about your next premium property investment.
          </p>
        </motion.div>

        {/* Locality Selector */}
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
          aria-label="Select locality"
        >
          {localities.map((loc) => (
            <motion.button
              key={loc.id}
              onClick={() => setActiveLocality(loc.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={activeLocality === loc.id}
              className={cn(
                "cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300",
                activeLocality === loc.id
                  ? "bg-dwelling-charcoal shadow-lg shadow-dwelling-charcoal/20 dark:bg-dwelling-gold dark:text-white dark:shadow-dwelling-gold/20"
                  : "border border-dwelling-stone bg-white text-dwelling-slate hover:border-dwelling-charcoal hover:text-dwelling-charcoal dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:border-dwelling-gold dark:hover:text-white"
              )}
            >
              {loc.name}
            </motion.button>
          ))}
        </motion.div>

        <Tabs defaultValue="trends" className="w-full flex flex-col lg:flex-row">
          <motion.div
            {...motionProps}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
            className="mb-8 flex justify-center"
          >
            <TabsList className="border border-dwelling-stone/50 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <TabsTrigger value="trends" className="cursor-pointer px-6">
                Price Trends
              </TabsTrigger>
              <TabsTrigger value="scores" className="cursor-pointer px-6">
                Liveability
              </TabsTrigger>
              <TabsTrigger value="amenities" className="cursor-pointer px-6">
                Amenities
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Price Trends Tab */}
          <TabsContent value="trends" className="mt-0">
            <motion.div
              {...motionProps}
              variants={containerVariants}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {priceTrends.map((trend, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="card-premium p-6"
                >
                  <p className="mb-3 text-sm text-dwelling-slate dark:text-white/50">
                    {trend.label}
                  </p>
                  <div className="mb-3 flex items-end justify-between">
                    <span className="font-serif text-3xl font-semibold text-dwelling-charcoal transition-colors duration-300 group-hover:text-dwelling-gold dark:text-white">
                      {trend.value}
                    </span>
                    <TrendIndicator change={trend.change} />
                  </div>
                  <p className="text-xs text-dwelling-slate/70 dark:text-white/40">
                    {trend.period}
                  </p>

                  {/* Mini Bar Chart */}
                  <div
                    className="mt-4 flex h-8 items-end gap-1"
                    aria-hidden="true"
                  >
                    {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95].map((h, j) => (
                      <motion.div
                        key={j}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: j * 0.05 }}
                        className={cn(
                          "flex-1 rounded-sm",
                          j >= 7
                            ? "bg-dwelling-gold/60 dark:bg-dwelling-gold/40"
                            : "bg-dwelling-stone/40 bg-gray-300 dark:bg-white/10"
                        )}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Market Summary */}
            <motion.div
              {...motionProps}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                },
              }}
              className="card-premium mt-8 p-8"
            >
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-dwelling-charcoal dark:text-white">
                    Market Outlook —{" "}
                    {localities.find((l) => l.id === activeLocality)?.name}
                  </h3>
                  <p className="max-w-xl text-sm text-dwelling-slate dark:text-white/50">
                    The locality shows strong upward momentum with consistent
                    price appreciation. Rental demand remains high, making it an
                    attractive investment corridor.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      Bullish
                    </div>
                    <div className="mt-1 text-xs text-dwelling-slate dark:text-white/50">
                      Sentiment
                    </div>
                  </div>
                  <div className="h-12 w-px bg-dwelling-stone dark:bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dwelling-charcoal dark:text-white">
                      A+
                    </div>
                    <div className="mt-1 text-xs text-dwelling-slate dark:text-white/50">
                      Grade
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Liveability Scores Tab */}
          <TabsContent value="scores" className="mt-0">
            <motion.div
              {...motionProps}
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-3"
            >
              {scores.map((score, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="card-premium group p-8 text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <CircularScore
                      score={score.score}
                      color={score.color}
                      bgColor={score.bgColor}
                    />
                  </div>
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <score.icon
                      className={cn("h-5 w-5", score.color)}
                      aria-hidden="true"
                    />
                    <h3 className="font-serif text-lg font-semibold text-dwelling-charcoal dark:text-white">
                      {score.label}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-dwelling-slate dark:text-white/50">
                    {score.description}
                  </p>

                  {/* Score Bar */}
                  <div
                    className="mt-6 h-2 overflow-hidden rounded-full bg-dwelling-stone/30 dark:bg-white/10"
                    aria-hidden="true"
                  >
                    <motion.div
                      className={cn("h-full rounded-full", score.bgColor)}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${score.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Amenities Tab */}
          <TabsContent value="amenities" className="mt-0">
            <motion.div
              {...motionProps}
              variants={containerVariants}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {amenities.map((amenity, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="card-premium group flex items-center gap-5 p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-dwelling-sand transition-colors duration-300 group-hover:bg-dwelling-gold/10 dark:bg-white/10 dark:group-hover:bg-dwelling-gold/20">
                    <amenity.icon
                      className="h-6 w-6 text-dwelling-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="mb-1 font-medium text-dwelling-charcoal dark:text-white">
                      {amenity.label}
                    </h4>
                    <p className="text-sm text-dwelling-slate dark:text-white/50">
                      {amenity.distance}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-semibold text-dwelling-charcoal dark:text-white">
                        {amenity.rating}
                      </span>
                      <span className="text-xs text-dwelling-gold">★</span>
                    </div>
                    <span className="text-xs text-dwelling-slate dark:text-white/50">
                      Rating
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
