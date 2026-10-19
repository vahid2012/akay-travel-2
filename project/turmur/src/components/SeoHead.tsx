import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

function setOrCreateMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setOrCreateJsonLd(id: string, data: object | object[]) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export default function SeoHead({
  title,
  description,
  canonical,
  ogImage,
  jsonLd,
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    setOrCreateMeta('name', 'description', description);
    setOrCreateMeta('property', 'og:title', title);
    setOrCreateMeta('property', 'og:description', description);
    setOrCreateMeta('property', 'og:type', 'website');
    if (ogImage) setOrCreateMeta('property', 'og:image', ogImage);

    const canonicalUrl = canonical;
    if (canonicalUrl) {
      setOrCreateLink('canonical', canonicalUrl);
    }

    if (jsonLd) {
      setOrCreateJsonLd('page-jsonld', jsonLd);
    } else {
      const existing = document.getElementById('page-jsonld');
      if (existing) existing.remove();
    }

    return () => {
      const existing = document.getElementById('page-jsonld');
      if (existing) existing.remove();
    };
  }, [title, description, canonical, ogImage, jsonLd]);

  return null;
}
