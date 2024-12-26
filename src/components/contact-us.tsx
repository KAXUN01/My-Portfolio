"use client";

import { motion } from "framer-motion";
import {
  Input,
  SectionHeading,
  SlideIn,
  Textarea,
  TextReveal,
  Transition,
} from "./ui";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const ContactUs = () => {
  return (
    <motion.section className="relative">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />
      <div className="p-4 md:p-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:pt-16">
          <div className="md:justify-self-end flex flex-col">
            <div className="pb-4">
              <Transition>
                <span className="text-white/90">Get in touch</span>
              </Transition>
              <div className="text-2xl md:text-4xl font-bold py-2">
                <Transition>
                  <TextReveal>Kasunmadhushanw@gmail.com</TextReveal>
                </Transition>
              </div>
              <Transition>
                <div className="text-white/80">Ratnapura, Sri Lanka</div>
              </Transition>
            </div>

            <div className="display-flex md:gap-8 gap-4 mt-auto md:pb-16">
              <Transition transition={{ delay: 0.4 + 1 * 0.1 }}>
                <Link href={"https://www.linkedin.com/in/kaxun01/"}>
                  <TextReveal>Linkedin</TextReveal>
                </Link>
                <Link href={"https://www.linkedin.com/in/kaxun01/"}>
                  <TextReveal>Linkedin</TextReveal>
                </Link>
                <Link href={"https://www.linkedin.com/in/kaxun01/"}>
                  <TextReveal>Linkedin</TextReveal>
                </Link>
                <Link href={"https://www.linkedin.com/in/kaxun01/"}>
                  <TextReveal>Linkedin</TextReveal>
                </Link>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm">
        <Transition>
          <div>&copy; {new Date().getFullYear()} ThePortfolio</div>
        </Transition>
        <Transition>
          <p>developed by @Kasun</p>
        </Transition>
      </footer>
    </motion.section>
  );
};

interface BackgroundScaleProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundScale = ({
  children,
  className,
}: BackgroundScaleProps) => {
  return (
    <motion.div
      whileHover="whileHover"
      whileFocus="whileHover"
      whileTap="whileHover"
      initial="initial"
      className={cn("relative p-1 group", className)}
    >
      <motion.span
        variants={{
          initial: { scaleY: 0 },
          whileHover: { scaleY: 1 },
        }}
        className="absolute top-0 left-0 h-full w-full bg-primary -z-10 group-hover:text-black"
      />
      {children}
    </motion.div>
  );
};
