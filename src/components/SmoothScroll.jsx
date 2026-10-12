import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
      prevent: (node) => {
        if (!node) return false;
        return (
          node.classList?.contains('modal-overlay') ||
          node.classList?.contains('modal-content-box') ||
          node.classList?.contains('consult-modal-box') ||
          node.classList?.contains('lead-capture-modal-box') ||
          node.classList?.contains('lead-modal-form-content') ||
          node.classList?.contains('hanu-mobile-drawer') ||
          node.classList?.contains('mobile-drawer-links-scroll') ||
          node.classList?.contains('compare-modal-box') ||
          node.classList?.contains('compare-table-wrapper') ||
          node.classList?.contains('drawer-content') ||
          node.classList?.contains('hanu-city-tabs-scroll') ||
          node.classList?.contains('virtual-tour-viewport') ||
          node.closest?.('.modal-overlay') ||
          node.closest?.('.modal-content-box') ||
          node.closest?.('.consult-modal-box') ||
          node.closest?.('.lead-capture-modal-box') ||
          node.closest?.('.lead-modal-form-content') ||
          node.closest?.('.hanu-mobile-drawer') ||
          node.closest?.('.mobile-drawer-links-scroll') ||
          node.closest?.('.compare-modal-box') ||
          node.closest?.('.compare-table-wrapper') ||
          node.closest?.('.drawer-content') ||
          node.closest?.('.hanu-city-tabs-scroll') ||
          node.closest?.('.virtual-tour-viewport') ||
          node.closest?.('[data-lenis-prevent]')
        );
      }
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Intercept in-page hash links or scroll targets for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -75, duration: 1.4 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}
