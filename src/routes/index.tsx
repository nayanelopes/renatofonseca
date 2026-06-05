import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import logoAsset from "@/assets/logo-renato.jpg.asset.json";
import renatoPhotoAsset from "@/assets/renato-foto.png.asset.json";
import {
  MessageCircle,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  Music2,
  MapPin,
  Calendar,
  ChevronRight,
  Flame,
  ShieldCheck,
  Landmark,
  Drum,
  Sprout,
  Users,
  HandHeart,
  HomeIcon,
  Brain,
  GraduationCap,
  Sparkles,
  Quote,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renato Fonseca — Pré-candidato a Deputado Federal por Pernambuco" },
      {
        name: "description",
        content:
          "Renato Fonseca: ex-morador de rua, juremeiro há 22 anos, fundador da Macumba Ordinária e pré-candidato a Deputado Federal. Cultura, dignidade e oportunidades para Pernambuco.",
      },
      { property: "og:title", content: "Renato Fonseca — Da rua à luta" },
      {
        property: "og:description",
        content:
          "Cultura, dignidade e oportunidades para Pernambuco. Conheça a trajetória e as bandeiras do pré-candidato Renato Fonseca.",
      },
      { property: "og:image", content: renatoPhotoAsset.url },
      { name: "twitter:image", content: renatoPhotoAsset.url },
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
  { label: "Quem é Renato", href: "#quem" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Macumba Ordinária", href: "#macumba" },
  { label: "Bandeiras", href: "#bandeiras" },
  { label: "Propostas", href: "#propostas" },
  { label: "Agenda", href: "#agenda" },
  { label: "Galeria", href: "#galeria" },
  { label: "Faça Parte", href: "#participe" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster richColors position="top-center" />
      <Header />
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
      <Footer />
      <FixedWhatsApp />
    </div>
  );
}

/* ============ Header ============ */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoImage} alt="Renato Fonseca" className="h-12 w-auto sm:h-14" />
        </a>
        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-medium text-foreground/75 transition-colors hover:text-[var(--brand-green-deep)]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand-green-deep)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">
            Quero Apoiar
          </a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-md border border-border px-3 py-2 text-sm xl:hidden">
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/85">
                {l.label}
              </a>
            ))}
            <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-[var(--brand-green-deep)] px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Quero Apoiar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============ Hero ============ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--brand-green-soft),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.92_0.05_55),transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-brown)]/40 bg-[var(--brand-cream)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-brown-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
            Pré-candidato a Deputado Federal · Pernambuco
          </span>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-[var(--brand-green-deep)] sm:text-6xl lg:text-7xl">
            RENATO<br />FONSECA
          </h1>
          <p className="mt-5 text-xl font-semibold leading-snug text-[var(--brand-brown-deep)] sm:text-2xl">
            Da rua à luta: cultura, dignidade e oportunidades para Pernambuco.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Ex-morador de rua, juremeiro há 22 anos, fundador da <strong>Macumba Ordinária</strong> e defensor dos povos tradicionais, da cultura popular e da liberdade religiosa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green-deep)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
              <Heart className="h-4 w-4" /> Quero Apoiar
            </a>
            <a href="#quem" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-green-deep)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--brand-green-deep)] transition-colors hover:bg-[var(--brand-green-deep)] hover:text-primary-foreground">
              Conheça Minha História <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-brown)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--brand-green-deep)]/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[var(--brand-brown)]/40 shadow-2xl">
            <img src={heroImage} alt="Renato Fonseca, pré-candidato a Deputado Federal" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-[var(--brand-green-deep)] px-4 py-3 text-primary-foreground shadow-xl sm:-bottom-6 sm:-left-6">
            <p className="font-serif text-xl font-bold leading-none sm:text-2xl">22 anos</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">na Jurema Sagrada</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, intro, light }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className={`text-[11px] font-bold uppercase tracking-[0.28em] ${light ? "text-[var(--brand-green-soft)]" : "text-[var(--brand-brown-deep)]"}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl ${light ? "text-primary-foreground" : "text-[var(--brand-green-deep)]"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  );
}

