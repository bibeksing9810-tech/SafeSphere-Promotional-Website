import Link from 'next/link';
import Layout from '@/components/Layout';
import DecisionDemo from '@/components/DecisionDemo';
import SceneClient from '@/components/SceneClient';
import { FinalCTA, SectionHead } from '@/components/Section';
import { modules } from '@/lib/data';

const loop = [
  ['01','Observe','Read the environment before the interface reveals an answer.'],
  ['02','Identify','Select the condition that requires attention.'],
  ['03','Interact','Inspect evidence and open the relevant decision.'],
  ['04','Decide','Choose a response in context.'],
  ['05','Feedback','Understand why the decision matters.'],
  ['06','Improve','Review the result and focus the next attempt.']
];

const signals = [
  ['Context','Spatial cues keep decisions connected to place.'],
  ['Integrity','The server applies scoring rules, not the browser.'],
  ['Visibility','Trainers see completion, outcomes and weak areas.']
];

export default function Home() {
  return <Layout><main id="main-content" tabIndex={-1}>
    <section className="hero spatial-hero">
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill"><span/> LEARN BY DOING. · 3D safety training</div>
          <h1>Practise the decision <em>before it matters.</em></h1>
          <p className="hero-lede">SafeSphere turns safety training into guided spatial practice. Learners observe, identify, decide and improve inside a browser-based 3D experience.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/training/hazard-perception">Explore the demo <span aria-hidden="true">↗</span></Link>
            <Link className="btn btn-secondary" href="/how-it-works">See how it works</Link>
          </div>
          <div className="hero-trust"><span>Browser-first MVP</span><span>Role-aware experience</span><span>Trusted scoring direction</span></div>
        </div>
        <div className="spatial-stage" aria-label="Abstract SafeSphere spatial training interface">
          <div className="stage-grid"/><div className="stage-glow"/>
          <div className="sphere-canvas"><SceneClient /></div>
          <div className="glass-card objective-card"><span className="micro">Current objective</span><strong>Recognise the signal</strong><small>Observe before selecting</small></div>
          <div className="glass-card progress-card"><span className="micro">Learning loop</span><strong>03 / 06</strong><div className="mini-progress"><span/></div></div>
          <div className="glass-card feedback-card"><span className="signal-icon" aria-hidden="true">✓</span><div><span className="micro">Feedback ready</span><strong>Reasoning captured</strong></div></div>
          <div className="stage-caption"><span className="live-dot"/> Spatial prototype · illustrative interface</div>
        </div>
      </div>
      <a className="scroll-cue" href="#experience"><span>Explore the system</span><i aria-hidden="true">↓</i></a>
    </section>

    <section className="signal-strip"><div className="container signal-grid">{signals.map(([t,p])=><div className="signal-item" key={t}><span>{t}</span><p>{p}</p></div>)}</div></section>

    <section className="section" id="experience"><div className="container">
      <SectionHead eyebrow="A focused learning loop" title="Less passive recall. More observable judgement." body="The interface keeps the learner oriented while the scenario asks for attention, action and reflection."/>
      <div className="loop-grid">{loop.map(([n,t,p])=><article className="loop-card glass-panel" key={n}><span className="loop-number">{n}</span><div className="loop-orbit" aria-hidden="true"><span/></div><h3>{t}</h3><p>{p}</p></article>)}</div>
    </div></section>

    <section className="section spatial-demo"><div className="container demo-grid">
      <div className="demo-copy"><div className="eyebrow">Flagship vertical slice</div><h2>Frozen Storage Hazard Perception</h2><p>Practise noticing conditions that deserve attention: ice near a walking route, an obstructed exit or an unstable pallet. Explore this fictional FrostLink example, inspect a signal and compare possible decisions.</p><ul className="clean-list"><li>Explore a simulated environment</li><li>Notice and inspect hazards</li><li>Choose a proposed response</li><li>Receive immediate explanation</li><li>Build a measurable result</li></ul><Link className="btn btn-primary" href="/training/hazard-perception">Explore the experience <span aria-hidden="true">→</span></Link></div>
      <DecisionDemo />
    </div></section>

    <section className="section"><div className="container"><SectionHead eyebrow="Planned module system" title="One interaction language across six safety topics." body="The flagship scenario receives MVP depth. The remaining modules show how the same learning model can scale without claiming completed implementation."/>
      <div className="module-grid">{modules.map((m,i)=><article className={`module-card glass-panel ${i===0?'featured':''}`} key={m.slug}><div className="module-top"><span className="module-index">0{i+1}</span>{m.tag&&<span className="module-tag">{m.tag}</span>}</div><h3>{m.name}</h3><p>{m.desc}</p><Link className="text-link" href={`/training/${m.slug}`}>View module <span aria-hidden="true">↗</span></Link></article>)}</div>
    </div></section>

    <section className="section section-deep"><div className="container role-grid">
      <div className="role-copy"><div className="eyebrow">Two perspectives one evidence model</div><h2>The learner acts. The trainer sees where support is needed.</h2><p>SafeSphere separates personal learning from organisational oversight while keeping both views connected to the same trusted activity.</p><Link className="btn btn-secondary" href="/for-safety-managers">Explore trainer visibility</Link><Link className="text-link" href="/for-trainees">Explore the learner journey</Link></div>
      <div className="insight-panel glass-panel"><div className="panel-bar"><span>Training signal</span><span className="live-state">Illustrative data</span></div><div className="metric-row"><div><span>Completion</span><strong>84%</strong></div><div><span>Decision accuracy</span><strong>76%</strong></div></div><div className="insight-chart"><div><span>Hazard recognition</span><i style={{width:'76%'}}/></div><div><span>Response selection</span><i style={{width:'64%'}}/></div><div><span>Root-cause reasoning</span><i style={{width:'48%'}}/></div></div><div className="panel-foot"><span>Weak area detected</span><strong>Root-cause reasoning</strong></div></div>
    </div></section>

    <section className="section trust-section"><div className="container"><SectionHead eyebrow="Responsible by design" title="Immersive does not mean unrestrained."/><div className="trust-grid">{[
      ['Safe behaviour first','Progress and achievements recognise accurate decisions and improvement, never reckless speed.'],
      ['Evidence over claims','Concepts, future direction and implemented capability remain clearly separated.'],
      ['Fictional scenario','FrostLink is an academic setting, not a real client or operating facility.'],
      ['Accessible direction','Keyboard paths, focus states, labels, contrast and reduced motion are designed in.']
    ].map(([t,p])=><article className="trust-card glass-panel" key={t}><span className="trust-dot"/><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <FinalCTA />
  </main></Layout>;
}
