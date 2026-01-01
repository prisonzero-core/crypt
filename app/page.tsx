'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Skull, Activity, Database, Hash } from 'lucide-react';

// --- Components ---

// 1. Block Golem Icon (CSS Grid Representation)
const GolemIcon = () => (
  <div className="relative w-32 h-32 animate-float">
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-5 gap-1 opacity-90">
      {/* Head Area */}
      <div className="col-start-2 col-span-2 row-span-2 bg-mad-cyan shadow-[0_0_10px_#00ffff]" />
      <div className="col-start-4 row-start-1 bg-mad-yellow" />
      <div className="col-start-1 row-start-2 bg-mad-green" />
      
      {/* Body Area */}
      <div className="col-start-2 col-span-2 row-start-3 row-span-1 bg-mad-pink shadow-[0_0_10px_#ff00ff]" />
      <div className="col-start-2 row-start-4 bg-mad-cyan" />
      <div className="col-start-3 row-start-4 bg-mad-green" />

      {/* Arms */}
      <div className="col-start-1 row-start-3 row-span-2 bg-mad-pink" /> {/* Right Arm */}
      <div className="col-start-4 row-start-3 row-span-2 bg-mad-yellow" /> {/* Left Arm */}
      <div className="col-start-1 row-start-5 bg-mad-cyan" /> {/* Hand */}
      <div className="col-start-4 row-start-5 bg-mad-green" /> {/* Hand */}

      {/* Legs */}
      <div className="col-start-2 row-start-5 bg-mad-pink" />
      <div className="col-start-3 row-start-5 bg-mad-cyan" />
    </div>
    {/* Glow Effect behind */}
    <div className="absolute inset-0 bg-mad-cyan blur-3xl opacity-20 -z-10" />
  </div>
);

// 2. Main Content
function CryptInterface() {
  const searchParams = useSearchParams();
  const domain = searchParams.get('d');
  const [mounted, setMounted] = useState(false);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-mad-black text-gray-300 font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-mad-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mad-black to-transparent z-10" />

      <main className="z-20 flex flex-col items-center max-w-2xl w-full">
        
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-12 border border-gray-800 bg-black/50 px-4 py-1 rounded-full backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-mad-green animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            PrisonZero // Unit 05
          </span>
        </div>

        {/* The Golem */}
        <div className="mb-10">
          <GolemIcon />
        </div>

        {/* Crypt Content */}
        <div className="w-full bg-gray-900/40 border border-gray-800 p-8 md:p-12 rounded-xl backdrop-blur-sm relative group hover:border-mad-pink/30 transition-colors duration-500">
          {/* Decorative Corner Lines */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-600" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-600" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-600" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-600" />

          {domain ? (
            // --- Case A: Domain is Dead (供養モード) ---
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center gap-2 text-mad-pink animate-pulse-fast">
                <Skull size={20} />
                <span className="text-sm font-bold tracking-widest uppercase">Connection Lost</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white break-all drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {domain}
              </h1>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

              <div className="grid grid-cols-2 gap-8 text-xs text-gray-500 w-full max-w-xs">
                <div className="flex flex-col gap-1 items-center">
                  <span className="flex items-center gap-1"><Database size={10} /> STATUS</span>
                  <span className="text-mad-cyan">ARCHIVED</span>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <span className="flex items-center gap-1"><Hash size={10} /> BLOCK HEIGHT</span>
                  <span className="text-mad-yellow">{Math.floor(Math.random() * 90000) + 10000}</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-4 max-w-md">
                This project has returned to the void. Its data is now part of the PrisonZero structure.
              </p>
            </div>
          ) : (
            // --- Case B: Crypt Entrance (トップページ) ---
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-2xl text-white tracking-widest">THE CRYPT</h1>
              <p className="text-sm text-gray-500 max-w-sm">
                A digital ossuary for lost domains and forgotten projects.
                <br />
                Managed by <span className="text-mad-green">MadPunks Structure</span>.
              </p>
              <div className="mt-4 p-2 bg-black/50 rounded border border-gray-800 font-mono text-xs text-gray-600">
                Waiting for incoming signals...
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center gap-2 text-[10px] text-gray-700">
          <Activity size={12} className="text-gray-800" />
          <p>© {new Date().getFullYear()} PrisonZero Core / <span className="text-gray-600">MadPunks Holdings</span></p>
        </footer>

      </main>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
      <CryptInterface />
    </Suspense>
  );
}