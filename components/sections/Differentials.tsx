"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Stethoscope, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Handshake 
} from "lucide-react";

const differentials = [
  {
    icon: Stethoscope,
    title: "DNA Médico",
    description: "Nossa gestão entende a realidade da ponta, priorizando a qualidade do atendimento paciente."
  },
  {
    icon: BarChart3,
    title: "Inteligência de Dados",
    description: "Decisões baseadas em números reais para otimizar a rentabilidade sem perder a essência humana."
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description: "Integração das melhores ferramentas de mercado para automação e segurança da informação."
  },
  {
    icon: Handshake,
    title: "Parceria Genuína",
    description: "Trabalhamos lado a lado com os fundadores, mantendo a identidade de cada operação."
  },
  {
    icon: ShieldCheck,
    title: "Compliance Rígido",
    description: "Segurança jurídica e ética em todos os processos de fusão, aquisição e operação."
  },
  {
    icon: Globe2,
    title: "Visão de Longo Prazo",
    description: "Construímos hoje o que o mercado de saúde exigirá na próxima década."
  }
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Por que a CapitalEv?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-0 leading-tight">
              A Expertise que transforma <br />
              <span className="text-gold">resultados em saúde.</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 text-sm leading-relaxed">
            Unimos o melhor do mercado financeiro à prática médica para criar um modelo de gestão inigualável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold/20 transition-all group"
            >
              <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                <item.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
