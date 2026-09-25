import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { businessPillars, company, materialCategories } from "./data/siteData"

const processSteps = [
  { number: "01", title: "Memahami Kebutuhan", description: "Mengidentifikasi fungsi ruang, kondisi lokasi, kebutuhan pengguna, lingkup pekerjaan, dan target proyek." },
  { number: "02", title: "Merancang Solusi", description: "Menentukan pendekatan pekerjaan, pilihan material, kebutuhan teknis, serta tahapan pelaksanaan yang sesuai." },
  { number: "03", title: "Pelaksanaan", description: "Mengkoordinasikan pekerjaan, tenaga, material, pengadaan, dan kebutuhan teknis di lapangan." },
  { number: "04", title: "Penyelesaian & Evaluasi", description: "Memastikan hasil pekerjaan sesuai kebutuhan serta siap digunakan dan dikembangkan lebih lanjut." },
]

const projectScopes = [
  { title: "Hunian", description: "Pembangunan, renovasi, interior, dan finishing rumah tinggal." },
  { title: "Perkantoran", description: "Ruang kerja, kantor, fasilitas operasional, dan kebutuhan furnishing." },
  { title: "Retail & Komersial", description: "Toko, showroom, ruang usaha, dan bangunan perdagangan." },
  { title: "Fasilitas Publik", description: "Pendidikan, kesehatan, dan berbagai fasilitas non-hunian." },
  { title: "Interior & Finishing", description: "Dinding, lantai, plafon, panel dekoratif, furniture, dan finishing." },
  { title: "Pengadaan Proyek", description: "Material bangunan, material dekoratif, dan kebutuhan proyek." },
]

