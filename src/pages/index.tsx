import About from "@/modules/About/About";
import Footer from "@/modules/Footer/Footer";
import Gallery from "@/modules/Gallery/Gallery";
import Hero from "@/modules/Hero/Hero";
import Navbar from "@/modules/Navbar/Navbar";
import Question from "@/modules/Question/Question";
import Schedule from "@/modules/Schedule/Schedule";
import Sponsor from "@/modules/Sponsor/Sponsor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barcamp Bangkhen 11</title>
        <meta name="description" content="Barcamp Bangkhen 11" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#262329] text-white">
        <Navbar />
        <Hero />
        <Sponsor />
        <About />
        <Gallery />
        <Schedule />
        <Question />
        <Footer />
      </main>
    </>
  );
}
