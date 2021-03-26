// import { useEffect } from 'react';
import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
// import Router from 'next/router';
// import * as Fathom from 'fathom-client';

// Router.events.on('routeChangeComplete', () => {
//   Fathom.trackPageview();
// });

const App = ({ Component, pageProps }) => {
  //removed fathom analytics -- add back soon 3/25
  // useEffect(() => {
  //   if (process.env.NODE_ENV === 'production') {
  //     Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
  //       includedDomains: ['feedback-domain.com']
  //     });
  //   }
  // }, []);
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
