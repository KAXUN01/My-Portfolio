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
    url: "https://github.com/KAXUN01/nextjs-portfolio",
  },
  {
    _id: "2",
    title: "Warmhands Disaster Management System",
    image: { url: "/dms.png" },
    techStack: ["React", "Web"],
    enabled: true,
    url: "https://github.com/WarmHands-DMS/warmhands",
  },
  {
    _id: "3",
    title: "Heart Disease Prediction Machine Learning Project",
    image: { url: "/hdp.png" },
    techStack: ["Machine Learning", "Web"],
    enabled: true,
    url: "https://heart-disease-prediction-system-ml.streamlit.app/",
  },
  {
    _id: "4",
    title: "Astronomy Date Formatter NPM package",
    image: { url: "/Astronomy.png" },
    techStack: ["Web", "NPM"],
    enabled: true,
    url: "https://www.npmjs.com/package/astronomy-date-formatter",
  },
  {
    _id: "5",
    title: "Deploy Node.js application to AWS EC2 using GitHub Actions and docker",
    image: { url: "/docker.png" },
    techStack: ["DevOps", "Web"],
    enabled: true,
    url: "https://github.com/KAXUN01/nextjs-portfolio",
  },
  {
    _id: "6",
    title: "Deploy Node.js application to AWS EC2 using GitHub Actions and docker",
    image: { url: "/terraform.png" },
    techStack: ["DevOps", "Web"],
    enabled: true,
    url: "https://github.com/KAXUN01/Complete-CI-CD-with-Terraform",
  },
  {
    _id: "7",
    title: "My dialog app UI/UX design using Figma",
    image: { url: "/mydialogapp.png" },
    techStack: ["UI"],
    enabled: true,
    url: "https://www.figma.com/file/mydialogapp",
  },
];

interface ProjectProps {
  data: Project[];
}

const Projects = ({ data }: ProjectProps) => {
  return (
    <ProjectsProvider data={data}>
      <section className="md:p-8 p-4 relative" id="projects">
        <SectionHeading className="md:pl-16">
          <SlideIn className="text-white/40">Selected</SlideIn>
          <br />
          <SlideIn>works</SlideIn>
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

  const numProjectToShow = isMobile ? 6 : 8;

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

const Card = ({ title, image, url }: Project) => {
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
    <Link href={url} target="_blank" rel="noopener noreferrer">
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
    </Link>
  );
};