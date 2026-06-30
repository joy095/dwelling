import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, TrendingUp, Shield } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const stats = [
  { icon: MapPin, value: "240+", label: "Premium Locations" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Shield, value: "15+", label: "Years of Trust" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, easeIn: [0.25, 0.1, 0.25, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, easeInOut: [0.25, 0.1, 0.25, 1], delay: 0.3 },
  },
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 } }
    : { initial: "hidden", animate: isVisible ? "visible" : "hidden" }

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dwelling-cream transition-colors duration-500 dark:bg-[#0d0d0d]">
        <div className="absolute top-0 right-0 h-full w-[60%] opacity-30 dark:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-dwelling-sand/60 to-transparent dark:from-dwelling-gold/5" />
          <svg
            className="animate-float absolute top-20 right-20 h-96 w-96 text-dwelling-stone/40 dark:text-dwelling-gold/10"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-dwelling-cream to-transparent dark:from-[#0d0d0d]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            {...motionProps}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="section-label">Premium Real Estate</span>
              <h1
                id="hero-heading"
                className="font-serif text-5xl leading-[1.1] font-semibold tracking-tight text-dwelling-charcoal md:text-6xl lg:text-7xl dark:text-white"
              >
                Discover Your
                <br />
                <span className="dark:text-dwelling-goldLight text-dwelling-gold italic">
                  Perfect
                </span>{" "}
                Space
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-lg text-lg leading-relaxed text-dwelling-slate dark:text-white/60"
            >
              Dwelling curates architecturally exceptional properties for
              discerning professionals. Every space tells a story of
              craftsmanship, light, and thoughtful design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#properties"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById("properties")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group dark:hover:bg-dwelling-goldLight inline-flex items-center gap-3 rounded-xl bg-dwelling-charcoal px-8 py-4 font-medium transition-all duration-300 hover:shadow-xl hover:shadow-dwelling-charcoal/20 active:scale-[0.98] dark:bg-dwelling-gold dark:text-white"
              >
                Explore Properties
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#visit"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById("visit")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-dwelling-charcoal px-8 py-4 font-medium text-dwelling-charcoal transition-all duration-300 hover:bg-dwelling-charcoal hover:text-white active:scale-[0.98] dark:border-dwelling-gold dark:text-dwelling-gold dark:hover:bg-dwelling-gold dark:hover:text-dwelling-charcoal"
              >
                Schedule a Visit
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 border-t border-dwelling-stone/50 pt-8 dark:border-white/10"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dwelling-sand dark:bg-white/10">
                    <stat.icon className="h-5 w-5 text-dwelling-gold" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-dwelling-charcoal dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-dwelling-slate dark:text-white/50">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            {...motionProps}
            variants={imageVariants}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-dwelling-charcoal/10 dark:shadow-dwelling-gold/5">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop&q=70"
                  alt="Modern luxury home exterior with glass walls and garden"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dwelling-charcoal/40 via-transparent to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="glass-card dark:glass-card-dark absolute right-6 bottom-6 left-6 rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="mb-1 text-xs text-dwelling-slate text-gray-800">
                        Featured Property
                      </p>
                      <p className="font-serif text-lg font-semibold text-black text-dwelling-charcoal">
                        The Glass House
                      </p>
                      <p className="text-sm font-medium text-black text-dwelling-gold">
                        $2.4M — 4 BHK
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-dwelling-gold/10 dark:bg-dwelling-gold/20"
                    >
                      <ArrowRight className="h-5 w-5 text-black text-dwelling-gold" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-3xl border-2 border-dwelling-gold/30 dark:border-dwelling-gold/20"
                aria-hidden="true"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 -z-10 h-24 w-24 rounded-2xl bg-dwelling-sand dark:bg-dwelling-gold/10"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
