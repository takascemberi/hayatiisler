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
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Üstte Başlık Yazıları */}
      <div className="pt-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-red-500 via-purple-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
          Hayati İşler
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg mt-2">
          Urfa Sıra Gecesi
        </h2>
      </div>

      {/* Özel Açıklamalar Kutuları */}
      <section className="py-16 px-6 bg-black text-center mt-20">
        <h3 className="text-2xl font-bold mb-8">Neden Hayati İşler?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-700/80 p-6 rounded-xl border border-red-300 shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">20 Yıllık Tecrübe</h4>
            <p>Türkiye’nin 81 ilinde ve yurt dışında binlerce sahne performansı.</p>
          </div>
          <div className="bg-red-700/80 p-6 rounded-xl border border-red-300 shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Sıra Gecesi Kültürü</h4>
            <p>Orijinal repertuar, otantik ekip, zengin müzik ve eğlence sunumu.</p>
          </div>
          <div className="bg-red-700/80 p-6 rounded-xl border border-red-300 shadow-md hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Düğün, Nişan, Davet</h4>
            <p>Profesyonel sahne kurulumu ve güvenilir organizasyon deneyimi.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
