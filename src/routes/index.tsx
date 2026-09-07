import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useMemo } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import logoAsset from "@/assets/logo-renato.jpg.asset.json";
import renatoPhotoAsset from "@/assets/renato-foto.png.asset.json";
import {
  MessageCircle, Heart, Instagram, Facebook, Youtube, Music2,
  MapPin, Calendar, ChevronRight, ChevronDown, Flame, ShieldCheck,
  Landmark, Drum, Sprout, Users, HandHeart, HomeIcon, Brain,
  GraduationCap, Sparkles, Quote, ArrowRight, ArrowUp, X, Menu,
  Plus, CheckCircle2, PlayCircle, Star, Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renato Fonseca — Pré-candidato a Deputado Federal por Pernambuco" },
      { name: "description", content: "Renato Fonseca: juremeiro há 22 anos, fundador da Macumba Ordinária e pré-candidato a Deputado Federal. Cultura, dignidade e oportunidades para Pernambuco." },
      { name: "keywords", content: "Renato Fonseca, Deputado Federal, Pernambuco, Macumba Ordinária, cultura popular, religiões de matriz africana, terreiros, Jurema Sagrada" },
      { name: "author", content: "Renato Fonseca" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#1f4a2c" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Renato Fonseca" },
      { property: "og:title", content: "Renato Fonseca — Da rua à luta" },
      { property: "og:description", content: "Cultura, dignidade e oportunidades para Pernambuco. Conheça o pré-candidato a Deputado Federal." },
      { property: "og:image", content: renatoPhotoAsset.url },
      { property: "og:url", content: "https://renatofonseca.com.br/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Renato Fonseca — Da rua à luta" },
      { name: "twitter:description", content: "Pré-candidato a Deputado Federal por Pernambuco." },
      { name: "twitter:image", content: renatoPhotoAsset.url },
    ],
    links: [
      { rel: "canonical", href: "https://renatofonseca.com.br/" },
    ],
  }),
  component: Index,
});

const logoImage = logoAsset.url;
const heroImage = renatoPhotoAsset.url;

const WHATSAPP_URL = "https://wa.me/5581000000000";
const INSTAGRAM_URL = "https://instagram.com/renatofonsecape";
const FACEBOOK_URL = "https://facebook.com/renatofonsecape";
const YOUTUBE_URL = "https://youtube.com/@renatofonsecape";
const TIKTOK_URL = "https://tiktok.com/@renatofonsecape";
const VAQUINHA_URL = "https://queroapoiar.com.br/renato-fonseca";

const NAV_LINKS = [
  { label: "História", href: "#quem" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Movimento", href: "#macumba" },
  { label: "Bandeiras", href: "#bandeiras" },
  { label: "Propostas", href: "#propostas" },
  { label: "Agenda", href: "#agenda" },
  { label: "Galeria", href: "#galeria" },
  { label: "Faça Parte", href: "#participe" },
];

/* =================================================================== */
/* Hooks                                                                */
/* =================================================================== */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: { children: React.ReactNode; as?: any; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

function useCountUp(target: number, duration = 1500, startWhen = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!startWhen) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.floor(target * (0.5 - Math.cos(Math.PI * p) / 2)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, startWhen]);
  return val;
}

/* =================================================================== */
/* Index                                                                */
/* =================================================================== */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster richColors position="top-center" />
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Timeline />
        <MacumbaOrdinaria />
        <Bandeiras />
        <Propostas />
        <Agenda />
        <Galeria />
        <Depoimentos />
        <MapaPE />
        <FacaParte />
        <RedesSociais />
        <Apoio />
      </main>
      <Footer />
      <FixedWhatsApp />
      <BackToTop />
      <StructuredData />
    </div>
  );
}

function SkipLink() {
  return (
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-[var(--brand-green-deep)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground">
      Pular para o conteúdo
    </a>
  );
}

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Renato Fonseca",
    jobTitle: "Pré-candidato a Deputado Federal",
    description: "Juremeiro há 22 anos, fundador da Macumba Ordinária, defensor dos povos tradicionais e da cultura popular pernambucana.",
    url: "https://renatofonseca.com.br/",
    image: renatoPhotoAsset.url,
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL, TIKTOK_URL],
    address: { "@type": "PostalAddress", addressRegion: "PE", addressCountry: "BR" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* =================================================================== */
/* Header                                                               */
/* =================================================================== */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-40 border-b transition-all ${scrolled ? "border-border bg-background/95 shadow-sm backdrop-blur" : "border-transparent bg-background/80 backdrop-blur"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Renato Fonseca — Início">
          <img src={logoImage} alt="Renato Fonseca" className="h-12 w-auto sm:h-14" />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="relative text-[13px] font-medium text-foreground/75 transition-colors hover:text-[var(--brand-green-deep)]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="#participe" className="rounded-full bg-[var(--brand-green-deep)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">
            Fazer Parte
          </a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} className="rounded-md border border-border p-2 xl:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav aria-label="Navegação móvel" className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-base font-medium text-foreground/85 hover:bg-[var(--brand-green-soft)]">
                {l.label}
              </a>
            ))}
            <a href="#participe" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[var(--brand-green-deep)] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Quero fazer parte da caminhada
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* =================================================================== */
/* Hero                                                                 */
/* =================================================================== */

