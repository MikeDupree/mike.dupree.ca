import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/dracula.css';
import Layout from '../components/Layout';
import { Roboto_Slab } from '@next/font/google'
import { createTheme, NextUIProvider } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#5e1297',
      error: '#FCC5D8',
    },
  }
})
const roboto = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return <NextUIProvider theme={theme}><main className={roboto.className}><Layout><Component {...pageProps} /></Layout></main></NextUIProvider>
}
