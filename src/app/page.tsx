'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Arka Plan Resmi */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/3.jpg"
          alt="Hayati İşler"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Karanlık katmanı çok hafif tuttuk */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Üst Sabit Yazılar */}
      <div className="pt-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-blue-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Hayati İşler
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] mt-2">
          Urfa Sıra Gecesi
        </h2>
      </div>

      {/* Açıklamalar Kutuları */}
      <section className="py-16 px-6 bg-black text-center mt-20">
        <h3 className="text-2xl font-bold mb-8">Neden Hayati İşler?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-800/90 p-6 rounded-xl border border-red-400 shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">20 Yıllık Tecrübe</h4>
            <p>Türkiye’nin 81 ilinde ve yurt dışında binlerce sahne performansı.</p>
          </div>
          <div className="bg-red-800/90 p-6 rounded-xl border border-red-400 shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Sıra Gecesi Kültürü</h4>
            <p>Orijinal repertuar, otantik ekip, zengin müzik ve eğlence sunumu.</p>
          </div>
          <div className="bg-red-800/90 p-6 rounded-xl border border-red-400 shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Düğün, Nişan, Davet</h4>
            <p>Profesyonel sahne kurulumu ve güvenilir organizasyon deneyimi.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