const HERO_SLIDES = [
  { src: heroImage, alt: "Renato Fonseca, pré-candidato a Deputado Federal" },
  { src: heroImage, alt: "Renato em atividade comunitária" },
  { src: heroImage, alt: "Renato em terreiro" },
];

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--brand-green-soft),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.92_0.05_55),transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-brown)]/40 bg-[var(--brand-cream)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-brown-deep)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-green)]" />
            Pré-candidato a Deputado Federal · Pernambuco
          </span>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-[var(--brand-green-deep)] sm:text-6xl lg:text-7xl">
            RENATO<br />FONSECA
          </h1>
          <p className="mt-5 font-serif text-2xl italic leading-snug text-[var(--brand-brown-deep)] sm:text-3xl">
            "Da rua à luta. Da fé à política. Pelo povo de Pernambuco."
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Levar a voz dos terreiros, das periferias e da cultura popular ao Congresso Nacional —
            transformando vivência em <strong>políticas públicas</strong>.
          </p>

          {/* Trust strip */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold text-[var(--brand-green-deep)]">
            <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[var(--brand-brown)]" />22 anos na Jurema Sagrada</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[var(--brand-brown)]" />Fundador da Macumba Ordinária</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[var(--brand-brown)]" />Defensor dos Povos Tradicionais</li>
          </ul>

          {/* Primary CTA + microtext */}
          <div className="mt-8">
            <a href="#participe" className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-green-deep)] px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl">
              <Heart className="h-4 w-4" /> Quero fazer parte da caminhada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-3 text-xs text-foreground/65">
              Junte-se a milhares de pessoas construindo um Pernambuco mais justo.
            </p>
          </div>

          {/* Secondary CTAs */}
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="#quem" className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-green-deep)]/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-deep)] transition-colors hover:bg-[var(--brand-green-soft)]">
              Conhecer Renato
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-brown)]/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-brown-deep)] transition-colors hover:bg-[var(--brand-cream)]">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
            <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-brown)]/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-brown-deep)] transition-colors hover:bg-[var(--brand-cream)]">
              Contribuir
            </a>
          </div>
        </div>

        {/* Hero carousel */}
        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--brand-green-deep)]/15 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[6px] border-[var(--brand-brown)]/40 shadow-2xl">
            {HERO_SLIDES.map((s, i) => (
              <img
                key={i}
                src={s.src}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100 animate-ken-burns" : "opacity-0"}`}
              />
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--brand-green-deep)]/40 to-transparent" />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir para imagem ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-2 bg-white/60"}`}
                />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 animate-float rounded-xl bg-[var(--brand-green-deep)] px-4 py-3 text-primary-foreground shadow-xl sm:-bottom-6 sm:-left-6">
            <p className="font-serif text-xl font-bold leading-none sm:text-2xl">22 anos</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">na Jurema Sagrada</p>
          </div>
          <div className="absolute -top-4 -right-2 hidden rounded-xl bg-[var(--brand-brown)] px-4 py-3 text-primary-foreground shadow-xl sm:block">
            <p className="font-serif text-xl font-bold leading-none">+500k</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-cream)]">alcance digital</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, intro, light }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <span className={`text-[11px] font-bold uppercase tracking-[0.28em] ${light ? "text-[var(--brand-green-soft)]" : "text-[var(--brand-brown-deep)]"}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl ${light ? "text-primary-foreground" : "text-[var(--brand-green-deep)]"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{intro}</p>}
    </Reveal>
  );
}

/* =================================================================== */
/* Story                                                                */
/* =================================================================== */

function Story() {
  return (
    <section id="quem" className="border-y border-border bg-[var(--brand-cream)]/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Quem é Renato Fonseca" title="Uma história real de transformação" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-6 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-brown)]/15 text-[var(--brand-brown-deep)]"><HomeIcon className="h-5 w-5" /></span>
              <p>Viveu em <strong>abrigos durante a adolescência</strong> e foi <strong>morador de rua</strong>. Conheceu o avesso da cidade — e a força de quem resiste.</p>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-brown)]/15 text-[var(--brand-brown-deep)]"><Sprout className="h-5 w-5" /></span>
              <p>Superou a <strong>dependência química</strong> e reconstruiu sua vida através da fé, da cultura e do trabalho comunitário.</p>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-brown)]/15 text-[var(--brand-brown-deep)]"><Flame className="h-5 w-5" /></span>
              <p>Juremeiro há 22 anos, <strong>tombado ao Mestre Manoel Quebra Pedra</strong>. Defensor dos povos tradicionais e da liberdade religiosa.</p>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-brown)]/15 text-[var(--brand-brown-deep)]"><Drum className="h-5 w-5" /></span>
              <p>Criador da <strong>Macumba Ordinária</strong> e do <strong>Espaço Cultural</strong> no Pátio do Terço, em Recife — casa de resistência das religiões de matriz africana.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="relative rounded-3xl border-l-4 border-[var(--brand-brown)] bg-card p-8 shadow-md">
              <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-[var(--brand-green-deep)] p-2 text-[var(--brand-green-soft)]" />
              <p className="font-serif text-xl italic leading-relaxed text-[var(--brand-green-deep)] sm:text-2xl">
                "Conheço a dor da exclusão porque vivi ela. Conheço a força da fé porque ela me levantou. Conheço a importância da cultura porque ela salvou minha vida. Agora quero transformar isso em <span className="bg-[var(--brand-green-soft)] px-1">políticas públicas</span>."
              </p>
              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[var(--brand-brown-deep)]">— Renato Fonseca</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Timeline                                                             */
/* =================================================================== */

