import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CSSReset />

        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
