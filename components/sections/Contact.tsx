"use client";

import { motion } from "framer-motion";
import { Send, MessageCircle, Phone, Mail } from "lucide-react";

// Brand icons are not available in Lucide v1.0+, using SVGs instead
const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
    width="24"
    height="24"
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

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Form Side */}
            <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Fale Conosco</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Pronto para dar o <br />
                <span className="text-gold">próximo passo?</span>
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-semibold uppercase">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Ex: João Silva"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-semibold uppercase">Empresa / Clínica</label>
                    <input 
                      type="text" 
                      placeholder="Nome do seu negócio"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/60 text-xs font-semibold uppercase">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="email@empresa.com.br"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 text-xs font-semibold uppercase">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:translate-y-[-2px] active:translate-y-0">
                  <Send className="w-5 h-5" />
                  Enviar Solicitação
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="p-8 md:p-16 flex flex-col justify-between bg-gold/[0.02]">
              <div>
                <h4 className="text-white font-bold text-xl mb-10">Canais Diretos</h4>
                
                <div className="space-y-8">
                  <a href="#" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                      <MessageCircle className="w-7 h-7 text-gold group-hover:text-navy" />
                    </div>
                    <div>
                      <p className="text-white font-bold group-hover:text-gold transition-colors">WhatsApp Consultivo</p>
                      <p className="text-white/40 text-sm">Resposta imediata via chat</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-300">
                      <Phone className="w-7 h-7 text-white/40 group-hover:text-navy" />
                    </div>
                    <div>
                      <p className="text-white font-bold group-hover:text-gold transition-colors">Central de Atendimento</p>
                      <p className="text-white/40 text-sm">Seg a Sex, 08h às 18h</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-navy transition-all duration-300">
                      <Mail className="w-7 h-7 text-white/40 group-hover:text-navy" />
                    </div>
                    <div>
                      <p className="text-white font-bold group-hover:text-gold transition-colors">E-mail Direto</p>
                      <p className="text-white/40 text-sm">contato@capitalev.com.br</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <p className="text-xs text-white/30 uppercase font-bold tracking-[0.2em] mb-6">Mídias Sociais</p>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-white/5 rounded-xl text-white/60 hover:text-gold hover:bg-gold/10 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-4 bg-white/5 rounded-xl text-white/60 hover:text-gold hover:bg-gold/10 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
