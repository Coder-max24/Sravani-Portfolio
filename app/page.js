import AboutSection from "./components/homepage/about";
import Certificates from "./components/homepage/certificates";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Certificates />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  )
};