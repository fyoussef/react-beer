import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import { Roboto } from '@next/font/google'

const inter = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={inter.className} {...pageProps} />
}
