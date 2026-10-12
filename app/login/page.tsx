'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Brand from '@/components/Brand';
import Layout from '@/components/Layout';
import SceneClient from '@/components/SceneClient';

export default function LoginPage() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setNotice(false);
    window.setTimeout(() => { setLoading(false); setNotice(true); }, 900);
  }
  return <Layout><main id="main-content" tabIndex={-1} className="login-page"><section className="login-shell container">
    <div className="login-visual glass-panel"><div className="login-scene"><SceneClient compact/></div><div className="login-visual-copy"><span className="status-pill"><span/> Prototype access</span><h1>Return to your learning space.</h1><p>This conceptual sign-in demonstrates the intended authenticated transition from the promotional website to the training application.</p></div><div className="login-status"><span>Role-aware access</span><span>Encrypted session direction</span><span>Server-trusted results</span></div></div>
    <div className="login-card glass-panel"><Link href="/" className="logo"><Brand/></Link><div className="login-heading"><span className="eyebrow">Training application concept</span><h2>Sign in</h2><p>Use illustrative details to explore the prototype flow.</p></div>{notice ? <div className="login-notice" role="status"><strong>Prototype only</strong><p>No authentication request was sent and no credentials were stored.</p><button className="btn btn-secondary" type="button" onClick={()=>setNotice(false)}>Return to form</button></div> : <form onSubmit={submit} aria-busy={loading}>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="learner@example.com" required/></div>
      <div className="field"><label htmlFor="password">Password</label><div className="password-wrap"><input id="password" name="password" type={visible?'text':'password'} autoComplete="off" placeholder="Enter password" minLength={8} required/><button type="button" className="visibility-toggle" onClick={()=>setVisible(!visible)} aria-label={visible?'Hide password':'Show password'} aria-pressed={visible}>{visible?'Hide':'Show'}</button></div></div>
      <div className="form-options"><span className="muted">Demo session only</span><button type="button" className="text-button" onClick={()=>setNotice(true)}>Forgot password?</button></div>
      <button className="btn btn-primary form-submit" disabled={loading}>{loading?<><span className="button-spinner"/> Checking prototype</>:<>Preview sign-in <span aria-hidden="true">→</span></>}</button>
      <p className="form-boundary">Conceptual interface only. Do not enter a real password.</p>
    </form>}</div>
  </section></main></Layout>;
}
