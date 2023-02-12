import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Jonathan: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>WHALECUM</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-500">
        <h1 className="pb-8 text-5xl font-extrabold text-slate-700">Hi, I'm Jonathan.</h1>
        <Link
        className="text-white hover:decoration-inherit transition duration-300 ease-in-out"
        href="/"
        //target="_blank"
      >
        <h3 className="text-2xl font-bold">Go to my page →</h3>
      </Link>
      </main>
      
    </>
  );
};

export default Jonathan;
