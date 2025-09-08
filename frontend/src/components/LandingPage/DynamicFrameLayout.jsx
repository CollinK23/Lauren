"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "PRODUCT DESIGN",
    mainImage: "/purse1.jpg",
    description:
      "Designing products that balance function and beauty — from early sketches and prototypes to polished, user-friendly experiences.",
    isHovered: false,
  },
  {
    id: 2,
    title: "FASHION DESIGN",
    mainImage: "/top2.jpg",
    description:
      "Exploring form, texture, and style to create garments that merge storytelling, aesthetics, and everyday wearability.",
    isHovered: false,
  },
  {
    id: 3,
    title: "TECHNICAL DESIGN",
    mainImage: "/jeans3.jpg",
    description:
      "Transforming ideas into production-ready garments with precise patterns, detailed specs, and a focus on fit and construction.",
    isHovered: false,
  },
  {
    id: 4,
    title: "CONCEPT DESIGN",
    mainImage: "/top1-2.jpg",
    description:
      "Shaping creative visions into clear concepts through mood boards, color stories, and design narratives that inspire direction.",
    isHovered: false,
  },

  {
    id: 6,
    title: "TECHNICAL SKILLS",
    subskills: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Blender",
      "Microsoft PowerPoint",
      "Canva",
      "Microsoft Excel",
    ],
    isHovered: false,
  },
];

export default function DynamicFrameLayout() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const handleSkillInteraction = (skillId) => {
    if (isMobile) {
      setExpandedSkill(expandedSkill === skillId ? null : skillId);
    } else {
      setHoveredSkill(skillId);
    }
  };

  const handleSkillLeave = () => {
    if (!isMobile) {
      setHoveredSkill(null);
    }
  };

  const gridColumns = useMemo(() => {
    const activeSkill = isMobile ? expandedSkill : hoveredSkill;
    if (activeSkill === null) {
      return `repeat(${skillCategories.length}, 1fr)`;
    }
    return skillCategories
      .map((skill) => (skill.id === activeSkill ? "3fr" : "0.8fr"))
      .join(" ");
  }, [isMobile, expandedSkill, hoveredSkill]);

  const isSkillActive = (skillId) => {
    return isMobile ? expandedSkill === skillId : hoveredSkill === skillId;
  };

  return (
    <div className="pt-8 w-full min-h-full" id="skills">
      <h2
        className="text-[10vw] font-bold tracking-tight px-8"
        data-aos="fade-right"
      >
        SKILLS
        <br />
      </h2>
      <motion.div
        className={`relative w-full h-full ${
          isMobile ? "flex flex-col" : "grid"
        }`}
        style={
          !isMobile
            ? {
                display: "grid",
                gridTemplateColumns: gridColumns,
                gridTemplateRows: "1fr",
              }
            : {}
        }
        layout
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        data-aos="fade-up"
      >
        {skillCategories.map((skill) => (
          <motion.div
            key={skill.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => !isMobile && handleSkillInteraction(skill.id)}
            onMouseLeave={handleSkillLeave}
            onClick={() => isMobile && handleSkillInteraction(skill.id)}
            layout
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.div
              className={`relative w-full border-r border-t ${
                isMobile
                  ? isSkillActive(skill.id)
                    ? "min-h-[500px]"
                    : "min-h-[120px]"
                  : "h-full min-h-[500px]"
              } overflow-hidden`}
              whileHover={!isMobile ? { scaleX: 1 } : {}}
              whileTap={isMobile ? { scaleX: 0.98 } : {}}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`absolute inset-0 flex flex-col p-8 transition-all duration-500 ease-out`}
              >
                {/* --- Title states --- */}
                {/* Centered title (idle) */}
                <motion.div
                  className={`text-center ${
                    isSkillActive(skill.id) ? "hidden" : ""
                  }`}
                  initial={false}
                  animate={{
                    opacity: isSkillActive(skill.id) ? 0 : 1,
                    y: isSkillActive(skill.id) ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-bold text-xl uppercase">{skill.title}</h3>
                  {isMobile && !isSkillActive(skill.id) && (
                    <ChevronDown className="mx-auto" />
                  )}
                </motion.div>

                {/* Left-aligned title (active) */}
                <motion.div
                  className="mb-4 text-left"
                  initial={false}
                  animate={{
                    opacity: isSkillActive(skill.id) ? 1 : 0,
                    x: isSkillActive(skill.id) ? 0 : -20,
                  }}
                  transition={
                    isSkillActive(skill.id)
                      ? { duration: 0.3 }
                      : { duration: 0 }
                  }
                >
                  <h3 className="font-bold text-xl uppercase">{skill.title}</h3>
                </motion.div>

                {/* --- Content (image / subskills) --- */}
                <motion.div
                  className="space-y-3 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isSkillActive(skill.id) ? 1 : 0 }}
                  transition={
                    isSkillActive(skill.id)
                      ? { duration: 0.4, delay: 0.3 }
                      : { duration: 0 }
                  }
                >
                  {skill.mainImage ? (
                    <div className="flex flex-col items-start text-left space-y-4 text-md">
                      <img
                        src={skill.mainImage || "/placeholder.svg"}
                        alt={skill.title}
                        className="aspect-[5/4] h-64 rounded-lg object-cover"
                      />
                      <p className="max-w-lg font-mono text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ) : (
                    skill.subskills.map((subskill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isSkillActive(skill.id) ? 1 : 0,
                          y: isSkillActive(skill.id) ? 0 : 20,
                        }}
                        transition={
                          isSkillActive(skill.id)
                            ? {
                                duration: 0.3,
                                delay: 0.3 + index * 0.1,
                                ease: "easeOut",
                              }
                            : { duration: 0 }
                        }
                      >
                        <span className="text-md font-mono text-muted-foreground">
                          - {subskill}
                        </span>
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
