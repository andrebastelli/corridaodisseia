import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo-odisseia.png';
import header from '@/assets/logo-odisseia-1.png';

const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "5519999999999";

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const DEFAULT_WPP_MSG =
  "Olá! Vim pela Landing Page da 2ª Corrida Odisseia Pandora e quero garantir minha vaga. Pode me ajudar com as informações de inscrição, modalidade e kit?";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pandora-cream text-pandora-text flex flex-col">
      {/* Header */}
      <header
        role="navigation"
        className="sticky top-0 z-40 backdrop-blur-md bg-pandora-cream/85 border-b border-pandora-border"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <button onClick={() => navigate('/')} className="flex items-center hover:opacity-80 transition">
            <img
              src={header}
              alt="Odisseia Pandora"
              className="h-20 w-auto object-contain"
            />
          </button>
          <button onClick={() => navigate('/')} className="btn-primary text-sm hidden sm:inline-flex">
            Voltar para home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main role="main" className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl w-full">
          {/* Success Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pandora-wine via-[#a31a30] to-pandora-orange text-pandora-cream">
            {/* Background Pattern */}
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="greek" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 20 H20 V0 H40 M20 20 V40" fill="none" stroke="currentColor" strokeWidth="2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#greek)" />
            </svg>

            <div className="relative px-6 md:px-8 py-16 md:py-20 text-center">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pandora-cream/20 border-2 border-pandora-cream/40">
                <svg className="w-12 h-12 text-pandora-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Main Message */}
              <h1 className="mt-8 font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight">
                Obrigado por seu interesse!
              </h1>

              <p className="mt-6 text-lg md:text-xl text-pandora-cream/90 leading-relaxed max-w-xl mx-auto">
                Recebemos sua inscrição com sucesso na 2ª Corrida Odisseia Pandora.
              </p>

              <div className="mt-8 p-6 bg-pandora-cream/10 backdrop-blur-sm rounded-2xl border border-pandora-cream/20">
                <p className="text-base text-pandora-cream/95 leading-relaxed">
                  <strong>Próximos passos:</strong><br className="md:hidden" />
                  Nossa equipe entrará em contato nos próximos dias para confirmar sua inscrição, esclarecer dúvidas sobre modalidade, kit, pagamento e retirada.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <a
                  href={buildWhatsAppUrl(DEFAULT_WPP_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-8 py-4 font-bold hover:opacity-90 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.157 5.335 5.493 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  </svg>
                  Tirar dúvidas no WhatsApp
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-pandora-cream/60 text-pandora-cream px-8 py-4 font-bold hover:bg-pandora-cream/10 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    // Link para compra de ingresso será atualizado com a URL real
                    alert('Link de compra de ingresso será adicionado em breve!');
                  }}
                >
                  💳 Comprar ingresso
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-pandora-cream/20">
                <p className="text-sm text-pandora-cream/80">
                  Pré-venda por tempo limitado. Data de encerramento, valores e lote vigente: <strong>[DADO A CONFIRMAR]</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📋",
                title: "Confirmação de dados",
                desc: "Verifique se recebeu um e-mail ou WhatsApp confirmando seus dados cadastrados."
              },
              {
                icon: "🎽",
                title: "Kit do participante",
                desc: "Nosso time te informará sobre tamanhos, cores, retirada e documentação necessária."
              },
              {
                icon: "💰",
                title: "Modalidade de pagamento",
                desc: "Informações sobre valores, formas de pagamento e promoções especiais em breve."
              },
              {
                icon: "📍",
                title: "Dia do evento",
                desc: "Local, horário de concentração, largada e demais orientações para o dia 23 de agosto."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-pandora-border p-6 shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display font-extrabold text-pandora-wine text-lg">{item.title}</h3>
                <p className="mt-2 text-pandora-text/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center gap-2 text-pandora-wine font-bold hover:text-pandora-orange transition"
            >
              ← Voltar para a página inicial
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="bg-[#c73a18] text-pandora-cream/80 mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Pandora Educacional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
