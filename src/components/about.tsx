"use client";

import { About as AboutType, Timeline } from "@/utils/interfaces";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatDate } from "@/utils";
import { SlideIn, Transition } from "./ui";

interface AboutProps {
  about: AboutType;
  timeline: Timeline[];
}

const About = ({ about, timeline }: AboutProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative"
      id="about"
    >
      <div>
        <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
          <SlideIn>A little about me...</SlideIn>
        </h3>
        <Transition viewport={{ once: true }}>
          <p className="text-xl md:text-4xl text-foreground/50">
            I&apos;m a web developer and UI/UX designer with a creative
            background in graphic design. Over the years, I&apos;ve crafted
            websites and applications that put users at the heart of the
            experience. I&apos;m fueled by my love for coding, coffee, and
            stargazing, and I bring that passion into every project I work on.
            Right now, I&apos;m diving into DevOps, AWS, and cloud computing,
            ensuring my projects not only look great but work seamlessly. Always
            learning and collaborating with others to create practical,
            real-world solutions that make a difference for users.
          </p>
        </Transition>
      </div>
      <div className="relative">
        <div className="sticky top-6">
          <Transition>
            <Image
              src={"/edited.png"}
              width={400}
              height={400}
              alt={"Kasun Madhushan"}
            />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default About;
