"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Chapters", path: "/chapters" },
  { name: "Events", path: "/events" },
  { name: "Impact", path: "/impact" },
  { name: "Contact", path: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isHomeHero = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll(); // set initial state on load/refresh
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomeHero ? "bg-transparent" : "bg-background/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container-wide mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg md:text-xl">
                O
              </span>
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-display font-bold text-lg md:text-xl transition-colors ${
                  isHomeHero ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                Ogwashi-Uku USA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.path;

              // Active styles differ slightly on hero vs scrolled/inner pages
              const activeClasses = isHomeHero
                ? "bg-white/15 text-primary-foreground"
                : "bg-accent text-accent-foreground";

              const inactiveClasses = isHomeHero
                ? "text-primary-foreground hover:bg-white/10"
                : "text-foreground hover:bg-accent hover:text-accent-foreground";

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active ? activeClasses : inactiveClasses
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/portal">
              <Button
                variant="outline"
                size="sm"
                className={
                  isHomeHero ? "border-white/70 text-white hover:bg-white/10 hover:text-white" : ""
                }
              >
                Member Portal
              </Button>
            </Link>

            <Link href="/donate">
              <Button variant="donate" size="sm" className="gap-2">
                <Heart className="w-4 h-4" />
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isHomeHero ? "hover:bg-white/10" : "hover:bg-accent"
            }`}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isHomeHero ? "text-primary-foreground" : "text-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isHomeHero ? "text-primary-foreground" : "text-foreground"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <nav className="container-wide mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="border-t border-border my-2" />

            <Link href="/portal" className="px-4 py-3">
              <Button variant="outline" className="w-full">
                Member Portal
              </Button>
            </Link>

            <Link href="/donate" className="px-4 py-3">
              <Button variant="donate" className="w-full gap-2">
                <Heart className="w-4 h-4" />
                Donate
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
