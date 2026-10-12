import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GlobalUI from '@/components/GlobalUI';

export default function Layout({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`site-shell ${light ? 'light-page' : ''}`}><a className="skip-link" href="#main-content">Skip to content</a><GlobalUI /><Nav />{children}<Footer /></div>;
}
