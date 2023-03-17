import Head from "next/head";
import { Hero } from "@/components/home/Hero";
import { Company } from "@/components/home/Company";
import { About } from "@/components/home/About";
import {Team} from '@/components/home/Team'
import Container from "@/layouts/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Hero></Hero>
        <Company></Company>
        <About></About>
        <Team/>
      </Container>
    </>
  );
}