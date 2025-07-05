'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black text-white relative overflow-hidden">
      {/* Arka Plan Resmi */}
      <div className="relative h-[85vh] w-full">
        <Image
          src="/images/3.jpg"
          alt="Hayati İşler"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-300 via-red-500 via-purple-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent drop-shadow-xl animate-gradient">
            HAYATİ İŞLER
          </h1>
          <h2 className="text-3xl md:text-5xl mt-4 font-semibold bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
            Urfa Sıra Gecesi
          </h2>
        </div>
      </div>

      {/* Neden Başlığı */}
      <section className="bg-black py-12 px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
          Neden Hayati İşler?
        </h3>

        {/* Açıklama Kutuları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-800/90 p-6 rounded-xl border border-red-400 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">20+ Yıllık Sanat Yolculuğu</h4>
            <p>
              Türkiye’nin dört bir yanında ve yurtdışında sahne almış olan Hayati İşler,  
              sahnedeki ustalığı ve tecrübesiyle iz bırakan gecelere imza atmıştır.
            </p>
          </div>
          <div className="bg-red-800/90 p-6 rounded-xl border border-red-400 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Gerçek Urfa Kültürü</h4>
            <p>
              Repertuarından giyimine, ekibinden tavırlarına kadar otantik Urfa sıra gecesi  
              geleneğini %100 yaşatan bir deneyim sunuyoruz.
            </p>
          </div>
          <div className="bg-red-800/90 p-6 rounded-xl border border-red-400 shadow-xl hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Sıcak & Samimi Ortam</h4>
            <p>
              Düğün, nişan ve özel davetlerde konuklarınıza samimi, sıcak ve enerjik  
              bir atmosfer sunuyor, gecenizi unutulmaz kılıyoruz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
