
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Provider from '../components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '❇️ Авто из Китая под ключ ❇️',
  description: 'Автомобили из Китая на заказ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
<Provider>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
