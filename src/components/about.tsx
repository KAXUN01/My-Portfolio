"use client";

import Image from "next/image";
import { useState } from "react";
import { SlideIn, Transition } from "./ui";

/**
 * About Component
 *
 * A responsive section component that displays personal information and an image.
 * Features animations using framer-motion through custom UI components.
 *
 * Layout:
 * - Desktop: 2-column grid with 1.8fr:1fr ratio
 * - Mobile: Single column stack
 */
const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="about"
      className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative"
    >
      {/* Content Column */}
      <div>
        {/* Animated Section Title */}
        <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
          <SlideIn>A little about me...</SlideIn>
        </h3>

        {/* Bio Text with Animation */}
        <Transition viewport={{ once: true }}>
          <p className="text-xl md:text-4xl text-foreground/50 ">
            I&apos;m Kasun, a Full Stack Developer with a burning passion for
            DevOps and cloud technologies. Currently pursuing my degree in
            Information and Communication Technology at the University of
            Jayewardenepura, I blend theoretical knowledge with hands-on
            experience in modern development practices.
            {/* Professional Focus */}
            My journey in tech is driven by a fascination with automation and
            cloud computing. I work extensively with technologies like ReactJS,
            Node.js, AWS, Docker, and Kubernetes, focusing on creating
            efficient, scalable solutions. I&apos;m particularly passionate
            about implementing CI/CD pipelines and infrastructure as code using
            tools like Terraform, Jenkins and GitHub Actions.
            {/* Personal Interests & Goals */}
            When I&apos;m not coding, you&apos;ll find me stargazing or writing
            technical articles on Medium about AWS, cloud computing, and Linux.
            This fusion of astronomy and technology often inspires my creative
            projects. As a lifelong learner, I&apos;m constantly expanding my
            expertise in cloud deployment strategies, and advanced DevOps
            practices. My goal is to leverage these skills to architect robust,
            automated solutions that make a difference in the digital world.
            {/* Call to Action */}
            Let&apos;s connect over coffee and talk about technology, the
            cosmos, or how we can work together to build something amazing.
          </p>
        </Transition>
      </div>

      {/* Image Column */}
      <div className="relative">
        <div className="sticky top-6">
          <Transition>
            <Image
              src="/edited.png"
              width={400}
              height={400}
              alt="Kasun Madhushan"
            />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default About;
