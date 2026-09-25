import { businessPillars, company } from "../data/siteData"

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
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#17120E] pt-[76px] text-white sm:pt-[84px]"
    >
      <div className="absolute inset-0 -z-30">
        <img
          src="/images/utama.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(8,8,8,.90)_0%,rgba(8,8,8,.78)_43%,rgba(17,12,8,.58)_72%,rgba(244,122,0,.24)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,.18)_0%,rgba(0,0,0,.05)_45%,rgba(0,0,0,.52)_100%)]" />
      <div className="absolute -right-28 top-16 -z-10 h-[420px] w-[420px] rounded-full bg-[#F47A00]/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-9 sm:py-12 lg:h-[calc(100svh-84px)] lg:min-h-[620px] lg:max-h-[820px] lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-12 lg:py-8">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.08] px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#F47A00]" />
              <span className="text-[9px] font-extrabold uppercase tracking-[.20em] text-white/72 sm:text-[10px]">
                {company.tagline}
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(3rem,6.4vw,6.2rem)] font-black uppercase leading-[.84] tracking-[-.06em] text-white">
              Berkah Alam
              <span className="block text-[#F47A00]">Group</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-bold leading-7 text-white sm:text-xl">
              Solusi Konstruksi, Interior & Material Bangunan Terintegrasi.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/62 sm:text-[15px] sm:leading-7">
              Dari pembangunan dan renovasi, interior-eksterior, hingga material
              dan pengadaan proyek dalam satu ekosistem usaha.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#F47A00] px-6 text-sm font-bold text-white shadow-[0_14px_34px_rgba(244,122,0,.24)] transition hover:-translate-y-0.5 hover:bg-[#ff8b17]"
              >
                Lihat Layanan
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/[.08] px-6 text-sm font-bold text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/[.13]"
              >
                Lihat Alamat
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/12 pt-5">
              <p className="text-[9px] font-bold uppercase tracking-[.16em] text-white/38">
                {company.legalName}
              </p>
              <span className="hidden h-1 w-1 rounded-full bg-[#F47A00] sm:block" />
              <p className="text-[9px] font-bold uppercase tracking-[.16em] text-white/38">
                Construction • Interior • Material • Procurement
              </p>
            </div>
          </div>

          <div
            className="animate-fade-up lg:justify-self-end"
            style={{ animationDelay: "120ms" }}
          >
            <div className="w-full max-w-[470px] rounded-[30px] border border-white/15 bg-black/28 p-5 shadow-[0_28px_80px_rgba(0,0,0,.25)] backdrop-blur-xl sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[.22em] text-[#FF9A3C]">
                    Tiga Pilar Utama
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-[-.035em] text-white sm:text-[28px]">
                    Build. Design. Supply.
                  </h2>
                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/52 sm:text-sm sm:leading-6">
                    Satu partner untuk pekerjaan, desain, material, dan kebutuhan
                    pengadaan proyek.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#F47A00]/35 bg-[#F47A00]/15 text-sm font-black text-[#FF9A3C]">
                  BA
                </div>
              </div>

              <div className="mt-5 grid gap-2.5">
                {businessPillars.map((item) => (
                  <a
                    key={item.number}
                    href="#services"
                    className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[.075] px-4 py-3.5 transition hover:border-[#F47A00]/40 hover:bg-white/[.12]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#F47A00] text-[11px] font-black text-white">
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-bold uppercase tracking-[.16em] text-white/36">
                        {item.short}
                      </p>
                      <h3 className="mt-1 text-sm font-extrabold text-white sm:text-[15px]">
                        {item.title}
                      </h3>
                    </div>

                    <span className="text-white/35 transition group-hover:translate-x-1 group-hover:text-[#FF9A3C]">
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-[18px] border border-white/10 bg-white/[.05] px-4 py-3">
                <p className="max-w-[280px] text-[11px] font-semibold leading-5 text-white/58">
                  Dari pekerjaan sampai material, satu ekosistem untuk kebutuhan proyek.
                </p>
                <span className="ml-4 h-8 w-px bg-white/10" />
                <span className="ml-4 text-[10px] font-black uppercase tracking-[.14em] text-[#FF9A3C]">
                  Integrated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
