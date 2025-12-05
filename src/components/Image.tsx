import { ImgHTMLAttributes } from 'react';
import { resolveAsset } from '../utils/assetHelper';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Composant Image qui gère automatiquement les imports figma:asset
 * Utilise des URLs de fallback en production
 */
export default function Image({ src, alt, ...props }: ImageProps) {
  const resolvedSrc = resolveAsset(src);
  
  return (
    <img
      src={resolvedSrc}
      alt={alt}
      {...props}
      onError={(e) => {
        // Fallback en cas d'erreur de chargement
        const target = e.target as HTMLImageElement;
        if (!target.src.includes('placeholder')) {
          console.warn(`Image failed to load: ${target.src}`);
          target.src = `https://placehold.co/600x400/2a2a2a/white?text=${encodeURIComponent(alt)}`;
        }
      }}
    />
  );
}
