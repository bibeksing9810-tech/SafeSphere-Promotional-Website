import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'SafeSphere | Learn by Doing', template: '%s | SafeSphere' },
  description: 'Explore SafeSphere, a proposed browser-based 3D health and safety training platform built around contextual decisions, feedback and measurable learning.',
  icons: { icon: '/safesphere-logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
