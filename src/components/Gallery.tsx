'use client';

import Image from 'next/image';
import { useState } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

export default function Gallery() {
  const images = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.jpg`);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
              onClick={() => {
                setPhotoIndex(i);
                setIsOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
