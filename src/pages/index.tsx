import Navbar from "@/sections/Navbar/Navbar";
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
      </main>
    </>
  );
}
