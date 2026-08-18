const businessCategories = [
  {
    number: "01",
    title: "Automotive Care",
    description: "Service & Maintenance",
    href: "#services",
  },
  {
    number: "02",
    title: "Auto Detailing",
    description: "Salon & Vehicle Care",
    href: "#services",
  },
  {
    number: "03",
    title: "Sparepart",
    description: "Automotive Parts & Products",
    href: "#products",
  },
  {
    number: "04",
    title: "Partner Network",
    description: "Growing Business Network",
    href: "#network",
  },
]

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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
      className="relative isolate min-h-screen overflow-hidden bg-charcoal-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-950 to-wastu-950" />

        <div className="absolute -right-40 top-[-180px] h-[620px] w-[620px] rounded-full bg-wastu-600/20 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-wastu-800/20 blur-[130px]" />
      </div>

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-8 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
        
        {/* Main Hero */}
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
          
          {/* Left */}
          <div className="max-w-4xl">
            <div className="animate-fade-up">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-wastu-300" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                  Products • Services • Distribution • Partnership
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-up text-[clamp(3rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.065em]"
              style={{ animationDelay: "100ms" }}
            >
              Automotive
              <span className="block text-white/35">
                Solution
              </span>
              <span className="block text-wastu-300">
                & Distribution
              </span>
            </h1>

            <div
              className="mt-9 max-w-2xl animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <p className="text-lg font-medium leading-relaxed text-white/85 sm:text-xl">
                Building Automotive Business Through Products, Services &
                Partnership.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                Kami membangun ekosistem automotive melalui produk, layanan
                perawatan kendaraan, distribusi sparepart, dan jaringan mitra
                yang terus berkembang.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#about"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-charcoal-950 transition duration-300 hover:bg-wastu-300"
                >
                  Explore Our Business

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div
            className="relative hidden animate-fade-up lg:block"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative ml-auto aspect-[4/5] max-w-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl">
              
              <div className="absolute inset-0 bg-gradient-to-br from-wastu-600/20 via-transparent to-black/40" />

              <div className="absolute left-8 top-8">
                <p className="text-[10px] uppercase tracking-[0.26em] text-white/45">
                  Integrated
                </p>

                <p className="mt-1 text-xl font-semibold text-white">
                  Automotive Ecosystem
                </p>
              </div>

              {/* Abstract Automotive Element */}
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full border border-white/10">
                <div className="absolute inset-[25px] rounded-full border border-white/10" />
                <div className="absolute inset-[58px] rounded-full border border-wastu-300/40" />
                <div className="absolute inset-[92px] rounded-full bg-wastu-400/20 shadow-[0_0_70px_rgba(109,154,128,.25)]" />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px w-full bg-white/10" />

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-white/40">
                      Our Positioning
                    </p>

                    <p className="mt-1 max-w-[220px] text-sm font-medium leading-6 text-white/80">
                      More than a workshop.
                      <br />
                      More than a distributor.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-wastu-300">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business category cards */}
        <div
          className="mt-16 grid animate-fade-up border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4"
          style={{ animationDelay: "400ms" }}
        >
          {businessCategories.map((category) => (
            <a
              key={category.number}
              href={category.href}
              className="group relative min-h-[155px] border-b border-r border-white/10 p-5 transition duration-500 hover:bg-white/[0.06] sm:p-6"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-wastu-300">
                  {category.number}
                </span>

                <div className="mt-10">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                      {category.title}
                    </h2>

                    <span className="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-wastu-300">
                      <ArrowIcon />
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-white/40">
                    {category.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero