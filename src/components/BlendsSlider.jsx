import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blendList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const marqueeTop = "OUR BLENDS • 抹茶 • FIND YOURS • 抹茶 • ";

const BlendCard = ({ blend, isActive }) => (
  <div
    className={`relative flex-none w-[80vw] md:w-[45vw] lg:w-[35vw] h-[70vh] rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
      isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"
    }`}
    style={{ background: blend.bgColor }}
  >
    {/* Big emoji product visual */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="text-[14rem] select-none pointer-events-none"
        style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))" }}
      >
        {blend.emoji}
      </span>
    </div>

    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(to top, ${blend.bgColor}ee 0%, transparent 60%)`,
      }}
    />

    {/* Card info */}
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <p
        className="font-paragraph text-sm uppercase tracking-widest mb-2"
        style={{ color: blend.color === "#0f1209" ? "#6fa845" : blend.color }}
      >
        {blend.subtitle}
      </p>
      <h2
        className="font-sans text-3xl md:text-4xl uppercase tracking-tight text-cream"
      >
        {blend.name}
      </h2>
    </div>

    {/* Top badge */}
    <div className="absolute top-6 right-6 w-16 h-16 rounded-full border border-cream/30 flex items-center justify-center">
      <span className="font-paragraph text-cream/60 text-xs uppercase tracking-wider">New</span>
    </div>
  </div>
);

const BlendsSlider = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const titleRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        ".blend-title-word",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Horizontal scroll for slider
      const cards = sliderRef.current.querySelectorAll(".blend-card");
      if (window.innerWidth >= 768) {
        const totalScroll = sliderRef.current.scrollWidth - window.innerWidth;
        gsap.to(sliderRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const idx = Math.round(self.progress * (blendList.length - 1));
              setActiveIdx(idx);
            },
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="blends" className="blend-section" ref={sectionRef}>
      {/* Section header */}
      <div ref={titleRef} className="pt-24 pb-10 px-8 md:px-16 overflow-hidden">
        <div className="first-text-split overflow-hidden">
          <h1 className="general-title">
            {"SIX BLENDS".split(" ").map((w, i) => (
              <span key={i} className="blend-title-word inline-block mr-4">
                {w}
              </span>
            ))}
          </h1>
        </div>
        <div className="second-text-split overflow-hidden">
          <h1 className="general-title text-mid-green">
            {"ONE RITUAL".split(" ").map((w, i) => (
              <span key={i} className="blend-title-word inline-block mr-4">
                {w}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Marquee band */}
      <div className="blend-text-scroll w-full overflow-hidden relative mb-8">
        <div
          className="flex overflow-hidden py-3"
          style={{
            background: "#3d6b2a",
            borderTop: "0.5vw solid #f5f0e8",
            borderBottom: "0.5vw solid #f5f0e8",
          }}
        >
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <h1
                key={i}
                className="uppercase text-mist 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold leading-[9vw] tracking-[-.35vw] pr-8"
              >
                {marqueeTop}
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal slider */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-6 px-8 md:px-16 pb-16 pt-4"
          style={{ width: "max-content" }}
        >
          {blendList.map((blend, i) => (
            <div key={i} className="blend-card">
              <BlendCard blend={blend} isActive={i === activeIdx} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-3 pb-12">
        {blendList.map((_, i) => (
          <div
            key={i}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIdx ? "2rem" : "0.5rem",
              height: "0.5rem",
              background: i === activeIdx ? "#3d6b2a" : "#c8ddb0",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BlendsSlider;
