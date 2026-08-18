import { useEffect, useState } from "react"

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Network",
    href: "#network",
  },
  {
    name: "Opportunity",
    href: "#opportunity",
  },
  {
    name: "Contact",
    href: "#contact",
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

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

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-[#CBD1D8]/80 bg-white/95 shadow-[0_8px_30px_rgba(31,35,41,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* BRAND */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1F2329] bg-white text-xs font-bold text-[#1F2329] transition duration-300 group-hover:border-[#365C7D] group-hover:text-[#365C7D]">
            W

            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#365C7D]" />
          </div>

          <div className="min-w-0 leading-tight">
            <p className="text-[12px] font-bold tracking-[0.16em] text-[#1F2329] sm:text-sm">
              WASTU
            </p>

            <p className="truncate text-[8px] font-medium tracking-[0.12em] text-[#365C7D] sm:text-[9px]">
              AUTOMOTIVE SOLUTION
            </p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative rounded-full px-3.5 py-2 text-[13px] font-medium text-[#1F2329]/60 transition duration-300 hover:bg-[#365C7D]/5 hover:text-[#1F2329]"
            >
              {item.name}

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#365C7D] transition-all duration-300 group-hover:w-4" />
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="group hidden min-h-[46px] items-center gap-2 rounded-full bg-[#1F2329] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#365C7D] lg:inline-flex"
        >
          Contact Us

          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#CBD1D8] bg-white text-[#1F2329] transition hover:border-[#365C7D]/40 lg:hidden"
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

      {/* MOBILE NAVIGATION */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[calc(100vh-72px)] border-b border-[#CBD1D8] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="max-h-[calc(100vh-72px)] overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
          <div className="mb-3 flex items-center gap-2 rounded-2xl bg-[#365C7D]/5 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-[#365C7D]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#365C7D]">
              Automotive Solution
            </p>
          </div>

          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="group flex min-h-[56px] items-center justify-between border-b border-[#CBD1D8]/70 text-[15px] font-medium text-[#1F2329]"
            >
              <span className="transition group-hover:text-[#365C7D]">
                {item.name}
              </span>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-black/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[#365C7D]/40 transition group-hover:translate-x-1 group-hover:text-[#365C7D]">
                  →
                </span>
              </div>
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex min-h-[50px] items-center justify-center rounded-full bg-[#1F2329] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#365C7D]"
          >
            Contact Us
          </a>

          <p className="mt-5 text-center text-[10px] leading-5 text-black/30">
            PT Wastu Widya Wasesa
            <br />
            Products • Services • Distribution • Partnership
          </p>
        </nav>
      </div>
    </header>
  )
}

export default Navbar