'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
function Emblem({paused}:{paused:boolean}){
 const group=useRef<THREE.Group>(null),orbit=useRef<THREE.Group>(null),time=useRef(0);
 const shield=useMemo(()=>{const s=new THREE.Shape();s.moveTo(0,1.85);s.lineTo(1.36,1.15);s.quadraticCurveTo(1.65,-.6,0,-1.85);s.quadraticCurveTo(-1.65,-.6,-1.36,1.15);s.closePath();const h=new THREE.Path();h.moveTo(0,1.58);h.lineTo(-1.12,1);h.quadraticCurveTo(-1.35,-.5,0,-1.52);h.quadraticCurveTo(1.35,-.5,1.12,1);h.closePath();s.holes.push(h);return s;},[]);
 const ribbon=useMemo(()=>new THREE.CatmullRomCurve3([new THREE.Vector3(-1.22,.98,.4),new THREE.Vector3(-1.32,.48,.8),new THREE.Vector3(-.55,.12,1.27),new THREE.Vector3(.55,-.15,1.27),new THREE.Vector3(1.23,-.55,.72),new THREE.Vector3(.9,-1.15,.4)]),[]);
 useFrame((_,delta)=>{if(paused)return;time.current+=Math.min(delta,.05);if(group.current){group.current.rotation.y=Math.sin(time.current*.32)*.2;group.current.position.y=Math.sin(time.current*.65)*.05;}if(orbit.current)orbit.current.rotation.z=time.current*.16;});
 return <group ref={group} rotation={[0,-.12,0]}>
 <ambientLight intensity={1.7}/><directionalLight position={[2,4,5]} intensity={4} color="#b3fbff"/><pointLight position={[-3,1,3]} color="#006cff" intensity={22}/>
 <mesh position={[0,0,-.12]}><extrudeGeometry args={[shield,{depth:.18,bevelEnabled:true,bevelSize:.045,bevelThickness:.05,bevelSegments:3,steps:1}]}/><meshStandardMaterial color="#087af1" metalness={.75} roughness={.2}/></mesh>
 <mesh><sphereGeometry args={[1.12,48,32]}/><meshPhysicalMaterial color="#03488d" metalness={.55} roughness={.24}/></mesh>
 <mesh scale={1.007}><icosahedronGeometry args={[1.12,3]}/><meshBasicMaterial color="#30c7dc" wireframe transparent opacity={.35}/></mesh>
 <mesh><tubeGeometry args={[ribbon,80,.15,12,false]}/><meshStandardMaterial color="#008eea" metalness={.75} roughness={.18}/></mesh>
 <group rotation={[1.02,-.24,-.38]}>
 <mesh><torusGeometry args={[1.78,.065,16,120]}/><meshStandardMaterial color="#14ddf1" emissive="#0874bc" emissiveIntensity={.7} metalness={.55} roughness={.15}/></mesh>
 <group ref={orbit}><mesh position={[1.78,0,0]}><sphereGeometry args={[.085,20,20]}/><meshBasicMaterial color="#d3ffff"/></mesh></group>
 </group></group>;
}
export default function Scene({compact=false,paused=false}:{compact?:boolean;paused?:boolean}){return <Canvas frameloop={paused?'demand':'always'} dpr={[1,1.5]} camera={{position:[0,0,compact?6.6:6.5],fov:42}} gl={{antialias:true,alpha:true}}><Emblem paused={paused}/></Canvas>;}
