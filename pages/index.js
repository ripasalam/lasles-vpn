import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LaslesVPN</title>
        <link rel="icon" href="/assets/head-logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
      </Head>
      <Layout>
        <Hero />
        <Features />
        <Pricing />
        <Testimonial />
      </Layout>
    </div>
  )
}
