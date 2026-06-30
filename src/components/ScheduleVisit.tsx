import { useState, useRef } from "react"
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Home,
  Check,
  ArrowRight,
  MapPin,
} from "lucide-react"
import { motion, useReducedMotion, useInView } from "motion/react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const properties = [
  "The Minimalist Garden Studio",
  "Mid-Century Penthouse",
  "Modern Industrial Loft",
  "The Riverside Villa",
  "Scandinavian Townhouse",
  "The Glass Pavilion",
]

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, easeIn: [0.25, 0.1, 0.25, 1] },
  },
}

export default function ScheduleVisit() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    date: "",
    time: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.property &&
    formData.date &&
    formData.time

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 } }
    : { initial: "hidden", animate: isInView ? "visible" : "hidden" }

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="py-24 lg:py-32"
      aria-labelledby="visit-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Info */}
          <motion.div {...motionProps} variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <span className="section-label">Personal Tour</span>
              <h2
                id="visit-heading"
                className="mb-6 font-serif text-4xl leading-tight font-semibold text-dwelling-charcoal md:text-5xl dark:text-white"
              >
                Schedule Your
                <br />
                <span className="dark:text-dwelling-goldLight text-dwelling-gold italic">
                  Private Visit
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-md text-lg leading-relaxed text-dwelling-slate dark:text-white/50"
            >
              Experience our properties firsthand with a curated private tour.
              Our property consultants will guide you through every detail.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  desc: "Choose a date and time that works for your calendar",
                },
                {
                  icon: User,
                  title: "Dedicated Consultant",
                  desc: "A senior advisor will accompany your entire visit",
                },
                {
                  icon: MapPin,
                  title: "Door-to-Door Service",
                  desc: "Complimentary pickup from your location within city limits",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dwelling-sand bg-gray-200 dark:bg-white/10">
                    <item.icon
                      className="h-5 w-5 text-dwelling-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-dwelling-charcoal dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-dwelling-slate dark:text-white/50">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            {...motionProps}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 0.2 },
              },
            }}
          >
            <div className="card-premium relative overflow-hidden p-8 shadow-xl shadow-dwelling-charcoal/5 lg:p-10 dark:shadow-dwelling-gold/5">
              {/* Success Overlay */}
              <div
                className={cn(
                  "absolute inset-0 z-20 flex flex-col items-center justify-center bg-dwelling-cream transition-all duration-500 dark:bg-[#0d0d0d]",
                  submitted
                    ? "visible opacity-100"
                    : "pointer-events-none invisible opacity-0"
                )}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={submitted ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30"
                >
                  <Check className="h-10 w-10 text-emerald-500 dark:text-emerald-400" />
                </motion.div>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-dwelling-charcoal dark:text-white">
                  Visit Scheduled!
                </h3>
                <p className="max-w-xs text-center text-dwelling-slate dark:text-white/50">
                  We've received your request. Our team will confirm your
                  appointment within 24 hours.
                </p>
              </div>

              <h3 className="mb-8 font-serif text-2xl font-semibold text-dwelling-charcoal dark:text-white">
                Book Your Tour
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Schedule a property visit"
              >
                {/* Property Selection */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-medium text-dwelling-warm dark:text-white/80">
                    <Home
                      className="h-4 w-4 text-dwelling-gold"
                      aria-hidden="true"
                    />
                    Select Property <span aria-label="required">*</span>
                  </Label>
                  <Select
                    value={formData.property}
                    onValueChange={(v) =>
                      setFormData({ ...formData, property: v })
                    }
                    required
                  >
                    <SelectTrigger
                      className={cn(
                        focusedField === "property" &&
                          "border-dwelling-gold ring-2 ring-dwelling-gold/20"
                      )}
                    >
                      <SelectValue placeholder="Choose a property to visit" />
                    </SelectTrigger>
                    <SelectContent>
                      {properties.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium text-dwelling-warm dark:text-white/80">
                      <Calendar
                        className="h-4 w-4 text-dwelling-gold"
                        aria-hidden="true"
                      />
                      Preferred Date <span aria-label="required">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      onFocus={() => setFocusedField("date")}
                      onBlur={() => setFocusedField(null)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className={cn(
                        focusedField === "date" &&
                          "border-dwelling-gold ring-2 ring-dwelling-gold/20"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium text-dwelling-warm dark:text-white/80">
                      <Clock
                        className="h-4 w-4 text-dwelling-gold"
                        aria-hidden="true"
                      />
                      Preferred Time <span aria-label="required">*</span>
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(v) =>
                        setFormData({ ...formData, time: v })
                      }
                      required
                    >
                      <SelectTrigger
                        className={cn(
                          focusedField === "time" &&
                            "border-dwelling-gold ring-2 ring-dwelling-gold/20"
                        )}
                      >
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-medium text-dwelling-warm dark:text-white/80">
                    <User
                      className="h-4 w-4 text-dwelling-gold"
                      aria-hidden="true"
                    />
                    Full Name <span aria-label="required">*</span>
                  </Label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={cn(
                      focusedField === "name" &&
                        "border-dwelling-gold ring-2 ring-dwelling-gold/20"
                    )}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium text-dwelling-warm dark:text-white/80">
                      <Mail
                        className="h-4 w-4 text-dwelling-gold"
                        aria-hidden="true"
                      />
                      Email Address <span aria-label="required">*</span>
                    </Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={cn(
                        focusedField === "email" &&
                          "border-dwelling-gold ring-2 ring-dwelling-gold/20 placeholder:text-gray-700"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium text-dwelling-warm dark:text-white/80">
                      <Phone
                        className="h-4 w-4 text-dwelling-gold"
                        aria-hidden="true"
                      />
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={cn(
                        focusedField === "phone" &&
                          "border-dwelling-gold ring-2 ring-dwelling-gold/20"
                      )}
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={!isFormValid}
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                  className={cn(
                    "group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-base font-medium text-gray-700 transition-all duration-300 dark:text-gray-700",
                    isFormValid
                      ? "dark:hover:bg-dwelling-goldLight cursor-pointer bg-dwelling-charcoal bg-gray-200 hover:bg-dwelling-warm hover:shadow-xl hover:shadow-dwelling-charcoal/20 dark:bg-dwelling-gold dark:bg-white/10 dark:text-dwelling-charcoal dark:hover:shadow-dwelling-gold/20"
                      : "text-gray-700dark:text-white/40 cursor-not-allowed bg-dwelling-stone bg-gray-200 text-dwelling-slate"
                  )}
                >
                  {isFormValid ? (
                    <>
                      Schedule Visit
                      <ArrowRight className="h-4 w-4 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 dark:text-white/40" />
                    </>
                  ) : (
                    "Fill all required fields"
                  )}
                </motion.button>

                <p className="text-center text-xs text-dwelling-slate dark:text-white/40">
                  By scheduling, you agree to our privacy policy. We'll never
                  share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
