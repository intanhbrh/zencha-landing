import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ritualFacts } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const marquee = "WHAT'S INSIDE • 成分 • WHAT'S INSIDE • 成分 • ";

const RitualFacts = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bandRef = useRef(null);
  const factsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".facts-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        bandRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: bandRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".fact-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: factsRef.current, start: "top 80%" },
        }
      );

      // Big visual parallax
      gsap.fromTo(
        ".facts-big-visual",
        { y: 80 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ritual-section" ref={sectionRef}>
      {/* Big background visual */}
      <div className="facts-big-visual absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div
          className="text-[40vw] leading-none select-none opacity-10"
          style={{ color: "#3d6b2a" }}
        >
          🍵
        </div>
      </div>

      <div className="relative z-10 pt-24 px-8 md:px-16 pb-48">
        {/* Title */}
        <div ref={titleRef} className="mb-12 overflow-hidden">
          <div className="first-text-split overflow-hidden">
            <h1 className="general-title ritual-title facts-title">
              WHAT'S
            </h1>
          </div>
          <div className="second-text-split overflow-hidden">
            <h1 className="general-title text-mid-green facts-title">
              INSIDE
            </h1>
          </div>
          <p className="font-paragraph text-dark-green/60 mt-4 max-w-md text-lg leading-relaxed facts-title">
            One serving of ceremonial matcha delivers more than you think.
            Nature packed it in. We just preserved it.
          </p>
        </div>

        {/* Marquee band */}
        <div
          ref={bandRef}
          className="ritual-text-scroll w-full overflow-hidden mb-8 !opacity-100"
        >
          <div
            className="flex overflow-hidden py-3"
            style={{
              background: "#1a2e0f",
              borderTop: "0.5vw solid #e8f0dc",
              borderBottom: "0.5vw solid #e8f0dc",
            }}
          >
            <div className="animate-marquee flex whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <h1
                  key={i}
                  className="uppercase text-mist 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold leading-[9vw] tracking-[-.35vw] pr-8"
                >
                  {marquee}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating facts bar */}
      <div className="ritual-box" ref={factsRef}>
        <div className="list-wrapper">
          {ritualFacts.map((fact, i) => (
            <div key={i} className="fact-item relative flex flex-col items-center gap-1 px-6 md:px-12">
              <p className="font-sans text-2xl md:text-4xl text-dark-green font-bold">
                {fact.amount}
              </p>
              <p className="font-paragraph text-sm uppercase tracking-wider text-mid-green">
                {fact.label}
              </p>
              {i < ritualFacts.length - 1 && (
                <div className="spacer-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualFacts;
