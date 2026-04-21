"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { partners } from "@/lib/data/partners";

const blockVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const goldRuleVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" as const } }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const }
  }
};

const numberVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, delay: 0.4 } }
};

export default function Partners() {
  return (
    <section id="empresas" className="bg-navy relative overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-bold uppercase tracking-widest text-sm mb-4"
        >
          Portfólio Estratégico
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Nossas <span className="text-gold">Empresas Parceiras</span>
        </motion.h2>
      </div>

      {/* Partners list */}
      <div>
        {partners.map((partner, index) => {
          const isEven = index % 2 === 0;
          const num = String(index + 1).padStart(2, "0");

          return (
            <motion.article
              key={partner.name}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative overflow-hidden py-20 md:py-28 border-b border-white/[0.06] last:border-b-0 group/article cursor-pointer"
            >
            <Link href={`/empresas/${partner.slug}`} className="absolute inset-0 z-20" aria-label={`Ver página da ${partner.name}`} />
              {/* Decorative number */}
              <motion.span
                aria-hidden
                variants={numberVariants}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-bold leading-none text-white/[0.03] select-none pointer-events-none"
              >
                {num}
              </motion.span>

              <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                {/* Gold rule */}
                <motion.div
                  variants={goldRuleVariants}
                  className="h-[2px] w-12 bg-gold mb-10 md:mb-14 origin-left"
                />

                {/* Two-column grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  {/* Logo column */}
                  <motion.div
                    variants={logoVariants}
                    className={`flex items-center justify-center${!isEven ? " lg:order-last" : ""}`}
                  >
                    <div className="w-48 h-48 md:w-72 md:h-72 bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 group-[.group\/article]:group-hover/article:border-gold/30 group-[.group\/article]:group-hover/article:bg-white/[0.07] transition-all duration-500">
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          sizes="(max-width: 768px) 192px, 288px"
                          className="object-contain transition-transform duration-500 scale-90 group-hover:scale-100"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content column */}
                  <div className="space-y-6 md:space-y-8">
                    <motion.span
                      variants={itemVariants}
                      className="inline-flex px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-[10px] font-bold uppercase tracking-wider"
                    >
                      {partner.category}
                    </motion.span>

                    <motion.h3
                      variants={itemVariants}
                      className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                      {partner.name}
                    </motion.h3>

                    <motion.p
                      variants={itemVariants}
                      className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl"
                    >
                      {partner.description}
                    </motion.p>

                    <motion.div
                      variants={itemVariants}
                      className="h-px w-full bg-gradient-to-r from-gold/40 via-gold/10 to-transparent"
                    />

                    {/* Details grid */}
                    <motion.div
                      variants={itemVariants}
                      className="grid grid-cols-2 border border-white/10 rounded-2xl overflow-hidden"
                    >
                      {partner.details.map((detail, i) => (
                        <div
                          key={i}
                          className={[
                            "p-4 md:p-5 group/item",
                            i % 2 === 0 ? "border-r border-white/10" : "",
                            i < 2 ? "border-b border-white/10" : ""
                          ].join(" ")}
                        >
                          <p className="text-gold/70 text-[9px] uppercase font-bold tracking-widest mb-1 transition-colors group-hover/item:text-gold">
                            {detail.label}
                          </p>
                          <p className="text-white font-semibold text-sm md:text-base leading-tight">
                            {detail.value}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                    {/* Saiba mais button */}
                    <motion.div variants={itemVariants} className="pt-2">
                      <span className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold hover:bg-gold hover:text-navy transition-all duration-300 group-hover/article:bg-gold group-hover/article:text-navy group-hover/article:border-gold shadow-[0_0_20px_rgba(197,160,89,0)] group-hover/article:shadow-[0_0_24px_rgba(197,160,89,0.25)]">
                        Ver empresa completa
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover/article:translate-x-1">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Per-block radial glow */}
              <div
                className={`absolute inset-y-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.04),transparent_70%)] pointer-events-none ${isEven ? "left-0" : "right-0"}`}
              />
            </motion.article>
          );
        })}
      </div>

      {/* Section background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />
    </section>
  );
}
