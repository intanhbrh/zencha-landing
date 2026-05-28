import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reviews } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(count)].map((_, i) => (
      <span key={i} className="text-gold text-sm">★</span>
    ))}
  </div>
);

const ReviewCard = ({ review, style }) => (
  <div
    className="review-card flex-none bg-cream border-2 border-cream shadow-2xl"
    style={style}
  >
    <div className="p-8 h-full flex flex-col justify-between" style={{ background: review.color + "15" }}>
      <div>
        <Stars count={review.rating} />
        <p className="font-paragraph text-dark-green text-sm md:text-base leading-relaxed italic">
          "{review.text}"
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-cream font-sans text-lg"
          style={{ background: review.color }}
        >
          {review.name[0]}
        </div>
        <div>
          <p className="font-sans text-dark-green text-sm uppercase tracking-wide">
            {review.name}
          </p>
          <p className="font-paragraph text-dark-green/40 text-xs">
            {review.handle}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big title reveal
      gsap.fromTo(
        ".reviews-title",
        { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards fan in
      const cards = document.querySelectorAll(".review-card");
      const rotations = [-10, 4, -4, 4, -10, 4];
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 150, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: rotations[i],
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      });

      // Horizontal scroll for cards
      if (window.innerWidth >= 768) {
        const totalScroll =
          cardsRef.current.scrollWidth - window.innerWidth + 200;
        gsap.to(cardsRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const rotations = [
    "rotate-z-[-10deg]",
    "rotate-z-[4deg]",
    "rotate-z-[-4deg]",
    "rotate-z-[4deg]",
    "rotate-z-[-10deg]",
    "rotate-z-[4deg]",
  ];

  const translations = [
    "translate-y-[-5%]",
    "",
    "translate-y-[-5%]",
    "translate-y-[5%]",
    "",
    "translate-y-[5%]",
  ];

  return (
    <section className="reviews-section" ref={sectionRef}>
      {/* Big background text */}
      <div className="overflow-hidden">
        <h1 className="reviews-title text-dark-green/10">LOVE IT</h1>
      </div>
      <div className="overflow-hidden">
        <h1 className="reviews-title text-dark-green/10">OR WE FIX IT</h1>
      </div>

      {/* Cards */}
      <div ref={cardsRef} className="pin-box mt-16 md:mt-0">
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`review-card ${rotations[i]} ${translations[i]}`}
            style={{ transform: `rotate(${[-10,4,-4,4,-10,4][i]}deg) translateY(${["−5%","0","-5%","5%","0","5%"][i]})` }}
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
