"use client";
import { useEffect } from "react";
import AOS from "@/others/applyAOS.js";
import "@/others/aos.css";

// ------------------------------

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Kontests from "@/components/Kontests";
import Features from "@/components/Features";
import UserExperience from "@/components/UserExperience";
import Content from "@/components/Content";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const AnimatedComponents = () => {
  useEffect(() => {
    {
      AOS.init({});
    }
  });
  return (
    <>
      <Features />
      <UserExperience />
      <Content />
      <ContactUs />
    </>
  );
};

const page = () => {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <Kontests />
      <AnimatedComponents />
      <Footer />
    </main>
  );
};

export default page;
