'use client';
import Link from 'next/link';
import Brand from '@/components/Brand';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { const close = (e: KeyboardEvent) => { if(e.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <Link href="/" className="logo" onClick={() => setOpen(false)} aria-label="SafeSphere home"><Brand/></Link>
      <nav className="nav-links" id="primary-navigation" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined} className={`nav-link ${pathname.startsWith(item.href) ? 'active' : ''}`} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>
      <Link href="/login" className="btn btn-ghost nav-login" onClick={() => setOpen(false)}>Prototype login</Link>
      <Link href="/contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Request a demo <span aria-hidden="true">↗</span></Link>
      <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
    </header>
  );
}
