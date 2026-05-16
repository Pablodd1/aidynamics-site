import './globals.css';

const siteUrl = 'https://www.aidynamics.pro';
const siteName = 'AIDynamics';
const title = 'AIDynamics | Miami AI Consulting & Custom AI Systems';
const description = 'Miami-based AI consulting firm specializing in HIPAA-compliant automation, medical scribe AI, custom LLM systems, and AI agent development. 40% cost reduction guaranteed.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'AI consulting Miami', 'HIPAA compliant AI', 'medical scribe automation',
    'LLM systems', 'AI agents', 'artificial intelligence Florida',
    'custom AI development', 'healthcare AI', 'legal AI automation',
    'Miami tech', 'AI chatbot', 'business automation AI',
  ],
  authors: [{ name: 'Jasmel Acosta', url: siteUrl }],
  creator: 'AIDynamics',
  publisher: 'AIDynamics',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title,
    description,
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/images/og-image.png`],
    creator: '@aidynamics',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'google-site-verification': '',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
            `,
          }}
        />
        <script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" async />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AIDynamics',
              url: siteUrl,
              logo: `${siteUrl}/images/logo.png`,
              description: 'Miami-based AI consulting firm specializing in HIPAA-compliant automation, medical scribe AI, and custom LLM systems.',
              founder: { '@type': 'Person', name: 'Jasmel Acosta', jobTitle: 'CEO & CTO' },
              address: { '@type': 'PostalAddress', addressLocality: 'Miami', addressRegion: 'FL', addressCountry: 'US' },
              contactPoint: { '@type': 'ContactPoint', contactType: 'sales', availableLanguage: ['English', 'Spanish'] },
              sameAs: ['https://github.com/Pablodd1', 'https://www.linkedin.com/in/jasmelacosta'],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
