import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from '../components/Navbar'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;700&family=Raleway:wght@300;400;700;900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          {/* <link rel='shortcut icon' href='favicon.png' type='image/png' /> */}
        </Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}