const TIMELINE: { year: string; title: string; text: string; details: string; Icon: any }[] = [
  { year: "Adolescência", title: "Vida em abrigos", text: "Trajetória marcada pela vulnerabilidade social.", details: "Os abrigos foram a primeira experiência de coletividade — e também de invisibilidade. Foi ali que começou a entender a importância da escuta e da política.", Icon: HomeIcon },
  { year: "Juventude", title: "Morador de rua", text: "Sobrevivência, exclusão e cidade pelo avesso.", details: "Aprendeu, na pele, a urgência de políticas públicas para população em situação de rua, saúde mental e redução de danos.", Icon: Users },
  { year: "Superação", title: "Reconstrução", text: "Dependência química vencida pela fé e pela cultura.", details: "Fé, comunidade e arte como ferramentas reais de recuperação e reconstrução de vínculos.", Icon: Sprout },
  { year: "22 anos", title: "Caminhada na Jurema Sagrada", text: "Tradição, ancestralidade e pertencimento.", details: "Mais de duas décadas de vivência ritual, formação e responsabilidade espiritual com a Jurema.", Icon: Flame },
  { year: "Tombamento", title: "Mestre Manoel Quebra Pedra", text: "Compromisso espiritual com a tradição.", details: "Tombamento marca a entrada formal no caminho de responsabilidade com a casa, a linhagem e o povo de fé.", Icon: ShieldCheck },
  { year: "Movimento", title: "Macumba Ordinária", text: "Cultura, comunicação e resistência das religiões de matriz africana.", details: "Movimento independente que rompeu o silêncio digital sobre os terreiros: alcance de mais de 500 mil pessoas e dezenas de eventos.", Icon: Drum },
  { year: "Defesa pública", title: "Combate à intolerância religiosa", text: "Denúncia, articulação e proteção dos terreiros.", details: "Atuação direta junto a vítimas, parceria com defensoria e construção de redes de proteção territorial.", Icon: Landmark },
  { year: "Território", title: "Espaço Cultural Macumba Ordinária", text: "Casa de cultura no Pátio do Terço.", details: "Espaço físico de encontro, formação, lançamentos, exibições e celebração da cultura afro-pernambucana.", Icon: HandHeart },
  { year: "Agora", title: "Pré-candidatura a Deputado Federal", text: "Levar a voz das ruas e dos terreiros ao Congresso.", details: "Pré-campanha popular, construída de baixo para cima, com escuta, base e território.", Icon: Star },
];

