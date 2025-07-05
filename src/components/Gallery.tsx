'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Gallery() {
  const images = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);
  const [index, setIndex] = useState(-1); // -1: kapalı

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Foto Galeri</h2>
      <div className="flex overflow-x-auto gap-4 p-2">
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={src}
              alt={`galeri-${i + 1}`}
              width={200}
              height={120}
              className="rounded-lg cursor-pointer shadow"
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
}
