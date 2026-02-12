'use client';

import { CldImage } from 'next-cloudinary';

interface PhotoProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function Photo({ src, width, height, alt, className, priority }: PhotoProps) {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
    />
  );
}
