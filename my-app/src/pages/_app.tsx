import { useState } from 'react';
import type { AppProps } from 'next/app';
import Layout from 'presentation/layout';

function MyApp({ Component, pageProps }: AppProps) {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);

    return (
        <>
            <Layout>
                <Component {...pageProps} setIsMapModalOpen={setIsMapModalOpen} isMapModalOpen={isMapModalOpen}/>
            </Layout>
        </>
    );
}

export default MyApp;