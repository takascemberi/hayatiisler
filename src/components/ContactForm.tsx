'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Mesajınız başarıyla iletildi!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4 bg-white shadow-lg rounded-xl">
      <input name="name" onChange={handleChange} placeholder="Ad Soyad" required className="w-full p-2 border rounded" />
      <input name="phone" onChange={handleChange} placeholder="Telefon" required className="w-full p-2 border rounded" />
      <select name="type" onChange={handleChange} required className="w-full p-2 border rounded">
        <option value="">Etkinlik Türü</option>
        <option value="Nişan">Nişan</option>
        <option value="Düğün">Düğün</option>
        <option value="Konser">Konser</option>
        <option value="Davet">Davet</option>
        <option value="TV Programı">TV Programı</option>
      </select>
      <textarea name="message" onChange={handleChange} placeholder="Mesajınız" required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Gönder</button>
    </form>
  );
}
