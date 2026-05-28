import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🍵</span>
        <span className="font-sans text-dark-green text-xl md:text-2xl tracking-widest uppercase">
          Zencha
        </span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-10">
        {["Ritual", "Blends", "Story", "Journal"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-paragraph text-dark-green text-sm uppercase tracking-widest hover:text-mid-green transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="bg-dark-green text-cream font-paragraph text-sm uppercase tracking-widest px-6 py-3 rounded-full hover:bg-mid-green transition-colors">
        Shop Now
      </button>
    </nav>
  );
};

export default Navbar;
