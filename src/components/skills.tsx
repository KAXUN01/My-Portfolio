import React from "react";
import { ParallaxText } from "@/components/ui";

// Define the prop types for the Skills component
type Skill = {
  _id: number;
  name: string;
  sequence: number;
  enabled: boolean;
};

type UserObject = {
  skills: Skill[];
};

type SkillsProps = {
  skills: Skill[];
};
const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills">
      <ParallaxText baseVelocity={-5}>
        {skills
          .sort((a, b) => a.sequence - b.sequence)
          .map((skill) =>
            skill.enabled ? (
              <span
                key={skill._id}
                className="md:text-7xl text-xl font-semibold uppercase text-white/30"
              >
                {skill.name} •
              </span>
            ) : null
          )}
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        {skills
          .sort((a, b) => a.sequence - b.sequence)
          .map((skill) =>
            skill.enabled ? (
              <span
                key={skill._id}
                className="md:text-7xl text-xl font-semibold uppercase text-white/30"
              >
                {skill.name} •
              </span>
            ) : null
          )}
      </ParallaxText>
      <ParallaxText baseVelocity={-10}>
        {skills
          .sort((a, b) => a.sequence - b.sequence)
          .map((skill) =>
            skill.enabled ? (
              <span
                key={skill._id}
                className="md:text-7xl text-xl font-semibold uppercase text-white/30"
              >
                {skill.name} •
              </span>
            ) : null
          )}
      </ParallaxText>
    </section>
  );
};

export default Skills;
