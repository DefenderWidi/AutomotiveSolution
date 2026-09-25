import { useEffect, useState } from "react"
import { company } from "../data/siteData"

const navLinks = [
  { name: "Beranda", href: "#home", id: "home" },
  { name: "Tentang", href: "#about", id: "about" },
  { name: "Layanan", href: "#services", id: "services" },
  { name: "Material", href: "#materials", id: "materials" },
  { name: "Lingkup", href: "#scope", id: "scope" },
  { name: "Kontak", href: "#contact", id: "contact" },
]

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = navLinks.map((item) => document.getElementById(item.id)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35] }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-black/10 bg-white/95 shadow-[0_10px_35px_rgba(18,18,18,.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:h-[84px] sm:px-6 lg:px-8">
        <a href="#home" onClick={() => setMenuOpen(false)} className="flex min-w-0 items-center gap-3" aria-label={company.brandName}>
          <img src="/images/logo.png" alt="Berkah Alam Group" className="h-11 w-auto object-contain sm:h-12" />
          <div className="hidden min-[430px]:block">
            <p className="text-[11px] font-extrabold uppercase leading-none tracking-[.13em] text-[#141414] sm:text-xs">Berkah Alam</p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[.28em] text-[#F47A00]">Group</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const active = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2.5 text-[13px] font-semibold transition ${
                  active ? "bg-[#F47A00]/10 text-[#141414]" : "text-black/50 hover:bg-black/[.04] hover:text-black"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#F47A00] transition-all ${
                    active ? "w-4 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <a
          href={company.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="group hidden min-h-[44px] items-center gap-2 rounded-full bg-[#141414] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#F47A00] lg:inline-flex"
        >
          Lihat Alamat
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white lg:hidden"
        >
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-black transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-black transition ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-black transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <div className={`absolute inset-x-0 top-full overflow-hidden bg-white transition-all duration-300 lg:hidden ${menuOpen ? "max-h-[calc(100vh-76px)] border-b border-black/10 opacity-100 shadow-xl" : "pointer-events-none max-h-0 opacity-0"}`}>
        <nav className="max-h-[calc(100vh-76px)] overflow-y-auto px-4 pb-6 pt-2 sm:px-6">
          {navLinks.map((item, index) => (
            <a key={item.id} href={item.href} onClick={() => setMenuOpen(false)} className="flex min-h-[58px] items-center justify-between border-b border-black/[.07] text-[15px] font-semibold text-[#141414]">
              <span>{item.name}</span>
              <span className="text-[10px] font-semibold text-[#F47A00]">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <a href={company.mapUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="mt-5 flex min-h-[50px] items-center justify-center rounded-full bg-[#141414] px-6 text-sm font-bold text-white">Lihat Alamat</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
