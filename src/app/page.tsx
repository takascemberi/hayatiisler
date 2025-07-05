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
          <h1 className="text-[48px] md:text-[96px] font-extrabold text-red-600 animate-pulse drop-shadow-[0_5px_10px_rgba(255,0,0,0.9)]">
            HAYATİ İŞLER
          </h1>
          <h2 className="text-[36px] md:text-[72px] mt-2 font-bold text-white drop-shadow-[0_4px_8px_rgba(255,215,0,0.9)] animate-bounce">
            Urfa Sıra Gecesi
          </h2>
        </div>
      </div>

      {/* Açıklama Kutuları */}
      <section className="bg-black py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-16 text-white drop-shadow-lg">Neden Hayati İşler?</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kutu 1 */}
          <div className="rounded-3xl p-6 shadow-xl bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 hover:scale-105 transition-all duration-300 text-black">
            <h4 className="text-2xl font-extrabold mb-4">20+ Yıllık Sanat Yolculuğu</h4>
            <p className="text-sm leading-relaxed font-medium">
              Sanatçı Hayati İşler, 20 yılı aşkın sahne tecrübesiyle Türkiye’nin dört bir yanında ve
              yurt dışında yüzlerce programa imza atmıştır. Sahne hakimiyeti, ses rengi ve sahnedeki
              samimiyetiyle izleyicileri büyülemiştir. Her performans, gelenekle iç içe ama modern
              dokunuşlarla sunulur. Yılların verdiği birikim ve ustalıkla özel gecelere değer katmaktadır.
            </p>
          </div>

          {/* Kutu 2 */}
          <div className="rounded-3xl p-6 shadow-xl bg-gradient-to-br from-purple-800 via-pink-500 to-red-400 hover:scale-105 transition-all duration-300 text-white">
            <h4 className="text-2xl font-extrabold mb-4">Gerçek Urfa Kültürü</h4>
            <p className="text-sm leading-relaxed font-medium">
              Sıra gecesi, bir gelenekten öte yaşam biçimidir. Hayati İşler, repertuarından kıyafetine kadar
              bu kültürü birebir yaşatır. Ekip ruhu, otantik tavır ve geleneksel şarkılarla geçmişi bugüne taşır.
              Müzik, sohbet ve samimiyetin iç içe geçtiği bu gecelerde, misafirler gerçek Urfa ruhunu yaşar.
              %100 kültürel sadakatle unutulmaz bir atmosfer oluşturulur.
            </p>
          </div>

          {/* Kutu 3 */}
          <div className="rounded-3xl p-6 shadow-xl bg-gradient-to-br from-emerald-700 via-teal-500 to-blue-400 hover:scale-105 transition-all duration-300 text-white">
            <h4 className="text-2xl font-extrabold mb-4">Sıcak & Samimi Ortam</h4>
            <p className="text-sm leading-relaxed font-medium">
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
