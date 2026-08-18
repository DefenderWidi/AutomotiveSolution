import { useEffect, useState } from "react"
import { company } from "../data/siteData"

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
      />
    </svg>
  )
}

/* =========================================================
   ARROW UP RIGHT SVG
========================================================= */

function ArrowUpRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* =========================================================
   CLOSE SVG
========================================================= */

function CloseIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* =========================================================
   FLOATING WHATSAPP
========================================================= */

function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  const whatsappMessage =
    "Halo PT Wastu Widya Wasesa, saya ingin mengetahui lebih lanjut mengenai Automotive Solution."

  /* ESC TO CLOSE */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-7 sm:right-7">
      {/* =====================================================
          POPUP
      ===================================================== */}

      <div
        className={`absolute bottom-[66px] right-0 w-[calc(100vw-32px)] max-w-[330px] origin-bottom-right overflow-hidden rounded-[24px] border border-[#CBD1D8]/80 bg-white shadow-[0_24px_70px_rgba(31,35,41,0.18)] transition-all duration-300 sm:bottom-[74px] sm:rounded-[28px] ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible translate-y-3 scale-[0.96] opacity-0"
        }`}
      >
        {/* subtle top accent */}

        <div className="h-[3px] w-full bg-gradient-to-r from-[#1F2329] via-[#365C7D] to-[#B8BEC7]" />

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="relative overflow-hidden border-b border-[#CBD1D8]/60 bg-gradient-to-br from-[#F8FAFB] to-white p-4 sm:p-5">
          {/* decoration */}

          <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full border border-[#365C7D]/10" />

          <div className="pointer-events-none absolute -right-3 -top-4 h-16 w-16 rounded-full border border-[#365C7D]/10" />

          <div className="relative flex items-start gap-3.5">
            {/* icon */}

            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#1F2329] text-white shadow-[0_8px_20px_rgba(31,35,41,0.15)]">
              <WhatsAppIcon className="block h-[22px] w-[22px]" />

              {/* online indicator */}

              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-[#365C7D]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold tracking-[-0.01em] text-[#1F2329] sm:text-sm">
                Hubungi Automotive Solution
              </p>

              <p className="mt-1 text-[11px] leading-5 text-black/45 sm:text-xs">
                Pilih kontak WhatsApp untuk terhubung dengan tim kami.
              </p>

              <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#365C7D]/[0.07] px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#365C7D]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#365C7D]">
                  Automotive Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            CONTACT LIST
        ================================================= */}

        <div className="bg-white p-2.5">
          {company.whatsapp.map((item) => (
            <a
              key={item.number}
              href={`https://wa.me/${item.number}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-[66px] items-center gap-3 overflow-hidden rounded-[18px] px-3 py-3 transition duration-300 hover:bg-[#F5F7F9] sm:px-4"
            >
              {/* hover decoration */}

              <div className="pointer-events-none absolute -right-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-[#365C7D]/0 blur-xl transition duration-300 group-hover:bg-[#365C7D]/10" />

              {/* icon */}

              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#CBD1D8] bg-white text-[#365C7D] transition duration-300 group-hover:border-[#365C7D] group-hover:bg-[#365C7D] group-hover:text-white">
                <WhatsAppIcon className="block h-5 w-5" />
              </div>

              {/* text */}

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-black/35 sm:text-[10px]">
                    {item.label}
                  </p>

                  <span className="h-1 w-1 rounded-full bg-[#B8BEC7]" />

                  <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#365C7D]/60">
                    Contact
                  </span>
                </div>

                <p className="mt-1 truncate text-[13px] font-semibold tracking-[-0.01em] text-[#1F2329] sm:text-sm">
                  {item.display}
                </p>
              </div>

              {/* pure SVG arrow */}

              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#365C7D]/35 transition duration-300 group-hover:bg-[#365C7D]/10 group-hover:text-[#365C7D]">
                <ArrowUpRightIcon className="block h-4 w-4" />
              </span>
            </a>
          ))}
        </div>

        {/* =================================================
            POPUP FOOTER
        ================================================= */}

        <div className="flex items-center justify-between border-t border-[#CBD1D8]/60 bg-[#F8F9FA] px-4 py-3">
          <p className="text-[9px] text-black/30">
            PT Wastu Widya Wasesa
          </p>

          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#365C7D]/60">
            Automotive Solution
          </p>
        </div>
      </div>

      {/* =====================================================
          FLOATING BUTTON
      ===================================================== */}

      <div className="relative flex items-center justify-center">
        {/* outer pulse/ring */}

        {!open && (
          <span className="pointer-events-none absolute h-[62px] w-[62px] rounded-full border border-[#365C7D]/15 sm:h-[66px] sm:w-[66px]" />
        )}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={
            open
              ? "Close WhatsApp contact"
              : "Open WhatsApp contact"
          }
          aria-expanded={open}
          className={`relative flex h-[54px] w-[54px] items-center justify-center rounded-full text-white shadow-[0_14px_35px_rgba(31,35,41,0.24)] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#365C7D]/15 sm:h-[58px] sm:w-[58px] ${
            open
              ? "rotate-0 bg-[#365C7D]"
              : "bg-[#1F2329] hover:-translate-y-1 hover:bg-[#365C7D]"
          }`}
        >
          {/* subtle inner highlight */}

          <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/10" />

          <span
            className={`relative transition-all duration-300 ${
              open ? "rotate-90" : "rotate-0"
            }`}
          >
            {open ? (
              <CloseIcon className="block h-6 w-6" />
            ) : (
              <WhatsAppIcon className="block h-[25px] w-[25px]" />
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

export default FloatingWhatsApp