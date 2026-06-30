import { lazy, Suspense, useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ScheduleVisit from "./components/ScheduleVisit"
import Footer from "./components/Footer"
import { PropertyGridSkeleton } from "./components/PropertySkeleton"
import { InsightsSkeleton } from "./components/InsightsSkeleton"

const FeaturedProperties = lazy(() => import("./components/FeaturedProperties"))
const LocalityInsights = lazy(() => import("./components/LocalityInsights"))

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Global SEO */}
      <Helmet>
        <title>
          Dwelling — Premium Real Estate | Curated Properties for Discerning
          Professionals
        </title>
        <meta
          name="description"
          content="Dwelling curates architecturally exceptional properties for discerning professionals. Discover premium apartments, penthouses, lofts, and independent houses in Mumbai and beyond."
        />
        <meta
          name="keywords"
          content="premium real estate, luxury apartments, penthouses, lofts, Mumbai properties, architectural homes, Bandra West, Juhu, Powai, property investment"
        />
        <meta name="author" content="Dwelling Real Estate" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dwelling.in" />

        <meta property="og:title" content="Dwelling — Premium Real Estate" />
        <meta
          property="og:description"
          content="Curated architecturally exceptional properties for discerning professionals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dwelling.in" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=630&fit=crop&q=80"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Dwelling" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dwelling — Premium Real Estate" />
        <meta
          name="twitter:description"
          content="Curated architecturally exceptional properties for discerning professionals."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=630&fit=crop&q=80"
        />
        <meta name="twitter:site" content="@dwelling_in" />
        <meta name="twitter:creator" content="@dwelling_in" />

        <meta name="theme-color" content="#1A1A1A" />
        <meta name="color-scheme" content="light dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Dwelling" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Dwelling" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Dwelling",
            description:
              "Premium real estate platform curating architecturally exceptional properties",
            url: "https://dwelling.in",
            logo: "https://dwelling.in/dwelling-icon.svg",
            image:
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=630&fit=crop&q=80",
            telephone: "+91-22-4005-1234",
            email: "hello@dwelling.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "42, Skyline Tower, Bandra Kurla Complex",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400051",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "19.0760",
              longitude: "72.8777",
            },
            sameAs: [
              "https://instagram.com/dwelling.in",
              "https://twitter.com/dwelling_in",
              "https://linkedin.com/company/dwelling",
            ],
            priceRange: "$$$$",
            openingHours: ["Mo-Sa 09:00-18:00"],
            areaServed: { "@type": "City", name: "Mumbai" },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Dwelling",
            url: "https://dwelling.in",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://dwelling.in/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>

      <a href="#main-content" className="skip-link sr-only">
        Skip to main content
      </a>
      <div className="min-h-screen overflow-x-hidden transition-colors duration-500 bg-[#0d0d0d]">
        <Navbar scrollY={scrollY} />
        <main id="main-content">
          <Hero />

          <Suspense fallback={<PropertyGridSkeleton />}>
            <FeaturedProperties />
          </Suspense>

          <Suspense fallback={<InsightsSkeleton />}>
            <LocalityInsights />
          </Suspense>

          <ScheduleVisit />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
