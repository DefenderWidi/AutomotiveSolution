import { useState } from "react"
import { company } from "../data/siteData"

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none" />

      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
      />
    </svg>
  )
}

function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  const whatsappMessage =
    "Halo PT Wastu Widya Wasesa, saya ingin mengetahui lebih lanjut mengenai Automotive Solution."

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-7 sm:right-7">
      {/* POPUP */}
      <div
        className={`absolute bottom-[68px] right-0 w-[calc(100vw-32px)] max-w-[310px] origin-bottom-right overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-2xl transition-all duration-300 sm:bottom-[72px] sm:rounded-3xl ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible translate-y-2 scale-95 opacity-0"
        }`}
      >
        {/* HEADER */}
        <div className="border-b border-black/10 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white sm:h-10 sm:w-10">
              <WhatsAppIcon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-black sm:text-sm">
                Hubungi Automotive Solution
              </p>

              <p className="mt-1 text-[11px] leading-5 text-black/50 sm:text-xs">
                Pilih nomor WhatsApp untuk terhubung dengan tim kami.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT LIST */}
        <div className="p-2">
          {company.whatsapp.map((item) => (
            <a
              key={item.number}
              href={`https://wa.me/${item.number}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[58px] items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-neutral-100 sm:px-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black transition group-hover:bg-black group-hover:text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium text-black/40 sm:text-[11px]">
                  {item.label}
                </p>

                <p className="mt-0.5 truncate text-[13px] font-semibold text-black sm:text-sm">
                  {item.display}
                </p>
              </div>

              <span className="shrink-0 text-sm text-black/25 transition group-hover:text-black">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={
          open ? "Close WhatsApp contact" : "Open WhatsApp contact"
        }
        aria-expanded={open}
        className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-full bg-black text-white shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition duration-300 hover:scale-105 hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-black/10 sm:h-14 sm:w-14"
      >
        {open ? (
          <span className="text-2xl font-light leading-none">×</span>
        ) : (
          <WhatsAppIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}

export default FloatingWhatsApp