import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

// Brand icons are not available in Lucide v1.0+, using SVGs instead
const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Capital<span className="text-gold">Ev</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Holding estratégica dedicada à evolução do setor de saúde, conectando investidores a oportunidades de alto impacto e clínicas à excelência operacional.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</Link></li>
              <li><Link href="#empresas" className="hover:text-gold transition-colors">Empresas do Grupo</Link></li>
              <li><Link href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais</Link></li>
              <li><Link href="#contato" className="hover:text-gold transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Av. Corporativa, 1000 - Centro Empresarial<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+55 (11) 4004-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>contato@capitalev.com.br</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-gold font-bold mb-6">Atendimento</h4>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
              <p className="text-xs text-white/50 mb-2 font-medium uppercase tracking-wider">Horário Comercial</p>
              <p className="text-sm font-semibold mb-1">Segunda a Sexta</p>
              <p className="text-sm text-white/70">08:00 às 18:00</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} CapitalEv Holding. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
