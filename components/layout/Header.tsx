"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Empresas", href: "#empresas" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo_ev.png"
              alt="CapitalEv"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                isScrolled ? "text-navy/80" : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contato"
            className={cn(
              "inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 gap-2",
              isScrolled
                ? "bg-navy text-white hover:bg-navy-light"
                : "bg-gold text-navy hover:bg-gold-light"
            )}
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            className={cn(
              "p-2 rounded-md",
              isScrolled ? "text-navy" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-navy hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contato"
              className="bg-navy text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Falar com Consultor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
