import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Smooth scrolling speed
      easing: (t) => 1 - Math.pow(1 - t, 3), // Exponential easing
      smooth: true,
    });

    function update(time) {
      lenis.raf(time);
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);

    // 🔥 Sync Lenis with GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? lenis.scrollTo(value) : lenis.animatedScroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    // 🔄 Update ScrollTrigger when Lenis updates
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);
}
