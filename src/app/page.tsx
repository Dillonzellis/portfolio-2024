import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";
import { Skills } from "@/components/Skills";

// TODO: button styles
// TODO: correct data
// TODO: replace Experience component
// TODO: confirmation email
// TODO: form validation with zod
// TODO: refactor

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
