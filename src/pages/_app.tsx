import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'highlight.js/styles/github.css';
import '../styles/dracula.css';
import Layout from '../components/Layout';
import { Roboto_Slab } from '@next/font/google'

const roboto = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={roboto.className}><Layout><Component {...pageProps} /></Layout></main>
}
