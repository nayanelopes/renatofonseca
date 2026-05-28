import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-renato.jpg";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renato Fonseca — A Voz do Axé | Pré-candidato a Deputado Federal" },
      { name: "description", content: "Renato Fonseca: criador do Macumbaordinário, produtor cultural, conselheiro de cultura e igualdade racial e pré-candidato a deputado federal. A voz do axé, da cultura popular e da liberdade religiosa." },
      { property: "og:title", content: "Renato Fonseca — A Voz do Axé" },
      { property: "og:description", content: "Comunicação, cultura e presença pública em defesa do axé, da igualdade racial e da liberdade religiosa." },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5500000000000";
const INSTAGRAM_URL = "https://instagram.com/renatofonsecape";
const VAQUINHA_URL = "https://queroapoiar.com.br/renato-fonseca";

const NAV_LINKS = [
  { label: "Destaques", href: "#destaques" },
  { label: "Redes Sociais", href: "#redes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Vídeos", href: "#videos" },
  { label: "Galeria de Fotos", href: "#galeria" },
  { label: "Agenda", href: "#agenda" },
  { label: "Apoie", href: "#apoie" },
  { label: "Contato", href: "#contato" },
];

const HIGHLIGHTS = [
  {
    title: "A voz do axé contra a intolerância religiosa",
    text: "Renato Fonseca atua denunciando o racismo religioso, fortalecendo a liberdade de culto e dando visibilidade às violações sofridas pelo povo de terreiro.",
  },
  {
    title: "Cultura popular como caminho de transformação",
    text: "Como produtor cultural, Renato realiza e articula eventos que celebram a ancestralidade, a diversidade, a arte, a rua, o palco e os saberes populares.",
  },
  {
    title: "Representatividade nos espaços de decisão",
    text: "Como Conselheiro de Cultura de Pernambuco e Conselheiro de Igualdade Racial, leva as pautas do axé, da cultura e da população negra para os espaços institucionais.",
  },
  {
    title: "Pré-candidatura com raiz, escuta e presença",
    text: "Sua caminhada como pré-candidato a deputado federal nasce da defesa da cultura, do combate à intolerância religiosa e da construção de políticas públicas com participação popular.",
  },
];

const PROJECTS = [
  { name: "Macumbaordinário", text: "Plataforma de comunicação, denúncia, memória e afirmação das religiões de matriz africana, com linguagem direta, popular e conectada com o povo de axé." },
  { name: "Cabaré de Ritinha", text: "Evento cultural com performance, música, humor, arte, diversidade e celebração da cultura popular em um formato vivo, provocador e acolhedor." },
  { name: "Cabaré de Paulina", text: "Projeto artístico e cultural que mistura cena, corpo, ancestralidade, festa e resistência, valorizando narrativas populares e identidades diversas." },
  { name: "Coco dos Mestres", text: "Encontro de celebração da cultura popular, da tradição oral, da música, da dança e dos mestres que mantêm viva a memória do povo." },
  { name: "A Voz do Axé", text: "Frente de comunicação e presença pública dedicada a defender o povo de terreiro, denunciar intolerâncias e afirmar o axé como força cultural, espiritual e política." },
];

