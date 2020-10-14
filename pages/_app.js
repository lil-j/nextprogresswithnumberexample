import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  return <>
    <NextNprogress
        color="#29D"
        startPosition="0.3"
        stopDelayMs="200"
        height="10"
    />
    <Component {...pageProps} />
    </>
}

export default MyApp
