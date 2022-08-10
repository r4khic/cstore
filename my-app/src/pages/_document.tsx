import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: [
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>,
                ],
            };
        } finally {
            sheet.seal();
        }
    }

    render(){
        return(
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=5"
                    />
                    <meta name="description" key="description" content="Description" />
                    <link
                        href="/favicon-dark.ico"
                        rel="icon"
                        media="(prefers-color-scheme: light)"
                    />
                    <link
                        href="/favicon-light.ico"
                        rel="icon"
                        media="(prefers-color-scheme: dark)"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Home | C-store</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}