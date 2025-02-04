"use client";

import Image from "next/image";
import { SlideIn, TextReveal, Transition } from "./ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageLoad } from "./ui/page-load";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  const [hideLoader, setHideLoader] = useState(true);

  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      {hideLoader ? (
        <PageLoad hideLoader={hideLoader} setHideLoader={setHideLoader} />
      ) : (
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <Transition>
              <Image
                src={"/edited.png"}
                width={400}
                height={400}
                alt="Kasun"
                className="rounded-full size-28 object-cover"
              />
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
                <SlideIn>Hello! I&apos;m Kasun </SlideIn>
              </h2>
              <h1 className="md:text-7xl text-3xl overflow-hidden opacity-80">
                <SlideIn>
                  <Typewriter
                    options={{
                      strings: [
                        "Devops Engineer",
                        "Web Developer",
                        "Medium Blog Writer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </SlideIn>
              </h1>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                a techie who dreams up the next big idea.
              </p>
            </Transition>
            <Transition viewport={{ once: true }}>
              <Link
                href={"/cv.pdf"}
                target="_blank"
                className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-4 group"
              >
                <TextReveal>My profile</TextReveal>
                <ArrowRight size={20} />
              </Link>
            </Transition>
          </div>
        </div>
      )}
    </section>
  );
};
