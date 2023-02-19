import '@/styles/globals.css'
import '@/components/card/styles.css'
import '@/components/home/styles.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {

  return (
      <SessionProvider session={pageProps.session}>  
        <Component {...pageProps} />
      </SessionProvider>
  )
}
