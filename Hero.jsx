import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeText = "CEREMONIAL MATCHA • FROM UJI, JAPAN • PURE RITUAL • ";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const scrollBandRef = useRef(null);
  const bgCircleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      )
        .fromTo(
          scrollBandRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          btnRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        );

      // Parallax on scroll
      gsap.to(bgCircleRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ritual" className="hero-container" ref={heroRef}>
      {/* Decorative background circle */}
      <div
        ref={bgCircleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full border border-pale-green opacity-30 pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full border border-pale-green opacity-20 pointer-events-none" />

      {/* Floating leaves decoration */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 rotate-12 pointer-events-none select-none">🍃</div>
      <div className="absolute top-40 right-16 text-3xl opacity-15 -rotate-6 pointer-events-none select-none">🌿</div>
      <div className="absolute bottom-40 left-20 text-2xl opacity-10 rotate-45 pointer-events-none select-none">🍵</div>

      <div className="hero-content">
        {/* Main title */}
        <h1 className="hero-title" ref={titleRef}>
          ZENCHA
        </h1>

        {/* Scroll-text band */}
        <div className="hero-text-scroll w-full overflow-hidden" ref={scrollBandRef}>
          <div className="hero-subtitle flex overflow-hidden py-2 md:py-4">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <h1 key={i} className="pr-8">
                  {marqueeText}
                </h1>
              ))}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <h2 ref={subtitleRef}>
          Ceremonial grade matcha, sourced from the misty mountains of Uji.
          <br />
          One bowl. Complete clarity.
        </h2>

        {/* CTA */}
        <button className="hero-button" ref={btnRef}>
          Begin Your Ritual
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-paragraph text-xs uppercase tracking-widest text-dark-green">
          Scroll
        </span>
        <div className="w-px h-12 bg-dark-green animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
