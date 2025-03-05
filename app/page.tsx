"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Projects from "@/components/projects";
import IAmSection from "@/components/i-am-section";
import Footer from "@/components/footer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Kristen Hill Portfolio</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-[#F8F8F8]"
      >
        <Header />
        <motion.main variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Projects />
          </motion.div>
          <motion.div variants={item}>
            <IAmSection />
          </motion.div>
        </motion.main>
        <Footer />
      </motion.div>
    </>
  );
}