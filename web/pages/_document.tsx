import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "@styles/styled";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="fi">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon_32x32.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@700;900&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
