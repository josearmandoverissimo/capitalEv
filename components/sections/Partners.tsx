"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Seguros Prime Brasil",
    category: "Seguros & Proteção",
    logo: "/images/logos/logo-segurosprime.jpg",
    description: "Especialistas em soluções de seguros corporativos e proteção patrimonial."
  },
  {
    name: "Auditore Saúde",
    category: "Auditoria & Gestão",
    logo: "/images/logos/logo-auditoresaude.jpg",
    description: "Excelência em auditoria médica e gestão de custos em saúde."
  },
  {
    name: "VidaPay",
    category: "Soluções de Pagamento",
    logo: "/images/logos/logo-vidapay.jpg",
    description: "Tecnologia financeira integrada para o ecossistema de saúde."
  },
  {
    name: "Central Elegibilidades",
    category: "Gestão de Benefícios",
    logo: "/images/logos/logo-centralelegibilidades.jpg",
    description: "Plataforma líder em autorizações e elegibilidades médicas."
  },
  {
    name: "Conciliarsaude",
    category: "Conciliação Financeira",
    logo: "/images/logos/logo-conciliar.jpg",
    description: "Soluções inteligentes para conciliação de faturas e glosas."
  },
  {
    name: "Concilium Benefícios",
    category: "Gestão de Planos",
    logo: "/images/logos/logo-concilium.jpg",
    description: "Consultoria estratégica em benefícios e capital humano."
  },
  {
    name: "Vycare",
    category: "Saúde Digital",
    logo: "/images/logos/logo-vycaree.jpg",
    description: "Inovação em telemedicina e acompanhamento de pacientes."
  },
  {
    name: "Qualisaude",
    category: "Qualidade & Acreditação",
    logo: "/images/logos/loogo-quali.png",
    description: "Consultoria especializada em acreditação e qualidade hospitalar."
  }
];

export default function Partners() {
  return (
    <section id="empresas" className="py-24 bg-navy relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-widest text-sm mb-4"
          >
            Portfólio Estratégico
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Nossas <span className="text-gold">Empresas Parceiras</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Conheça as marcas que compõem o ecossistema da CapitalEv e como estamos transformando a saúde através de parcerias de longo prazo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-20 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-gold font-bold text-[10px] uppercase tracking-tighter">
                  {partner.category}
                </span>
                <h4 className="text-white font-bold text-xl">{partner.name}</h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />
    </section>
  );
}
