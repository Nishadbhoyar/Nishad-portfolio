// import imgg from '../assets/IMG_E7340.JPG'


// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative flex items-center justify-center min-h-screen px-4 pt-24 scroll-mt-24"
//     >
//       <div className="container z-10 max-w-6xl mx-auto">
//         {/* Grid layout */}
//         <div className="grid items-center gap-12 md:grid-cols-2">
//           {/* Left: Text content */}
//           <div className="space-y-6 text-center md:text-left">
            
//             <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
//               <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
              
//               {/* Wrap Nishad Bhoyar for hover effect */}
//               <span className="block opacity-0 animate-fade-in-delay-1">
//                 <span className="transition-transform duration-300 cursor-pointer text-primary hover:text-secondary hover:scale-110">
//                   Nishad
//                 </span>
//               </span>
              
//               <span className="block opacity-0 animate-fade-in-delay-2">
//                 <span className="transition-transform duration-300 cursor-pointer text-primary hover:text-secondary hover:scale-110">
//                   Bhoyar
//                 </span>
//               </span>
//             </h1>


//             <p className="max-w-2xl mx-auto text-lg opacity-0 md:text-xl text-muted-foreground animate-fade-in-delay-3">
//               Hi, I’m Nishad 👋 I’m a passionate Full-Stack Developer who loves
//               creating interactive and efficient web applications. With
//               experience in React, Node.js, and modern web technologies, I enjoy
//               turning ideas into real projects that solve problems.
//               <br />
//               <br />
//               I’m constantly learning new tools and frameworks to improve my
//               skills, and I’m especially interested in exploring AI-powered
//               applications and high-performance computing.
//               <br />
//               <br />
//               🚀 My goal is to build meaningful projects that make an impact and
//               grow as a developer.
//             </p>

//             <div className="opacity-0 animate-fade-in-delay-4">
//               <a href="#projects" className="cosmic-button">
//                 View My Projects
//               </a>
//             </div>
//           </div>

//           {/* Right: Profile Image with Circular Reveal */}
//           <div className="flex justify-center md:justify-end">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 group">
//               {/* Circular gradient border */}
//               <div
//                 className="
//                   absolute inset-0 rounded-full
//                   bg-gradient-to-tr dark:to-neutral-900 p-[7px]
//                   shadow-xl transition-all duration-300 
//                   group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-purple-800/30
//                 "
//               ></div>

//               {/* Soft purple overlay on hover */}
//               <div className="absolute inset-0 z-10 transition-opacity duration-300 rounded-full opacity-0 pointer-events-none bg-purple-400/20 group-hover:opacity-100"></div>

//               {/* Circular image with reveal animation */}
//               <img
//                 src={imgg}
//                 alt="Nishad Bhoyar"
//                 className="relative object-cover w-full h-full border-4 border-transparent rounded-full shadow-xl group-hover:scale-110 group-hover:shadow-purple-400/50 animate-reveal transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
//                 style={{ zIndex: 20 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute flex flex-col items-center -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
//         <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
//         <ArrowDown className="w-5 h-5 text-primary" />
//       </div>
//     </section>
//   );
// };


import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import imgg from '../assets/IMG_E7340.JPG';

export const HeroSection = () => {
  // Stagger variants for the text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen px-4 pt-24 scroll-mt-24">
      <div className="container z-10 max-w-6xl mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center md:text-left"
          >
            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block mt-2">
                <span className="inline-block transition-transform duration-300 cursor-pointer text-primary hover:text-secondary hover:scale-110">
                  Nishad
                </span>{" "}
                <span className="inline-block transition-transform duration-300 cursor-pointer text-primary hover:text-secondary hover:scale-110">
                  Bhoyar
                </span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Hi, I’m Nishad 👋 I’m a passionate Full-Stack Developer who loves
              creating interactive and efficient web applications. With
              experience in React, Node.js, and modern web technologies, I enjoy
              turning ideas into real projects that solve problems.
              <br /><br />
              I’m constantly learning new tools and frameworks to improve my
              skills, and I’m especially interested in exploring AI-powered
              applications and high-performance computing.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a href="#projects" className="cosmic-button">
                View My Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 transition-all duration-300 rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 p-[7px] shadow-xl group-hover:scale-105 group-hover:shadow-purple-800/30"></div>
              <div className="absolute inset-0 z-10 transition-opacity duration-300 rounded-full opacity-0 pointer-events-none bg-purple-400/20 group-hover:opacity-100"></div>
              <img
                src={imgg}
                alt="Nishad Bhoyar"
                className="relative object-cover w-full h-full border-4 border-transparent rounded-full shadow-xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute flex flex-col items-center -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
      >
        <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </motion.div> */}
    </section>
  );
};