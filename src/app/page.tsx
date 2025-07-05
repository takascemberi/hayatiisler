'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Kahraman Resim */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/images/3.jpg"
          alt="Hayati İşler"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg mb-2">
            Hayati İşler
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
            Urfa Sıra Gecesi
          </h2>
        </div>
      </div>

      {/* Özel Açıklamalar */}
      <section className="py-12 px-6 bg-black text-center">
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
