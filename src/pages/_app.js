import '@/styles/globals.css'
import '@/components/card/styles.css'
import '@/components/home/styles.css'
import { useRouter } from 'next/router'

import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
      <SessionProvider session={pageProps.session}>  
        <Component key={router.asPath} {...pageProps} />
      </SessionProvider>
  )
}
