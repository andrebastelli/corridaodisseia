import { useState } from "react";
import { useNavigate } from "react-router-dom";
import odisseiaImg from "@/assets/Odisseia.png";
import kitImg from "@/assets/Kit.png";
import imagem1 from "@/assets/imagem1.jpg";
import imagem2 from "@/assets/imagem2.jpg";
import imagem3 from "@/assets/imagem3.jpg";
import imagem4 from "@/assets/imagem4.jpg";
import logo from "@/assets/logo-odisseia.png";
import header from "@/assets/logo-odisseia-1.png";

const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "5519999999999"; // [DADO A CONFIRMAR]

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const DEFAULT_WPP_MSG =
  "Olá! Vim pela Landing Page da 2ª Corrida Odisseia Pandora e quero garantir minha vaga. Pode me ajudar com as informações de inscrição, modalidade e kit?";

export default function App() {
  return (
    <div className="min-h-screen bg-pandora-cream text-pandora-text">
      <SchemaJsonLd />
      <Header />
      <main role="main">
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Benefits />
        <Modalities />
        <Kit />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Differentials />
        <Objections />
        <LeadForm />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
    </div>
  );
}

function SchemaJsonLd() {
  const event = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "2ª Corrida Odisseia Pandora",
    description:
      "Evento esportivo e comunitário da Pandora Educacional em Limeira/SP, com modalidades de 3 km caminhada e 5 km corrida.",
    startDate: "2026-08-23",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Limeira/SP",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Limeira",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    organizer: { "@type": "Organization", name: "Pandora Educacional" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
    />
  );
}

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header
      role="navigation"
      className="sticky top-0 z-40 backdrop-blur-md bg-pandora-cream/85 border-b border-pandora-border"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center">
          <img
            src={header}
            alt="Odisseia Pandora"
            className="h-20 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-pandora-text">
          <a href="#modalidades" className="hover:text-pandora-orange">Modalidades</a>
          <a href="#kit" className="hover:text-pandora-orange">Kit</a>
          <a href="#como-funciona" className="hover:text-pandora-orange">Como funciona</a>
          <a href="#fotos" className="hover:text-pandora-orange">Fotos</a>
          <a href="#faq" className="hover:text-pandora-orange">FAQ</a>
        </nav>
        <a href="#inscricao" className="btn-primary text-sm hidden sm:inline-flex">
          Quero minha vaga
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-pandora-wine via-[#a31a30] to-pandora-orange text-pandora-cream"
    >
      <GreekPattern />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-pandora-cream/15 border border-pandora-cream/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-pandora-gold" /> 2ª Edição · #SangueLaranja
          </span>
          <h1 className="mt-5 font-display font-black leading-[0.95] text-[clamp(2.5rem,8vw,5.5rem)]">
            <span className="relative top-[2px]">
              Garanta sua vaga na{" "}
            </span>
            <img
              src={logo}
              alt="Odisseia Pandora"
              className="inline-block h-[1.6em] ml-3 mt-4"
            />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-pandora-cream/90 max-w-xl leading-relaxed">
            Participe da 2ª Corrida Odisseia Pandora em Limeira/SP e viva uma
            experiência épica em família, com modalidades de{" "}
            <strong>3 km caminhada</strong> e <strong>5 km corrida</strong>.
          </p>
          <p className="mt-3 text-base text-pandora-cream/80 max-w-xl">
            Você não precisa ser atleta para participar. Escolha seu percurso,
            entre no clima #SangueLaranja e aproveite a pré-venda exclusiva.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inscricao" className="btn-primary">
              Quero garantir minha vaga →
            </a>
            <a
              href="#modalidades"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-pandora-cream/60 px-7 py-4 font-bold text-pandora-cream hover:bg-pandora-cream/10 transition"
            >
              Ver modalidades
            </a>
          </div>
          <p className="mt-4 text-xs text-pandora-cream/70">
            Pré-venda por tempo limitado. Valores, regras e lote vigente:{" "}
            <strong>[DADO A CONFIRMAR]</strong>.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { k: "Data", v: "23 de agosto" },
              { k: "Cidade", v: "Limeira/SP" },
              { k: "Caminhada", v: "3 km" },
              { k: "Corrida", v: "5 km" },
            ].map((i) => (
              <div
                key={i.k}
                className="rounded-2xl bg-pandora-cream/10 border border-pandora-cream/20 px-3 py-3"
              >
                <div className="text-[10px] uppercase tracking-widest text-pandora-gold font-bold">
                  {i.k}
                </div>
                <div className="text-sm font-extrabold mt-1">{i.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
  <div className="rounded-3xl bg-pandora-cream/10 border border-pandora-cream/20 p-6 backdrop-blur-sm">
    <img
      src={odisseiaImg}
      alt="Odisseia Pandora"
      className="w-full max-w-sm object-contain"
    />
  </div>
</div>
      </div>
    </section>
  );
}

function GreekPattern() {
  return (
    <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="greek" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 H20 V0 H40 M20 20 V40" fill="none" stroke="currentColor" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#greek)" />
    </svg>
  );
}

/*
function HeroIllustration() {
  return (
    <div className="relative aspect-[4/5] max-w-md mx-auto w-full">
      <div className="absolute inset-0 rounded-[2.5rem] bg-pandora-cream/10 backdrop-blur-sm border border-pandora-cream/20" />
      <svg viewBox="0 0 400 500" className="relative w-full h-full" aria-label="Ilustração da Corrida Odisseia Pandora">
        <circle cx="200" cy="140" r="90" fill="#F6B756" opacity="0.85" />
        {[60, 130, 200, 270, 340].map((x) => (
          <g key={x}>
            <rect x={x - 10} y="220" width="20" height="140" fill="#FFF1DE" opacity="0.85" />
            <rect x={x - 16} y="215" width="32" height="10" fill="#FFF1DE" />
            <rect x={x - 16} y="360" width="32" height="10" fill="#FFF1DE" />
          </g>
        ))}
        <g transform="translate(140 360)">
          <circle cx="60" cy="20" r="18" fill="#FFF1DE" />
          <path d="M40 60 Q60 35 85 50 L100 80 L80 110 L100 130 M40 60 L20 90 M60 90 L70 130" stroke="#FFF1DE" strokeWidth="10" strokeLinecap="round" fill="none" />
        </g>
        <g transform="translate(310 380)">
          <path d="M0 0 L20 0 L10 30 Z" fill="#F6B756" />
          <circle cx="10" cy="50" r="22" fill="#F6B756" stroke="#FFF1DE" strokeWidth="3" />
          <text x="10" y="56" textAnchor="middle" fontWeight="900" fontSize="18" fill="#8A1628">2</text>
        </g>
      </svg>
    </div>
  );
} */

function SocialProof() {
  const items = [
    { t: "2ª edição", s: "Uma nova jornada Odisseia." },
    { t: "3 km caminhada", s: "Leveza em família." },
    { t: "5 km corrida", s: "Para se desafiar." },
    { t: "Limeira/SP", s: "Evento da comunidade Pandora." },
    { t: "Pré-venda exclusiva", s: "Condição por tempo limitado." },
  ];
  return (
    <section className="bg-pandora-cream border-y border-pandora-border">
      <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((i) => (
          <div key={i.t} className="text-center md:text-left">
            <div className="font-display font-extrabold text-pandora-wine text-lg">{i.t}</div>
            <div className="text-xs text-pandora-muted mt-1">{i.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <Section bg="bg-pandora-cream">
      <SectionHeading eyebrow="Antes de você adiar" title="Você quer participar, mas ainda está em dúvida?" />
      <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
        <p className="text-lg leading-relaxed text-pandora-text/90">
          Muita gente gosta da ideia de participar da Corrida Odisseia Pandora,
          mas acaba deixando para depois porque ainda tem dúvidas simples.
          Essa indecisão pode fazer você perder a pré-venda e deixar a inscrição para a última hora.
        </p>
        <ul className="space-y-3">
          {[
            "“Será que preciso correr?”",
            "“Posso ir com minha família?”",
            "“Qual percurso combina comigo?”",
            "“O que vem no kit?”",
            "“Até quando consigo garantir a condição especial?”",
          ].map((q) => (
            <li key={q} className="rounded-2xl bg-white border border-pandora-border px-5 py-3 font-medium text-pandora-text shadow-sm">
              {q}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Solution() {
  return (
    <Section bg="bg-white">
      <SectionHeading eyebrow="A jornada" title="Uma corrida para viver, caminhar, correr e lembrar" />
      <div className="mt-8 max-w-3xl text-lg leading-relaxed text-pandora-text/90 space-y-4">
        <p>A 2ª Corrida Odisseia Pandora foi pensada para quem quer participar de uma experiência esportiva leve, organizada e cheia de energia — mesmo sem ser atleta profissional.</p>
        <p>Escolha entre <strong>3 km caminhada</strong>, ideal para curtir com tranquilidade, ou <strong>5 km corrida</strong>, para quem deseja testar seus limites.</p>
        <p>Mais do que garantir uma vaga, o participante entra em uma experiência coletiva da Pandora Educacional, marcada por energia, pertencimento e conexão <strong>#SangueLaranja</strong>.</p>
      </div>
    </Section>
  );
}

const BENEFITS = [
  { t: "Participe mesmo sem ser atleta", d: "A modalidade 3 km caminhada permite que famílias, alunos e comunidade participem com leveza.", r: "Viver a Odisseia no seu ritmo." },
  { t: "Escolha o percurso ideal", d: "Duas modalidades: 3 km caminhada para experiência leve e 5 km corrida para um desafio maior.", r: "Participar com segurança e clareza." },
  { t: "Experiência em família", d: "Aproxima alunos, responsáveis, colaboradores e comunidade em uma jornada esportiva e afetiva.", r: "Criar memórias reais com quem importa." },
  { t: "Garanta a pré-venda", d: "Condição especial por tempo limitado, com benefício exclusivo para a comunidade #SangueLaranja.", r: "Vaga e kit antes do encerramento." },
  { t: "Entre no clima #SangueLaranja", d: "Identidade visual, kit e narrativa criam uma experiência marcante para quem participa.", r: "Orgulho de fazer parte da Pandora." },
  { t: "Receba orientação da equipe", d: "A página conecta você ao WhatsApp e ao formulário para dúvidas sobre kit, modalidade e retirada.", r: "Concluir sua inscrição com confiança." },
];

function Benefits() {
  return (
    <Section bg="bg-pandora-cream" id="beneficios">
      <SectionHeading eyebrow="Por que você vai amar" title="Benefícios pensados para a comunidade Pandora" />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map((b, i) => (
          <article key={b.t} className="relative rounded-3xl bg-white border border-pandora-border p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <div className="font-display font-black text-pandora-orange text-6xl leading-none opacity-90">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-3 font-display text-xl font-extrabold text-pandora-wine">{b.t}</h3>
            <p className="mt-2 text-pandora-text/90 leading-relaxed">{b.d}</p>
            <p className="mt-4 text-sm font-semibold text-pandora-orange-deep">→ {b.r}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Modalities() {
  return (
    <Section bg="bg-white" id="modalidades">
      <SectionHeading eyebrow="Escolha sua jornada" title="Escolha como você quer viver essa jornada" />
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <ModalityCard color="from-pandora-gold to-pandora-orange" dist="3 km" title="Caminhada" subtitle="Para curtir no seu ritmo" desc="Ideal para famílias, alunos e responsáveis que querem viver a experiência com leveza, sem necessidade de correr." bullets={["Quem não se considera corredor","Quem quer participar em família","Experiência mais tranquila","Sem pressão de performance"]} cta="Quero caminhar na Odisseia" msg="Olá! Vim pela Landing Page da 2ª Corrida Odisseia Pandora e tenho interesse na modalidade 3 km caminhada. Pode me ajudar com a inscrição?" />
        <ModalityCard color="from-pandora-orange to-pandora-wine" dist="5 km" title="Corrida" subtitle="Para desafiar seus limites" desc="Para quem deseja uma experiência mais intensa, com energia de corrida, superação pessoal e espírito de desafio." bullets={["Quem já corre ou quer começar","Quem busca superação pessoal","Experiência mais esportiva","Jornada completa com intensidade"]} cta="Quero correr na Odisseia" msg="Olá! Vim pela Landing Page da 2ª Corrida Odisseia Pandora e tenho interesse na modalidade 5 km corrida. Pode me ajudar com a inscrição?" />
      </div>
    </Section>
  );
}

function ModalityCard({ color, dist, title, subtitle, desc, bullets, cta, msg }: { color: string; dist: string; title: string; subtitle: string; desc: string; bullets: string[]; cta: string; msg: string }) {
  return (
    <article className="rounded-3xl overflow-hidden border border-pandora-border bg-white shadow-sm hover:shadow-xl transition">
      <div className={`bg-gradient-to-br ${color} px-7 py-8 text-white`}>
        <div className="font-display font-black text-6xl leading-none">{dist}</div>
        <div className="mt-2 font-display text-2xl font-extrabold">{title}</div>
        <div className="text-sm font-semibold opacity-90">{subtitle}</div>
      </div>
      <div className="p-7">
        <p className="text-pandora-text/90 leading-relaxed">{desc}</p>
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 items-start text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-pandora-orange" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a href={buildWhatsAppUrl(msg)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full">
          {cta}
        </a>
      </div>
    </article>
  );
}

function Kit() {
  const items = ["Camiseta laranja temática","Sacochila","Doleira / pochete","Número de peito","Medalha","Cordão / credencial"];
  return (
    <Section bg="bg-pandora-beige" id="kit">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading eyebrow="Kit do participante" title="Um kit para entrar na jornada" />
          <p className="mt-6 text-lg text-pandora-text/90 leading-relaxed">Os materiais da campanha apresentam um kit com identidade visual forte, pensado para reforçar o clima da Odisseia Pandora.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {items.map((i) => (
              <li key={i} className="rounded-2xl bg-white border border-pandora-border px-4 py-3 font-semibold text-pandora-wine flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-pandora-orange" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-pandora-muted">Itens, regras de retirada, tamanhos, disponibilidade e composição final do kit: <strong>[DADO A CONFIRMAR]</strong>.</p>
          <a href={buildWhatsAppUrl("Olá! Vim pela Landing Page da 2ª Corrida Odisseia Pandora e quero saber mais sobre o kit do participante.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7">
            Quero conhecer o kit
          </a>
        </div>
        <div className="relative flex justify-center lg:justify-end">
  <div className="rounded-3xl bg-white border border-pandora-border p-6 shadow-lg">
    <img
      src={kitImg}
      alt="Kit Odisseia Pandora"
      className="w-full max-w-sm object-contain"
    />
  </div>
</div>
      </div>
    </Section>
  );
}

/*
function KitIllustration() {
  return (
    <div className="relative aspect-square max-w-md mx-auto w-full">
      <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
        <circle cx="200" cy="200" r="180" fill="#F04A23" opacity="0.15" />
        <path d="M120 130 L170 110 L200 130 L230 110 L280 130 L300 180 L260 190 L260 310 L140 310 L140 190 L100 180 Z" fill="#F04A23" stroke="#8A1628" strokeWidth="4" />
        <text x="200" y="230" textAnchor="middle" fontFamily="Montserrat Alternates" fontWeight="900" fontSize="28" fill="#FFF1DE">ODISSEIA</text>
        <text x="200" y="260" textAnchor="middle" fontFamily="Montserrat Alternates" fontWeight="800" fontSize="18" fill="#F6B756">PANDORA</text>
        <g transform="translate(290 280)">
          <path d="M0 0 L30 0 L15 40 Z" fill="#8A1628" />
          <circle cx="15" cy="60" r="32" fill="#F6B756" stroke="#FFF1DE" strokeWidth="4" />
          <text x="15" y="68" textAnchor="middle" fontWeight="900" fontSize="22" fill="#8A1628">2ª</text>
        </g>
      </svg>
    </div>
  );
}
  */

function HowItWorks() {
  const steps: Array<[string, string]> = [
    ["Escolha sua modalidade", "Selecione entre 3 km caminhada ou 5 km corrida, de acordo com seu ritmo."],
    ["Clique para garantir sua vaga", "Use o botão da página para falar com a equipe ou acessar o formulário oficial."],
    ["Confirme seus dados", "Informe nome, contato, vínculo com a Pandora e modalidade desejada."],
    ["Receba as orientações", "A equipe orienta sobre kit, pagamento, retirada, local e horário."],
    ["Viva a Odisseia Pandora", "Dia 23 de agosto, participe e celebre com a comunidade #SangueLaranja."],
  ];
  return (
    <Section bg="bg-white" id="como-funciona">
      <SectionHeading eyebrow="Passo a passo" title="Como funciona" />
      <ol className="mt-10 grid md:grid-cols-5 gap-5">
        {steps.map(([t, d], i) => (
          <li key={t} className="rounded-3xl border border-pandora-border bg-pandora-cream p-6 relative">
            <div className="font-display font-black text-pandora-orange text-4xl">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-2 font-extrabold text-pandora-wine">{t}</h3>
            <p className="mt-2 text-sm text-pandora-text/80 leading-relaxed">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Gallery() {
  const images = [
  { src: imagem1, alt: "Participantes" },
  { src: imagem2, alt: "Participantes" },
  { src: imagem3, alt: "Participantes" },
  { src: imagem4, alt: "Participantes" },
];
  return (
    <Section bg="bg-pandora-cream" id="fotos">
      <SectionHeading eyebrow="Galeria" title="A energia da Odisseia já começou" />
      <p className="mt-4 max-w-2xl text-pandora-text/80">Pessoas reais, energia positiva e comunidade. Em breve, fotos da edição anterior e dos materiais oficiais da campanha.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {images.map((img, i) => (
    <div
      key={i}
      className="aspect-[4/5] rounded-3xl overflow-hidden border border-pandora-border bg-white"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>
  ))}
</div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section bg="bg-white">
      <SectionHeading eyebrow="Comunidade #SangueLaranja" title="O que dizem os participantes" />
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <article key={n} className="rounded-3xl border border-pandora-border bg-pandora-cream p-7">
            <div className="flex items-center gap-4">
              <div aria-hidden="true" className="w-14 h-14 rounded-full bg-gradient-to-br from-pandora-orange to-pandora-wine flex items-center justify-center text-pandora-cream font-display font-black text-xl">P{n}</div>
              <div>
                <div className="font-bold text-pandora-wine">[NOME DO PARTICIPANTE]</div>
                <div className="text-xs text-pandora-muted uppercase tracking-wider">[ALUNO / FAMÍLIA / COMUNIDADE]</div>
              </div>
            </div>
            <p className="mt-5 text-pandora-text/90 leading-relaxed italic">“[DEPOIMENTO REAL A INSERIR]”</p>
            <div className="mt-4 text-pandora-gold text-lg" aria-label="5 estrelas">★★★★★</div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Differentials() {
  const items: Array<[string, string]> = [
    ["Uma experiência da Pandora Educacional", "Nasce dentro de uma comunidade escolar, com vivência além da sala de aula."],
    ["Evento para famílias e comunidade", "Acessível e acolhedora, não restrita a atletas profissionais."],
    ["Identidade visual memorável", "Estética épica, cores vibrantes e elementos visuais marcantes."],
    ["Modalidades acessíveis", "3 km caminhada ou 5 km corrida: você escolhe."],
    ["Pré-venda exclusiva", "Benefício por tempo limitado para o público #SangueLaranja."],
  ];
  return (
    <Section bg="bg-pandora-wine" tone="dark">
      <SectionHeading eyebrow="Por que a Odisseia" title="Por que participar da Odisseia Pandora?" tone="dark" />
      <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {items.map(([t, d], i) => (
          <div key={t} className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/15 p-6 text-pandora-cream">
            <div className="font-display font-black text-pandora-gold text-3xl">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-2 font-extrabold">{t}</h3>
            <p className="mt-2 text-sm text-pandora-cream/80 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Objections() {
  const items: Array<[string, string]> = [
    ["“Eu não sou corredor. Será que é para mim?”","Sim. Você não precisa ser atleta profissional. A modalidade 3 km caminhada foi pensada para quem quer viver a experiência com leveza, no seu ritmo e, se quiser, em família."],
    ["“Não sei qual modalidade escolher.”","Se você quer uma experiência tranquila, escolha 3 km caminhada. Se deseja se desafiar mais, escolha 5 km corrida. Em caso de dúvida, fale com a equipe pelo WhatsApp."],
    ["“Quero saber o que está incluso no kit.”","Os materiais apresentam camiseta temática, sacochila, doleira/pochete, número de peito, medalha e cordão/credencial. Composição final: [DADO A CONFIRMAR]."],
    ["“Vou ver depois.”","A pré-venda tem condição especial por tempo limitado. Garantindo sua vaga agora, você evita deixar para a última hora."],
    ["“Posso participar com minha família?”","A proposta é comunitária e familiar. Regras de idade, inscrição e responsabilidade: [DADO A CONFIRMAR]."],
  ];
  return (
    <Section bg="bg-pandora-cream">
      <SectionHeading eyebrow="Tirando dúvidas" title="Suas dúvidas, respondidas" />
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {items.map(([q, a]) => (
          <div key={q} className="rounded-3xl bg-white border border-pandora-border p-6 shadow-sm">
            <h3 className="font-display font-extrabold text-pandora-wine text-lg">{q}</h3>
            <p className="mt-3 text-pandora-text/90 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function LeadForm() {
  return (
    <Section bg="bg-white" id="inscricao">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        <div>
          <SectionHeading 
            eyebrow="Inscrição" 
            title="Garanta sua vaga na Odisseia" 
          />
          
          <p className="mt-6 text-lg text-pandora-text/90 leading-relaxed">
            Clique no botão abaixo e finalize sua inscrição agora mesmo.
          </p>

          <a
            href="https://SEU-LINK-DE-PAGAMENTO-AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-block"
          >
            Quero garantir minha vaga agora
          </a>

          <a
            href={buildWhatsAppUrl(DEFAULT_WPP_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-4 inline-block"
          >
            Tirar dúvidas no WhatsApp
          </a>
        </div>

        {/* Pode colocar uma imagem, benefícios ou nada */}
        <div className="rounded-3xl bg-pandora-cream border border-pandora-border p-8">
          <h3 className="text-xl font-bold text-pandora-wine">
            O que você recebe:
          </h3>

          <ul className="mt-4 space-y-2 text-pandora-text">
            <li>✔ Kit do participante</li>
            <li>✔ Medalha</li>
            <li>✔ Experiência Odisseia Pandora</li>
          </ul>
        </div>

      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold text-pandora-wine mb-1.5">
        {label} {required && <span className="text-pandora-orange">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-xl border-2 border-pandora-border bg-white px-4 py-3 outline-none focus:border-pandora-orange transition" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold text-pandora-wine mb-1.5">{label}</label>
      <select id={name} name={name} className="w-full rounded-xl border-2 border-pandora-border bg-white px-4 py-3 outline-none focus:border-pandora-orange transition">
        <option value="">Selecione...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Offer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pandora-orange to-pandora-wine text-pandora-cream">
      <GreekPattern />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center">
        <span className="inline-block rounded-full bg-pandora-cream/15 border border-pandora-cream/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Pré-venda exclusiva</span>
        <h2 className="mt-5 font-display font-black text-[clamp(2rem,6vw,4rem)] leading-[1.05]">
          Viva uma experiência épica com a <span className="text-pandora-gold">comunidade Pandora</span>
        </h2>
        <p className="mt-6 text-lg text-pandora-cream/90 max-w-2xl mx-auto">Garanta sua vaga na 2ª Corrida Odisseia Pandora. Escolha entre 3 km caminhada ou 5 km corrida e aproveite a condição especial enquanto estiver ativa.</p>
        <p className="mt-3 text-sm text-pandora-cream/75">Lote, valor, vagas e encerramento oficial: <strong>[DADO A CONFIRMAR]</strong>.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#inscricao" className="btn-primary">Quero garantir minha vaga</a>
          <a href={buildWhatsAppUrl(DEFAULT_WPP_MSG)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-pandora-cream/60 px-7 py-4 font-bold text-pandora-cream hover:bg-pandora-cream/10 transition">
            Tirar dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQS: Array<[string, string]> = [
  ["Quando será a Corrida Odisseia Pandora?", "A 2ª edição está prevista para 23 de agosto, em Limeira/SP. Horário oficial da largada: [DADO A CONFIRMAR]."],
  ["Onde será a largada ou concentração?", "O evento será realizado em Limeira/SP. Endereço exato: [DADO A CONFIRMAR]."],
  ["Quais são as modalidades disponíveis?", "3 km caminhada e 5 km corrida."],
  ["Preciso correr ou posso caminhar?", "Você pode caminhar. A modalidade 3 km caminhada foi pensada para quem deseja participar com leveza, inclusive em família."],
  ["O que está incluso no kit?", "Camiseta temática, sacochila, doleira/pochete, número de peito, medalha e cordão/credencial. Composição final: [DADO A CONFIRMAR]."],
  ["Quem pode participar da condição #SangueLaranja?", "Benefício exclusivo para quem faz parte da comunidade #SangueLaranja. Regras oficiais: [DADO A CONFIRMAR]."],
  ["Crianças e famílias podem participar?", "A comunicação é voltada para famílias, alunos e comunidade. Regras de idade e autorização: [DADO A CONFIRMAR]."],
  ["Como faço a inscrição?", "Clique em “Quero garantir minha vaga” para falar com a equipe pelo WhatsApp ou acessar o formulário oficial. Link oficial: [DADO A CONFIRMAR]."],
  ["Até quando vai a pré-venda?", "Pré-venda por tempo limitado. Data final, lote vigente e regras: [DADO A CONFIRMAR]."],
  ["Como retiro o kit?", "Local, data, horário e documentos para retirada: [DADO A CONFIRMAR]."],
];

function FAQ() {
  return (
    <Section bg="bg-pandora-cream" id="faq">
      <SectionHeading eyebrow="Perguntas frequentes" title="FAQ" />
      <div className="mt-8 max-w-3xl space-y-3">
        {FAQS.map(([q, a]) => (
          <details key={q} className="group rounded-2xl bg-white border border-pandora-border px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-pandora-wine">
              {q}
              <span className="ml-4 w-7 h-7 shrink-0 rounded-full bg-pandora-orange text-white flex items-center justify-center font-black transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-pandora-text/90 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(([q, a]) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />
    </Section>
  );
}

function Footer() {
  return (
    <footer role="contentinfo"
      className="relative overflow-hidden bg-[#c73a18] text-pandora-cream/80">
      <GreekPattern />
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img
            src={logo}
            alt="Odisseia Pandora"
            className="h-16 w-auto object-contain"
          />
          <div className="text-xs uppercase tracking-widest text-[#8a1628] mt-1">by Pandora Educacional</div>
          <p className="mt-4 text-sm leading-relaxed">2ª Corrida Odisseia Pandora — 23 de agosto, Limeira/SP. Uma jornada esportiva, familiar e comunitária #SangueLaranja.</p>
        </div>
        <div>
          <h4 className="font-bold text-pandora-cream">Navegação</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#modalidades" className="hover:text-pandora-gold">Modalidades</a></li>
            <li><a href="#kit" className="hover:text-pandora-gold">Kit</a></li>
            <li><a href="#como-funciona" className="hover:text-pandora-gold">Como funciona</a></li>
            <li><a href="#fotos" className="hover:text-pandora-gold">Fotos</a></li>
            <li><a href="#faq" className="hover:text-pandora-gold">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-pandora-cream">Contato</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>WhatsApp: <strong>[DADO A CONFIRMAR]</strong></li>
            <li>E-mail: <strong>[DADO A CONFIRMAR]</strong></li>
            <li>Instagram: <strong>[DADO A CONFIRMAR]</strong></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-pandora-cream/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Pandora Educacional. Todos os direitos reservados.</span>
          <span>Realização: Pandora Educacional · Limeira/SP</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a href={buildWhatsAppUrl(DEFAULT_WPP_MSG)} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-20 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition">
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.157 5.335 5.493 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </a>
  );
}

function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-pandora-border p-3 shadow-2xl">
      <a href="#inscricao" className="btn-primary w-full">Quero garantir minha vaga</a>
    </div>
  );
}

function Section({ children, bg, id, tone }: { children: React.ReactNode; bg: string; id?: string; tone?: "dark" }) {
  return (
    <section id={id} className={`${bg} ${tone === "dark" ? "text-pandora-cream" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">{children}</div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, tone }: { eyebrow: string; title: string; tone?: "dark" }) {
  return (
    <div>
      <div className={`text-xs font-extrabold uppercase tracking-[0.2em] ${tone === "dark" ? "text-pandora-gold" : "text-pandora-orange"}`}>{eyebrow}</div>
      <h2 className={`mt-3 font-display font-black text-[clamp(1.9rem,4vw,3.5rem)] leading-[1.05] ${tone === "dark" ? "text-pandora-cream" : "text-pandora-wine"}`}>{title}</h2>
    </div>
  );
}
