'use client';
import dynamic from 'next/dynamic';
import { Component, useEffect, useState } from 'react';
const Scene=dynamic(()=>import('./Scene'),{ssr:false,loading:()=> <div className="scene-loading" role="status">Loading 3D emblem…</div>});
class SceneBoundary extends Component<{children:React.ReactNode},{failed:boolean}>{state={failed:false};static getDerivedStateFromError(){return {failed:true};}render(){return this.state.failed?<img className="scene-fallback" src="/safesphere-logo.png" alt="SafeSphere shield, globe and orbit"/>:this.props.children;}}
export default function SceneClient({compact=false}:{compact?:boolean}){const [paused,setPaused]=useState(true);useEffect(()=>{const q=window.matchMedia('(prefers-reduced-motion: reduce)');setPaused(q.matches);const change=()=>setPaused(q.matches);q.addEventListener('change',change);return()=>q.removeEventListener('change',change);},[]);return <div className="brand-scene"><SceneBoundary><Scene compact={compact} paused={paused}/></SceneBoundary><button className="motion-control" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?'Play motion':'Pause motion'}</button></div>;}