function Timeline() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="trajetoria" className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle eyebrow="Linha do Tempo" title="A caminhada até aqui" intro="Marcos de uma trajetória de superação, fé e compromisso." />
        <ol className="relative space-y-6 border-l-2 border-[var(--brand-brown)]/30 pl-8 md:pl-14">
          {TIMELINE.map((m, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} as="li" className="relative" delay={i * 40}>
                <span className="absolute -left-[44px] flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-[var(--brand-green-deep)] text-primary-foreground shadow-md md:-left-[60px]">
                  <m.Icon className="h-4 w-4" />
                </span>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="block w-full rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--brand-green)]/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-brown-deep)]">{m.year}</span>
                      <h3 className="mt-1 font-serif text-xl font-bold text-[var(--brand-green-deep)] sm:text-2xl">{m.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{m.text}</p>
                    </div>
                    <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-[var(--brand-brown)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`grid transition-all duration-500 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="border-t border-border pt-4 text-sm leading-relaxed text-foreground/75">{m.details}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Macumba Ordinária                                                    */
/* =================================================================== */

function StatCounter({ to, suffix = "", prefix = "+", label }: { to: number; suffix?: string; prefix?: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setStart(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const v = useCountUp(to, 1600, start);
  return (
    <div ref={ref} className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur transition-transform hover:-translate-y-1">
      <p className="font-serif text-4xl font-bold leading-none sm:text-5xl">{prefix}{v.toLocaleString("pt-BR")}{suffix}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">{label}</p>
    </div>
  );
}

function MacumbaOrdinaria() {
  const pilares = [
    "Combate à intolerância religiosa",
    "Defesa da liberdade religiosa",
    "Promoção do Orgulho de Axé",
    "Valorização dos povos tradicionais",
    "Produção cultural independente",
    "Formação comunitária",
    "Preservação da memória dos terreiros",
    "Fortalecimento da identidade afro-indígena",
  ];
  return (
    <section id="macumba" className="relative overflow-hidden border-y border-border bg-[var(--brand-green-deep)] py-20 text-primary-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.45_0.1_150),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.4_0.08_55),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle light eyebrow="O Movimento" title="Macumba Ordinária" intro="Movimento cultural independente de resistência, valorização e defesa das religiões de matriz africana." />
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter to={500000} prefix="+" label="Alcance digital" />
          <StatCounter to={100} prefix="+" label="Eventos realizados" />
          <StatCounter to={30} prefix="+" label="Projetos culturais" />
          <StatCounter to={80} prefix="+" label="Comunidades atendidas" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {pilares.map((p, i) => (
              <Reveal key={p} as="li" delay={i * 50} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10">
                <Flame className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-green-soft)]" />
                <span className="text-sm font-medium leading-snug">{p}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
            <p className="text-sm leading-relaxed text-primary-foreground/90">
              O <strong>Espaço Cultural Macumba Ordinária</strong>, no Pátio do Terço (Recife), é casa de encontro, formação, celebração e defesa do povo de terreiro.
            </p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-green-soft)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-deep)] transition-transform hover:-translate-y-0.5">
              <Instagram className="h-4 w-4" /> Acompanhar nas redes
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Bandeiras                                                            */
/* =================================================================== */

const BANDEIRAS = [
  { Icon: ShieldCheck, title: "Regularização de Terreiros", problema: "Maioria dos terreiros não possui CNPJ, dificultando acesso a editais, direitos e proteção.", como: "Programa de apoio jurídico e contábil gratuito para formalização.", projetos: "Mutirões de regularização, cartilhas, balcão único.", impacto: "Mais autonomia, acesso a recursos e reconhecimento institucional." },
  { Icon: Flame, title: "Combate à Intolerância Religiosa", problema: "Ataques, depredações e violências sistêmicas contra terreiros e fiéis.", como: "Lei federal de proteção, observatório e canal nacional de denúncias.", projetos: "Disque-Intolerância, mapeamento e formação para polícias.", impacto: "Proteção real e responsabilização de agressores." },
  { Icon: Landmark, title: "Terreiros Históricos", problema: "Patrimônios afro-religiosos sem reconhecimento ou tombamento.", como: "Cadastro federal e linha de financiamento patrimonial.", projetos: "Catalogação, restauro e turismo cultural respeitoso.", impacto: "Preservação da memória e valorização territorial." },
  { Icon: Drum, title: "Cultura Popular", problema: "Mestres e grupos sobrevivem sem políticas estáveis.", como: "Bolsa-Mestre federal e fundo permanente para cultura popular.", projetos: "Apoio a maracatus, cocos, ciranda, cavalo-marinho, Jurema.", impacto: "Continuidade e dignidade para quem mantém viva a tradição." },
  { Icon: Sprout, title: "Economia Criativa", problema: "Trabalhadoras e trabalhadores da cultura sem renda estável.", como: "Linhas de crédito, microempreendedorismo e capacitação.", projetos: "Feiras, festivais e residências artísticas.", impacto: "Cultura como vetor real de desenvolvimento." },
  { Icon: Users, title: "Povos Tradicionais", problema: "Povos invisibilizados em políticas e orçamentos.", como: "Marco legal de reconhecimento e participação.", projetos: "Conselhos paritários, fundos específicos e proteção territorial.", impacto: "Voz, território e direitos garantidos." },
  { Icon: HandHeart, title: "Projetos Sociais", problema: "Iniciativas comunitárias sem fôlego financeiro.", como: "Fundo de apoio direto a organizações de base.", projetos: "Editais simplificados e prestação de contas acessível.", impacto: "Mais ação social com gestão comunitária." },
  { Icon: HomeIcon, title: "População em Situação de Rua", problema: "Falta de acolhimento digno e caminhos reais de saída.", como: "Política nacional integrada com moradia, saúde e renda.", projetos: "Casas de passagem, equipes de rua e geração de renda.", impacto: "Reinserção com dignidade e respeito." },
  { Icon: Brain, title: "Saúde Mental e Recuperação", problema: "Rede frágil para dependência química e sofrimento psíquico.", como: "Ampliação dos CAPS e apoio a comunidades terapêuticas laicas.", projetos: "Redução de danos, atenção territorial e formação.", impacto: "Cuidado em liberdade, com base na ciência e no acolhimento." },
  { Icon: GraduationCap, title: "Juventude", problema: "Juventude periférica sem cultura, esporte e oportunidades.", como: "Programa Juventude Viva ampliado e descentralizado.", projetos: "Pontos de cultura, esporte e tecnologia nas periferias.", impacto: "Futuro com mais escolha, menos violência." },
];

function Bandeiras() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="bandeiras" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Nossas Bandeiras" title="As lutas que carregamos" intro="Clique em cada bandeira para conhecer o problema, a solução e o impacto esperado." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BANDEIRAS.map((b, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={b.title} delay={i * 40}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`group relative flex h-full w-full flex-col rounded-2xl border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${isOpen ? "border-[var(--brand-green-deep)] ring-2 ring-[var(--brand-green)]/30" : "border-border hover:border-[var(--brand-green)]"}`}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green-soft)] text-[var(--brand-green-deep)] transition-colors group-hover:bg-[var(--brand-green-deep)] group-hover:text-primary-foreground">
                    <b.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold leading-tight text-[var(--brand-green-deep)]">{b.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">
                    {isOpen ? "Fechar" : "Saiba mais"} <Plus className={`h-3 w-3 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                  </span>
                  <div className={`grid transition-all duration-500 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <dl className="space-y-3 border-t border-border pt-4 text-sm leading-relaxed">
                        <BItem label="Problema" value={b.problema} />
                        <BItem label="Como resolver" value={b.como} />
                        <BItem label="Projetos" value={b.projetos} />
                        <BItem label="Impacto esperado" value={b.impacto} />
                      </dl>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-brown-deep)]">{label}</dt>
      <dd className="mt-0.5 text-[13px] text-foreground/80">{value}</dd>
    </div>
  );
}

/* =================================================================== */
/* Propostas (estilo presidencial)                                      */
/* =================================================================== */

const PROPOSTAS = [
  { cat: "Cultura", title: "Programa de regularização de terreiros", problema: "Falta de CNPJ e proteção formal.", solucao: "Programa federal de apoio à regularização.", como: "Convênios com municípios e mutirões.", quem: "Terreiros e casas tradicionais.", impacto: "Acesso a editais e direitos." },
  { cat: "Cultura", title: "Cadastro estadual de terreiros históricos", problema: "Desconhecimento do patrimônio.", solucao: "Cadastro com proteção patrimonial.", como: "Parceria IPHAN, Funcultura, UFPE.", quem: "Patrimônio afro-religioso.", impacto: "Preservação e visibilidade." },
  { cat: "Cultura", title: "Fundo de incentivo à cultura popular", problema: "Mestres sem renda estável.", solucao: "Bolsa-Mestre e fundo permanente.", como: "Recursos do orçamento federal.", quem: "Grupos e mestres da cultura.", impacto: "Continuidade da tradição." },
  { cat: "Direitos", title: "Proteção contra a intolerância religiosa", problema: "Violências sistêmicas.", solucao: "Lei federal e canal de denúncia.", como: "Disque-Intolerância e formação policial.", quem: "Comunidades de matriz africana.", impacto: "Proteção real e responsabilização." },
  { cat: "Social", title: "Apoio a projetos sociais comunitários", problema: "Iniciativas sem fôlego.", solucao: "Fundo de apoio direto.", como: "Editais simplificados.", quem: "Organizações de base.", impacto: "Ampliação de impacto local." },
  { cat: "Economia", title: "Fortalecimento da economia criativa", problema: "Renda instável na cultura.", solucao: "Crédito e capacitação.", como: "Parcerias BNB, BNDES, Sebrae.", quem: "Trabalhadores da cultura.", impacto: "Cultura como motor econômico." },
  { cat: "Social", title: "Programas para população em situação de rua", problema: "Falta de política integrada.", solucao: "Política nacional Moradia + Renda + Saúde.", como: "Casas de passagem e equipes de rua.", quem: "Pessoas em situação de rua.", impacto: "Reinserção digna." },
  { cat: "Saúde", title: "Políticas para recuperação e reinserção social", problema: "Rede frágil de cuidado.", solucao: "Ampliar CAPS e redução de danos.", como: "Fortalecimento do SUS.", quem: "Pessoas em sofrimento e dependência.", impacto: "Cuidado em liberdade." },
  { cat: "Cultura", title: "Apoio a mestres e mestras da cultura popular", problema: "Mestres envelhecem sem amparo.", solucao: "Bolsa vitalícia e formação.", como: "Lei federal específica.", quem: "Mestres e mestras.", impacto: "Tradição preservada com dignidade." },
  { cat: "Cultura", title: "Preservação da Jurema Sagrada", problema: "Ameaças à tradição e ao território.", solucao: "Reconhecimento como patrimônio imaterial.", como: "Articulação com IPHAN e povos.", quem: "Juremeiros e juremeiras.", impacto: "Proteção sagrada da tradição." },
];

const CATS = ["Todas", "Cultura", "Direitos", "Social", "Economia", "Saúde"];

function Propostas() {
  const [filter, setFilter] = useState("Todas");
  const list = useMemo(() => filter === "Todas" ? PROPOSTAS : PROPOSTAS.filter((p) => p.cat === filter), [filter]);
  return (
    <section id="propostas" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Propostas" title="Compromissos com Pernambuco" intro="Eixos prioritários para transformar experiência em política pública." />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${filter === c ? "bg-[var(--brand-green-deep)] text-primary-foreground shadow" : "border border-[var(--brand-brown)]/30 bg-card text-[var(--brand-brown-deep)] hover:border-[var(--brand-green)]"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={i * 40}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex w-fit rounded-full bg-[var(--brand-green-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-deep)]">{p.cat}</span>
                <h3 className="mt-3 font-serif text-lg font-bold leading-tight text-[var(--brand-green-deep)]">{p.title}</h3>
                <dl className="mt-4 space-y-2.5 text-[13px] leading-relaxed">
                  <PItem label="Problema" value={p.problema} />
                  <PItem label="Solução" value={p.solucao} />
                  <PItem label="Como será feita" value={p.como} />
                  <PItem label="Beneficiados" value={p.quem} />
                  <PItem label="Impacto" value={p.impacto} />
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function PItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">{label}:</dt>
      <dd className="text-foreground/80">{value}</dd>
    </div>
  );
}

/* =================================================================== */
/* Agenda (próximos 3 + completa)                                       */
/* =================================================================== */

const AGENDA_FLAT: { date: string; weekday: string; title: string; location: string; time: string; iso: string }[] = [
  // Setembro
  { date: "07/09", weekday: "Segunda", title: "Reunião online da campanha", location: "Reunião online (link via WhatsApp)", time: "10h30", iso: "2026-09-07T10:30:00-03:00" },
  { date: "08/09", weekday: "Terça", title: "Entrevista na Rádio Caranguejo Uçá — com Edson Fly", location: "Ilha de Deus — Recife", time: "9h", iso: "2026-09-08T09:00:00-03:00" },
  { date: "09/09", weekday: "Quarta", title: "Encontro com Nega Day e o Samba", location: "Vila Flora Assunção, 58, São Bento — Olinda", time: "15h", iso: "2026-09-09T15:00:00-03:00" },
  { date: "10/09", weekday: "Quinta", title: "Café com Axé — Mulheres de Terreiro na construção de políticas públicas", location: "Escritório de Renato Fonseca", time: "8h às 10h", iso: "2026-09-10T08:00:00-03:00" },
  { date: "12/09", weekday: "Sábado", title: "Ilê Axé Iná Oba Xangô — Festa do Mestre Zé da Virada", location: "Rua Arara Azul, 10, Barra de Jangada — Jaboatão dos Guararapes", time: "14h", iso: "2026-09-12T14:00:00-03:00" },
  { date: "12/09", weekday: "Sábado", title: "Seara do Caboclo Oxossi — Mestre Zé Juremeiro e Pombagira", location: "Subida da Marta, 175, Linha — Limoeiro", time: "15h", iso: "2026-09-12T15:00:00-03:00" },
  { date: "12/09", weekday: "Sábado", title: "Ilê Axé Xangô Babá Lufan — Gira para Exu e Pombagira", location: "Gaibu — Cabo de Santo Agostinho", time: "16h", iso: "2026-09-12T16:00:00-03:00" },
  { date: "12/09", weekday: "Sábado", title: "Ensaio Geral — Maracatu Cambinda Estrela", location: "Rua Elias Gomes, Xambona do Barreto (Portão Cultural)", time: "20h", iso: "2026-09-12T20:00:00-03:00" },
  { date: "13/09", weekday: "Domingo", title: "Almoço com Pai Alexandro", location: "Gravatá", time: "12h", iso: "2026-09-13T12:00:00-03:00" },
  { date: "14/09", weekday: "Segunda", title: "Café com Axé — Políticas de proteção para o povo de terreiro", location: "Escritório de Renato Fonseca", time: "8h30 às 10h", iso: "2026-09-14T08:30:00-03:00" },
  { date: "14/09", weekday: "Segunda", title: "Reunião com Juremeiro Lenílson", location: "Alto do Pascoal — Recife", time: "17h", iso: "2026-09-14T17:00:00-03:00" },
  { date: "19/09", weekday: "Sábado", title: "Grêmio Recreativo Pretos Velhos — Patrimônio Vivo de Pernambuco", location: "Alto da Sé — Olinda", time: "16h", iso: "2026-09-19T16:00:00-03:00" },
  { date: "19/09", weekday: "Sábado", title: "Festa da Mestra Ritinha — Tenda São Jerônimo", location: "Rua Jerônimo Vilela, 615, Campo Grande", time: "18h", iso: "2026-09-19T18:00:00-03:00" },
  { date: "21/09", weekday: "Segunda", title: "Pai Luciano — Festa para Exu", location: "Rua Veneza, 56, Iputinga — Recife", time: "19h", iso: "2026-09-21T19:00:00-03:00" },
  { date: "26/09", weekday: "Sábado", title: "Cabaré da Ritinha", location: "Rua da Guia — Recife", time: "", iso: "2026-09-26T18:00:00-03:00" },
];

function buildICS(ev: typeof AGENDA_FLAT[number]) {
  const dt = ev.iso.replace(/[-:]/g, "").replace(".000", "");
  const dtStart = dt.slice(0, 15) + "Z";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Renato Fonseca//Agenda//PT-BR",
    "BEGIN:VEVENT",
    `UID:${ev.iso}-${ev.title}@renatofonseca`,
    `DTSTART:${dtStart}`,
    `SUMMARY:${ev.title}`,
    `LOCATION:${ev.location}`,
    "DESCRIPTION:Agenda Renato Fonseca",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}

function Agenda() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? AGENDA_FLAT : AGENDA_FLAT.slice(0, 3);
  return (
    <section id="agenda" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Agenda" title="Onde Renato vai estar" intro="Visitas, encontros, atos e eventos da pré-campanha." />
        <div className="grid gap-4 md:grid-cols-3">
          {list.map((ev, i) => (
            <Reveal key={i} delay={i * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-bold text-[var(--brand-green-deep)]">{ev.date}</span>
                  <span className="rounded-full bg-[var(--brand-green-soft)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-deep)]">{ev.weekday}</span>
                </div>
                <h3 className="mt-3 font-serif text-base font-bold leading-snug text-[var(--brand-green-deep)]">{ev.title}</h3>
                <p className="mt-2 flex items-start gap-1.5 text-[12px] text-muted-foreground"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-brown)]" />{ev.location}</p>
                {ev.time && <p className="mt-1 text-[12px] font-bold text-[var(--brand-brown-deep)]">🕐 {ev.time}</p>}
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.location)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold text-[var(--brand-green-deep)] hover:border-[var(--brand-green)] hover:bg-[var(--brand-green-soft)]">
                    <MapPin className="h-3 w-3" /> Mapa
                  </a>
                  <a href={buildICS(ev)} download={`${ev.title}.ics`} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold text-[var(--brand-green-deep)] hover:border-[var(--brand-green)] hover:bg-[var(--brand-green-soft)]">
                    <Calendar className="h-3 w-3" /> Calendário
                  </a>
                  <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Quero confirmar presença em: " + ev.title + " (" + ev.date + ")")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-green-deep)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground hover:bg-[var(--brand-green)]">
                    Confirmar
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => setShowAll((v) => !v)} className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-green-deep)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-deep)] transition-colors hover:bg-[var(--brand-green-deep)] hover:text-primary-foreground">
            {showAll ? "Mostrar apenas próximos eventos" : "Ver agenda completa"}
            <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Galeria com filtros + lightbox                                       */
/* =================================================================== */

const GALERIA_CATS = ["Todas", "Comunidade", "Terreiros", "Eventos", "Cultura", "Campanha"];
const GALERIA_ITEMS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  cat: GALERIA_CATS[(i % 5) + 1],
  title: `Registro ${i + 1}`,
}));

function Galeria() {
  const [filter, setFilter] = useState("Todas");
  const [open, setOpen] = useState<number | null>(null);
  const list = filter === "Todas" ? GALERIA_ITEMS : GALERIA_ITEMS.filter((g) => g.cat === filter);
  return (
    <section id="galeria" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Galeria" title="Registros da caminhada" intro="Imagens da rua, do palco, do terreiro e da comunidade." />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {GALERIA_CATS.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${filter === c ? "bg-[var(--brand-green-deep)] text-primary-foreground shadow" : "border border-[var(--brand-brown)]/30 bg-card text-[var(--brand-brown-deep)] hover:border-[var(--brand-green)]"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {list.map((g, i) => (
            <button key={g.id} onClick={() => setOpen(g.id)} aria-label={`Abrir ${g.title}`} className={`group relative flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[var(--brand-green-soft)] via-card to-[var(--brand-cream)] text-[var(--brand-green-deep)]/40 transition-transform hover:-translate-y-1 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
              <Sparkles className="h-8 w-8" />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[var(--brand-green-deep)]/85 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wider text-white transition-transform group-hover:translate-y-0">
                {g.cat}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Novas imagens em breve. Envie suas fotos pelo WhatsApp.</p>

        {open !== null && (
          <div role="dialog" aria-modal="true" onClick={() => setOpen(null)} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-6 animate-fade-in">
            <button onClick={() => setOpen(null)} aria-label="Fechar" className="absolute right-5 top-5 rounded-full bg-white/15 p-2 text-white hover:bg-white/30">
              <X className="h-6 w-6" />
            </button>
            <div onClick={(e) => e.stopPropagation()} className="flex aspect-[4/5] w-full max-w-3xl items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-green-soft)] via-card to-[var(--brand-cream)] text-[var(--brand-green-deep)]/40">
              <Sparkles className="h-16 w-16" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* =================================================================== */
/* Depoimentos                                                          */
/* =================================================================== */

const DEPOIMENTOS = [
  { name: "Mãe Beth de Oxum", role: "Liderança religiosa", text: "Renato é voz firme do povo de terreiro. Caminha com a gente, escuta e defende.", initials: "MB" },
  { name: "Mestre João do Coco", role: "Mestre da cultura popular", text: "Ele entende o valor dos mestres. Põe a cara, abre porta, fortalece a tradição.", initials: "JC" },
  { name: "Coletivo Maré Negra", role: "Coletivo artístico", text: "A Macumba Ordinária mudou a forma como falamos de fé, cultura e resistência.", initials: "MN" },
  { name: "Dona Lourdes", role: "Moradora — Pátio do Terço", text: "Renato é gente do bairro. Tá perto, conhece a luta, ajuda de verdade.", initials: "DL" },
  { name: "Lucas, 22", role: "Juventude da periferia", text: "Encontrei lugar pra ser quem sou. A Macumba Ordinária mudou minha história.", initials: "LU" },
  { name: "Pai Rinaldo", role: "Liderança de terreiro", text: "Um companheiro que entende o sagrado e a política. Caminho de respeito.", initials: "PR" },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Prova Social" title="Quem conhece Renato fala" intro="Lideranças religiosas, mestres, artistas e moradores." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.name} delay={i * 50}>
              <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <Quote className="absolute -top-3 left-5 h-8 w-8 rounded-full bg-[var(--brand-brown)] p-1.5 text-primary-foreground" />
                <p className="mt-3 text-[15px] italic leading-relaxed text-foreground/85">"{d.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-green-deep)] font-serif text-base font-bold text-primary-foreground">{d.initials}</span>
                  <div>
                    <p className="font-serif text-base font-bold text-[var(--brand-green-deep)]">{d.name}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--brand-brown-deep)]">{d.role}</p>
                  </div>
                  <button aria-label="Ver vídeo (em breve)" className="ml-auto rounded-full bg-[var(--brand-green-soft)] p-2 text-[var(--brand-green-deep)] transition-colors hover:bg-[var(--brand-green)] hover:text-primary-foreground">
                    <PlayCircle className="h-5 w-5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Mapa PE                                                              */
/* =================================================================== */

const REGIOES = [
  { name: "Região Metropolitana", info: "Recife, Olinda, Jaboatão, Paulista, Abreu e Lima" },
  { name: "Zona da Mata", info: "Limoeiro e municípios da mata norte e sul" },
  { name: "Agreste", info: "Surubim e cidades parceiras" },
  { name: "Sertão", info: "Articulações em construção" },
];

function MapaPE() {
  return (
    <section id="mapa" className="border-y border-border bg-[var(--brand-green-deep)] py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle light eyebrow="Pernambuco" title="Por onde a caminhada passa" intro="Territórios visitados, terreiros, projetos e lideranças parceiras." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REGIOES.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <article className="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
                <MapPin className="h-6 w-6 text-[var(--brand-green-soft)]" />
                <h3 className="mt-3 font-serif text-lg font-bold leading-tight">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{r.info}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Faça Parte                                                           */
/* =================================================================== */

const AREAS = ["Voluntariado", "Comunicação", "Eventos", "Juventude", "Cultura", "Povos Tradicionais", "Religiões de Matriz Africana"];

function FacaParte() {
  const [form, setForm] = useState({ nome: "", cidade: "", telefone: "", email: "" });
  const [areas, setAreas] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const toggle = (k: string) => setAreas({ ...areas, [k]: !areas[k] });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) {
      toast.error("Preencha pelo menos nome e telefone.");
      return;
    }
    toast.success("Obrigado por fortalecer essa caminhada.");
    setSent(true);
  };

  const input = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/30";

  return (
    <section id="participe" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand-brown-deep)]">Faça parte</span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[var(--brand-green-deep)] sm:text-5xl">
            Faça parte da caminhada
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            Junte-se a milhares de pessoas construindo um Pernambuco mais justo. Voluntários, lideranças, artistas, produtores e comunidades — a construção é coletiva.
          </p>
          <div className="mt-6 rounded-2xl border-l-4 border-[var(--brand-green)] bg-card p-5 text-sm text-foreground/80 shadow-sm">
            Seus dados são tratados com responsabilidade, conforme a <strong>LGPD</strong> e a legislação eleitoral brasileira.
          </div>
        </Reveal>
        <Reveal delay={120}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[var(--brand-green)] bg-[var(--brand-green-soft)] p-10 text-center shadow-md">
              <CheckCircle2 className="h-14 w-14 text-[var(--brand-green-deep)]" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-[var(--brand-green-deep)]">Obrigado!</h3>
              <p className="mt-3 max-w-md text-base text-foreground/80">
                Obrigado por fortalecer essa caminhada. Em breve nossa equipe entra em contato.
              </p>
              <button onClick={() => { setSent(false); setForm({ nome: "", cidade: "", telefone: "", email: "" }); setAreas({}); }} className="mt-6 rounded-full border border-[var(--brand-green-deep)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-deep)] hover:bg-[var(--brand-green-deep)] hover:text-primary-foreground">
                Enviar outra inscrição
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-md">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome *"><input name="nome" value={form.nome} onChange={onChange} className={input} maxLength={120} required autoComplete="name" /></Field>
                <Field label="Cidade"><input name="cidade" value={form.cidade} onChange={onChange} className={input} maxLength={80} autoComplete="address-level2" /></Field>
                <Field label="Telefone *"><input name="telefone" type="tel" value={form.telefone} onChange={onChange} className={input} maxLength={30} required autoComplete="tel" /></Field>
                <Field label="E-mail"><input name="email" type="email" value={form.email} onChange={onChange} className={input} maxLength={200} autoComplete="email" /></Field>
              </div>
              <fieldset className="mt-6">
                <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">Áreas de interesse</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {AREAS.map((p) => (
                    <label key={p} className={`flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${areas[p] ? "border-[var(--brand-green)] bg-[var(--brand-green-soft)]" : "border-border bg-background hover:border-[var(--brand-green)]/50"}`}>
                      <input type="checkbox" checked={!!areas[p]} onChange={() => toggle(p)} className="mt-0.5 h-4 w-4 accent-[var(--brand-green-deep)]" />
                      <span className="leading-snug">{p}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-green-deep)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
                <Heart className="h-4 w-4" /> Quero ajudar
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">{label}</span>
      {children}
    </label>
  );
}

/* =================================================================== */
/* Redes                                                                */
/* =================================================================== */

const REDES = [
  { name: "Instagram", url: INSTAGRAM_URL, Icon: Instagram, handle: "@renatofonsecape" },
  { name: "Facebook", url: FACEBOOK_URL, Icon: Facebook, handle: "/renatofonsecape" },
  { name: "YouTube", url: YOUTUBE_URL, Icon: Youtube, handle: "@renatofonsecape" },
  { name: "TikTok", url: TIKTOK_URL, Icon: Music2, handle: "@renatofonsecape" },
  { name: "WhatsApp", url: WHATSAPP_URL, Icon: MessageCircle, handle: "Fale agora" },
];

function RedesSociais() {
  return (
    <section id="redes" className="border-y border-border bg-[var(--brand-cream)]/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Redes Sociais" title="Conecte-se com a caminhada" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {REDES.map(({ name, url, Icon, handle }, i) => (
            <Reveal key={name} delay={i * 40}>
              <a href={url} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-green-deep)] text-primary-foreground transition-colors group-hover:bg-[var(--brand-brown)]">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="font-serif text-base font-bold text-[var(--brand-green-deep)]">{name}</p>
                <p className="text-xs font-semibold text-[var(--brand-brown-deep)]">{handle}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Apoio                                                                */
/* =================================================================== */

function Apoio() {
  return (
    <section id="apoie" className="relative overflow-hidden bg-[var(--brand-brown-deep)] py-24 text-primary-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.09_150),transparent_55%),radial-gradient(circle_at_75%_80%,oklch(0.35_0.08_55),transparent_55%)]" />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--brand-green-soft)]">Apoie</span>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-6xl">Sua contribuição fortalece essa luta</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">
          Cada apoio fortalece a comunicação, a circulação, os encontros e a mobilização em defesa da cultura, da fé e dos invisibilizados.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#participe" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl transition-transform hover:-translate-y-0.5">
            <Heart className="h-4 w-4" /> Quero fazer parte
          </a>
          <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[var(--brand-brown-deep)]">
            Contribuir <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* Footer                                                               */
/* =================================================================== */

function Footer() {
  const [email, setEmail] = useState("");
  const onSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Informe um e-mail válido.");
    toast.success("Inscrição confirmada. Axé!");
    setEmail("");
  };
  return (
    <footer className="bg-[var(--brand-green-deep)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src={logoImage} alt="Renato Fonseca" className="h-16 w-auto rounded-md bg-white/95 p-2" />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">Da rua à luta</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/85">
            Cultura, dignidade e oportunidades para Pernambuco. Pré-candidatura a Deputado Federal.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Mapa do site</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:underline">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
            <li><a href="mailto:contato@renatofonseca.com" className="hover:underline">contato@renatofonseca.com</a></li>
            <li><a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="hover:underline">Apoiar a campanha</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Music2 className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Newsletter</h4>
          <p className="mt-4 text-sm text-primary-foreground/85">Receba a agenda, notícias e atos da caminhada.</p>
          <form onSubmit={onSub} className="mt-4 flex overflow-hidden rounded-full border border-white/25 bg-white/10 focus-within:border-[var(--brand-green-soft)]">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-primary-foreground/50 focus:outline-none" aria-label="E-mail para newsletter" />
            <button type="submit" aria-label="Assinar" className="bg-[var(--brand-green)] px-4 hover:bg-[var(--brand-green-soft)] hover:text-[var(--brand-green-deep)]"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Renato Fonseca — Conteúdo de pré-campanha em conformidade com a legislação eleitoral.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Transparência</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =================================================================== */
/* Floating actions                                                     */
/* =================================================================== */

function FixedWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.18_150)] px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl ring-4 ring-[oklch(0.62_0.18_150)]/25 transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-5 left-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-brown-deep)] text-white shadow-xl transition-transform hover:-translate-y-0.5"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}