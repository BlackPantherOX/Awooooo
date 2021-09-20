import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="msapplication-TileColor" content="#0F1F51" />
          <meta name="theme-color" content="#0F1F51"></meta>
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
