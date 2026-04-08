import Image from "next/image";
import { CheckCircle2, TrendingUp, Users2, Building2 } from "lucide-react";

const valueProps = [
  {
    icon: Building2,
    title: "Governança Sólida",
    description: "Estruturas de gestão profissional que garantem a segurança dos investimentos e a saúde financeira das operações."
  },
  {
    icon: TrendingUp,
    title: "Crescimento Exponencial",
    description: "Estratégias personalizadas para impulsionar a escala de clínicas e unidades de saúde parceiras."
  },
  {
    icon: Users2,
    title: "Elite Multidisciplinar",
    description: "Corpo técnico composto por especialistas em gestão, medicina e finanças corporativas."
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Sobre a CapitalEv</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              Mais que uma Holding, <br />
              <span className="text-navy-light/80">um ecossistema de valor.</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A CapitalEv nasceu da necessidade de profissionalizar e unificar o setor de saúde. Atuamos como o elo entre a alta performance médica e a eficiência administrativa, transformando consultórios e clínicas em ativos exponenciais.
            </p>
            
            <div className="space-y-6">
              {valueProps.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-navy/10 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                  alt="Gestão de Saúde"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Decorative Floating Card */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-bold leading-tight">Certificada por <br />Investidores</p>
                </div>
                <div className="h-px bg-white/20 w-full" />
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">Padronização Global</p>
              </div>
            </div>

            {/* Background Shape */}
            <div className="absolute -top-10 -right-10 w-full h-full border-8 border-gold/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
