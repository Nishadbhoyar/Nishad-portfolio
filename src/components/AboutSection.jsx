// import { Code } from "lucide-react";
// const Card = ({ title, description, delayClass }) => (
//   <div
//     className={`p-6 gradient-border card-hover rounded-2xl bg-card shadow-lg opacity-0 ${delayClass} transform`}
//   >
//     <div className="flex items-start gap-4">
//       <div className="p-4 rounded-full bg-primary/10">
//         <Code className="text-primary" />
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold">{title}</h3>
//         <p className="text-sm leading-relaxed text-muted-foreground ">{description}</p>
//       </div>
//     </div>
//   </div>
// );


// const CardGrid = () => (
//   <div className="grid justify-end grid-cols-1 gap-4">
//     <Card
//       title="Frontend Development"
//       description="Building responsive and interactive user interfaces."
//       delayClass="animate-fade-up-delay-1"
//     />
//     <Card
//       title="Backend Development"
//       description="Designing scalable and secure server-side applications."
//       delayClass="animate-fade-up-delay-2"
//     />
//     <Card
//       title="UI/UX Design"
//       description="Creating visually appealing and user-friendly designs."
//       delayClass="animate-fade-up-delay-3"
//     />
//     <Card
//       title="Tools & Technologies"
//       description="Leveraging modern frameworks, libraries, and developer tools for efficient workflows."
//       delayClass="animate-fade-up-delay-4"
//     />
//   </div>
// );


// // ✅ Main About Section
// export const AboutSection = () => {
//   return (
//     <section id="about" className="relative px-4 py-24">
//       <div className="container max-w-5xl mx-auto">
//         {/* Heading */}
//         <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
//           <span className="text-primary">About </span>Me
//         </h2>

// {/* Grid layout */}
// <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-12">
//   {/* Left: Text content */}
//   <div className="space-y-6 md:col-span-6">
//     <h3 className="text-2xl font-semibold opacity-0 text-foreground animate-fade-in-delay-1">
//       Passionate Web Developer & Tech Explorer
//     </h3>

//     <p className="leading-relaxed text-justify opacity-0 text-muted-foreground animate-fade-in-delay-2">
//       Hi 👋 I’m <span className="font-semibold text-foreground">Nishad Bhoyar</span>, 
//       a curious and driven developer who enjoys turning ideas into 
//       functional and visually appealing digital products. My journey 
//       into development started with a love for problem-solving and has 
//       grown into a passion for creating impactful web applications.
//     </p>

//     <p className="leading-relaxed text-justify opacity-0 text-muted-foreground animate-fade-in-delay-3">
//       I specialize in building modern full-stack applications with 
//       technologies like <span className="font-medium">React, Node.js, 
//       MongoDB, and SQL</span>. I enjoy writing clean and efficient code, 
//       but what excites me the most is the process of learning new tools, 
//       exploring emerging technologies, and continuously improving my craft.
//     </p>

//     <p className="leading-relaxed text-justify opacity-0 text-muted-foreground animate-fade-in-delay-4">
//       Outside of coding, I’m someone who values growth, creativity, 
//       and collaboration. Whether it’s working on a team project or 
//       building something on my own, I always strive to bring fresh 
//       ideas, attention to detail, and a problem-solving mindset.
//     </p>
//     <div className="flex flex-col sm:flex-row gap-7 pt-4 justify-center animate-fade-in-delay-5">
//       <a href="#contact" className="cosmic-button">
//         {" "}
//         Get In Touch 
//       </a>

//       <a href="/" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300
//       animate-fade-in-delay-5">
//         {" "}
//         Download CV 
//       </a>


//     </div>
//   </div>
  


//   {/* Right: Card Grid */}
//   <div className="md:col-span-6">
//     <CardGrid />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




import { motion } from "framer-motion";
import { Code } from "lucide-react";

const Card = ({ title, description }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    }}
    whileHover={{ scale: 1.02 }}
    className="p-6 transition-all border shadow-lg gradient-border rounded-2xl bg-card border-foreground/5 hover:shadow-primary/10"
  >
    <div className="flex items-start gap-4">
      <div className="p-4 rounded-full bg-primary/10">
        <Code className="text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-center md:text-4xl"
        >
          <span className="text-primary">About </span>Me
        </motion.h2>

        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left: Text content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-6 md:col-span-6"
          >
            <motion.h3 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-2xl font-semibold text-foreground">
              Passionate Web Developer & Tech Explorer
            </motion.h3>

            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="leading-relaxed text-justify text-muted-foreground">
              Hi 👋 I’m <span className="font-semibold text-foreground">Nishad Bhoyar</span>, 
              a curious and driven developer who enjoys turning ideas into 
              functional and visually appealing digital products.
            </motion.p>

            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="leading-relaxed text-justify text-muted-foreground">
              I specialize in building modern full-stack applications with 
              technologies like <span className="font-medium text-foreground">React, Node.js, 
              MongoDB, and SQL</span>. I enjoy writing clean code and exploring emerging tech.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col justify-center gap-4 pt-4 sm:flex-row sm:justify-start">
              <a href="#contact" className="text-center cosmic-button">
                Get In Touch
              </a>
              <a 
  href="/CV.pdf" 
  download="Nishad_Bhoyar_CV.pdf"
  className="px-6 py-3 font-medium text-center transition-colors duration-300 border rounded-full border-primary text-primary hover:bg-primary/10"
>
  Download CV
</a>
            </motion.div>
          </motion.div>
          
          {/* Right: Card Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
            }}
            className="grid justify-end grid-cols-1 gap-4 md:col-span-6"
          >
            <Card title="Frontend Development" description="Building responsive and interactive user interfaces." />
            <Card title="Backend Development" description="Designing scalable and secure server-side applications." />
            <Card title="UI/UX Design" description="Creating visually appealing and user-friendly designs." />
          </motion.div>
        </div>
      </div>
    </section>
  );
};