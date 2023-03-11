import Head from 'next/head'
import Main from '@/components/home/main'
import { useSession } from "next-auth/react"

export default function Home(props) {
  const {data:session} = useSession()
  return (
    <>
      <Head>
        <title>Kick Store Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class='globalContainer'>
        <Main
          session={session}
        />
      </main>
    </>
  )
}


//make the homepage as protected. We dont want this since the homepage is supposed to be public
/*
export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }
  return{
    props:{session}
  }
}
*/