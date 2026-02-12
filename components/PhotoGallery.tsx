'use client';

import { useState } from 'react';
import { getCldImageUrl } from 'next-cloudinary';
import { Photo } from './Photo';
import { Lightbox } from './Lightbox';

interface PhotoData {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: PhotoData[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null);

  const preloadImage = (src: string) => {
    const url = getCldImageUrl({
      src,
      width: 1400,
      height: 1050,
    });
    const img = new Image();
    img.src = url;
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
            onMouseEnter={() => preloadImage(photo.src)}
          >
            <Photo
              src={photo.src}
              width={800}
              height={800}
              alt={photo.alt}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <Lightbox
          src={selectedPhoto.src}
          alt={selectedPhoto.alt}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}
