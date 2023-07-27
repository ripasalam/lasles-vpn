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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
