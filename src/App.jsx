import Navbar from "./components/Navbar"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import { company } from "./data/siteData"

/* =========================================================
   HOMEPAGE MAIN CATEGORIES
========================================================= */

const mainCategories = [
  {
    number: "01",
    title: "Automotive Care",
    subtitle: "Service & Maintenance",
    description:
      "Perawatan dan perbaikan kendaraan untuk mendukung performa, kenyamanan, dan keamanan.",
  },
  {
    number: "02",
    title: "Auto Detailing",
    subtitle: "Salon & Vehicle Care",
    description:
      "Perawatan eksterior dan interior kendaraan untuk menjaga tampilan dan kondisi kendaraan.",
  },
  {
    number: "03",
    title: "Sparepart",
    subtitle: "Automotive Parts & Products",
    description:
      "Penyediaan sparepart dan berbagai produk pendukung kebutuhan automotive.",
  },
  {
    number: "04",
    title: "Partner Network",
    subtitle: "Growing Business Network",
    description:
      "Jaringan bisnis yang terus berkembang melalui kolaborasi dengan berbagai pelaku usaha automotive.",
  },
]

/* =========================================================
   AUTOMOTIVE SERVICE
========================================================= */

const automotiveServices = [
  "Periodic Service",
  "General Repair",
  "Maintenance",
  "Engine & Mechanical Service",
  "Electrical Service",
]

/* =========================================================
   DETAILING
========================================================= */

const detailingServices = [
  "Car Wash",
  "Detailing",
  "Polishing",
  "Coating",
  "Interior Treatment",
  "Paint Treatment",
]

/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const productCategories = [
  "Tires",
  "Battery",
  "Filter",
  "Brake Pads",
  "Disc Brake",
  "Wiper",
  "Suspension",
  "Coil",
  "Radiator",
  "Air Conditioning",
  "Chemical",
  "Oil & Lubricant",
]

/* =========================================================
   DISTRIBUTION FLOW
========================================================= */

const distributionFlow = [
  {
    number: "01",
    title: "Supplier",
    description: "Products & Brands",
  },
  {
    number: "02",
    title: "Distributor",
    description: "Distribution Channel",
  },
  {
    number: "03",
    title: "Partner",
    description: "Business Network",
  },
  {
    number: "04",
    title: "Workshop",
    description: "Automotive Workshop",
  },
  {
    number: "05",
    title: "Customer",
    description: "End Customer",
  },
]

/* =========================================================
   WHY PARTNER WITH US
========================================================= */

const partnerBenefits = [
  "Competitive Pricing",
  "Product Availability",
  "Various Product Categories",
  "Fast Order Fulfillment",
  "Business Support",
  "Growing Partner Network",
]

/* =========================================================
   PARTNER NETWORK
========================================================= */

const partnerNetwork = [
  {
    number: "01",
    title: "Bengkel Mitra",
    label: "Automotive Workshop",
    description:
      "Kolaborasi dengan bengkel automotive untuk mendukung kebutuhan service dan supply produk.",
  },
  {
    number: "02",
    title: "Reseller",
    label: "Product Reseller",
    description:
      "Partner penjualan produk automotive untuk memperluas jangkauan pasar.",
  },
  {
    number: "03",
    title: "Stockist",
    label: "Local Stockist",
    description:
      "Jaringan stockist untuk mendukung ketersediaan produk pada area tertentu.",
  },
  {
    number: "04",
    title: "Agen / Distributor",
    label: "Distribution Partner",
    description:
      "Partner distribusi untuk memperluas jangkauan supply dan akses produk.",
  },
  {
    number: "05",
    title: "Logistics Partner",
    label: "Delivery & Logistics",
    description:
      "Kolaborasi logistik untuk mendukung proses pemenuhan dan distribusi produk.",
  },
  {
    number: "06",
    title: "Service & Automotive Partner",
    label: "Automotive Service Partner",
    description:
      "Kolaborasi dengan berbagai pelaku layanan automotive untuk pengembangan bisnis bersama.",
  },
]

/* =========================================================
   BUSINESS OPPORTUNITIES
========================================================= */

