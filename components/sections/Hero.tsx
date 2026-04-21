"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-people.png"
          alt="CapitalEv Corporate"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          style={{ willChange: 'transform' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              Holding de Saúde & Investimentos
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Excelência e Parceria <br />
            <span className="text-gold">Estratégica na Saúde</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl"
          >
            A CapitalEv conecta investidores a ativos de alto valor e clínicas a um novo patamar de gestão e tecnologia através de uma visão multidisciplinar e sólida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:translate-x-1"
            >
              Consultar Parceria
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#sobre"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full flex items-center justify-center transition-all"
            >
              Conheça a Holding
            </Link>
          </motion.div>

          {/* Metrics / Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 border-l-2 border-gold/30 pl-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-xs text-white/50 uppercase font-semibold">Empresas Parceiras</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">R$ 50M+</p>
              <p className="text-xs text-white/50 uppercase font-semibold">Em ativos geridos</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-xs text-white/50 uppercase font-semibold">Taxa de retenção</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-gold/5 pointer-events-none" />
    </section>
  );
}
