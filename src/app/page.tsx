import Image from 'next/image';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="text-center space-y-10 pb-20">
      <div className="relative">
        <Image src="/3.jpg" alt="Hayati İşler" width={1920} height={500} className="w-full object-cover h-[400px]" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold gradient-text">Hayati İşler</h1>
          <h2 className="text-3xl md:text-4xl mt-2 shadow-gold">Urfa Sıra Gecesi</h2>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-6 px-6">
        <div className="bg-gradient-to-br from-red-500 to-yellow-400 text-white p-6 rounded-xl shadow-lg">
          20 yıllık sahne tecrübesiyle Türkiye'nin dört bir yanında unutulmaz gecelere imza attık.
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-400 text-white p-6 rounded-xl shadow-lg">
          Yurtiçi ve yurtdışında düğün, nişan, konser gibi tüm etkinliklerde profesyonel performans.
        </div>
        <div className="bg-gradient-to-br from-green-500 to-blue-400 text-white p-6 rounded-xl shadow-lg">
          Zengin repertuar ve otantik Urfa Sıra Gecesi atmosferiyle unutulmaz bir deneyim.
        </div>
      </section>

      <section className="flex justify-center gap-8 text-3xl">
        <a href="https://wa.me/905373839345?text=Merhaba%20Hayati%20İşler%2C%20etkinlik%20için%20iletişime%20geçmek%20istiyorum" target="_blank" className="hover:text-green-600">📱</a>
        <a href="https://www.instagram.com/" target="_blank" className="hover:text-pink-500">📸</a>
        <a href="https://www.youtube.com/" target="_blank" className="hover:text-red-600">▶️</a>
      </section>

      <h2 className="text-2xl font-bold">Rezervasyon Formu</h2>
      <ContactForm />

      <h2 className="text-2xl font-bold mt-10">Galeri</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {[...Array(12)].map((_, i) => (
          <Image key={i} src={`/images/${i + 1}.jpg`} alt={`galeri-${i + 1}`} width={300} height={200} className="rounded-lg shadow-md" />
        ))}
      </div>
    </main>
  );
}
