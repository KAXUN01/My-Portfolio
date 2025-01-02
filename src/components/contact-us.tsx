"use client";

import { motion } from "framer-motion";
import { Transition, TextReveal } from "./ui";
import { RxInstagramLogo, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { FaFacebook, FaFigma, FaStackOverflow, FaMedium } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <motion.section className="relative">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />
      <div className="p-4 md:p-8 md:px-16">
        <div className="grid md:grid-cols-5 gap-1 md:pt-1 mt-auto">
          {/* Community Links Section */}
          <div className="flex flex-col items-start space-y-6 py-6 md:space-y-0 px-10 md:px-0 md:gap-4">
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <a
              href="https://medium.com/@kaxun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
            >
              <FaMedium />
              <span>Medium</span>
            </a>
            <a
              href="https://github.com/KAXUN01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
            >
              <RxGithubLogo />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.figma.com/@kaxun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
            >
              <FaFigma />
              <span>Figma</span>
            </a>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-start space-y-6 md:space-y-0 px-10 py-6 md:gap-4 md:px-0">
            <h3 className="text-xl font-bold mb-2">Social Media</h3>
            <a
              href="https://www.linkedin.com/in/kaxun01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
            >
              <RxLinkedinLogo />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/kasun.madushan.wickramasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/k_a_x_u_n/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition transform hover:scale-105"
            >
              <RxInstagramLogo />
              <span>Instagram</span>
            </a>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-start px-10 md:px-0 md:px-0 py-6 md:w-full">
            <div className="pb-4">
              <Transition>
                <span className="text-white/90">Get in touch</span>
              </Transition>
              <div className="text-2xl md:text-4xl font-bold py-2 break-words">
                <Transition>
                  <TextReveal>Kasunmadhushanw@gmail.com</TextReveal>
                </Transition>
              </div>
              <Transition>
                <div className="text-white/80">Ratnapura, Sri Lanka</div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between md:px-8 px-4 py-8 bg-black text-white">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Transition>
            <div>&copy; {new Date().getFullYear()} ThePortfolio</div>
          </Transition>
        </div>
        <div className="text-center md:text-right">
          <Transition>
            <p className="text-sm">Developed by @Kasun</p>
          </Transition>
        </div>
      </footer>
    </motion.section>
  );
};
