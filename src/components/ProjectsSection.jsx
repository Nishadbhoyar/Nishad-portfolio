import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion"; // optional, if you want more precise animation



// Import images
import smartparking from "../assets/Projects/smartparking.jpg";
import Hotelerp from "../assets/Projects/Hotelerp.jpg";
import Shopease from "../assets/Projects/Shopease.jpg";
import EcommerceSite from "../assets/Projects/EcommerceSite.png";
import recipefinder from "../assets/Projects/recipefinder.jpg"
import eventmanagemt from "../assets/Projects/eventmanagemt.png";


const projects = [
  {
    id: 1,
    title: "Smart Parking Platform",
    description: "Full-stack parking platform with 6 user roles, real-time WebSocket notifications, live valet tracking via Leaflet Maps, and Cashfree payment integration.",
    image: smartparking, // replace with your own screenshot
    tags: ["React", "Spring Boot", "WebSocket", "Leaflet", "Tailwind CSS", "Cashfree"],
    demoUrl: "https://smartaparkingapp.netlify.app",
    githubUrl: "https://github.com/Nishadbhoyar/smartparking_frontend",
  },
  {
    id: 2,
    title: "Hotel Reservation ERP",
    description: "Role-based hotel management system (Admin, Manager, Staff, Customer) with JWT auth, full reservation lifecycle, Cashfree payment with HMAC webhook verification, and staff payroll tracking.",
    image: Hotelerp, // replace with your own screenshot
    tags: ["Spring Boot", "React", "JWT", "Spring Security", "MySQL", "Cashfree"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nishadbhoyar/HotelFrontend",
  },
  {
    id: 3,
    title: "ShopEase — E-Commerce Platform",
    description: "Two-role e-commerce platform with JWT-secured APIs, product management with image upload, cart with stock validation, and Cashfree payment integration.",
    image: Shopease, // replace with your own screenshot
    tags: ["React", "Spring Boot", "JWT", "MySQL", "Redux", "Cashfree"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nishadbhoyar/ecommersfr",
  },
  {
    id: 4,
    title: "E-commerce Site",
    description: "An e-commerce website with product listing, cart, and checkout",
    image: EcommerceSite,
    tags: ["React", "Redux", "Stripe API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nishadbhoyar/MotionCut/tree/main/price%20landing%20page",
  },
  {
    id:5,
    title: "Recipe-finder",
    description: "Recipe-Finder is a sleek, user-friendly web application that transforms the way users discover, plan, and prepare meals",
    image: recipefinder,
    tags: ["React", "tailwindcss","Html", "Mealdb-API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nishadbhoyar/Hackthon",
  },
  {
    id:6,
    title: "Event Management ",
    description: "EventEase is a modern web application designed to streamline the planning, promotion, and execution of events—from intimate workshops to large-scale conferences.",
    image: eventmanagemt,
    tags: ["React", "tailwindcss","Html", "Node JS " , "ExpressJS","MongoDB Atlas","Cloudinary Cloud"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nishadbhoyar/MotionCut/tree/main/Event-Management-Platform-main",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-muted-foreground">
            Explore some of my latest projects with interactive, modern, and aesthetic designs.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              className="overflow-hidden border rounded-lg shadow-lg group bg-card border-foreground/5 hover:border-primary/30 transition-colors"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-lg relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-20 bg-card">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-secondary text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <a href={project.demoUrl} target="_blank" className="p-2 transition-colors rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.githubUrl} target="_blank" className="p-2 transition-colors rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Github Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="https://github.com/Nishadbhoyar" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white cosmic-button">
            Check My Github <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};