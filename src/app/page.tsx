import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import {
  HoverImageLink,
  ParallaxText,
  SectionHeading,
  SlideIn,
  TextReveal,
  Transition,
} from "@/components/ui";
import Experience from "@/components/experience";
import { ContactUs } from "@/components/contact-us";
import Link from "next/link";
import { Hero } from "@/components/hero";

export default function Home() {
  // Sample Data
  const user = {
    about:
      "I am a passionate developer with expertise in building modern web applications.",
    testimonials: [
      { _id: "1", content: "Great work!", author: "John Doe" },
      { _id: "2", content: "Amazing experience!", author: "Jane Smith" },
    ],
    services: [
      {
        _id: "1",
        name: "Web Development",
        desc: "Building responsive and high-performance web applications.",
        charge: "$100/hour",
        avatar: { url: "/images/web-dev.jpg" },
      },
    ],
    skills: [
      { _id: "1", name: "React", enabled: true, sequence: 1 },
      { _id: "2", name: "Node.js", enabled: true, sequence: 2 },
      { _id: "3", name: "CSS", enabled: true, sequence: 3 },
    ],
    projects: [
      { _id: "1", name: "Portfolio Website", desc: "A showcase of my work." },
    ],
    social_handles: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
    timeline: [
      {
        _id: "1",
        title: "Started my career",
        year: "2020",
        desc: "Junior developer.",
      },
      { _id: "2", title: "Promoted", year: "2022", desc: "Senior developer." },
    ],
    email: "developer@example.com",
  };

  const {
    about,
    testimonials,
    services,
    skills,
    projects,
    social_handles,
    timeline,
    email,
  } = user;

  return (
    <main className="relative">
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold ">ThePortfolio</TextReveal>
        </Link>
      </Transition>
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Experience timeline={timeline} />
      {/* ===SKILLS SECTION=== */}
      <section id="skills">
        <ParallaxText baseVelocity={-5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
      </section>
      {/* ===SERVICES SECTION=== */}
      <section className="px-2 py-20 relative" id="services">
        <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
        <SectionHeading className="md:pl-16 overflow-hidden">
          <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
          <SlideIn>I can help you</SlideIn>
        </SectionHeading>
        <div className="mx-auto pt-10">
          {services.map((service) => (
            <Transition key={service._id}>
              <HoverImageLink
                heading={service.name}
                href=""
                price={service.charge}
                imgSrc={service.avatar.url}
                subheading={service.desc}
              />
            </Transition>
          ))}
        </div>
        <Transition className="flex items-center py-10 md:hidden">
          <div className="p-4 rounded-full border border-white/50">
            <span>Discuss the project</span>
          </div>
        </Transition>
      </section>
      {/* ===PROJECTS SECTION=== */}
      <Projects data={projects} />

      {/* ===CONTACT US=== */}
      <div
        className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs email={email} about={about} social_handle={social_handles} />
      </div>
    </main>
  );
}
