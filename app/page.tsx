"use client";
import { Bowlby_One_SC, DM_Sans, Cutive_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Bowlby_One_SC({ subsets: ["latin"], weight: ["400"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = Cutive_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

const UBE = "#6D28D9";
const UBE_DARK = "#3B0764";
const MANGO = "#FBBF24";
const BAMBOO = "#65A30D";
const IVORY = "#FFFBEB";
const INK = "#1C1917";
const MUTED = "#78716C";

const HERO_PHOTO = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1800&q=80&auto=format&fit=crop";
const SHOP_PHOTO = "https://images.unsplash.com/photo-1559847844-d9e6e1d61d4f?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`} style={{ backgroundColor: IVORY, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .display-text { font-family: var(--font-display); }
        .mono-text { font-family: var(--font-mono); }
        .wiggle { animation: wiggle 4s ease-in-out infinite; }
        .blob { border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%; }
        .blob-2 { border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%; }
        .dot-grid { background-image: radial-gradient(${UBE}33 1.5px, transparent 1.5px); background-size: 28px 28px; }
      `}</style>

      <header className="border-b-2" style={{ borderColor: INK, backgroundColor: IVORY }}>
        <div className="text-center py-2.5 mono-text text-[10px] uppercase tracking-[0.4em] font-bold" style={{ backgroundColor: MANGO, color: UBE_DARK }}>
          GLENDALE · W WINDSOR ROAD · LUNCH & DINNER · MON THRU FRI
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="display-text text-3xl leading-none" style={{ color: UBE_DARK }}>TASTE OF WINDSOR</div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm font-bold uppercase tracking-wider">
            <a href="#about" style={{ color: INK }}>The Kitchen</a>
            <a href="#menu" style={{ color: INK }}>Menu</a>
            <a href="#reviews" style={{ color: INK }}>Reviews</a>
            <a href="#visit" style={{ color: INK }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-5 py-2.5 text-base" style={{ backgroundColor: UBE, color: IVORY }}>CALL</a>
        </nav>
      </header>

      <section className="relative py-20 border-b-2 dot-grid" style={{ borderColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-6 inline-block px-3 py-1.5 font-bold" style={{ backgroundColor: BAMBOO, color: IVORY }}>{c.hero.eyebrow}</div>
            <h1 className="display-text text-6xl md:text-9xl leading-[0.88] mb-8" style={{ color: UBE_DARK }}>
              {c.hero.heading.toUpperCase()}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: INK }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text px-10 py-4 text-xl inline-flex items-center gap-3" style={{ backgroundColor: UBE, color: IVORY }}>
                {c.hero.ctaText.toUpperCase()} →
              </a>
              <div className="text-sm">
                <div className="font-bold mb-1" style={{ color: INK }}>★ 4.4 · 27 REVIEWS</div>
                <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: BAMBOO }}>SINCE 2018 · W WINDSOR RD</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 fade-up delay-2 relative">
            <div className="blob overflow-hidden border-4" style={{ borderColor: UBE_DARK, aspectRatio: "1/1" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            <div className="absolute -top-6 -right-6 blob-2 w-32 h-32 flex flex-col items-center justify-center text-center wiggle" style={{ backgroundColor: MANGO, color: UBE_DARK }}>
              <div className="display-text text-2xl leading-tight">MADE TO</div>
              <div className="display-text text-2xl leading-tight">ORDER</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b-2" style={{ borderColor: INK, backgroundColor: BAMBOO }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="blob overflow-hidden border-4" style={{ borderColor: IVORY, aspectRatio: "4/5" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${SHOP_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3 font-bold inline-block px-3 py-1.5" style={{ backgroundColor: MANGO, color: UBE_DARK }}>{c.about.label}</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[1.0] mb-8" style={{ color: IVORY }}>{c.about.heading.toUpperCase()}</h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: IVORY }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 border-b-2" style={{ borderColor: INK, backgroundColor: IVORY }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3 font-bold inline-block px-3 py-1.5" style={{ backgroundColor: UBE, color: IVORY }}>THE MENU</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95]" style={{ color: UBE_DARK }}>HOUSE FAVORITES.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.map((s: any, i: number) => {
              const colors = [UBE, BAMBOO, MANGO];
              const cardColor = colors[i % 3];
              const textColor = i % 3 === 2 ? UBE_DARK : IVORY;
              return (
                <article key={i} className="p-7 border-4 flex flex-col h-full" style={{ borderColor: INK, backgroundColor: cardColor }}>
                  <div className="display-text text-7xl leading-none mb-4" style={{ color: textColor, opacity: 0.6 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="display-text text-2xl mb-4 leading-tight" style={{ color: textColor }}>{s.title.toUpperCase()}</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: textColor, opacity: 0.92 }}>{s.description}</p>
                  <div className="display-text text-2xl pt-3" style={{ color: textColor, borderTop: `2px solid ${textColor}` }}>{s.price}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b-2" style={{ borderColor: INK, backgroundColor: UBE_DARK }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3 font-bold inline-block px-3 py-1.5" style={{ backgroundColor: MANGO, color: UBE_DARK }}>FROM THE TABLE</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95]" style={{ color: MANGO }}>WHAT THEY SAY.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-7 border-4 flex flex-col h-full" style={{ backgroundColor: IVORY, borderColor: MANGO }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: UBE, fontSize: 22 }}>★</span>)}
                  </div>
                  <div className="display-text text-2xl" style={{ color: BAMBOO }}>0{i + 1}</div>
                </div>
                <blockquote className="text-base leading-relaxed mb-6 flex-grow" style={{ color: INK }}>"{r.text}"</blockquote>
                <figcaption className="pt-4" style={{ borderTop: `2px solid ${UBE}` }}>
                  <div className="display-text text-2xl leading-tight" style={{ color: UBE_DARK }}>{r.name.toUpperCase()}</div>
                  <div className="mono-text text-[10px] uppercase tracking-widest mt-1" style={{ color: BAMBOO }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: MANGO }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-4 font-bold inline-block px-3 py-1.5" style={{ backgroundColor: UBE, color: IVORY }}>VISIT US</div>
            <h2 className="display-text text-6xl md:text-8xl leading-[0.9] mb-8" style={{ color: UBE_DARK }}>COME EAT.</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: INK }}>On West Windsor Road just south of Colorado Street. Open weekdays for lunch and dinner, closed on weekends — we cook for our families on Saturday and Sunday.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1 font-bold" style={{ color: UBE_DARK }}>ADDRESS</dt>
                <dd className="text-xl font-semibold" style={{ color: INK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1 font-bold" style={{ color: UBE_DARK }}>CALL</dt>
                <dd className="display-text text-4xl"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: UBE }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-2 font-bold" style={{ color: UBE_DARK }}>HOURS</dt>
                <dd>
                  <table className="text-sm" style={{ color: INK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-bold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="blob overflow-hidden border-4" style={{ borderColor: UBE_DARK, minHeight: 420 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: UBE_DARK, color: IVORY }}>
        <div className="display-text text-4xl mb-2" style={{ color: MANGO }}>TASTE OF WINDSOR</div>
        <div className="mono-text text-xs uppercase tracking-[0.4em] opacity-80">W WINDSOR ROAD · GLENDALE · SINCE 2018</div>
        <div className="mono-text text-xs uppercase tracking-[0.35em] mt-4 opacity-60">© {new Date().getFullYear()} TASTE OF WINDSOR · GLENDALE, CA</div>
      </footer>
    </main>
  );
}