const SOCIALS = [
  { name: "Instagram", handle: "@renatofonsecape", text: "Acompanhe denúncias, eventos, vídeos, bastidores, posicionamentos e a caminhada de Renato Fonseca.", url: INSTAGRAM_URL, cta: "Abrir Instagram" },
  { name: "Facebook", handle: "/renatofonsecape", text: "Publicações, transmissões e mobilizações em defesa do axé e da cultura popular.", url: "#", cta: "Abrir Facebook" },
  { name: "YouTube", handle: "@renatofonsecape", text: "Vídeos com denúncias, entrevistas, eventos, falas públicas e registros da caminhada cultural e política.", url: "#", cta: "Abrir YouTube" },
  { name: "TikTok", handle: "@renatofonsecape", text: "Conteúdos curtos, diretos e populares com a linguagem do povo de terreiro e da cultura de rua.", url: "#", cta: "Abrir TikTok" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster richColors position="top-center" />
      <Header />
      <Hero />
      <Highlights />
      <Projects />
      <Videos />
      <Gallery />
      <Agenda />
      <Support />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-green-deep)]">
            Renato Fonseca
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--brand-green-deep)]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--brand-brown)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-brown-deep)] transition-colors hover:bg-[var(--brand-brown)] hover:text-primary-foreground">
            Falar no WhatsApp
          </a>
          <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand-green)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-colors hover:bg-[var(--brand-green-deep)]">
            Apoiar a caminhada
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand-brown)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[var(--brand-brown-deep)]">
            Ver Instagram
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          className="rounded-md border border-border px-3 py-2 text-sm lg:hidden"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/80">
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--brand-brown)] px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-[var(--brand-brown-deep)]">
                Falar no WhatsApp
              </a>
              <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand-green)] px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                Apoiar a caminhada
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand-brown)] px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                Ver Instagram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--brand-green-soft),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-brown)]/40 bg-[var(--brand-cream)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-brown-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
            Pré-candidato a Deputado Federal
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-[var(--brand-green-deep)] sm:text-6xl lg:text-7xl">
            Renato Fonseca
          </h1>
          <p className="mt-4 text-2xl font-bold uppercase tracking-[0.18em] text-[var(--brand-brown-deep)] sm:text-3xl">
            A Voz do Axé!
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
            Produtor Cultural · Conselheiro de Cultura de PE · Conselheiro de Igualdade Racial · Pré-candidato a Deputado Federal
          </p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p>
              Criador do <strong>Macumbaordinário</strong>, Renato Fonseca transforma comunicação, cultura e presença pública em ferramenta de enfrentamento à intolerância religiosa, valorização das tradições de matriz africana e fortalecimento da cultura popular.
            </p>
            <p>
              Com atuação firme, linguagem direta e compromisso com o povo de terreiro, Renato produz eventos, denuncia violações, articula redes culturais e ocupa espaços de decisão para defender respeito, memória, igualdade racial, liberdade de fé e presença política para quem historicamente foi silenciado.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#destaques" className="rounded-full bg-[var(--brand-green-deep)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5">
              Conheça a trajetória
            </a>
            <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand-brown)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5">
              Apoiar na vaquinha
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full border-2 border-[var(--brand-green-deep)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-green-deep)] transition-colors hover:bg-[var(--brand-green-deep)] hover:text-primary-foreground">
              Ver Instagram
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[var(--brand-green-deep)]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border-4 border-[var(--brand-brown)]/40 shadow-2xl">
            <img src={heroImage} alt="Renato Fonseca — A Voz do Axé" width={1536} height={1280} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section helpers ---------------- */

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-brown-deep)]">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-4xl tracking-tight text-[var(--brand-green-deep)] sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{intro}</p>}
    </div>
  );
}

/* ---------------- Highlights ---------------- */

