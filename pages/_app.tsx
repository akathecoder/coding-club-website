import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Coding Club JKLU</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Official Website of Coding Club JKLU" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
