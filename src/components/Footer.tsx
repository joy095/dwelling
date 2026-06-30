import { Home, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
const imageList = [
  {
    id: 1,
    renderIcon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
          fill="currentColor"
          d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"
        ></path>
      </svg>
    ),

    alt: "Instagram logo",
  },
  {
    id: 2,
    renderIcon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
          fill="currentColor"
          d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"
        ></path>
      </svg>
    ),
    alt: "X logo",
  },
  {
    id: 3,
    renderIcon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
          fill="currentColor"
          d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
          fillRule="evenodd"
        ></path>
      </svg>
    ),
    alt: "LinkedIn logo",
  },
]

const footerLinks = {
  properties: [
    "Bandra West",
    "Juhu",
    "Powai",
    "Lower Parel",
    "Alibaug",
    "Lonavala",
  ],
  company: ["About Us", "Our Team", "Careers", "Press", "Blog"],
  support: ["Contact", "FAQs", "Privacy Policy", "Terms of Service", "Sitemap"],
}

export default function Footer() {
  return (
    <footer className="bg-dwelling-charcoal pt-20 pb-8 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl dark:bg-white/10">
                <Home className="h-5 w-5 text-dwelling-gold" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Dwelling
              </span>
            </div>
            <p className="mb-8 max-w-sm leading-relaxed dark:text-white/60">
              Curating exceptional living spaces for those who appreciate
              architectural beauty and refined urban living since 2009.
            </p>
            <div className="flex gap-4">
              {imageList.map((icon) => (
                <a
                  key={icon.id} // 3. Use the unique ID instead of array index
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-dwelling-gold hover:text-white dark:bg-white/10 dark:text-gray-700"
                >
                  {icon.renderIcon({
                    className: "h-4 w-4 dark:text-white",
                    "aria-label": icon.alt,
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-sm font-medium tracking-wider uppercase dark:text-white/40">
              Properties
            </h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300 hover:text-dwelling-gold dark:text-white/70"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-medium tracking-wider uppercase dark:text-white/40">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300 hover:text-dwelling-gold dark:text-white/70"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-medium tracking-wider uppercase dark:text-white/40">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dwelling-gold" />
                <span className="text-sm dark:text-white/70">
                  42, Skyline Tower
                  <br />
                  Bandra Kurla Complex
                  <br />
                  Mumbai 400 051
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-dwelling-gold" />
                <a
                  href="tel:+912240051234"
                  className="text-sm transition-colors hover:text-dwelling-gold dark:text-white/70"
                >
                  +91 22 4005 1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-dwelling-gold" />
                <a
                  href="mailto:hello@dwelling.in"
                  className="text-sm transition-colors hover:text-dwelling-gold dark:text-white/70"
                >
                  hello@dwelling.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row dark:border-white/10">
          <p className="text-sm dark:text-white/40">
            © 2024 Dwelling Real Estate. All rights reserved.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-center gap-2 text-sm transition-colors hover:text-dwelling-gold dark:text-white/60"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
