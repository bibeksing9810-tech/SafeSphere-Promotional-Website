'use client';
import { FormEvent, useState } from 'react';
import Layout from '@/components/Layout';

const interestOptions = ['Hazard Perception', 'Training Modules', 'Safety Manager Experience', 'Technology', 'Future VR', 'Other'];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggleInterest(value: string) {
    setSelected((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => { setSending(false); setSent(true); }, 850);
  }

  return (
    <Layout>
      <main id="main-content" tabIndex={-1}>
        <section className="inner-hero">
          <div className="container">
            <div className="eyebrow">Contact / Request a Demo</div>
            <h1>Explore the proposed SafeSphere platform.</h1>
            <p>Explore the demo request flow using fictional details. This preview does not send or save an enquiry.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="form-layout">
              <div>
                <div className="eyebrow">Prototype conversion flow</div>
                <h2 className="contact-title">See what the experience could feel like.</h2>
                <p className="muted">The demo form is part of the promotional website prototype. No commercial deployment or customer relationship is implied.</p>
                <div className="notice" style={{ marginTop: 24 }}>SafeSphere is a proposed academic/prototype product concept for the fictional FrostLink Cold Chain Logistics & Distribution Centre scenario.</div>
              </div>

              <div className="form-card">
                {sent ? (
                  <div className="form-success" role="status">
                    <div className="eyebrow">Demo complete</div>
                    <h2>Thanks for exploring SafeSphere.</h2>
                    <p className="muted">No enquiry was sent or stored. This screen demonstrates the feedback a future connected form would provide.</p>
                    <button className="btn btn-secondary" type="button" onClick={() => { setSent(false); setSelected([]); }}>Send another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} aria-busy={sending}><p className="notice">Use fictional details only. Nothing entered here is sent or saved.</p>
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work email</label>
                      <input id="email" name="email" type="email" required placeholder="you@company.com" />
                    </div>
                    <div className="field">
                      <label htmlFor="organisation">Organisation</label>
                      <input id="organisation" name="organisation" required placeholder="Organisation name" />
                    </div>
                    <div className="field">
                      <label htmlFor="role">Role</label>
                      <input id="role" name="role" required placeholder="Safety / Training / Operations / HR" />
                    </div>

                    <fieldset className="field interests-field">
                      <legend>What are you interested in?</legend>
                      <div className="checkbox-grid">
                        {interestOptions.map((option) => {
                          const checked = selected.includes(option);
                          return (
                            <label className={`check ${checked ? 'is-checked' : ''}`} key={option}>
                              <input
                                type="checkbox"
                                name="interest"
                                value={option}
                                checked={checked}
                                onChange={() => toggleInterest(option)}
                              />
                              <span className="check-box" aria-hidden="true">{checked ? '✓' : ''}</span>
                              <span className="check-copy">{option}</span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" placeholder="What would you like to explore?" />
                    </div>

                    <button className="btn btn-primary form-submit" type="submit" disabled={sending}>{sending ? <><span className="button-spinner" aria-hidden="true"/> Preparing request</> : <>Request a demo <span aria-hidden="true">↗</span></>}</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
