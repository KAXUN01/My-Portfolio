"use client";

import { Project } from "@/utils/interfaces";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Filters from "./filters";
import { SectionHeading, SlideIn, TextReveal, Transition } from "./ui";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { Button } from "./ui/button";
import { useCursorVariants } from "@/utils/context";
import { Dialog } from "./ui/dialog";
import { ProjectsProvider, useProjects } from "@/utils/project-context";
import Link from "next/link";

// Updated dummy data with URLs
const dummyProjects: Project[] = [
  {
    _id: "1",
    title: "Portfolio Website",
    image: { url: "/portfolio.png" },
    techStack: ["React", "Web", "DevOps"],
    enabled: true,
    githuburl: "https://github.com/KAXUN01/nextjs-portfolio",
    liveurl: "https://github.com/KAXUN01/nextjs-portfolio",
    sequence: 1,
    description:
      "I developed a dynamic portfolio website using Next.js, Three.js, and Framer Motion to showcase my work and skills. The site features smooth animations, interactive 3D elements, and responsive design, creating an engaging and visually rich user experience. Next.js ensures fast performance and SEO optimization, while Three.js adds immersive 3D graphics, and Framer Motion enhances animations for a modern interface.",
  },
  {
    _id: "2",
    title: "Warmhands Disaster Management System",
    image: { url: "/dms.png" },
    techStack: ["React", "Web"],
    enabled: true,
    githuburl: "https://github.com/WarmHands-DMS/warmhands",
    liveurl: "https://github.com/WarmHands-DMS/warmhands",
    sequence: 2,
    description:
      "A Disaster Management System developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This system allows users to report incidents related to natural disasters and notifies users in the affected area after admin verification.",
  },
  {
    _id: "3",
    title: "Mail-Wizard : AI mail assistant",
    image: { url: "/mail.png" },
    techStack: ["React", "Web", "Spring Boot", "Java"],
    enabled: true,
    githuburl: "https://github.com/KAXUN01/Mail-Wizard",
    liveurl: "https://github.com/KAXUN01/Mail-Wizard",
    sequence: 1,
    description:
      "Mail-Wizard is a powerful, user-friendly application designed to generate quick and professional email replies using google gemini API. This project comprises two parts: a Spring Boot backend and a React-based frontend, seamlessly integrated for an efficient user experience. ",
  },
  {
    _id: "4",
    title: "Astronomy Date Formatter NPM package",
    image: { url: "/Astronomy.png" },
    techStack: ["Web", "NPM"],
    enabled: true,
    githuburl: "https://github.com/KAXUN01/Astronomy-Date-Formatter",
    liveurl: "https://www.npmjs.com/package/astronomy-date-formatter",
    sequence: 4,
    description:
      "The astronomy-date-formatter is an innovative JavaScript package that transforms ordinary date formatting into a celestial experience. Designed for astronomy enthusiasts and creative developers, it offers exciting themes such as zodiac signs and lunar phases. What makes this package truly unique is its use of real lunar calculations.This package provides a distinctive way to display dates with a cosmic flair!",
  },
  {
    _id: "5",
    title:
      "Deploy Node.js application to AWS EC2 using GitHub Actions and docker",
    image: { url: "/docker.png" },
    techStack: ["DevOps", "Web"],
    enabled: true,
    githuburl: "https://github.com/KAXUN01/nextjs-portfolio",
    liveurl: "https://github.com/KAXUN01/nextjs-portfolio",
    sequence: 5,
    description:
      "This project automates the deployment of a Node.js application to AWS EC2 using GitHub Actions and Docker. It includes containerizing the app, setting up an EC2 server, and creating a CI/CD pipeline for seamless, automated updates with minimal manual effort.",
  },
  {
    _id: "6",
    title:
      "Deploy Node.js application to AWS EC2 using GitHub Actions and docker",
    image: { url: "/terraform.png" },
    techStack: ["DevOps", "Web"],
    enabled: true,
    githuburl: "https://github.com/KAXUN01/Complete-CI-CD-with-Terraform",
    liveurl: "https://github.com/KAXUN01/Complete-CI-CD-with-Terraform",
    sequence: 6,
    description:
      "Designed and implemented a robust CI/CD pipeline for seamless application deployment. Leveraged Terraform for infrastructure as code (IaC) to provision scalable and reliable cloud resources, and used GitHub Actions to automate build, test, and deployment processes.",
  },
  {
    _id: "7",
    title: "Heart Disease Prediction Machine Learning Project",
    image: { url: "/hdp.png" },
    techStack: ["Machine Learning", "Web"],
    enabled: true,
    githuburl:
      "https://github.com/KAXUN01/Heart-disease-prediction-machine-leaning-project",
    liveurl: "https://heart-disease-prediction-system-ml.streamlit.app/",
    sequence: 3,
    description:
      "Using Machine Learning to Understand Medical Data and Predict Heart Health: This project leverages machine learning algorithms to analyze medical data and identify factors influencing heart health By training models on a dataset of patient health metrics. This application supports early intervention and informed decision-making in healthcare.",
  },
  {
    _id: "8",
    title: "My dialog app UI/UX design using Figma",
    image: { url: "/mydialogapp.png" },
    techStack: ["UI"],
    enabled: true,
    githuburl:
      "https://www.figma.com/community/file/1438898605856460976/my-dialog-app-redesign",
    liveurl:
      "https://www.figma.com/community/file/1438898605856460976/my-dialog-app-redesign",
    sequence: 7,
    description:
      "A comprehensive UI/UX redesign project for the My Dialog mobile app, Sri Lanka's leading telecommunications service provider. The redesign focuses on modernizing the user interface while improving accessibility and user experience. Key features include a streamlined dashboard for quick access to account information, simplified bill payments and reload options, an intuitive data usage tracker, and a redesigned rewards system. The project demonstrates modern design principles with a clean, minimalist aesthetic, consistent typography, and a carefully chosen color palette that aligns with the Dialog brand identity.",
  },
  {
    _id: "9",
    title: "Crypto exchange website UI/UX design using Figma",
    image: { url: "/crypto.png" },
    techStack: ["UI"],
    enabled: true,
    githuburl:
      "https://www.figma.com/community/file/1183386953817322506/crypto-website",
    liveurl:
      "https://www.figma.com/community/file/1183386953817322506/crypto-website",
    sequence: 8,
    description:
      "A modern and intuitive UI/UX design for a cryptocurrency exchange platform, crafted to provide users with a seamless trading experience. The design features a dark-themed interface optimized for extended trading sessions, real-time price charts with customizable views, and a streamlined trading panel for quick transactions. The project incorporates advanced UI elements for order books, trading pairs, and portfolio management, while maintaining accessibility and user-friendly navigation. Special attention was given to data visualization components and responsive layouts to ensure a consistent experience across all devices.",
  },
];

interface ProjectProps {
  data: Project[];
}

const Projects = ({ data }: ProjectProps) => {
  return (
    <ProjectsProvider data={data}>
      <section className="md:p-8 p-4 relative" id="projects">
        <SectionHeading className="pl-4 md:px-12 py-20">
          <SlideIn className="text-white/40">Projects</SlideIn>
        </SectionHeading>
        <Filters />
        <ProjectContainer />
      </section>
    </ProjectsProvider>
  );
};

export default function ProjectsWrapper() {
  return <Projects data={dummyProjects} />;
}

const ProjectContainer = () => {
  const { filteredProjects, setSingleProject } = useProjects();
  const [showMore, setShowMore] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const numProjectToShow = isMobile ? 6 : 6;

  return (
    <AnimatePresence>
      <motion.div
        layout
        className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3"
      >
        {filteredProjects
          .slice(0, showMore ? filteredProjects.length : numProjectToShow)
          .map((project, index) =>
            project.enabled ? (
              <Transition
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                key={project._id}
                onClick={() => {
                  setShowDialog(true);
                  setSingleProject(project);
                }}
              >
                <Card {...project} />
              </Transition>
            ) : null
          )}
      </motion.div>
      <div className="grid place-items-center py-8">
        {filteredProjects.length > numProjectToShow && (
          <Button onClick={() => setShowMore(!showMore)}>
            <TextReveal>{showMore ? "Show less" : "Show more"}</TextReveal>
          </Button>
        )}
      </div>
      <Dialog showDialog={showDialog} setShowDialog={setShowDialog} />
    </AnimatePresence>
  );
};

const Card = ({ title, image }: Project) => {
  const [hover, setHover] = useState(false);
  const { setVariant } = useCursorVariants();

  const mouseEnter = () => {
    setHover(true);
    setVariant("PROJECT");
  };
  const mouseLeave = () => {
    setHover(false);
    setVariant("DEFAULT");
  };

  return (
    <motion.div
      layout
      className="relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-secondary/30 md:px-4 cursor-pointer"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
        <div className="bg-white size-8 rounded-full text-black grid place-items-center">
          <ArrowUpRight size={20} />
        </div>
      </div>
      <div className="md:py-8 relative">
        <motion.div
          animate={{ y: hover ? -10 : 0 }}
          className="flex justify-between items-center max-md:hidden"
        >
          <p className="text-sm md:text-xl font-semibold max-md:opacity-0">
            {title}
          </p>
          <button className="flex gap-2 items-center justify-center max-md:px-4">
            <TextReveal className="max-md:text-sm">Visit</TextReveal>
            <span className="bg-black text-white/80 rounded-full p-1">
              <ArrowUpRight className="size-4 md:size-6" />
            </span>
          </button>
        </motion.div>
      </div>
      <Image
        src={image.url}
        width={500}
        height={350}
        alt={title}
        className="object-cover h-full w-full object-center rounded-xl md:rounded-t-3xl"
      />
    </motion.div>
  );
};
