'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function CryptInterface() {
  const searchParams = useSearchParams();
  const domain = searchParams.get('d');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-500 font-mono flex flex-col items-center justify-center p-0 relative overflow-hidden">
      
      {/* 演出レイヤー */}
      <div className="scanline" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 pointer-events-none" />
      
      {/* 画面端のステータス表示（監視モニター風） */}
      <div className="absolute top-4 left-4 text-[10px] space-y-1 opacity-40">
        <p>PRISON_ZERO_TERMINAL: v0.5.2</p>
        <p>STATUS: MONITORING_THE_VOID</p>
        <p>LOC: SECTOR_NULL</p>
      </div>

      <main className="z-20 w-full flex flex-col items-center">
        
        {/* 以前生成したようなゴーレムのイメージを彷彿とさせる大きなシンボル */}
        <div className="mb-8 opacity-60 filter grayscale contrast-150">
          <div className="text-[8px] leading-[8px] whitespace-pre font-bold text-zinc-700">
            {`
               _____  _      _____  _   _ 
              |  __ \\| |    |  _  || \\ | |
              | |__) | |    | | | ||  \\| |
              |  ___/| |    | | | || . \` |
              | |    | |____\\ \\_/ /| |\\  |
              |_|    |______|\\___/ |_| \\_|
            `}
          </div>
        </div>

        <div className="text-center w-full px-4">
          {domain ? (
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.4em] text-red-900 font-bold uppercase glitch">
                -- Terminal Decommissioned --
              </p>
              
              <h1 className="text-4xl md:text-7xl font-black text-zinc-200 tracking-tighter uppercase break-all italic">
                {domain}
              </h1>

              <div className="flex justify-center gap-12 text-[10px] pt-8">
                <div className="text-left border-l border-zinc-800 pl-4">
                  <p className="text-zinc-600">DISPOSAL_ID</p>
                  <p className="text-zinc-400">#{(Math.random() * 0xFFFFFF).toString(16).toUpperCase().slice(0,6)}</p>
                </div>
                <div className="text-left border-l border-zinc-800 pl-4">
                  <p className="text-zinc-600">VOID_SECTOR</p>
                  <p className="text-zinc-400">UNNAMED_ASHES</p>
                </div>
              </div>

              <p className="text-[9px] text-zinc-700 mt-12 max-w-sm mx-auto leading-relaxed uppercase tracking-widest">
                this digital asset has been reclaimed by the structure. 
                no further records exist. end of transmission.
              </p>
            </div>
          ) : (
            <div className="opacity-30">
              <h1 className="text-xl tracking-[1em]">THE CRYPT</h1>
              <p className="text-[10px] mt-4">SEARCHING FOR DEAD SIGNALS...</p>
            </div>
          )}
        </div>
      </main>

      {/* 画面下のノイズ装飾 */}
      <div className="absolute bottom-4 w-full flex justify-between px-8 opacity-20 text-[8px] tracking-[0.5em]">
        <span>UNIT_05_CRYPT</span>
        <span>NO_RETRIEVAL_ALLOWED</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen" />}>
      <CryptInterface />
    </Suspense>
  );
}