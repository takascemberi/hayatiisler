'use client';

import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <main className="text-center space-y-10 pb-20">
      {/* Üst görsel */}
      <div className="relative">
        <Image
          src="/images/3.jpg"
          alt="Hayati İşler"
          width={1920}
          height={500}
          className="w-full object-cover h-[400px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold gradient-text">
            Hayati İşler
          </h1>
          <h2 className="text-3xl md:text-4xl mt-2 shadow-gold">
            Urfa Sıra Gecesi
          </h2>
        </div>
      </div>

      {/* Tanıtım kutuları */}
      <section className="grid md:grid-cols-3 gap-6 px-6">
        <div className="bg-gradient-to-br from-red-500 to-yellow-400 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">20+ Yıllık Sanat Yolculuğu</h3>
          <p>
            Sanatçı Hayati İşler, 20 yılı aşkın sahne tecrübesiyle Türkiye’nin dört bir yanında ve yurt dışında yüzlerce programa imza atmıştır. 
            Sahne hakimiyeti, ses rengi ve sahnedeki samimiyetiyle izleyicileri büyülemiştir. Her performans, gelenekle iç içe ama modern dokunuşlarla sunulur. 
            Yılların verdiği birikim ve ustalıkla özel gecelere değer katmaktadır.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Gerçek Urfa Kültürü</h3>
          <p>
            Sıra gecesi, bir gelenekten öte yaşam biçimidir. Hayati İşler, repertuarından kıyafetine kadar bu kültürü birebir yaşatır. 
            Ekip ruhu, otantik tavır ve geleneksel şarkılarla geçmişi bugüne taşır. 
            Müzik, sohbet ve samimiyetin iç içe geçtiği bu gecelerde, misafirler gerçek Urfa ruhunu yaşar. 
            %100 kültürel sadakatle unutulmaz bir atmosfer oluşturulur.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-blue-400 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Sıcak & Samimi Ortam</h3>
          <p>
            Hayati İşler’in sahnesi sadece bir müzik alanı değil, bir buluşma ve paylaşma ortamıdır. 
            Düğün, nişan veya özel davet fark etmeksizin, misafirlerin gönlünü ısıtan bir sıcaklık sunar. 
            Herkesin kendini rahat hissettiği, güldüğü ve eğlendiği unutulmaz bir gece yaşanır. 
            Eğlence kadar duygu da barındıran bu sıra geceleri, samimiyetin en saf halini sunar.
          </p>
        </div>
      </section>

      {/* Sosyal medya */}
      <section className="flex justify-center gap-8 text-3xl">
        <a
          href="https://wa.me/905373839345?text=Merhaba%20Hayati%20İşler%2C%20etkinlik%20için%20iletişime%20geçmek%20istiyorum"
          target="_blank"
          className="hover:text-green-600"
        >
          📱
        </a>
        <a href="https://www.instagram.com/" target="_blank" className="hover:text-pink-500">
          📸
        </a>
        <a href="https://www.youtube.com/" target="_blank" className="hover:text-red-600">
          ▶️
        </a>
      </section>

      {/* Form */}
      <h2 className="text-2xl font-bold">Rezervasyon Formu</h2>
      <ContactForm />

      {/* Galeri */}
      <Gallery />
    </main>
  );
}
