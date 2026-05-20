import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images directly from the src/certificates folder
import springBootCert from "../certificates/masteringspringboot_280_1779288198__1779288202.jpg";
import javaCert from "../certificates/javaessentials_238_1779288049__1779288052.jpg";
import sqlCert from "../certificates/sqldeepdive_275_1779288224__1779288227.jpg";
import reactCert from "../certificates/reactessentials_240_1779288145__1779288156.jpg";
import jsCert from "../certificates/javascriptessentials_270_1779288171__1779288179.jpg";
import webDevCert from "../certificates/webdevelopmentessentials_200_1779288079__1779288085.jpg";

// Certificate Data (Sorted chronologically: oldest to newest)
const certificates = [
  {
    id: 1,
    title: "Web Development Essentials",
    date: "04th Aug, 2025",
    issuer: "I.T. VEDANT",
    image: webDevCert,
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    date: "25th Aug, 2025",
    issuer: "I.T. VEDANT",
    image: jsCert,
  },
  {
    id: 3,
    title: "React Essentials",
    date: "17th Sep, 2025",
    issuer: "I.T. VEDANT",
    image: reactCert,
  },
  {
    id: 4,
    title: "SQL Deep Dive",
    date: "06th Nov, 2025",
    issuer: "I.T. VEDANT",
    image: sqlCert,
  },
  {
    id: 5,
    title: "Java Essentials",
    date: "06th Jan, 2026",
    issuer: "I.T. VEDANT",
    image: javaCert,
  },
  {
    id: 6,
    title: "Mastering Springboot",
    date: "13th Mar, 2026",
    issuer: "I.T. VEDANT",
    image: springBootCert, 
  },
];


export const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="relative px-4 py-24 overflow-hidden bg-secondary/20">
      {/* Cosmic Background Glow (Matches Skills Section) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold md:text-5xl"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Certifications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground"
          >
            Milestones from my continuous learning journey.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden transition-all duration-300 border cursor-pointer rounded-2xl bg-background/40 backdrop-blur-md border-foreground/10 hover:border-primary/50 group hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] hover:-translate-y-2"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden aspect-video bg-secondary/30">
                <div className="absolute inset-0 z-10 transition-opacity duration-300 opacity-0 bg-primary/20 group-hover:opacity-100 mix-blend-overlay"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover "View" Badge */}
                {/* Hover "View" Badge */}
                <div className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 text-sm font-medium shadow-xl text-foreground bg-background/90 backdrop-blur-md rounded-full border border-foreground/20">
                        View Certificate
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/70">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute p-2 transition-colors rounded-full top-6 right-6 bg-secondary/50 hover:bg-secondary text-foreground"
              onClick={() => setSelectedCert(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="relative w-full max-w-5xl overflow-hidden border shadow-2xl rounded-xl border-foreground/20 bg-background"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <h3 className="text-2xl font-bold text-foreground">{selectedCert.title}</h3>
                <p className="text-muted-foreground">{selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};