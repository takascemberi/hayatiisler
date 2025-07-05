'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hayati İşler Urfa Sıra Gecesi</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            20 yıldır Türkiye'nin 81 ilinde ve yurt dışında sahne alan usta sanatçı.
            Düğün, nişan, konser ve özel davetlerinizde sıra gecesi kültürünü yaşatıyor.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <a href="#hakkinda" className="bg-red-600 px-5 py-2 rounded hover:bg-red-700">Hakkında</a>
            <a href="#galeri" className="bg-green-600 px-5 py-2 rounded hover:bg-green-700">Galeri</a>
            <a href="#iletisim" className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700">İletişim</a>
            <a href="#rezervasyon" className="bg-yellow-500 px-5 py-2 rounded hover:bg-yellow-600 text-black">Rezervasyon</a>
          </div>
        </div>
      </div>

      {/* Hakkında */}
      <section id="hakkinda" className="py-16 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-4">Hayati İşler Kimdir?</h2>
        <p className="max-w-3xl mx-auto text-lg">
          20 yıldır sıra gecesi kültürünü yaşatan Hayati İşler, Türkiye’nin 81 ilinde
          ve Almanya, Fransa, Hollanda, Belçika gibi ülkelerde sahne aldı.  
          Düğün, nişan, konser, özel davet ve TV programlarında sahne alan sanatçı;
          sahne enerjisi, sesi ve ekibiyle unutulmaz anlar yaşatıyor.
        </p>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-16 px-6 bg-black text-center">
        <h2 className="text-3xl font-bold mb-8">Galeri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 13 }, (_, i) => (
            <Image
              key={i}
              src={`/images/${i + 1}.jpg`}
              alt={`Hayati İşler ${i + 1}`}
              width={400}
              height={400}
              className="rounded shadow-lg object-cover"
            />
          ))}
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">İletişim</h2>
        <p className="mb-4">📞 <a href="tel:+905373839345" className="underline">+90 537 383 9345</a></p>
        <p className="mb-4">📧 <a href="mailto:hayatiisler65@gmail.com" className="underline">hayatiisler65@gmail.com</a></p>
        <div className="flex justify-center gap-6 mt-4">
