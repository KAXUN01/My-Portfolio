"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { Button, TextReveal, Transition } from "./ui";
import { useProjects } from "@/utils/project-context";

const Filters = () => {
  const { projects, setAppliedFilter, appliedFilter, sort, setSort } =
    useProjects();

  // Extract unique tech stack filters
  const techStack = projects.flatMap((filter) =>
    Array.isArray(filter.techStack)
      ? filter.techStack.map((val) => val.trim())
      : []
  );
  const filters = Array.from(new Set(techStack));

  return (
    <div className="flex items-center gap-4 py-8 justify-center max-md:flex-wrap">
      {/* 'All' filter button */}
      <Transition viewport={{ once: true }}>
        <Button
          className={cn(
            "border border-white/30 px-6 py-2 rounded-full relative text-sm md:text-base",
            appliedFilter === "all" &&
              "text-white bg-primary border-transparent"
          )}
          onClick={() => setAppliedFilter("all")}
        >
          {appliedFilter === "all" && (
            <motion.span
              layoutId="active-filter"
              className="absolute top-0 left-0 w-full h-full bg-primary -z-10 rounded-full"
              transition={{ type: "spring", bounce: 0.3 }}
            />
          )}
          <span>All</span>
        </Button>
      </Transition>

      {/* Dynamically generated filter buttons */}
      {filters.map((filter, index) => (
        <Transition
          key={index}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => setAppliedFilter(filter)}
            className={cn(
              "relative border border-white/20 px-4 py-2 rounded-full text-sm md:text-base",
              appliedFilter === filter &&
                "text-white bg-primary border-transparent"
            )}
          >
            {appliedFilter === filter && (
              <motion.span
                layoutId="active-filter"
                className="absolute top-0 left-0 w-full h-full bg-primary -z-10 rounded-full"
                transition={{ type: "spring", bounce: 0.3 }}
              />
            )}
            <span>{filter}</span>
          </Button>
        </Transition>
      ))}

      {/* Sort button */}
      <Transition viewport={{ once: true }}>
        <Sort />
      </Transition>
    </div>
  );
};

export default Filters;

const Sort = () => {
  const { setSort, sort } = useProjects();

  return (
    <Button
      className="border border-white/20 px-4 py-2 rounded-full text-sm md:text-base relative"
      onClick={() => setSort(!sort)}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {sort ? "Sorted" : "Sort"}
      </motion.span>
    </Button>
  );
};
