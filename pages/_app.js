import '../styles/boot.css'
import '../styles/app.css'
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  </Head>
  <script src="https://smtpjs.com/v3/smtp.js">
</script>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