function Highlights() {
  return (
    <section id="destaques" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Destaques" title="Uma caminhada com raiz, axé e presença" />
        <div className="grid gap-6 md:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => (
            <article key={i} className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-green-soft)] font-serif text-lg font-bold text-[var(--brand-green-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[var(--brand-brown)]/30" />
              </div>
              <h3 className="font-serif text-2xl leading-tight text-[var(--brand-green-deep)]">{h.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function Projects() {
  return (
    <section id="projetos" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Projetos"
          title="Cultura, axé e comunicação em movimento"
          intro="Iniciativas que celebram a ancestralidade, ocupam espaços e fortalecem a cultura popular."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article key={p.name} className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-lg">
              <span className="absolute right-4 top-4 text-xs font-bold uppercase tracking-widest text-[var(--brand-brown)]/60">
                0{i + 1}
              </span>
              <div className="mb-4 h-1 w-12 rounded-full bg-[var(--brand-green)]" />
              <h3 className="font-serif text-2xl text-[var(--brand-green-deep)]">{p.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Videos / Gallery / Agenda placeholders ---------------- */

function Videos() {
  return (
    <section id="videos" className="border-y border-border bg-[var(--brand-green-deep)] py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl text-center sm:mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-green-soft)]">Vídeos</span>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Falas, denúncias e cenas da caminhada</h2>
          <p className="mt-4 text-base text-primary-foreground/80">Em breve, uma seleção de vídeos com posicionamentos, eventos e registros públicos.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-2xl border border-white/15 bg-white/5 backdrop-blur transition-colors hover:bg-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Galeria de Fotos" title="Registros da rua, do palco e do terreiro" intro="Imagens dos eventos, encontros e mobilizações." />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`rounded-xl border border-border bg-gradient-to-br from-[var(--brand-green-soft)] to-[var(--brand-cream)] ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

const AGENDA = [
  {
    month: "Maio",
    icon: "✊🏾",
    events: [
      { date: "28/05", weekday: "Quinta", items: [
        { title: "Canjerê Pai Carlos", location: "Rua Berlanda Bezerra, 58, Caixa D'água — Olinda", time: "18h" },
        { title: "Ilê Axé Aziri Lade", location: "Rua Caracas, 325, Alto Sol Nascente — Olinda", time: "19h" },
      ]},
      { date: "29/05", weekday: "Sexta", items: [
        { title: "Inauguração Espaço Cultural Casa Macumba Ordinária — Lançamento Coletivo Maré Negra", location: "Espaço Cultura Casa Macumba Ordinária — Pátio do Terço — Recife", time: "18h" },
      ]},
      { date: "30/05", weekday: "Sábado", items: [
        { title: "Ylé Asé Dan Lodó", location: "Loteamento Vale do Capibaribe, Quadra 38 — Limoeiro", time: "13h" },
        { title: "Yle Axé Oyá Egunitá — Pai Flor", location: "Rua da Misericórdia, 205 — Macaxeira", time: "15h" },
        { title: "Cabaré da Ritinha — Pai Fábio", location: "Rua Transamazônica, 506, Fosfato — Abreu e Lima", time: "16h" },
        { title: "Roça Obá Aganjú Osún Opará", location: "Rua Ernesto Cavalcanti, 84 — Afogados/Recife", time: "17h" },
      ]},
      { date: "31/05", weekday: "Domingo", items: [
        { title: "Centro de Jurema Mestre José dos Anjos", location: "Rua Cascata de Cima, 38 — Santo Aleixo — Jaboatão dos Guararapes", time: "15h" },
        { title: "Roça de Xangô Ogodô — Pai Rinaldo de Xangô", location: "Rua São João, 14, Jardim Jordão", time: "18h" },
      ]},
    ],
  },
  {
    month: "Junho",
    icon: "✊🏾",
    events: [
      { date: "06/06", weekday: "Sábado", items: [
        { title: "Casa da Mestra Ritinha", location: "Rua Diadema, 53 — Vasco da Gama/Recife", time: "15h" },
        { title: "Catimbó dos Mestres — Espaço Cultural Casa Macumba Ordinária", location: "Rua Vidal de Negreiros, 100, Santo Antônio — Recife", time: "18h" },
      ]},
      { date: "10/06", weekday: "Quarta", items: [
        { title: "Centro de Umbanda Zé do Beco", location: "Vila Social — Surubim", time: "14h" },
      ]},
      { date: "13/06", weekday: "Sábado", items: [
        { title: "Tramissao Copa do Mundo — Espaço Cultural Casa Macumba Ordinária", location: "Rua Vidal de Negreiros, Santo Antônio — Recife", time: "" },
        { title: "Asé Alaafin", location: "Rua Dois de Fevereiro", time: "18h" },
      ]},
      { date: "21/06", weekday: "Sábado", items: [
        { title: "Roça Okueran", location: "Rua Córrego Central, 189 — Linha do Tiro", time: "18h" },
        { title: "Centro Cultural Caboclo Manoel da Luz", location: "Rua 21, 45, Maranguape 1 — Paulista", time: "19h" },
      ]},
      { date: "26/06", weekday: "Sexta", items: [
        { title: "Ilê Maroketú Asé Aronín", location: "Rua Dallas, 5 — Sítio Fragoso", time: "19h" },
      ]},
      { date: "27/06", weekday: "Sábado", items: [
        { title: "Samba dos Pretos Velhos — Ano 2 — Ylê Asé Keobambo Niwá Omin", location: "Rua Sertânia, 295 — Pau Amarelo", time: "18h" },
      ]},
    ],
  },
  {
    month: "Julho",
    icon: "✊🏾",
    events: [
      { date: "14/07", weekday: "Terça", items: [
        { title: "Canjerê Juremeiro Binho", location: "Rua Luiz Bezerra de Menezes, 38 — Águas Compridas — Olinda", time: "19h" },
      ]},
    ],
  },
];

function Agenda() {
  return (
    <section id="agenda" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Agenda"
          title="Onde Renato vai estar"
          intro="Acompanhe os próximos encontros, atos e eventos culturais da pré-campanha."
        />
        <div className="space-y-14">
          {AGENDA.map((group) => (
            <div key={group.month}>
              <div className="mb-6 flex items-center gap-3">
                <h3 className="font-serif text-3xl tracking-tight text-[var(--brand-green-deep)]">
                  {group.month}
                </h3>
                <span className="text-2xl">{group.icon}</span>
                <span className="h-px flex-1 bg-[var(--brand-brown)]/25" />
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.events.map((day) => (
                  <article
                    key={day.date}
                    className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-[var(--brand-green-deep)]">
                        {day.date}
                      </span>
                      <span className="rounded-full bg-[var(--brand-green-soft)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand-green-deep)]">
                        {day.weekday}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {day.items.map((item, idx) => (
                        <div key={idx} className="border-l-2 border-[var(--brand-green)]/40 pl-3">
                          <p className="text-[15px] font-semibold leading-snug text-foreground">
                            {item.title}
                          </p>
                          {item.location && (
                            <p className="mt-1 flex items-start gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
                              <span className="mt-0.5 text-[var(--brand-brown)]">📍</span>
                              {item.location}
                            </p>
                          )}
                          {item.time && (
                            <p className="mt-1 text-[12px] font-medium text-[var(--brand-brown-deep)]">
                              🕐 {item.time}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-dashed border-[var(--brand-brown)]/40 bg-card p-8 text-center">
          <p className="text-foreground/70">
            Novas datas serão divulgadas em breve. Acompanhe pelo Instagram{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--brand-green-deep)] underline"
            >
              @renatofonsecape
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Support ---------------- */

function Support() {
  const share = async () => {
    const url = VAQUINHA_URL;
    const text = "Apoie a pré-campanha de Renato Fonseca — A Voz do Axé.";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Renato Fonseca", text, url });
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast.success("Link copiado para compartilhar!");
      }
    } catch {
      /* user cancelled */
    }
  };

  return (
    <section id="apoie" className="relative overflow-hidden bg-[var(--brand-brown-deep)] py-24 text-primary-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.09_150),transparent_60%),radial-gradient(circle_at_70%_80%,oklch(0.35_0.08_55),transparent_55%)]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-green-soft)]">Apoie</span>
        <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">Apoie essa caminhada</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">
          A construção de uma voz pública em defesa do axé, da cultura popular, da igualdade racial e da liberdade religiosa também precisa de apoio coletivo.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-primary-foreground/85">
          Contribua com a pré-campanha de Renato Fonseca e ajude essa mensagem a chegar mais longe.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand-green)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl transition-transform hover:-translate-y-0.5">
            Apoiar na vaquinha
          </a>
          <button onClick={share} className="rounded-full border-2 border-white/70 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[var(--brand-brown-deep)]">
            Compartilhar com amigos
          </button>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-sm text-primary-foreground/70">
          Cada contribuição fortalece a comunicação, os encontros, os materiais, a circulação da agenda e a mobilização em defesa de uma política com axé, presença e compromisso popular.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Social ---------------- */

function Social() {
  return (
    <section id="redes" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Redes Sociais" title="Acompanhe e fortaleça essa voz" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((s) => (
            <article key={s.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-serif text-xl text-[var(--brand-green-deep)]">{s.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--brand-brown-deep)]">{s.handle}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">{s.text}</p>
              <a href={s.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--brand-green-deep)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[var(--brand-green)]">
                {s.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const [form, setForm] = useState({
    nome: "", email: "", whatsapp: "", cidade: "", estado: "", assunto: "", mensagem: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      toast.error("Preencha nome, e-mail e mensagem.");
      return;
    }
    toast.success("Mensagem registrada. Em breve a equipe entrará em contato.");
    setForm({ nome: "", email: "", whatsapp: "", cidade: "", estado: "", assunto: "", mensagem: "" });
  };

  const input = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/30";

  return (
    <section id="contato" className="border-t border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-brown-deep)]">Contato</span>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-[var(--brand-green-deep)] sm:text-5xl">
            Quer falar com Renato Fonseca?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            Envie convites, denúncias, propostas de parceria, solicitações de agenda, imprensa, eventos ou mensagens para a equipe.
          </p>
          <div className="mt-8 rounded-2xl border-l-4 border-[var(--brand-brown)] bg-card p-6 shadow-sm">
            <h3 className="font-serif text-xl text-[var(--brand-green-deep)]">Tem uma denúncia de intolerância religiosa?</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Envie sua mensagem com segurança para que a equipe possa acolher, organizar e encaminhar o retorno.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-[var(--brand-brown)] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--brand-brown-deep)] transition-colors hover:bg-[var(--brand-brown)] hover:text-primary-foreground">
            Falar no WhatsApp
          </a>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome"><input name="nome" value={form.nome} onChange={onChange} className={input} maxLength={120} required /></Field>
            <Field label="E-mail"><input name="email" type="email" value={form.email} onChange={onChange} className={input} maxLength={200} required /></Field>
            <Field label="WhatsApp"><input name="whatsapp" value={form.whatsapp} onChange={onChange} className={input} maxLength={30} /></Field>
            <Field label="Cidade"><input name="cidade" value={form.cidade} onChange={onChange} className={input} maxLength={80} /></Field>
            <Field label="Estado"><input name="estado" value={form.estado} onChange={onChange} className={input} maxLength={40} /></Field>
            <Field label="Assunto"><input name="assunto" value={form.assunto} onChange={onChange} className={input} maxLength={120} /></Field>
          </div>
          <div className="mt-4">
            <Field label="Mensagem">
              <textarea name="mensagem" value={form.mensagem} onChange={onChange} className={`${input} min-h-[140px] resize-y`} maxLength={2000} required />
            </Field>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            <strong className="text-foreground/80">Aviso LGPD:</strong> Ao enviar, você declara estar ciente da Política de Privacidade e autoriza o uso dos dados para contato, comunicação e organização das ações relacionadas à atuação pública de Renato Fonseca.
          </p>
          <button type="submit" className="mt-5 w-full rounded-full bg-[var(--brand-green-deep)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[var(--brand-green)]">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--brand-brown-deep)]">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-[var(--brand-green-deep)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="font-serif text-3xl">Renato Fonseca</h3>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">A Voz do Axé!</p>
          <p className="mt-3 text-xs uppercase tracking-wider text-primary-foreground/70">
            Produtor Cultural · Conselheiro de Cultura de PE · Conselheiro de Igualdade Racial · Pré-candidato a Deputado Federal
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/85">
            Comunicação, cultura e presença pública em defesa do axé, da igualdade racial, da liberdade religiosa e da cultura popular.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Navegar</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#projetos" className="hover:underline">Projetos</a></li>
            <li><a href="#agenda" className="hover:underline">Agenda</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Conecte-se</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:underline">Instagram: @renatofonsecape</a></li>
            <li><a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="hover:underline">Apoiar na vaquinha</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Renato Fonseca — A Voz do Axé. Conteúdo de pré-campanha.
      </div>
    </footer>
  );
}
