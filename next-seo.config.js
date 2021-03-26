const title =
  'Feedback – The easiest way to add comments or reviews to your static site.';
const description = 'Fast Feedback is built on Nextjs';

const SEO = {
  title,
  description,
  canonical: 'https://feedback-indol.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://feedback-indol.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://feedback-indol.vercel.app/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
