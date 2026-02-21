/*
 * Layout.tsx — Swiss Brutalist Technical Manual
 * Design: Space Grotesk headings, IBM Plex Mono labels, B&W palette
 * Signature: Spec labels, crosshair marks, grid background
 */
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/teamlens", label: "TeamLens" },
  { href: "/engine", label: "Engine" },
  { href: "/kimi-spec", label: "Kimi-Spec" },
  { href: "/releases", label: "Releases" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar — thin spec label */}
      <div className="border-b border-black/10 py-1 px-4 hidden md:flex items-center justify-between">
        <span className="spec-label">HUMANLENS — THE DIAGNOSTIC ENGINE</span>
        <span className="spec-label">REV 1.0 / 2026</span>
      </div>

      {/* Navigation */}
      <header className="border-b border-black/20 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <nav className="container flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-lg font-bold tracking-tight text-black">
              HumanLens
            </span>
            <span className="hidden sm:inline spec-label mt-0.5">/ OFFICIAL</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-[13px] font-mono tracking-wider uppercase no-underline transition-colors
                  ${location === item.href
                    ? "text-black border-b-2 border-black"
                    : "text-black/50 hover:text-black"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-black/10 bg-white">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-3 text-[13px] font-mono tracking-wider uppercase no-underline border-b border-black/5
                  ${location === item.href
                    ? "text-black bg-black/5"
                    : "text-black/50"
                  }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/20 py-12 mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-lg font-bold tracking-tight">HumanLens</span>
              <p className="mt-2 text-sm text-black/50 font-mono leading-relaxed">
                The Diagnostic Engine.<br />
                テキストと文脈から、人の内面を分析する。
              </p>
            </div>
            <div>
              <span className="spec-label block mb-3">NAVIGATION</span>
              <div className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-black/50 hover:text-black no-underline font-mono"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="spec-label block mb-3">CONTACT</span>
              <p className="text-sm text-black/50 font-mono leading-relaxed">
                お問い合わせは<Link href="/contact" className="text-black underline">こちら</Link>から。
              </p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <span className="spec-label">SPEC-FOOTER-001</span>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-4 border-t border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="text-xs text-black/30 font-mono">&copy; 2026 HumanLens. All rights reserved.</span>
            <span className="text-xs text-black/30 font-mono">REV 1.0 — BUILT WITH PRECISION</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
