"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading, PerspectiveText, SlideIn, Transition } from "./ui";

// Dummy data
const timeline = [
  {
    _id: 1,
    jobTitle: "BICT (Hons) in Network Technology",
    company_name: "Faculty of Technology, University of Jayewardenepura",
    jobLocation: "",
    startDate: new Date("OCT 2021"),
    endDate: "Present",
    summary: "",
    bulletPoints: [],
    forEducation: true, // Set to true as it is an educational timeline
    enabled: true,
    sequence: 1,
  },
];

const Education = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative pb-20">
      <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10" />
      <SectionHeading className="pl-4 md:px-12 py-20">
        <SlideIn className="text-white/40">Education</SlideIn>
      </SectionHeading>
      <div>
        {timeline.map((exp, index) => (
          <Transition
            key={exp._id}
            className="py-4 md:py-8 border-b border-white/10 hover:bg-white/5 px-2 md:px-12"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex items-center justify-between md:gap-8">
              <span className="max-md:hidden">0{index + 1}</span>
              <div className="md:text-5xl text-xl md:font-semibold flex-1">
                <PerspectiveText hover={hover === index}>
                  {exp.jobTitle}
                </PerspectiveText>
              </div>
              <div className="max-md:text-sm max-md:flex flex-col text-foreground/50">
                <span className="italic">
                  {`${exp.startDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}`}
                </span>
                <span className="max-md:hidden">{" - "}</span>
                <span className="italic">
                  {exp.endDate === "Present"
                    ? exp.endDate
                    : `${new Date(exp.endDate).toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}`}
                </span>
              </div>
            </div>
            <div className="md:pl-12 py-2 text-foreground/50 max-md:text-sm flex items-center justify-between">
              <span>{exp.company_name}</span>
              <span>{exp.jobLocation}</span>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: hover === index ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="text-foreground/60 py-2">{exp.summary}</p>
              <ul className="list-disc list-inside">
                {exp.bulletPoints.map((point, idx) => (
                  <li key={idx} className="text-foreground/50">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Education;
