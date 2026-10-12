import Link from 'next/link';
import Brand from '@/components/Brand';

const groups = [
  { title: 'Explore', links: [['For Trainees','/for-trainees'],['Product','/product'],['Solutions','/solutions'],['Training','/training'],['How It Works','/how-it-works']] },
  { title: 'Platform', links: [['For Safety Managers','/for-safety-managers'],['Technology','/technology'],['About','/about']] },
  { title: 'Connect', links: [['Insights / Resources','/insights'],['Request a Demo','/contact'],['Prototype login','/login']] }
];

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div>
        <Link href="/" className="logo"><Brand/></Link>
        <p className="footer-desc">Interactive 3D health and safety training designed to help people practise recognition, decisions and improvement.</p>
      </div>
      {groups.map(group => <div key={group.title}><h4>{group.title}</h4>{group.links.map(([label, href]) => <Link className="footer-link" href={href} key={label}>{label}</Link>)}</div>)}
    </div>
    <div className="container footer-bottom"><span>SafeSphere · NEX3 Team 7 · Proposed product concept</span><span>FrostLink is a fictional academic scenario.</span></div>
  </footer>;
}
