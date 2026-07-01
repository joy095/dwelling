import { useState, useEffect } from "react"
import { Menu, X, Home, Sun, Moon, Monitor } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

interface NavbarProps {
  scrollY: number
}

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Insights", href: "#insights" },
  { label: "Schedule Visit", href: "#visit" },
]

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()

  const isScrolled = scrollY > 50

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["properties", "insights", "visit"]
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const cycleTheme = () => {
    const order: Array<"light" | "dark" | "system"> = [
      "light",
      "dark",
      "system",
    ]
    const currentIndex = order.indexOf(theme)
    const nextIndex = (currentIndex + 1) % order.length
    setTheme(order[nextIndex])
  }

  const ThemeIcon = themeIcons[theme]

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-dwelling-stone/30 bg-white/90 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-[#0d0d0d]/90"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="group flex items-center gap-3"
            aria-label="Dwelling Home"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-dwelling-charcoal dark:bg-dwelling-gold"
            >
              <Home className="h-5 w-5 text-white dark:text-dwelling-charcoal" />
            </motion.div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-dwelling-charcoal dark:text-white">
              Dwelling
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "cursor-pointer rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  activeSection === link.href.replace("#", "")
                    ? "bg-dwelling-sand text-dwelling-charcoal dark:bg-white/10 dark:text-white"
                    : "text-dwelling-slate hover:bg-dwelling-sand/50 hover:text-dwelling-charcoal dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                )}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollTo("#visit")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="dark:hover:bg-dwelling-goldLight ml-4 cursor-pointer rounded-xl bg-dwelling-charcoal px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-dwelling-charcoal/20 active:scale-[0.98] dark:bg-dwelling-gold dark:text-white/60"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              className="rounded-lg p-2 text-dwelling-warm transition-colors hover:bg-dwelling-sand dark:text-white dark:hover:bg-white/10"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-b border-dwelling-stone/30 bg-white/95 backdrop-blur-xl md:hidden dark:border-white/5 dark:bg-[#0d0d0d]/95"
          >
            <div className="space-y-2 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full rounded-xl px-4 py-3 text-left font-medium text-dwelling-warm transition-colors hover:bg-dwelling-sand dark:text-white/80 dark:hover:bg-white/10"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollTo("#visit")}
                className="dark:hover:bg-dwelling-goldLight mt-2 w-full rounded-xl bg-dwelling-charcoal px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-dwelling-warm dark:bg-dwelling-gold dark:text-dwelling-charcoal"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
