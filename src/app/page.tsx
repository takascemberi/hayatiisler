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

        {/* Başlıklar */}
        <div className="absolute top-10 w-full flex flex-col items-center justify-start text-center px-4 z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold text-red-500 animate-pulse drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
            HAYATİ İŞLER
          </h1>
          <h2 className="text-3xl md:text-5xl mt-2 font-bold text-yellow-400 animate-bounce drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Urfa Sıra Gecesi
          </h2>
        </div>
      </div>

      {/* Açıklama Kutuları */}
      <section className="bg-black py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-12 text-white">Neden Hayati İşler?</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Kutu */}
          <div className="bg-red-900/90 p-6 rounded-2xl border border-red-400 shadow-2xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-bold mb-3 text-yellow-300">20+ Yıllık Sanat Yolculuğu</h4>
            <p className="text-sm leading-relaxed text-white">
              Sanatçı Hayati İşler, 20 yılı aşkın sahne tecrübesiyle Türkiye’nin dört bir yanında ve
              yurt dışında yüzlerce programa imza atmıştır. Sahne hakimiyeti, ses rengi ve sahnedeki
              samimiyetiyle izleyicileri büyülemiştir. Her performans, gelenekle iç içe ama modern
              dokunuşlarla sunulur. Yılların verdiği birikim ve ustalıkla özel gecelere değer katmaktadır.
            </p>
          </div>

          {/* 2. Kutu */}
          <div className="bg-red-900/90 p-6 rounded-2xl border border-red-400 shadow-2xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-bold mb-3 text-yellow-300">Gerçek Urfa Kültürü</h4>
            <p className="text-sm leading-relaxed text-white">
              Sıra gecesi, bir gelenekten öte yaşam biçimidir. Hayati İşler, repertuarından kıyafetine kadar
              bu kültürü birebir yaşatır. Ekip ruhu, otantik tavır ve geleneksel şarkılarla geçmişi bugüne taşır.
              Müzik, sohbet ve samimiyetin iç içe geçtiği bu gecelerde, misafirler gerçek Urfa ruhunu yaşar.
              %100 kültürel sadakatle unutulmaz bir atmosfer oluşturulur.
            </p>
          </div>

          {/* 3. Kutu */}
          <div className="bg-red-900/90 p-6 rounded-2xl border border-red-400 shadow-2xl hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-bold mb-3 text-yellow-300">Sıcak & Samimi Ortam</h4>
            <p className="text-sm leading-relaxed text-white">
              Hayati İşler’in sahnesi sadece bir müzik alanı değil, bir buluşma ve paylaşma ortamıdır.
              Düğün, nişan veya özel davet fark etmeksizin, misafirlerin gönlünü ısıtan bir sıcaklık sunar.
              Herkesin kendini rahat hissettiği, güldüğü ve eğlendiği unutulmaz bir gece yaşanır.
              Eğlence kadar duygu da barındıran bu sıra geceleri, samimiyetin en saf halini sunar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
