import About from "@/modules/About/About";
import Footer from "@/modules/Footer/Footer";
import Gallery from "@/modules/Gallery/Gallery";
import Hero from "@/modules/Hero/Hero";
import Navbar from "@/modules/Navbar/Navbar";
import Question from "@/modules/Question/Question";
import Schedule from "@/modules/Schedule/Schedule";
import Sponsor from "@/modules/Sponsor/Sponsor";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <CustomHead />
      <Navbar />
      <Hero />
      <Sponsor />
      <About />
      <Gallery />
      <Schedule />
      <Question />
      <Footer />
    </>
  );
}

const CustomHead = () => {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Barcamp Bangkhen 11 </title>
      <meta name="title" content="Barcamp Bangkhen 11 " />
      <meta
        name="description"
        content="Share your thoughts, listen to others experiences"
      />
      <link rel="canonical" href="https://barcampbangkhen.com/" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://barcampbangkhen.com/" />
      <meta property="og:title" content="Barcamp Bangkhen 11 " />
      <meta
        property="og:description"
        content="Share your thoughts, listen to others experiences"
      />
      <meta
        property="og:image"
        content="https://bcbk11-frontend.vercel.app/images/BarcampBangkhen11.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://barcampbangkhen.com/" />
      <meta property="twitter:title" content="Barcamp Bangkhen 11 " />
      <meta
        property="twitter:description"
        content="Share your thoughts, listen to others experiences"
      />
      <meta
        property="twitter:image"
        content="https://bcbk11-frontend.vercel.app/images/BarcampBangkhen11.png"
      />

      {/* favicon */}
      <meta name="theme-color" content="#262329" />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#262329"
      />
      <meta name="msapplication-TileColor" content="#9f00a7" />

      {/*theme color*/}
      <meta name="theme-color" content="#262329" />
    </Head>
  );
};
