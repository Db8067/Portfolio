import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Mentoring from "@/components/Mentoring";
import BeyondCode from "@/components/BeyondCode";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Services />
        <TechStack />
        <Experience />
        <Mentoring />
        <BeyondCode />
        <CurrentlyBuilding />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