/* ============ Story ============ */
function Story() {
  return (
    <section id="quem" className="border-y border-border bg-[var(--brand-cream)]/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Quem é Renato Fonseca" title="Uma história real de transformação" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
            <p>
              Renato Fonseca viveu em <strong>abrigos durante a adolescência</strong> e foi <strong>morador de rua</strong>. Enfrentou a dependência química e reconstruiu sua vida através da fé, da cultura e do trabalho comunitário.
            </p>
            <p>
              Juremeiro há 22 anos, <strong>tombado ao Mestre Manoel Quebra Pedra</strong>, atua na defesa dos povos tradicionais, da liberdade religiosa e na valorização da cultura popular pernambucana.
            </p>
            <p>
              É criador da <strong>Macumba Ordinária</strong> — movimento de resistência das religiões de matriz africana — e do <strong>Espaço Cultural Macumba Ordinária</strong>, no Pátio do Terço, em Recife.
            </p>
          </div>
          <blockquote className="relative rounded-3xl border-l-4 border-[var(--brand-brown)] bg-card p-8 shadow-md">
            <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-[var(--brand-green-deep)] p-2 text-[var(--brand-green-soft)]" />
            <p className="font-serif text-xl italic leading-relaxed text-[var(--brand-green-deep)] sm:text-2xl">
              "Conheço a dor da exclusão porque vivi ela. Conheço a força da fé porque ela me levantou. Conheço a importância da cultura porque ela salvou minha vida. Agora quero transformar essa experiência em políticas públicas para Pernambuco."
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[var(--brand-brown-deep)]">— Renato Fonseca</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ============ Timeline ============ */
const TIMELINE = [
  { year: "Adolescência", title: "Vida em abrigos", text: "Início de uma trajetória marcada pela vulnerabilidade social." },
  { year: "Juventude", title: "Morador de rua", text: "Sobrevivência, exclusão e o aprendizado de quem viu a cidade pelo avesso." },
  { year: "Superação", title: "Dependência química vencida", text: "A reconstrução começa pela fé, pelo cuidado e pelos vínculos comunitários." },
  { year: "22 anos", title: "Caminhada na Jurema Sagrada", text: "Tradição, ancestralidade e pertencimento." },
  { year: "Tombamento", title: "Tombado ao Mestre Manoel Quebra Pedra", text: "Compromisso espiritual e responsabilidade com a tradição." },
  { year: "Comunidade", title: "Atuação comunitária", text: "Trabalho de base com terreiros, povos tradicionais e periferias." },
  { year: "Movimento", title: "Criação da Macumba Ordinária", text: "Cultura, comunicação e resistência das religiões de matriz africana." },
  { year: "Defesa pública", title: "Combate à intolerância religiosa", text: "Denúncia, articulação e proteção dos terreiros." },
  { year: "Território", title: "Espaço Cultural Macumba Ordinária", text: "Casa de cultura, encontro e formação no Pátio do Terço." },
  { year: "Agora", title: "Entrada na vida pública", text: "Pré-candidatura a Deputado Federal pelo povo de Pernambuco." },
];

function Timeline() {
  return (
    <section id="trajetoria" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Linha do Tempo" title="A caminhada até aqui" intro="Marcos de uma trajetória de superação, fé e compromisso." />
        <ol className="relative space-y-8 border-l-2 border-[var(--brand-brown)]/30 pl-8 md:pl-12">
          {TIMELINE.map((m, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-green-deep)] text-xs font-bold text-primary-foreground shadow md:-left-[54px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-brown-deep)]">{m.year}</span>
                <h3 className="mt-1 font-serif text-xl font-bold text-[var(--brand-green-deep)] sm:text-2xl">{m.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ Macumba Ordinária ============ */
function MacumbaOrdinaria() {
  const stats = [
    { n: "+500k", l: "Alcance digital" },
    { n: "+100", l: "Eventos realizados" },
    { n: "+30", l: "Projetos culturais" },
    { n: "+80", l: "Comunidades atendidas" },
  ];
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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {pilares.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                <Flame className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-green-soft)]" />
                <span className="text-sm font-medium leading-snug">{p}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur">
                <p className="font-serif text-4xl font-bold leading-none sm:text-5xl">{s.n}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-green-soft)]">{s.l}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm leading-relaxed text-primary-foreground/85">
                O <strong>Espaço Cultural Macumba Ordinária</strong>, no Pátio do Terço (Recife), é casa de encontro, formação, celebração e defesa do povo de terreiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Bandeiras ============ */
const BANDEIRAS = [
  { icon: ShieldCheck, title: "Regularização de Terreiros", text: "Formalização através de CNPJ e acesso a direitos." },
  { icon: Flame, title: "Combate à Intolerância Religiosa", text: "Proteção jurídica e institucional para o povo de terreiro." },
  { icon: Landmark, title: "Terreiros Históricos", text: "Mapeamento e valorização dos mais antigos." },
  { icon: Drum, title: "Cultura Popular", text: "Fortalecimento dos grupos culturais pernambucanos." },
  { icon: Sprout, title: "Economia Criativa", text: "Geração de renda através da cultura." },
  { icon: Users, title: "Povos Tradicionais", text: "Reconhecimento, proteção e visibilidade." },
  { icon: HandHeart, title: "Projetos Sociais", text: "Fortalecimento das comunidades de base." },
  { icon: HomeIcon, title: "População em Situação de Rua", text: "Acolhimento e reinserção com dignidade." },
  { icon: Brain, title: "Saúde Mental e Recuperação", text: "Apoio a pessoas em situação de vulnerabilidade." },
  { icon: GraduationCap, title: "Juventude", text: "Oportunidades, cultura e educação." },
];

function Bandeiras() {
  return (
    <section id="bandeiras" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Nossas Bandeiras" title="As lutas que carregamos" intro="Pautas concretas para Pernambuco — feitas com escuta, base e território." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {BANDEIRAS.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green-soft)] text-[var(--brand-green-deep)] transition-colors group-hover:bg-[var(--brand-green-deep)] group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold leading-tight text-[var(--brand-green-deep)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Propostas ============ */
const PROPOSTAS = [
  "Programa de regularização de terreiros",
  "Cadastro estadual de terreiros históricos",
  "Fundo de incentivo à cultura popular",
  "Proteção contra a intolerância religiosa",
  "Apoio a projetos sociais comunitários",
  "Fortalecimento da economia criativa",
  "Programas para população em situação de rua",
  "Políticas para recuperação e reinserção social",
  "Apoio a mestres e mestras da cultura popular",
  "Preservação da Jurema Sagrada e dos patrimônios culturais",
];

function Propostas() {
  return (
    <section id="propostas" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Propostas" title="Compromissos com Pernambuco" intro="Eixos prioritários para transformar experiência em política pública." />
        <ul className="grid gap-4 sm:grid-cols-2">
          {PROPOSTAS.map((p, i) => (
            <li key={p} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green-deep)] font-serif text-sm font-bold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[15px] font-semibold leading-snug text-[var(--brand-green-deep)]">{p}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============ Agenda ============ */
const AGENDA = [
  {
    month: "Maio",
    events: [
      { date: "28/05", weekday: "Quinta", items: [
        { title: "Canjerê Pai Carlos", location: "Rua Berlanda Bezerra, 58, Caixa D'água — Olinda", time: "18h" },
        { title: "Ilê Axé Aziri Lade", location: "Rua Caracas, 325, Alto Sol Nascente — Olinda", time: "19h" },
      ]},
      { date: "29/05", weekday: "Sexta", items: [
        { title: "Inauguração Espaço Cultural Casa Macumba Ordinária — Lançamento Coletivo Maré Negra", location: "Pátio do Terço — Recife", time: "18h" },
      ]},
      { date: "30/05", weekday: "Sábado", items: [
        { title: "Ylé Asé Dan Lodó", location: "Vale do Capibaribe, Q.38 — Limoeiro", time: "13h" },
        { title: "Yle Axé Oyá Egunitá — Pai Flor", location: "Rua da Misericórdia, 205 — Macaxeira", time: "15h" },
        { title: "Cabaré da Ritinha — Pai Fábio", location: "Rua Transamazônica, 506 — Abreu e Lima", time: "16h" },
        { title: "Roça Obá Aganjú Osún Opará", location: "Rua Ernesto Cavalcanti, 84 — Afogados", time: "17h" },
      ]},
      { date: "31/05", weekday: "Domingo", items: [
        { title: "Centro de Jurema Mestre José dos Anjos", location: "Santo Aleixo — Jaboatão", time: "15h" },
        { title: "Roça de Xangô Ogodô — Pai Rinaldo", location: "Jardim Jordão", time: "18h" },
      ]},
    ],
  },
  {
    month: "Junho",
    events: [
      { date: "06/06", weekday: "Sábado", items: [
        { title: "Casa da Mestra Ritinha", location: "Vasco da Gama — Recife", time: "15h" },
        { title: "Catimbó dos Mestres — Espaço Cultural Macumba Ordinária", location: "Santo Antônio — Recife", time: "18h" },
      ]},
      { date: "10/06", weekday: "Quarta", items: [
        { title: "Centro de Umbanda Zé do Beco", location: "Vila Social — Surubim", time: "14h" },
      ]},
      { date: "13/06", weekday: "Sábado", items: [
        { title: "Transmissão Copa do Mundo — Espaço Cultural", location: "Santo Antônio — Recife", time: "" },
        { title: "Asé Alaafin", location: "Rua Dois de Fevereiro", time: "18h" },
      ]},
      { date: "21/06", weekday: "Sábado", items: [
        { title: "Roça Okueran", location: "Linha do Tiro", time: "18h" },
        { title: "Centro Cultural Caboclo Manoel da Luz", location: "Maranguape 1 — Paulista", time: "19h" },
      ]},
      { date: "26/06", weekday: "Sexta", items: [
        { title: "Ilê Maroketú Asé Aronín", location: "Sítio Fragoso", time: "19h" },
      ]},
      { date: "27/06", weekday: "Sábado", items: [
        { title: "Samba dos Pretos Velhos — Ano 2", location: "Pau Amarelo", time: "18h" },
      ]},
    ],
  },
  {
    month: "Julho",
    events: [
      { date: "14/07", weekday: "Terça", items: [
        { title: "Canjerê Juremeiro Binho", location: "Águas Compridas — Olinda", time: "19h" },
      ]},
    ],
  },
];

function Agenda() {
  return (
    <section id="agenda" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Agenda" title="Onde Renato vai estar" intro="Visitas, encontros, atos e eventos da pré-campanha." />
        <div className="space-y-12">
          {AGENDA.map((group) => (
            <div key={group.month}>
              <div className="mb-5 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-[var(--brand-brown)]" />
                <h3 className="font-serif text-2xl font-bold tracking-tight text-[var(--brand-green-deep)] sm:text-3xl">{group.month}</h3>
                <span className="h-px flex-1 bg-[var(--brand-brown)]/25" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.events.map((day) => (
                  <article key={day.date} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="mb-3 flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-[var(--brand-green-deep)]">{day.date}</span>
                      <span className="rounded-full bg-[var(--brand-green-soft)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-green-deep)]">{day.weekday}</span>
                    </div>
                    <div className="space-y-3">
                      {day.items.map((it, idx) => (
                        <div key={idx} className="border-l-2 border-[var(--brand-green)]/40 pl-3">
                          <p className="text-[14px] font-semibold leading-snug">{it.title}</p>
                          {it.location && <p className="mt-1 flex items-start gap-1.5 text-[12px] text-muted-foreground"><MapPin className="mt-0.5 h-3 w-3 shrink-0 text-[var(--brand-brown)]" />{it.location}</p>}
                          {it.time && <p className="mt-0.5 text-[11px] font-bold text-[var(--brand-brown-deep)]">🕐 {it.time}</p>}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Galeria ============ */
const GALERIA_CATS = [
  "Cultura Popular",
  "Povos Tradicionais",
  "Terreiros",
  "Comunidades",
  "Ações Sociais",
  "Orgulho de Axé",
  "Espaço Cultural",
  "Bastidores",
];
function Galeria() {
  return (
    <section id="galeria" className="border-y border-border bg-[var(--brand-cream)]/60 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Galeria" title="Registros da caminhada" intro="Imagens da rua, do palco, do terreiro e da comunidade." />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {GALERIA_CATS.map((c) => (
            <span key={c} className="rounded-full border border-[var(--brand-brown)]/30 bg-card px-3 py-1.5 text-xs font-semibold text-[var(--brand-brown-deep)]">
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`flex items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-[var(--brand-green-soft)] via-card to-[var(--brand-cream)] text-[var(--brand-green-deep)]/40 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
              <Sparkles className="h-8 w-8" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Novas imagens em breve.</p>
      </div>
    </section>
  );
}

/* ============ Depoimentos ============ */
const DEPOIMENTOS = [
  { name: "Mãe Beth de Oxum", role: "Liderança religiosa", text: "Renato é voz firme do povo de terreiro. Caminha com a gente, escuta e defende." },
  { name: "Mestre João do Coco", role: "Mestre da cultura popular", text: "Ele entende o valor dos mestres. Põe a cara, abre porta, fortalece a tradição." },
  { name: "Coletivo Maré Negra", role: "Coletivo artístico", text: "A Macumba Ordinária mudou a forma como falamos de fé, cultura e resistência." },
];
function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Depoimentos" title="Quem caminha junto" />
        <div className="grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <article key={d.name} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Quote className="absolute -top-3 left-5 h-8 w-8 rounded-full bg-[var(--brand-brown)] p-1.5 text-primary-foreground" />
              <p className="mt-3 text-[15px] italic leading-relaxed text-foreground/85">"{d.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-serif text-base font-bold text-[var(--brand-green-deep)]">{d.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-brown-deep)]">{d.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Mapa PE ============ */
const REGIOES = [
  { name: "Região Metropolitana do Recife", info: "Recife, Olinda, Jaboatão, Paulista, Abreu e Lima" },
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
          {REGIOES.map((r) => (
            <article key={r.name} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <MapPin className="h-6 w-6 text-[var(--brand-green-soft)]" />
              <h3 className="mt-3 font-serif text-lg font-bold leading-tight">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{r.info}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Faça Parte ============ */
const PARTICIPACAO = [
  "Quero ser voluntário",
  "Quero divulgar a campanha",
  "Quero organizar uma reunião",
  "Sou liderança de terreiro",
  "Sou liderança comunitária",
  "Sou artista",
  "Sou produtor cultural",
  "Quero receber notícias",
];

function FacaParte() {
  const [form, setForm] = useState({
    nome: "", cidade: "", bairro: "", whatsapp: "", email: "", profissao: "",
  });
  const [opts, setOpts] = useState<Record<string, boolean>>({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggle = (k: string) => setOpts({ ...opts, [k]: !opts[k] });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) {
      toast.error("Preencha pelo menos nome e WhatsApp.");
      return;
    }
    toast.success("Bem-vindo(a) à caminhada! Em breve entraremos em contato.");
    setForm({ nome: "", cidade: "", bairro: "", whatsapp: "", email: "", profissao: "" });
    setOpts({});
  };

  const input = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/30";

  return (
    <section id="participe" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--brand-brown-deep)]">Faça parte</span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[var(--brand-green-deep)] sm:text-5xl">
            Quero fazer parte dessa caminhada
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            Voluntários, lideranças, artistas, produtores e comunidades. A construção é coletiva — e começa por você.
          </p>
          <div className="mt-6 rounded-2xl border-l-4 border-[var(--brand-green)] bg-card p-5 text-sm text-foreground/80 shadow-sm">
            Seus dados são tratados com responsabilidade, conforme a <strong>LGPD</strong> e a legislação eleitoral brasileira.
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-md">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome *"><input name="nome" value={form.nome} onChange={onChange} className={input} maxLength={120} required /></Field>
            <Field label="WhatsApp *"><input name="whatsapp" value={form.whatsapp} onChange={onChange} className={input} maxLength={30} required /></Field>
            <Field label="Cidade"><input name="cidade" value={form.cidade} onChange={onChange} className={input} maxLength={80} /></Field>
            <Field label="Bairro"><input name="bairro" value={form.bairro} onChange={onChange} className={input} maxLength={80} /></Field>
            <Field label="E-mail"><input name="email" type="email" value={form.email} onChange={onChange} className={input} maxLength={200} /></Field>
            <Field label="Profissão"><input name="profissao" value={form.profissao} onChange={onChange} className={input} maxLength={80} /></Field>
          </div>
          <fieldset className="mt-6">
            <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--brand-brown-deep)]">Como você quer participar?</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {PARTICIPACAO.map((p) => (
                <label key={p} className={`flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${opts[p] ? "border-[var(--brand-green)] bg-[var(--brand-green-soft)]" : "border-border bg-background hover:border-[var(--brand-green)]/50"}`}>
                  <input type="checkbox" checked={!!opts[p]} onChange={() => toggle(p)} className="mt-0.5 h-4 w-4 accent-[var(--brand-green-deep)]" />
                  <span className="leading-snug">{p}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-green-deep)] px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
            <Heart className="h-4 w-4" /> Quero fazer parte
          </button>
        </form>
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

/* ============ Redes ============ */
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
          {REDES.map(({ name, url, Icon, handle }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-green-deep)] text-primary-foreground transition-colors group-hover:bg-[var(--brand-brown)]">
                <Icon className="h-6 w-6" />
              </span>
              <p className="font-serif text-base font-bold text-[var(--brand-green-deep)]">{name}</p>
              <p className="text-xs font-semibold text-[var(--brand-brown-deep)]">{handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Apoio (vaquinha) ============ */
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
          <a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-xl transition-transform hover:-translate-y-0.5">
            <Heart className="h-4 w-4" /> Apoiar na vaquinha
          </a>
          <a href="#participe" className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[var(--brand-brown-deep)]">
            Faça parte da caminhada <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Footer ============ */
function Footer() {
  return (
    <footer className="bg-[var(--brand-green-deep)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={logoImage} alt="Renato Fonseca" className="h-16 w-auto rounded-md bg-white/95 p-2" />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">Da rua à luta</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/85">
            Cultura, dignidade e oportunidades para Pernambuco. Pré-candidatura a Deputado Federal.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Navegar</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#quem" className="hover:underline">Quem é Renato</a></li>
            <li><a href="#bandeiras" className="hover:underline">Bandeiras</a></li>
            <li><a href="#propostas" className="hover:underline">Propostas</a></li>
            <li><a href="#agenda" className="hover:underline">Agenda</a></li>
            <li><a href="#participe" className="hover:underline">Faça parte</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
            <li><a href="mailto:contato@renatofonseca.com" className="hover:underline">contato@renatofonseca.com</a></li>
            <li><a href={VAQUINHA_URL} target="_blank" rel="noreferrer" className="hover:underline">Apoiar a campanha</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">Redes</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="hover:underline">YouTube</a></li>
            <li><a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="hover:underline">TikTok</a></li>
          </ul>
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

/* ============ Fixed WhatsApp ============ */
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
