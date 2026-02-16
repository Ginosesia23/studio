
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AiRecommender } from "@/components/sections/AiRecommender";
import { AboutUs } from "@/components/sections/AboutUs";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AiRecommender />
      <AboutUs />
      <InquiryForm />
      <Footer />
    </main>
  );
}
