import { useEffect, useState } from "react"

const navLinks = [
  {
    name: "Home",
    href: "#home",
    id: "home",
  },
  {
    name: "About",
    href: "#about",
    id: "about",
  },
  {
    name: "Services",
    href: "#services",
    id: "services",
  },
  {
    name: "Products",
    href: "#products",
    id: "products",
  },
  {
    name: "Network",
    href: "#network",
    id: "network",
  },
  {
    name: "Opportunity",
    href: "#opportunity",
    id: "opportunity",
  },
  {
    name: "Contact",
    href: "#contact",
    id: "contact",
  },
]

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  /* =========================================================
     NAVBAR SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  /* =========================================================
     CLOSE MENU WHEN DESKTOP
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-[#CBD1D8]/80 bg-white/95 shadow-[0_8px_30px_rgba(31,35,41,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 sm:h-[88px] sm:px-6 lg:px-8">
        {/* =====================================================
            BRAND / LOGO
        ===================================================== */}

        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Wastu Automotive Solution"
          className="group flex min-w-0 shrink-0 items-center"
        >
          <div className="relative flex h-[74px] w-[112px] items-center justify-start sm:h-[82px] sm:w-[132px] lg:w-[140px]">
            <img
              src="/images/logo.png"
              alt="Wastu Automotive Solution"
              className="h-full w-full object-contain object-left transition duration-300 group-hover:scale-[1.025]"
            />
          </div>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((item) => {
            const active = activeSection === item.id

            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative rounded-full px-3 py-2.5 text-[13px] font-medium transition duration-300 xl:px-3.5 ${
                  active
                    ? "bg-[#365C7D]/[0.07] text-[#1F2329]"
                    : "text-[#1F2329]/55 hover:bg-[#365C7D]/[0.05] hover:text-[#1F2329]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#365C7D] transition-all duration-300 ${
                    active
                      ? "w-4 opacity-100"
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                  }`}
                />
              </a>
            )
          })}
        </nav>

        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}

        <a
          href="#contact"
          className="group hidden min-h-[46px] shrink-0 items-center gap-2 rounded-full bg-[#1F2329] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(31,35,41,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#365C7D] hover:shadow-[0_12px_26px_rgba(54,92,125,0.20)] lg:inline-flex"
        >
          Contact Us

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </a>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 lg:hidden ${
            menuOpen
              ? "border-[#365C7D]/30 bg-[#365C7D]/[0.06] text-[#365C7D]"
              : "border-[#CBD1D8] bg-white text-[#1F2329]"
          }`}
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`absolute left-0 right-0 top-full overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[calc(100vh-80px)] border-b border-[#CBD1D8] opacity-100 shadow-[0_20px_45px_rgba(31,35,41,0.08)]"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="max-h-[calc(100vh-80px)] overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
          {/* =================================================
              MOBILE BRAND PANEL
          ================================================= */}

          <div className="mb-3 flex items-center justify-center rounded-[20px] border border-[#365C7D]/10 bg-gradient-to-r from-[#365C7D]/[0.06] via-white to-[#365C7D]/[0.03] px-4 py-2">
            <img
              src="/images/logo.png"
              alt="Wastu Automotive Solution"
              className="h-[72px] w-[120px] object-contain"
            />
          </div>

          {/* =================================================
              MOBILE LINKS
          ================================================= */}

          {navLinks.map((item, index) => {
            const active = activeSection === item.id

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`group flex min-h-[58px] items-center justify-between border-b border-[#CBD1D8]/70 transition ${
                  active ? "text-[#365C7D]" : "text-[#1F2329]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      active ? "bg-[#365C7D]" : "bg-transparent"
                    }`}
                  />

                  <span className="text-[15px] font-medium">
                    {item.name}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition duration-300 ${
                      active
                        ? "bg-[#365C7D]/10 text-[#365C7D]"
                        : "text-[#365C7D]/40 group-hover:bg-[#365C7D]/10 group-hover:text-[#365C7D]"
                    }`}
                  >
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            )
          })}

          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <a
            href="#contact"
            onClick={closeMenu}
            className="group mt-5 flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#1F2329] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#365C7D]"
          >
            Contact Us

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </a>

          {/* =================================================
              MOBILE FOOTNOTE
          ================================================= */}

          <div className="mt-5 text-center">
            <p className="text-[10px] font-medium text-black/35">
              PT Wastu Widya Wasesa
            </p>

            <p className="mt-1 text-[9px] tracking-[0.08em] text-black/25">
              Products • Services • Distribution • Partnership
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar