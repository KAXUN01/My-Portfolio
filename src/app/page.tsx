import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import {
  ParallaxText,
  SectionHeading,
  SlideIn,
  TextReveal,
  Transition,
} from "@/components/ui";

import { UserObject } from "@/utils/interfaces";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { ContactUs } from "@/components/contact-us";
import Link from "next/link";
import { Hero } from "@/components/hero";

export default function Home() {
  // Dummy data
  const user: UserObject = {
    about: {
      name: "Kasun Madhushan",
      description:
        "I am a web developer with a background in graphic design and UI/UX. I have experience in creating scalable, efficient websites and applications.",
      photo: "/edited.png",
    },
    skills: [
      { _id: 1, name: "JavaScript", sequence: 1, enabled: true },
      { _id: 2, name: "React", sequence: 2, enabled: true },
      { _id: 3, name: "Node.js", sequence: 3, enabled: true },
      { _id: 4, name: "AWS", sequence: 4, enabled: true },
      { _id: 5, name: "GIT", sequence: 5, enabled: true },
      { _id: 6, name: "LINUX", sequence: 6, enabled: true },
      { _id: 7, name: "DOCKER", sequence: 7, enabled: true },
      { _id: 8, name: "TERRAFORM", sequence: 8, enabled: true },
      { _id: 9, name: "KUBERNATES", sequence: 9, enabled: true },
      { _id: 10, name: "PYTHON", sequence: 10, enabled: true },
      { _id: 11, name: "GO", sequence: 11, enabled: true },
    ],
    projects: [
      {
        _id: 1,
        title: "Project One",
        description: "Description of Project One",
        link: "https://project1.com",
      },
      {
        _id: 2,
        title: "Project Two",
        description: "Description of Project Two",
        link: "https://project2.com",
      },
    ],
    social_handles: {
      github: "https://github.com/Kasun",
      linkedin: "https://linkedin.com/in/kasun",
    },
    timeline: [
      {
        _id: 1,
        jobTitle: "Web Developer",
        company_name: "Tech Company",
        jobLocation: "Remote",
        startDate: "2022-01-01",
        endDate: "2023-01-01",
        summary: "Worked on web development projects using React.",
        bulletPoints: [
          "Developed user interfaces",
          "Collaborated with designers",
        ],
      },
    ],
    education: [
      {
        _id: 1,
        degree: "BSc in Information and Communication Technology",
        institution: "University of Jayewardenepura",
        startDate: "2019-09-01",
        endDate: "2023-06-01",
        summary: "Studied software development, networks, and systems.",
      },
      {
        _id: 2,
        degree: "Diploma in Full Stack Development",
        institution: "University of Moratuwa",
        startDate: "2017-09-01",
        endDate: "2019-06-01",
        summary: "Focused on front-end and back-end development.",
      },
    ],
  };

  const { about, skills, projects, social_handles, timeline, education } = user;

  return (
    <main className="relative">
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold">ThePortfolio</TextReveal>
        </Link>
      </Transition>
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Experience timeline={timeline} id="experience" />
      <Education education={education} />

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
        <ParallaxText baseVelocity={5}>
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
        <ParallaxText baseVelocity={-10}>
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
      {/* ===PROJECTS SECTION=== */}
      <Projects data={projects} />
      {/* ===CONTACT US=== */}
      <div
        className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs />
      </div>
    </main>
  );
}
