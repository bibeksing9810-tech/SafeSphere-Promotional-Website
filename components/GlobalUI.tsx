'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalUI() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 280);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      setShowTop(window.scrollY > 640);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <>
    <div className={`route-loader ${loading ? 'is-loading' : ''}`} aria-hidden="true"><img className="loading-brand" src="/safesphere-logo.png" alt=""/><div className="loader-label">Opening SafeSphere</div></div>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <button className={`back-top ${showTop ? 'visible' : ''}`} style={{'--scroll': `${progress * 3.6}deg`} as React.CSSProperties} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })} tabIndex={showTop ? 0 : -1} aria-hidden={!showTop} aria-label="Back to top"><span aria-hidden="true">↑</span></button>
  </>;
}
