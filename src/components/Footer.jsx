import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    { icon: "𝕏", label: "Twitter" },
    { icon: "📸", label: "Instagram" },
    { icon: "▶", label: "YouTube" },
    { icon: "💬", label: "TikTok" },
  ];

  const links = {
    Shop: ["Ceremonial Grade", "Starter Kit", "Accessories", "Gift Sets"],
    Learn: ["How to Brew", "Our Story", "Sourcing", "Blog"],
    Support: ["FAQ", "Shipping", "Returns", "Contact"],
  };

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="relative z-10 px-8 md:px-16 pt-24 pb-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 mb-20">
          {/* Brand */}
          <div className="footer-item max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🍵</span>
              <span className="font-sans text-cream text-3xl tracking-widest uppercase">
                Zencha
              </span>
            </div>
            <p className="font-paragraph text-cream/50 text-sm leading-relaxed mb-8">
              Ceremonial grade matcha sourced directly from Uji, Japan.
              Every tin tells a story of tradition, craft, and calm.
            </p>
            {/* Newsletter */}
            <div className="border-b border-cream/20 pb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-cream font-paragraph placeholder:text-cream/30 outline-none text-base"
              />
            </div>
            <button className="mt-4 text-cream/50 font-paragraph text-xs uppercase tracking-widest hover:text-cream transition-colors">
              Subscribe to rituals →
            </button>
          </div>

          {/* Links */}
          <div className="footer-item grid grid-cols-3 gap-12">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-sans text-cream/40 text-xs uppercase tracking-widest mb-5">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="font-paragraph text-cream/70 text-sm hover:text-cream transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="footer-item flex md:flex-col flex-row gap-4">
            {socials.map((s) => (
              <button key={s.label} className="social-btn" title={s.label}>
                <span className="text-cream text-lg">{s.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Big divider marquee */}
        <div className="footer-item w-full overflow-hidden border-t border-cream/10 pt-8 mb-8">
          <div className="flex overflow-hidden opacity-10">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="font-sans text-cream text-7xl md:text-9xl uppercase tracking-tighter pr-16"
                >
                  ZENCHA •
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-box footer-item">
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-paragraph text-cream/40 text-xs hover:text-cream/70 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <p className="font-paragraph text-cream/30 text-xs">
            © 2025 Zencha. All rights reserved. Sourced with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
