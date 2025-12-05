import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = 'GALANGA Sangol Ramses - Développeur Full-Stack & Solutions Digitales',
  description = 'Développeur Full-Stack spécialisé en IA & Big Data, je conçois des solutions digitales innovantes pour entreprises africaines : applications web/mobile, transformation digitale et intégration technologique.',
  image = 'https://your-domain.com/og-image.jpg', // À remplacer avec votre domaine
  url = 'https://your-domain.com' // À remplacer avec votre domaine
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    updateMetaTag('description', description);
    updateMetaTag('author', 'GALANGA Sangol Ramses');
    updateMetaTag('keywords', 'développeur full-stack, IA, Big Data, solutions digitales, Afrique, applications web, applications mobile, transformation digitale');

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', `${url}${location.pathname}`, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'GALANGA Sangol Ramses Portfolio', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional meta tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'French, English');
    updateMetaTag('revisit-after', '7 days');
  }, [title, description, image, url, location.pathname]);

  return null;
}

function updateMetaTag(name: string, content: string, attribute: string = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}
