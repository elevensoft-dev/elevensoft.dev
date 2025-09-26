export default function MetaTags() {
  return (
    <>
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Elevensoft" />
      <meta name="msapplication-TileColor" content="#ff8a29" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      <meta property="og:image:type" content="image/svg+xml" />
      <meta property="og:image:secure_url" content="https://elevensoft.dev/images/logo/logo-light.svg" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      
      <meta name="twitter:image:alt" content="Elevensoft - Soberania Digital" />
      <meta name="twitter:domain" content="elevensoft.dev" />
      
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Palhoça" />
      <meta name="geo.position" content="-27.6444;-48.6678" />
      <meta name="ICBM" content="-27.6444, -48.6678" />
      
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="language" content="Portuguese" />
      
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content="31536000" />
      
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.sanity.io" />
    </>
  );
}