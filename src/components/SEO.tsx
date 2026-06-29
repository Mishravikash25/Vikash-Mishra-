import { useEffect } from 'react';

const metadata = {
  title: 'Vikash Mishra | Frontend Developer',
  description:
    'Premium portfolio for Vikash Mishra, Computer Science Engineering student and aspiring Software Engineer specializing in frontend development.',
  url: 'https://vikash-portfolio.vercel.app',
  image: 'https://via.placeholder.com/1200x630.png?text=Vikash+Mishra+Portfolio',
  twitterHandle: '@vikashmishra',
};

const setTag = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
  let element = document.querySelector(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const SEO = () => {
  useEffect(() => {
    document.title = metadata.title;
    setTag('description', metadata.description);
    setTag('og:title', metadata.title, 'property');
    setTag('og:description', metadata.description, 'property');
    setTag('og:type', 'website', 'property');
    setTag('og:url', metadata.url, 'property');
    setTag('og:image', metadata.image, 'property');
    setTag('twitter:card', 'summary_large_image');
    setTag('twitter:title', metadata.title);
    setTag('twitter:description', metadata.description);
    setTag('twitter:image', metadata.image);
  }, []);

  return null;
};

export default SEO;