const opportunities = [
  {
    number: "01",
    title: "Workshop Partner",
    description:
      "Untuk bengkel yang membutuhkan akses produk dan supply sparepart.",
  },
  {
    number: "02",
    title: "Reseller Partner",
    description:
      "Untuk pelaku usaha yang ingin menjual produk automotive.",
  },
  {
    number: "03",
    title: "Stockist Partner",
    description:
      "Untuk pengembangan titik distribusi di area tertentu.",
  },
  {
    number: "04",
    title: "Distribution Partner",
    description:
      "Untuk memperluas jaringan distribusi produk.",
  },
  {
    number: "05",
    title: "Service & Automotive Partner",
    description:
      "Untuk pengembangan layanan automotive bersama.",
  },
]

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-7 bg-[#365C7D]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#365C7D] sm:text-xs sm:tracking-[0.22em]">
            {eyebrow}
          </p>
        </div>
      )}

      <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1F2329] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[14px] leading-7 text-black/55 sm:mt-5 sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}

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

/* =========================================================
   APP
========================================================= */

function App() {
  const whatsappMessage =
    "Halo PT Wastu Widya Wasesa, saya ingin mengetahui lebih lanjut mengenai Automotive Solution."

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-black">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          id="home"
          className="relative scroll-mt-20 pt-28 sm:scroll-mt-24 sm:pt-36"
        >
          <div className="pointer-events-none absolute left-0 top-32 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#365C7D]/5 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
              {/* HERO TEXT */}
              <div>
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#365C7D]/20 bg-[#365C7D]/5 px-3.5 py-2 sm:px-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#365C7D]" />

                  <p className="truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-[#365C7D] min-[390px]:text-[10px] sm:text-[11px] sm:tracking-[0.18em]">
                    {company.legalName}
                  </p>
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#365C7D]">
                  Automotive Solution & Distribution
                </p>

                <h1 className="mt-3 max-w-3xl text-[40px] font-bold leading-[0.98] tracking-[-0.05em] text-[#1F2329] min-[390px]:text-[44px] sm:text-6xl lg:text-[68px] xl:text-[74px]">
                  Building automotive business through products, services &
                  partnership.
                </h1>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-black/60 sm:mt-7 sm:text-lg sm:leading-8">
                  Kami membangun ekosistem automotive melalui penyediaan
                  produk, layanan perawatan kendaraan, distribusi sparepart,
                  serta jaringan mitra yang terus berkembang.
                </p>

                <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center">
                  <a
                    href="#services"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#1F2329] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#365C7D]"
                  >
                    Explore Our Business

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#1F2329]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2329] transition duration-300 hover:border-[#365C7D]/30 hover:bg-[#F5F7F9]"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* HERO AUTOMOTIVE VISUAL */}
              <div className="relative">
                <div className="absolute -right-16 top-12 h-48 w-48 rounded-full bg-[#365C7D]/10 blur-[80px]" />

                <div className="relative overflow-hidden rounded-[28px] border border-[#CBD1D8] bg-gradient-to-br from-[#F8F9FA] via-[#F3F5F7] to-[#E9EDF1] shadow-[0_25px_80px_rgba(31,35,41,0.10)] sm:rounded-[34px]">
                  <div className="relative z-20 flex items-start justify-between gap-4 px-5 pt-5 sm:px-7 sm:pt-7 lg:px-8 lg:pt-8">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#365C7D] sm:text-xs">
                        Automotive Solution
                      </p>

                      <h3 className="mt-2 max-w-xs text-xl font-semibold leading-tight tracking-[-0.025em] text-[#1F2329] sm:text-2xl">
                        Products. Services. Distribution.
                      </h3>
                    </div>

                    <span className="rounded-full border border-[#365C7D]/15 bg-white/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#365C7D] backdrop-blur sm:text-[10px]">
                      Wastu
                    </span>
                  </div>

                  <div className="relative mt-4 min-h-[285px] sm:min-h-[350px] lg:min-h-[390px]">
                    <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#365C7D]/10 sm:h-[290px] sm:w-[290px]">
                      <div className="absolute inset-6 rounded-full border border-[#365C7D]/10" />
                      <div className="absolute inset-14 rounded-full border border-[#365C7D]/10" />
                    </div>

                    <div className="absolute bottom-[68px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#365C7D]/25 to-transparent" />

                    <img
                      src="/images/car-hero.png"
                      alt="Automotive Solution vehicle"
                      className="absolute left-1/2 top-1/2 z-10 w-[88%] max-w-[560px] -translate-x-1/2 -translate-y-[43%] object-contain drop-shadow-[0_30px_25px_rgba(0,0,0,0.16)] sm:w-[92%]"
                    />

                    <div className="absolute bottom-[55px] left-1/2 h-7 w-[62%] -translate-x-1/2 rounded-[100%] bg-black/10 blur-xl" />
                  </div>

                  <div className="relative z-20 grid border-t border-[#CBD1D8]/70 bg-white/60 backdrop-blur sm:grid-cols-3">
                    {[
                      {
                        label: "Service",
                        value: "Vehicle Care",
                      },
                      {
                        label: "Products",
                        value: "Sparepart Supply",
                      },
                      {
                        label: "Network",
                        value: "Partner Growth",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className={`px-5 py-4 ${
                          index !== 2
                            ? "border-b border-[#CBD1D8]/70 sm:border-b-0 sm:border-r"
                            : ""
                        }`}
                      >
                        <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#365C7D]/70">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#1F2329]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN BUSINESS CATEGORIES */}
            <div className="mt-14 grid gap-3 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {mainCategories.map((item) => (
                <article
                  key={item.number}
                  className="group rounded-[22px] border border-[#CBD1D8] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#365C7D]/30 hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold text-[#365C7D]">
                      {item.number}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#CBD1D8] text-[#365C7D]/50 transition group-hover:border-[#365C7D] group-hover:bg-[#365C7D] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <h2 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-[#1F2329]">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#365C7D]">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-[13px] leading-6 text-black/50">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section
          id="about"
          className="scroll-mt-20 py-20 sm:scroll-mt-24 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
              <SectionHeading
                eyebrow="About Us"
                title="Tentang Automotive Solution."
                description="Solusi automotive yang menggabungkan produk, layanan, distribusi, dan pengembangan jaringan mitra."
              />

              <div className="space-y-5 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                <p>
                  <strong className="font-semibold text-[#1F2329]">
                    {company.legalName}
                  </strong>{" "}
                  merupakan perusahaan yang bergerak dalam bidang automotive
                  solution dengan fokus pada penyediaan produk, layanan
                  perawatan kendaraan, distribusi sparepart, serta
                  pengembangan jaringan mitra.
                </p>

                <p>
                  Kami mengembangkan bisnis melalui kombinasi antara
                  automotive service, auto care, sparepart distribution, dan
                  partnership network untuk menciptakan solusi automotive
                  yang lebih mudah diakses oleh konsumen maupun pelaku usaha.
                </p>

                <p>
                  Dengan membangun jaringan mitra secara berkelanjutan, kami
                  berkomitmen menyediakan solusi yang praktis, kompetitif,
                  dan dapat berkembang sesuai kebutuhan pasar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <section
          id="services"
          className="scroll-mt-20 bg-[#F6F7F8] py-20 sm:scroll-mt-24 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Services"
              title="Automotive service and vehicle care."
              description="Layanan perawatan, perbaikan, detailing, serta car salon untuk menjaga performa dan kondisi kendaraan."
              centered
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {/* AUTOMOTIVE SERVICE */}
              <article className="rounded-[26px] border border-[#CBD1D8] bg-white p-5 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#365C7D]">
                      01 / Automotive Service
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1F2329]">
                      Service & Maintenance
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-black/55">
                      Layanan perawatan dan perbaikan kendaraan untuk menjaga
                      performa, kenyamanan, dan keamanan kendaraan.
                    </p>
                  </div>

                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#365C7D]/8 text-[#365C7D] sm:flex">
                    01
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {automotiveServices.map((item, index) => (
                    <div
                      key={item}
                      className="flex min-h-[60px] items-center gap-4 rounded-2xl border border-[#CBD1D8] px-4 py-3"
                    >
                      <span className="text-[10px] text-[#365C7D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm font-semibold text-[#1F2329]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* AUTO DETAILING */}
              <article className="rounded-[26px] border border-[#CBD1D8] bg-white p-5 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#365C7D]">
                      02 / Auto Detailing
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1F2329]">
                      Auto Detailing & Car Salon
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-black/55">
                      Layanan perawatan eksterior dan interior kendaraan
                      untuk menjaga tampilan dan kondisi kendaraan.
                    </p>
                  </div>

                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#365C7D]/8 text-[#365C7D] sm:flex">
                    02
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {detailingServices.map((item, index) => (
                    <div
                      key={item}
                      className="flex min-h-[60px] items-center gap-4 rounded-2xl border border-[#CBD1D8] px-4 py-3"
                    >
                      <span className="text-[10px] text-[#365C7D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm font-semibold text-[#1F2329]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCTS + DISTRIBUTION
        ===================================================== */}
        <section
          id="products"
          className="scroll-mt-20 py-20 sm:scroll-mt-24 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <SectionHeading
                eyebrow="Products"
                title="Sparepart & automotive products."
                description="Penyediaan berbagai kebutuhan sparepart dan produk pendukung automotive."
              />

              <p className="max-w-lg text-sm leading-7 text-black/50 lg:ml-auto">
                Kategori produk dapat terus dikembangkan sesuai kebutuhan
                market, ketersediaan produk, serta jaringan distribusi.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {productCategories.map((item, index) => (
                <div
                  key={item}
                  className="group flex min-h-[64px] items-center justify-between rounded-2xl border border-[#CBD1D8] bg-white px-4 py-4 transition duration-300 hover:border-[#365C7D]/30 hover:bg-[#F6F8FA] sm:px-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium text-[#365C7D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[13px] font-semibold text-[#1F2329] sm:text-sm">
                      {item}
                    </p>
                  </div>

                  <span className="text-[#365C7D]/35 transition group-hover:text-[#365C7D]">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            {/* SPAREPART DISTRIBUTION */}
            <div className="relative mt-14 overflow-hidden rounded-[26px] bg-[#1F2329] p-6 text-white sm:rounded-[32px] sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/5" />
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/5" />

              <div className="relative">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9CB6CD] sm:text-xs">
                      Sparepart Distribution
                    </p>

                    <h3 className="mt-4 max-w-lg text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                      Distribution supported by a growing partner network.
                    </h3>
                  </div>

                  <p className="max-w-lg text-sm leading-7 text-white/55 lg:ml-auto">
                    Menyediakan kebutuhan sparepart automotive melalui
                    jaringan distribusi dan mitra yang terus berkembang.
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {distributionFlow.map((item, index) => (
                    <div key={item.number} className="relative">
                      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                        <p className="text-[10px] text-[#9CB6CD]">
                          {item.number}
                        </p>

                        <p className="mt-6 text-sm font-semibold">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-white/45">
                          {item.description}
                        </p>
                      </div>

                      {index !== distributionFlow.length - 1 && (
                        <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[#9CB6CD] lg:block">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* WHY PARTNER WITH US */}
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9CB6CD]">
                    Why Partner With Us?
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {partnerBenefits.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9CB6CD]/15 text-[10px] text-[#9CB6CD]">
                          ✓
                        </span>

                        <p className="text-xs font-medium text-white/70">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PARTNER NETWORK
        ===================================================== */}
        <section
          id="network"
          className="scroll-mt-20 bg-[#F6F7F8] py-20 sm:scroll-mt-24 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Partner Network"
              title="Growing together with our partners."
              description="Kami membangun jaringan bisnis yang terus berkembang melalui kolaborasi dengan berbagai pelaku usaha automotive."
              centered
            />

            <div className="mt-12 grid gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
              {partnerNetwork.map((partner) => (
                <article
                  key={partner.number}
                  className="group min-h-[220px] rounded-[22px] border border-[#CBD1D8] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#365C7D]/30 hover:shadow-lg sm:rounded-3xl sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-medium text-[#365C7D]">
                      {partner.number}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#CBD1D8] text-[#365C7D]/60 transition group-hover:border-[#365C7D] group-hover:bg-[#365C7D] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="mt-9">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1F2329]">
                      {partner.title}
                    </h3>

                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#365C7D]">
                      {partner.label}
                    </p>

                    <p className="mt-4 text-[13px] leading-6 text-black/50 sm:text-sm">
                      {partner.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-black/50">
              Jaringan mitra kami terus berkembang seiring dengan perluasan
              area distribusi dan kebutuhan pasar.
            </p>
          </div>
        </section>

        {/* =====================================================
            BUSINESS OPPORTUNITY
        ===================================================== */}
        <section
          id="opportunity"
          className="scroll-mt-20 py-20 sm:scroll-mt-24 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[26px] border border-[#CBD1D8] bg-white p-5 sm:rounded-[32px] sm:p-8 lg:p-10">
              <SectionHeading
                eyebrow="Business Opportunity"
                title="Grow with us."
                description="Kami terbuka untuk membangun kerja sama dengan pelaku usaha automotive dan partner lokal di berbagai wilayah."
              />

              <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                {opportunities.map((item) => (
                  <article
                    key={item.number}
                    className="rounded-2xl border border-[#CBD1D8] bg-[#F8F9FA] p-5"
                  >
                    <p className="text-[10px] font-medium text-[#365C7D]">
                      {item.number}
                    </p>

                    <h3 className="mt-6 text-sm font-semibold text-[#1F2329]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-black/50">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#1F2329] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#365C7D] sm:w-auto"
                >
                  Interested in Working With Us?

                  <span className="transition group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section
          id="contact"
          className="scroll-mt-20 pb-20 sm:scroll-mt-24 sm:pb-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[26px] bg-[#1F2329] text-white sm:rounded-[32px]">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-10 lg:p-14">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9CB6CD] sm:text-xs">
                    Let&apos;s Connect
                  </p>

                  <h2 className="mt-4 max-w-xl text-[30px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    Let&apos;s build automotive opportunities together.
                  </h2>

                  <p className="mt-5 max-w-xl text-[13px] leading-6 text-white/55 sm:text-base sm:leading-7">
                    Hubungi kami untuk kebutuhan Automotive Solution,
                    layanan, distribusi, maupun peluang kolaborasi bisnis.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {company.whatsapp.map((item) => (
                      <a
                        key={item.number}
                        href={`https://wa.me/${item.number}?text=${encodeURIComponent(
                          whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1F2329] transition hover:bg-[#DDE3E8] sm:w-auto"
                      >
                        {item.display}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 bg-white/[0.05] p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
                  <div className="mb-8">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9CB6CD] sm:text-[10px]">
                      Company
                    </p>

                    <p className="mt-2 text-base font-semibold text-white">
                      {company.legalName}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9CB6CD] sm:text-[10px]">
                      Business
                    </p>

                    <p className="mt-2 text-base text-white/70">
                      {company.businessName}
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9CB6CD] sm:text-[10px]">
                      Address
                    </p>

                    <p className="mt-2 max-w-sm text-sm leading-7 text-white/65">
                      {company.address}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9CB6CD] sm:text-[10px]">
                      WhatsApp
                    </p>

                    <div className="mt-2 space-y-2">
                      {company.whatsapp.map((item) => (
                        <a
                          key={item.number}
                          href={`https://wa.me/${item.number}?text=${encodeURIComponent(
                            whatsappMessage
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-sm text-white/65 transition hover:text-white"
                        >
                          {item.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-[#CBD1D8] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1F2329] text-xs font-bold text-[#1F2329]">
                  W
                </div>

                <div>
                  <p className="text-sm font-bold tracking-[0.14em] text-[#1F2329]">
                    WASTU
                  </p>

                  <p className="text-[8px] tracking-[0.12em] text-[#365C7D] sm:text-[9px]">
                    AUTOMOTIVE SOLUTION
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-md text-[11px] leading-5 text-black/45 sm:text-xs">
                {company.legalName}
                <br />
                {company.address}
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-[11px] text-black/40 sm:text-xs">
                Products • Services • Distribution • Partnership
              </p>

              <p className="mt-2 text-[10px] text-black/30 sm:text-xs">
                © 2026 {company.legalName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </>
  )
}

export default App