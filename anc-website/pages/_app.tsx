import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </>
  )

}
export default MyApp
