import Link from 'next/link';

export function SectionHead({ eyebrow, title, body }: { eyebrow:string; title:string; body?:string }) {
  return <div className="section-head"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>{body && <p>{body}</p>}</div>;
}
export function FinalCTA() {
  return <section className="final-cta"><div className="container final-wrap"><div><div className="eyebrow">Next step</div><h2>See the learning loop in motion.</h2><p>Review the proposed SafeSphere experience and tell us which evidence a learner or trainer would need next.</p></div><div className="final-actions"><Link className="btn btn-primary" href="/contact">Request a demo <span aria-hidden="true">↗</span></Link><Link className="btn btn-secondary" href="/product">Explore the platform</Link></div></div></section>;
}
