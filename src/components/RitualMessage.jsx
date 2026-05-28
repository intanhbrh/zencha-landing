import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

const marqueeText = "THE WAY OF TEA • 茶道 • THE WAY OF TEA • 茶道 • ";

const RitualMessage = () => {
  const sectionRef = useRef(null);
  const msgRef = useRef(null);
  const paraRef = useRef(null);
  const scrollBandRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in big ghost titles
      gsap.fromTo(
        ".msg-ghost",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Scroll band reveal
      gsap.fromTo(
        scrollBandRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Paragraph words
      gsap.fromTo(
        ".msg-word",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words =
    "We believe the ritual matters as much as the result. Every bowl is a pause. A breath. A return to what is essential.".split(
      " "
    );

  return (
    <section className="message-content" ref={sectionRef}>
      <div className="relative w-full h-full flex flex-col items-center justify-center py-32">
        {/* Ghost background titles */}
        <div className="msg-wrapper pointer-events-none select-none">
          <h1 className="msg-ghost">THE RITUAL</h1>
          <h1 className="msg-ghost">BEGINS WITH</h1>
          <h1 className="msg-ghost">INTENTION</h1>
        </div>

        {/* Rotating text band */}
        <div
          ref={scrollBandRef}
          className="msg-text-scroll w-full overflow-hidden absolute z-10"
        >
          <div
            className="bg-light-green flex overflow-hidden py-2 md:py-4"
            style={{ borderTop: "0.5vw solid #1a2e0f", borderBottom: "0.5vw solid #1a2e0f" }}
          >
            <div className="animate-marquee flex whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <h1
                  key={i}
                  className="uppercase text-cream 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold leading-[9vw] tracking-[-.35vw] pr-8"
                >
                  {marqueeText}
                </h1>
              ))}
            </div>
          </div>
        </div>

        {/* Body paragraph */}
        <p
          ref={paraRef}
          className="relative z-20 max-w-xl px-8 md:text-xl text-base leading-relaxed mt-8 text-pale-green font-paragraph"
        >
          {words.map((word, i) => (
            <span key={i} className="msg-word inline-block mr-2">
              {word}
            </span>
          ))}
        </p>

        {/* Bottom label */}
        <div className="relative z-20 mt-16 flex items-center gap-4 opacity-50">
          <div className="w-12 h-px bg-pale-green" />
          <span className="font-paragraph text-pale-green text-sm uppercase tracking-widest">
            Uji, Japan — since 2024
          </span>
          <div className="w-12 h-px bg-pale-green" />
        </div>
      </div>
    </section>
  );
};

export default RitualMessage;
