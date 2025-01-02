"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { perspective } from "@/utils/anim";
import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface NavProps {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ setIsActive }: NavProps) => {
  const MotionLink = motion(Link);

  return (
    <div className="flex justify-between flex-col w-full px-10 pt-[100px] pb-[50px]">
      <div className="flex gap-2 flex-col">
        <div className="linkContainer" onClick={() => setIsActive(false)}>
          <Link href="/" className="flex flex-wrap overflow-hidden">
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              whileHover="whileHover"
              whileTap="whileHover"
              exit="exit"
              className="text-5xl text-background flex items-center justify-between"
            >
              <motion.span
                variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
              >
                <ArrowRight />
              </motion.span>
              <motion.span
                variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
              >
                Home
              </motion.span>
            </motion.div>
          </Link>
        </div>
        <div className="linkContainer" onClick={() => setIsActive(false)}>
          <Link href="#about" className="flex flex-wrap overflow-hidden">
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              whileHover="whileHover"
              whileTap="whileHover"
              exit="exit"
              className="text-5xl text-background flex items-center justify-between"
            >
              <motion.span
                variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
              >
                <ArrowRight />
              </motion.span>
              <motion.span
                variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
              >
                About
              </motion.span>
            </motion.div>
          </Link>
        </div>
        <div className="linkContainer" onClick={() => setIsActive(false)}>
          <Link href="#experience" className="flex flex-wrap overflow-hidden">
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              whileHover="whileHover"
              whileTap="whileHover"
              exit="exit"
              className="text-5xl text-background flex items-center justify-between"
            >
              <motion.span
                variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
              >
                <ArrowRight />
              </motion.span>
              <motion.span
                variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
              >
                Experience
              </motion.span>
            </motion.div>
          </Link>
        </div>
        <div className="linkContainer" onClick={() => setIsActive(false)}>
          <Link href="#education" className="flex flex-wrap overflow-hidden">
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              whileHover="whileHover"
              whileTap="whileHover"
              exit="exit"
              className="text-5xl text-background flex items-center justify-between"
            >
              <motion.span
                variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
              >
                <ArrowRight />
              </motion.span>
              <motion.span
                variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
              >
                Education
              </motion.span>
            </motion.div>
          </Link>
        </div>
        <div className="linkContainer" onClick={() => setIsActive(false)}>
          <Link href="#skills" className="flex flex-wrap overflow-hidden">
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              whileHover="whileHover"
              whileTap="whileHover"
              exit="exit"
              className="text-5xl text-background flex items-center justify-between"
            >
              <motion.span
                variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
              >
                <ArrowRight />
              </motion.span>
              <motion.span
                variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
              >
                Skills
              </motion.span>
            </motion.div>
          </Link>
        </div>
        <div className="linkContainer" onClick={() => setIsActive(false)}>
          <Link href="#projects" className="flex flex-wrap overflow-hidden">
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              whileHover="whileHover"
              whileTap="whileHover"
              exit="exit"
              className="text-5xl text-background flex items-center justify-between"
            >
              <motion.span
                variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
              >
                <ArrowRight />
              </motion.span>
              <motion.span
                variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
              >
                Projects
              </motion.span>
            </motion.div>
          </Link>
        </div>
        <div className="linkContainer" onClick={() => setIsActive(false)}>
          <Link href="#contact" className="flex flex-wrap overflow-hidden">
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              whileHover="whileHover"
              whileTap="whileHover"
              exit="exit"
              className="text-5xl text-background flex items-center justify-between"
            >
              <motion.span
                variants={{ initial: { x: -20 }, whileHover: { x: 0 } }}
              >
                <ArrowRight />
              </motion.span>
              <motion.span
                variants={{ initial: { x: 0 }, whileHover: { x: 20 } }}
              >
                Contact
              </motion.span>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
