import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerChatWidget from "@/components/CareerChatWidget";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import LinkedInPosts from "@/components/LinkedInPosts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CareerChatWidget />
      <Experience />
      <Skills />
      <Education />
      <LinkedInPosts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
