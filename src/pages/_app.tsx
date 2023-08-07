import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/hide.css'
import '@/styles/text.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
