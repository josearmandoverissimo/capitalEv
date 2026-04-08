"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  {
    name: "Qualisaúde",
    category: "Qualidade & Acreditação",
    logo: "/capitalev/images/logos/loogo-quali.png",
    description: "Administradora de benefícios com mais de 8 anos dedicados à saúde. Atua com planos empresariais e coletivos por adesão para entidades de classe e órgãos públicos em todo o Brasil.",
    details: [
      { label: "Atuação", value: "18+ estados" },
      { label: "Segmento", value: "Administradora de Benefícios" },
      { label: "Especialidade", value: "Planos coletivos & empresariais" },
      { label: "Público", value: "Entidades de classe e órgãos públicos" }
    ]
  },
  {
    name: "Vycare Brasil",
    category: "Saúde Digital",
    logo: "/capitalev/images/logos/logo-vycaree.jpg",
    description: "Administradora de benefícios especializada em planos de saúde e soluções para empresas e entidades de classe. Intermediária entre operadoras e beneficiários, com foco em atendimento personalizado.",
    details: [
      { label: "Atuação", value: "Nacional" },
      { label: "Segmento", value: "Benefícios de Saúde" },
      { label: "Especialidade", value: "Planos coletivos" },
      { label: "Destaque", value: "Atendimento humanizado" }
    ]
  },
  {
    name: "Concilium Benefícios",
    category: "Gestão de Planos",
    logo: "/capitalev/images/logos/logo-concilium.jpg",
    description: "Corretora e consultora de seguros sediada em Vitória/ES. Especializada em planos de saúde, previdência complementar e seguros. Integra o mesmo grupo da Qualisaúde como braço comercial no mercado capixaba.",
    details: [
      { label: "Sede", value: "Vitória – ES" },
      { label: "Segmento", value: "Corretora de Seguros" },
      { label: "Status", value: "Ativa desde 2020" },
      { label: "Destaque", value: "Grupo Qualisaúde" }
    ]
  },
  {
    name: "Conciliar Saúde",
    category: "Conciliação Financeira",
    logo: "/capitalev/images/logos/logo-conciliar.jpg",
    description: "Administradora focada na gestão de planos de saúde coletivos. Simplifica o acesso a planos de qualidade com suporte em conciliação de faturas e glosas.",
    details: [
      { label: "Segmento", value: "Administradora de Benefícios" },
      { label: "Especialidade", value: "Planos coletivos" },
      { label: "Destaque", value: "Conciliação de faturas" },
      { label: "Atuação", value: "Regional" }
    ]
  },
  {
    name: "Central Elegibilidades",
    category: "Gestão de Benefícios",
    logo: "/capitalev/images/logos/logo-centralelegibilidades.jpg",
    description: "Especializada na integração de administradoras de benefícios às entidades de classe. Torna possível a venda de planos coletivos por adesão de forma tecnológica, segura e ágil em todo o Brasil.",
    details: [
      { label: "Atuação", value: "Nacional" },
      { label: "Segmento", value: "Plataforma de Elegibilidades" },
      { label: "Fundação", value: "2022" },
      { label: "Sede", value: "Belo Horizonte – MG" }
    ]
  },
  {
    name: "VidaPay",
    category: "Soluções de Pagamento",
    logo: "/capitalev/images/logos/logo-vidapay.jpg",
    description: "Plataforma de benefícios e pagamentos voltada ao mercado de saúde. Integra gestão de benefícios e pagamentos em uma só solução, com agilidade e tecnologia para beneficiários e empresas.",
    details: [
      { label: "Segmento", value: "Fintech de Saúde" },
      { label: "Especialidade", value: "Pagamentos integrados" },
      { label: "Destaque", value: "Tecnologia financeira" },
      { label: "Público", value: "Beneficiários e empresas" }
    ]
  },
  {
    name: "Auditore Saúde",
    category: "Auditoria & Gestão",
    logo: "/capitalev/images/logos/logo-auditoresaude.jpg",
    description: "Especializada em auditoria de contas hospitalares e gestão de sinistros. Atua na revisão de procedimentos, controle de custos e conformidade assistencial para operadoras de planos de saúde.",
    details: [
      { label: "Segmento", value: "Auditoria Médica" },
      { label: "Especialidade", value: "Contas hospitalares & glosas" },
      { label: "Destaque", value: "Controle de sinistralidade" },
      { label: "Público", value: "Operadoras de saúde" }
    ]
  },
  {
    name: "SegPrime Brasil",
    category: "Seguros & Proteção",
    logo: "/capitalev/images/logos/logo-segurosprime.jpg",
    description: "Corretora especializada em seguros de vida, saúde, empresarial e benefícios corporativos. Soluções personalizadas para proteção de pessoas e patrimônios com atendimento consultivo.",
    details: [
      { label: "Segmento", value: "Corretora de Seguros" },
      { label: "Especialidade", value: "Vida, saúde e empresarial" },
      { label: "Destaque", value: "Atendimento consultivo" },
      { label: "Atuação", value: "Nacional" }
    ]
  }
];

