import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import "../css/App.css";
import "../css/styles.css";
import '../css/Middle.css';
import '../css/Navbar.css';
import '../css/Cards.css';

import theme from '../theme'

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
