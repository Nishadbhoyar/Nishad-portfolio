
// import { useState } from "react";
// import { motion } from "framer-motion";
// import ProgressBar from "@/components/ProgressBar";
// import { cn } from "@/lib/utils";

// // ✅ Skills list with logos
// const skills = [
//   // Frontend
//   {
//     name:"HTML",
//     level:100,
//     category:"frontend",
//     logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
//   },
//   {
//   name: "CSS",
//   level: 65,
//   category: "frontend",
//   logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
//   },
//   {
//     name: "React",
//     level: 90,
//     category: "frontend",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
//   },
//   {
//     name: "Next.js",
//     level: 80,
//     category: "frontend",
//     logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
//   },
//   {
//     name: "Tailwind CSS",
//     level: 85,
//     category: "frontend",
//     logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
//   },
//   {
//     name: "JavaScript",
//     level: 88,
//     category: "frontend",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
//   },
//   {
//     name:"Vue.JS",
//     level:65,
//     category:"frontend",
//     logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
//   },
//   // Backend
//   {
//     name: "Node.js",
//     level: 82,
//     category: "backend",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
//   },
//   {
//     name: "Express.js",
//     level: 78,
//     category: "backend",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
//   },
//   {
//     name: "MongoDB",
//     level: 75,
//     category: "backend",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
//   },
//   {
//     name: "MySQL",
//     level: 70,
//     category: "backend",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
//   },

//   // Tools
//   {
//     name: "Git & GitHub",
//     level: 85,
//     category: "tools",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
//   },
//   {
//     name: "Docker",
//     level: 65,
//     category: "tools",
//     logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
//   },
//   {
//     name: "Figma",
//     level: 72,
//     category: "tools",
//     logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
//   },
//   {
//     name: "Postman",
//     level: 77,
//     category: "tools",
//     logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
//   },
//   {
//   name: "Netlify",
//   level: 80,
//   category: "tools",
//   logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg"
//   },
//   {
//   name: "Vercel",
//   level: 79,
//   category: "tools",
//   logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg"
//   },
// ];

// // ✅ Categories including "all"
// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   // Filter skills
//   const filteredSkills =
//     activeCategory === "all"
//       ? skills
//       : skills.filter((skill) => skill.category === activeCategory);

//   return (
//     <section id="skills" className="relative px-4 py-24 bg-secondary/30">
//       <div className="container max-w-5xl mx-auto">
//         {/* Title */}
//         <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-8 space-x-4">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-4 py-2 text-sm font-medium rounded-full transition-colors capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-white shadow-md shadow-primary/40"
//                   : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:shadow-sm"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Skill Grid */}
//         <motion.div
//           key={activeCategory} // re-trigger animation on toggle
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ staggerChildren: 0.1, duration: 0.5 }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {filteredSkills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="p-6 transition-transform duration-300 shadow-md rounded-2xl bg-card hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-2"
//             >
//               {/* Skill Name + Logo */}
//               <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={skill.logo}
//                     alt={skill.name}
//                     className="w-8 h-8 rounded"
//                   />
//                   <span className="font-medium transition-colors duration-300 hover:text-primary">
//                     {skill.name}
//                   </span>
//                 </div>
//               </div>

//               {/* ProgressBar with animated percentage */}
//               <div className="transition-transform duration-300 hover:scale-[1.02]">
//                 <ProgressBar value={skill.level} duration={1500} />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Skills list with logos
const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS", level: 85, category: "frontend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "React", level: 90, category: "frontend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Next.js", level: 80, category: "frontend", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
  { name: "Tailwind CSS", level: 85, category: "frontend", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "JavaScript", level: 88, category: "frontend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "Vue.JS", level: 65, category: "frontend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
  
  // Backend
  { name: "Java", level: 88, category: "backend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "Spring Boot", level: 85, category: "backend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
  { name: "Node.js", level: 82, category: "backend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", level: 78, category: "backend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
  { name: "MongoDB", level: 75, category: "backend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", level: 70, category: "backend", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  
  // Tools
  { name: "Git & GitHub", level: 85, category: "tools", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
  { name: "Docker", level: 65, category: "tools", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "Figma", level: 72, category: "tools", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "Postman", level: 77, category: "tools", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Netlify", level: 80, category: "tools", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg" },
  { name: "Vercel", level: 79, category: "tools", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative px-4 py-24 overflow-hidden bg-secondary/20">
      {/* Cosmic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold md:text-5xl">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Technologies and tools I use to bring ideas to life.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 sm:space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 capitalize relative overflow-hidden group",
                activeCategory === category
                  ? "bg-primary text-white shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)]"
                  : "bg-background/50 backdrop-blur-md border border-foreground/10 text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              <span className="relative z-10">{category}</span>
              {/* Highlight sweep effect on inactive tabs */}
              {activeCategory !== category && (
                <div className="absolute inset-0 h-full w-0 bg-primary/10 transition-all duration-300 group-hover:w-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* REMOVED mode="popLayout" here */}
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout // Automatically animates position changes
                initial={{ opacity: 0, scale: 0.9 }} // Tweaked from 0.8 to 0.9 for less aggressive entry
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                // Refined transition to balance layout flow and opacity fades
                transition={{ 
                  layout: { type: "spring", bounce: 0.2, duration: 0.5 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="relative p-6 transition-all duration-300 border rounded-2xl bg-background/40 backdrop-blur-md border-foreground/10 hover:border-primary/40 group hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] hover:-translate-y-1"
              >
                {/* Header: Logo, Name, Percentage */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    {/* Floating Logo Container */}
                    <div className="relative p-3 transition-colors duration-300 rounded-xl bg-secondary/50 group-hover:bg-primary/10">
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-primary/20 blur-md group-hover:opacity-100"></div>
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="relative z-10 w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{skill.name}</h3>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">{skill.category}</span>
                    </div>
                  </div>
                  {/* Percentage Number */}
                  <span className="text-xl font-bold transition-colors text-foreground/70 group-hover:text-primary">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2 overflow-hidden rounded-full bg-secondary/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                    className="relative h-full rounded-full bg-gradient-to-r from-primary to-purple-400"
                  >
                    {/* Light sweep effect on the bar itself */}
                    <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};