export default function Partners() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setActive((prev) => (prev + newDirection + partners.length) % partners.length);
  }, []);

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <section id="empresas" className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-widest text-sm mb-3 md:mb-4"
          >
            Portfólio Estratégico
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Nossas <span className="text-gold">Empresas Parceiras</span>
          </motion.h3>
        </div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative max-w-6xl mx-auto px-0 md:px-16">
          {/* Carousel Controls Header */}
          <div className="flex items-center justify-between mb-6 md:mb-8 gap-4 px-4 md:px-0">
            <div className="flex items-center gap-2 md:gap-3">
              {partners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className="relative h-1.5 md:h-2 flex items-center"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      width: active === i ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 40) : 10,
                      backgroundColor: active === i ? "#C5A059" : "rgba(255,255,255,0.2)"
                    }}
                    className="h-full rounded-full transition-all duration-300"
                  />
                </button>
              ))}
            </div>
            <div className="text-white/40 font-mono text-[10px] md:text-sm tracking-widest whitespace-nowrap">
              <span className="text-gold font-bold">{active + 1}</span> / {partners.length}
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="relative min-h-[580px] md:min-h-[420px]">
            {/* Desktop Navigation Buttons (Sides) - Now inside viewport for perfect centering */}
            <button
              onClick={() => paginate(-1)}
              className="hidden md:flex absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all group z-30"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => paginate(1)}
              className="hidden md:flex absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all group z-30"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, info) => {
                  const swipe = info.offset.x;
                  if (swipe < -50) paginate(1);
                  else if (swipe > 50) paginate(-1);
                }}
                className="absolute w-full"
              >
                <div className="bg-white/5 border border-white/10 rounded-[32px] md:rounded-[40px] p-6 md:p-12 overflow-hidden backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-center lg:items-start text-center lg:text-left">
                    {/* Logo Box */}
                    <div className="shrink-0">
                      <div className="w-32 h-32 md:w-64 md:h-64 bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-[32px] flex items-center justify-center p-6 md:p-8 group transition-all duration-500 hover:bg-white/5">
                        <div className="relative w-full h-full">
                          <Image
                            src={partners[active].logo}
                            alt={partners[active].name}
                            fill
                            sizes="(max-width: 768px) 128px, 256px"
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Info */}
                    <div className="flex-1 space-y-6 md:space-y-8">
                      <div className="space-y-3 md:space-y-4">
                        <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
                          {partners[active].category}
                        </span>
                        <h4 className="text-2xl md:text-5xl font-bold text-white tracking-tight">
                          {partners[active].name}
                        </h4>
                        <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-3xl">
                          {partners[active].description}
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 md:gap-8">
                        {partners[active].details.map((detail, i) => (
                          <div key={i} className="space-y-1 group/item">
                            <p className="text-gold/60 text-[9px] md:text-[10px] uppercase font-bold tracking-widest transition-colors group-hover/item:text-gold">
                              {detail.label}
                            </p>
                            <p className="text-white font-medium text-xs md:text-base leading-tight">
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Buttons (Bottom) */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white active:bg-gold active:text-navy transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white active:bg-gold active:text-navy transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />
    </section>
  );
}
