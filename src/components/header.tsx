"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./nav"; // No need to pass social anymore
import { TextReveal } from "./ui";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { menu } from "@/utils/anim";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <motion.div
      initial={{
        height: isActive ? "100%" : "0",
      }}
      animate={{
        height: isActive ? (isMobile ? "100%" : "94%") : "0",
      }}
      className="fixed top-0 md:top-12 md:right-12 right-0 z-20"
    >
      <motion.div
        className="md:w-[480px] w-full h-full bg-primary relative rounded-3xl"
        variants={menu(isMobile)}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav setIsActive={setIsActive}/>}{" "}
          {/* Removed social prop */}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </motion.div>
  );
};

export default Header;

function Button({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className="absolute md:top-0 top-4 right-4 md:right-0 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="bg-primary h-full w-full grid place-items-center text-black"
          onClick={() => {
            toggleMenu();
          }}
        >
          Menu
        </motion.div>
        <motion.div
          className="bg-black h-full w-full grid place-items-center"
          onClick={() => {
            toggleMenu();
          }}
        >
          <TextReveal>Close</TextReveal>
        </motion.div>
      </motion.div>
    </div>
  );
}