function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-[#F47A00]" />
        <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#F47A00] sm:text-xs">{eyebrow}</p>
      </div>
      <h2 className="mt-4 text-[32px] font-black leading-[1.02] tracking-[-.045em] text-[#141414] sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-sm leading-7 text-black/55 sm:text-base">{description}</p>}
    </div>
  )
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12.5L9.5 17L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white text-[#141414]">
        <Hero />

        <section id="about" className="scroll-mt-24 py-20 sm:py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:px-8">
            <div>
              <SectionTitle eyebrow="Tentang Kami" title="Satu Ekosistem untuk Membangun dan Menyempurnakan Ruang." description="Berkah Alam Group merupakan identitas bisnis yang dikembangkan oleh CV Berkah Alam Berkarya dengan fokus pada konstruksi, interior-eksterior, furnishing, material bangunan, dan pengadaan." />
              <div className="mt-8 rounded-[28px] border border-[#F47A00]/15 bg-[#FFF9F2] p-6 sm:p-8">
                <p className="text-lg font-extrabold leading-8 text-[#141414]">“Dari pekerjaan sampai material, satu mitra untuk kebutuhan proyek yang lebih terkoordinasi.”</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/[.08] p-6 sm:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#F47A00]">Legal Entity</p>
                <p className="mt-5 text-xl font-black">{company.legalName}</p>
                <p className="mt-3 text-sm leading-7 text-black/50">Badan usaha yang menjadi landasan operasional Berkah Alam Group.</p>
              </div>
              <div className="rounded-[28px] border border-black/[.08] bg-[#151515] p-6 text-white sm:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#FF9A3C]">Didirikan</p>
                <p className="mt-5 text-4xl font-black">2023</p>
                <p className="mt-3 text-sm leading-7 text-white/45">Akta Pendirian No. 07 tanggal 05 Oktober 2023.</p>
              </div>
              <div className="rounded-[28px] border border-black/[.08] p-6 sm:col-span-2 sm:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#F47A00]">Positioning</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {businessPillars.map((item) => (
                    <div key={item.number}>
                      <span className="text-xs font-black text-[#F47A00]">{item.number}</span>
                      <p className="mt-2 text-sm font-extrabold">{item.short}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-[#151515] py-20 text-white sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Layanan Utama" title="Konstruksi, Interior, dan Supply dalam Satu Alur Kerja." description="Tiga pilar layanan yang saling terhubung untuk membantu proyek berjalan lebih sederhana, terarah, dan efisien." />

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {businessPillars.map((item) => (
                <article key={item.number} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[.045] p-7 transition hover:-translate-y-1 hover:border-[#F47A00]/40 hover:bg-white/[.07] sm:p-8">
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#F47A00]/10 blur-2xl" />
                  <div className="relative">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F47A00] text-xs font-black text-white">{item.number}</span>
                    <p className="mt-10 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#FF9A3C]">{item.short}</p>
                    <h3 className="mt-3 text-2xl font-black tracking-[-.03em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/50">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="materials" className="scroll-mt-24 py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionTitle eyebrow="Produk & Material" title="Material untuk Berbagai Kebutuhan Desain dan Konstruksi." description="Kategori material interior, eksterior, dan finishing yang dapat mendukung kebutuhan desain serta pelaksanaan proyek." />
              <p className="max-w-sm text-xs leading-6 text-black/40">Ketersediaan seri, warna, ukuran, dan spesifikasi mengikuti kebutuhan proyek serta stok dari mitra pemasok.</p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {materialCategories.map((item, index) => (
                <article key={item.title} className="group relative min-h-[220px] overflow-hidden rounded-[28px] border border-black/[.08] bg-[#F8F8F6] p-6 transition hover:-translate-y-1 hover:border-[#F47A00]/30 hover:shadow-[0_20px_45px_rgba(20,20,20,.07)] sm:p-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#F47A00] opacity-0 transition group-hover:opacity-100" />
                  <span className="text-[10px] font-black tracking-[.18em] text-[#F47A00]">{String(index + 1).padStart(2, "0")}</span>
                  <div className="mt-12">
                    <h3 className="text-xl font-black tracking-[-.03em] text-[#141414]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/48">{item.subtitle}</p>
                  </div>
                  <div className="absolute -bottom-16 -right-14 h-36 w-36 rounded-full border-[22px] border-[#F47A00]/[.05]" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFF8F0] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
            <SectionTitle eyebrow="Mengapa Berkah Alam" title="Satu Mitra, Berbagai Kebutuhan Proyek." description="Kami menghubungkan pekerjaan konstruksi, kebutuhan interior, material, dan pengadaan agar koordinasi proyek dapat dilakukan dalam satu ekosistem." />
            <div className="grid gap-3 sm:grid-cols-2">
              {["Konstruksi & interior terintegrasi", "Akses ke berbagai material finishing", "Solusi disesuaikan dengan karakter proyek", "Koordinasi vendor dan supply lebih sederhana", "Dukungan kebutuhan pengadaan", "Fokus pada fungsi, kualitas, dan penyelesaian"].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-[18px] border border-[#F47A00]/10 bg-white p-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F47A00]/10 text-[#F47A00]">
                    <CheckIcon />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-[#242424]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Cara Kerja" title="Dari Kebutuhan Menjadi Hasil." description="Pendekatan kerja yang membantu setiap proyek bergerak dari pemahaman kebutuhan menuju pelaksanaan dan penyelesaian." centered />
            <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <article key={item.number} className="rounded-[26px] border border-black/[.08] p-6 sm:p-7">
                  <span className="text-[11px] font-black tracking-[.18em] text-[#F47A00]">{item.number}</span>
                  <h3 className="mt-8 text-lg font-black tracking-[-.02em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/48">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="scroll-mt-24 border-y border-black/[.08] bg-[#F7F7F5] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Lingkup Proyek" title="Solusi untuk Berbagai Jenis Ruang dan Kebutuhan." description="Ruang lingkup usaha CV Berkah Alam Berkarya mencakup berbagai pekerjaan bangunan, interior, finishing, dan perdagangan material pendukung." />
            <div className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
              {projectScopes.map((item, index) => (
                <div key={item.title} className="border-b border-black/[.08] py-6 sm:py-7">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-[10px] font-black text-[#F47A00]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-base font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-black/45">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-black/[.08] lg:grid lg:grid-cols-[.95fr_1.05fr]">
              <div className="bg-[#151515] p-7 text-white sm:p-10 lg:p-14">
                <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#FF9A3C]">Legal & Company</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-.04em] sm:text-4xl">CV Berkah Alam Berkarya</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">Badan usaha yang menjadi dasar operasional Berkah Alam Group.</p>
                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.16em] text-white/30">Pimpinan</p>
                    <p className="mt-2 text-sm font-bold">{company.director}</p>
                    <p className="mt-1 text-xs text-white/40">Direktur</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.16em] text-white/30">Pendirian</p>
                    <p className="mt-2 text-sm font-bold">No. 07</p>
                    <p className="mt-1 text-xs text-white/40">05 Oktober 2023</p>
                  </div>
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-14">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#F47A00]">Alamat Usaha</p>
                <p className="mt-4 max-w-lg text-base font-semibold leading-8 text-[#242424]">{company.address}</p>
                <div className="mt-9 border-t border-black/[.08] pt-7">
                  <p className="text-sm leading-7 text-black/50">Ruang lingkup usaha mencakup konstruksi, pekerjaan bangunan dan finishing, dekorasi interior-eksterior, furnitur, perdagangan bahan konstruksi, serta berbagai kebutuhan pengadaan pendukung.</p>
                </div>
                <a href={company.mapUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#141414] px-6 text-sm font-bold text-white transition hover:bg-[#F47A00]">
                  Buka Lokasi
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#F47A00] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-white/65">Mulai Proyek Anda</p>
                <h2 className="mt-4 max-w-4xl text-[38px] font-black leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">Punya rencana pembangunan, renovasi, interior, atau kebutuhan material?</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">Silakan kunjungi lokasi usaha kami atau gunakan alamat yang tersedia sebagai titik awal koordinasi kebutuhan proyek Anda.</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Konstruksi", "Renovasi", "Interior & Eksterior", "Material Bangunan", "Pengadaan"].map((item) => (
                    <span key={item} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold">{item}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-white p-6 text-[#141414] shadow-[0_24px_70px_rgba(104,45,0,.18)] sm:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#F47A00]">Alamat & Lokasi</p>
                <h3 className="mt-3 text-2xl font-black">Temukan Kami</h3>
                <p className="mt-3 text-sm leading-7 text-black/50">Untuk sementara, website diarahkan ke alamat usaha terlebih dahulu. Nomor WhatsApp dapat ditambahkan kemudian setelah siap dipublikasikan.</p>

                <div className="mt-6 rounded-[22px] border border-black/[.08] bg-[#FCFBF8] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[.16em] text-black/30">Alamat</p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#242424]">{company.address}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={company.mapUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#151515] px-6 text-sm font-bold text-white transition hover:bg-[#2A2A2A]">
                    Buka di Google Maps
                    <span className="text-[#FF9A3C] transition group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight />
                    </span>
                  </a>
                  <a href="#home" className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/10 px-6 text-sm font-bold text-[#141414] transition hover:border-[#F47A00]/40 hover:bg-[#FFF3E6]">
                    Kembali ke Atas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[.08] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-9 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Berkah Alam Group" className="h-12 w-auto object-contain" />
              <div>
                <p className="text-xs font-black uppercase tracking-[.12em]">Berkah Alam Group</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[.18em] text-[#F47A00]">{company.legalName}</p>
              </div>
            </div>
            <p className="mt-4 max-w-lg text-xs leading-6 text-black/40">{company.address}</p>
          </div>
          <div className="md:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[.13em] text-black/35">Construction • Interior • Material • Procurement</p>
            <p className="mt-3 text-[10px] text-black/25">© 2026 {company.legalName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
