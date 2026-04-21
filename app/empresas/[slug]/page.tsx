import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Phone, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { partners, getPartnerBySlug } from "@/lib/data/partners";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) return {};
  return {
    title: `${partner.name} | CapitalEv`,
    description: partner.description,
  };
}

export default async function EmpresaPage({ params }: Props) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.10),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(17,34,64,0.8),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          {/* Back link */}
          <Link
            href="/#empresas"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm font-medium transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para Empresas Parceiras
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
            {/* Logo */}
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-56 md:h-56 bg-white/[0.06] border border-white/15 rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 160px, 224px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Title block */}
            <div className="space-y-5">
              <span className="inline-flex px-3 py-1 bg-gold/10 border border-gold/25 rounded-full text-gold text-[10px] font-bold uppercase tracking-wider">
                {partner.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                {partner.name}
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                {partner.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-bold rounded-full text-sm hover:bg-gold-light transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Fale Conosco
                </Link>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/15 text-white font-semibold rounded-full text-sm hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="h-px bg-gradient-to-r from-gold/50 via-gold/20 to-transparent" />
      </div>

      {/* About section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Long description */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-gold font-bold uppercase tracking-widest text-xs">
                  Sobre a empresa
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Conheça a{" "}
                  <span className="text-gold">{partner.name}</span>
                </h2>
              </div>
              <p className="text-white/65 text-base md:text-lg leading-relaxed">
                {partner.longDescription}
              </p>
            </div>

            {/* Logo decorative */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-72 h-72">
                <Image
                  src={partner.logo}
                  alt=""
                  aria-hidden
                  fill
                  sizes="288px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics section */}
      <section className="py-16 md:py-20 bg-navy-light/40">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-2 mb-12">
            <p className="text-gold font-bold uppercase tracking-widest text-xs">
              Números & Atuação
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Indicadores <span className="text-gold">Estratégicos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {partner.details.map((detail, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-gold/25 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <TrendingUp className="w-4 h-4 text-gold" />
                </div>
                <p className="text-gold/70 text-[9px] uppercase font-bold tracking-widest mb-2 group-hover:text-gold transition-colors">
                  {detail.label}
                </p>
                <p className="text-white font-bold text-xl md:text-2xl leading-tight">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.07),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center space-y-8">
          <p className="text-gold font-bold uppercase tracking-widest text-xs">
            Próximos passos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Quer saber mais sobre a{" "}
            <span className="text-gold">{partner.name}</span>?
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto">
            Entre em contato com a CapitalEv e conecte-se a esta e outras
            empresas do nosso portfólio estratégico.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-full text-sm hover:bg-gold-light transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/20"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </Link>
            <Link
              href="/#empresas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full text-sm hover:border-gold/40 hover:text-gold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todas as empresas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
