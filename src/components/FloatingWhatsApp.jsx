import { useEffect, useState } from "react"
import { company } from "../data/siteData"

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)
  const message = "Halo Berkah Alam Group, saya ingin berkonsultasi mengenai kebutuhan konstruksi, interior, atau material bangunan."

  useEffect(() => {
    const handleKeyDown = (event) => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-7 sm:right-7">
      <div className={`absolute bottom-[68px] right-0 w-[calc(100vw-32px)] max-w-[330px] origin-bottom-right overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(20,20,20,.18)] transition-all duration-300 ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-3 scale-[.96] opacity-0"}`}>
        <div className="h-1 bg-[#F47A00]" />
        <div className="p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#141414] text-white"><WhatsAppIcon className="h-5 w-5" /></span>
            <div>
              <p className="text-sm font-extrabold text-[#141414]">Hubungi Berkah Alam Group</p>
              <p className="mt-1 text-xs leading-5 text-black/45">Konsultasikan kebutuhan proyek, interior, atau material dengan tim kami.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-black/[.07] p-2.5">
          {company.whatsapp.map((item) => (
            <a key={item.number} href={`https://wa.me/${item.number}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-[18px] p-3 transition hover:bg-[#FFF5E9]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#F47A00]/20 text-[#F47A00] transition group-hover:bg-[#F47A00] group-hover:text-white"><WhatsAppIcon className="h-5 w-5" /></span>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-bold uppercase tracking-[.13em] text-black/35">{item.label}</p>
                <p className="mt-1 text-sm font-bold text-[#141414]">{item.display}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="border-t border-black/[.07] bg-[#FFF9F2] px-5 py-3 text-[9px] font-semibold uppercase tracking-[.1em] text-black/35">{company.legalName}</div>
      </div>

      <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Tutup WhatsApp" : "Buka WhatsApp"} className={`relative flex h-[56px] w-[56px] items-center justify-center rounded-full text-white shadow-[0_14px_35px_rgba(20,20,20,.24)] transition hover:-translate-y-1 ${open ? "bg-[#F47A00]" : "bg-[#141414] hover:bg-[#F47A00]"}`}>
        {open ? <CloseIcon /> : <WhatsAppIcon className="h-6 w-6" />}
      </button>
    </div>
  )
}

export default FloatingWhatsApp
