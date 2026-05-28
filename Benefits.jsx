import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefitList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered title reveals
      gsap.fromTo(
        ".benefit-big-title",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Benefit cards
      gsap.fromTo(
        ".benefit-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".benefits-grid",
            start: "top 80%",
          },
        }
      );

      // Pin the visual section
      if (window.innerWidth >= 768) {
        ScrollTrigger.create({
          trigger: pinRef.current,
          start: "top top",
          end: "+=80%",
          pin: true,
          pinSpacing: false,
        });
      }

      // Clip-path reveal on visual
      gsap.fromTo(
        ".benefits-visual",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".benefits-visual",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="benefit-section" ref={sectionRef}>
      <div className="relative z-10 pt-24 pb-8 px-8 md:px-16">
        {/* Stacked big titles */}
        <div className="overflow-hidden mb-4">
          <h1 className="benefit-big-title general-title text-pale-green first-title">
            CALM MIND
          </h1>
        </div>
        <div className="overflow-hidden mb-4">
          <h1 className="benefit-big-title general-title text-mid-green second-title">
            CLEAN BODY
          </h1>
        </div>
        <div className="overflow-hidden mb-4">
          <h1 className="benefit-big-title general-title text-pale-green third-title">
            CLEAR FOCUS
          </h1>
        </div>
        <div className="overflow-hidden mb-16">
          <h1 className="benefit-big-title general-title text-mid-green/30 fourth-title">
            DAILY RITUAL
          </h1>
        </div>

        {/* Sub-text */}
        <p className="max-w-lg mx-auto mb-20 text-pale-green/70 font-paragraph text-base md:text-lg leading-relaxed text-center">
          Matcha isn't just a drink — it's a practice. A moment of intentional
          calm in a world that never stops. Here's what happens when you make it
          yours.
        </p>
      </div>

      {/* Benefits grid */}
      <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 gap-6 px-8 md:px-16 pb-16">
        {benefitList.map((b, i) => (
          <div
            key={i}
            className="benefit-card bg-[#1a2e0f] border border-[#3d6b2a33] rounded-2xl p-8 group hover:border-[#6fa845] transition-colors"
          >
            <span className="text-4xl mb-5 block">{b.icon}</span>
            <h3 className="font-sans text-2xl text-pale-green uppercase tracking-wide mb-3">
              {b.title}
            </h3>
            <p className="font-paragraph text-pale-green/60 text-sm leading-relaxed !text-left">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Pinned visual — big matcha visual with overlay */}
      <div ref={pinRef} className="vd-pin-section relative overflow-hidden">
        {/* Gradient background standing in for video */}
        <div
          className="benefits-visual size-full absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f1209 0%, #1a2e0f 40%, #3d6b2a 70%, #6fa845 100%)",
          }}
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
          <div className="text-[8rem] md:text-[14rem] mb-8 select-none">🍵</div>
          <h2 className="font-sans text-4xl md:text-6xl text-cream uppercase tracking-wider mb-6">
            Brew the ritual.
          </h2>
          <p className="font-paragraph text-cream/60 max-w-md text-base md:text-lg">
            Two minutes. A bamboo whisk. Water at 70°C. That's all it takes.
          </p>

          <button className="mt-10 bg-cream text-dark-green font-paragraph text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-pale-green transition-colors">
            Learn to Brew →
          </button>
        </div>

        {/* Floating label */}
        <div className="play-btn">
          <span className="font-sans text-cream text-sm uppercase tracking-widest">
            Watch
          </span>
        </div>

        {/* Spin circle decoration */}
        <div className="absolute top-8 right-8 size-[15vw] max-w-[120px] max-h-[120px]">
          <svg
            viewBox="0 0 120 120"
            className="spin-circle w-full h-full"
          >
            <path
              id="circlePath"
              d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="none"
            />
            <text
              fill="rgba(200,221,176,0.6)"
              fontSize="9"
              fontFamily="Anton"
              letterSpacing="3"
            >
              <textPath href="#circlePath">
                ZENCHA • CEREMONIAL MATCHA • UJI JAPAN •{" "}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
