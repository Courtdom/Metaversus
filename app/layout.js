import "../styles/globals.css";
import Head from "next/head";

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="preconnect" href="https://mc-portfolio-five.vercel.app/" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
