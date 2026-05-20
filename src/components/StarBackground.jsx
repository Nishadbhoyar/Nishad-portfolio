import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors,setMeteors]=useState([]);

  useEffect(() => {
    const initParticles = () => {
      generateStars();
      generateMeteors();
    };

    initParticles();

    // Properly regenerate on resize for responsiveness
    window.addEventListener("resize", initParticles);
    return () => window.removeEventListener("resize", initParticles);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 4 + 1, // 1px – 4px
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        opacity: Math.random() * 0.5 + 0.3, // 0.3 – 0.8
        animationDuration: Math.random() * 4 + 2, // 2s – 6s
      });
    }
    setStars(newStars);
  };


  const generateMeteors = () => {
    const numberOfMeteors = 10;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // 1px – 3px
        x: Math.random() * 100, // %
        y: Math.random() * 20, // %
        // delay: Math.random() * 15,
        delay: -(Math.random() * 15), // 0s - 15s
        animationDuration: Math.random() * 3 + 3, // 3s – 6s
      });
    }
    setMeteors(newMeteors);
  };

  

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* --- LIGHT MODE: Modern Glowing Orbs --- */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-100 dark:opacity-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* --- DARK MODE: Deep Space Ambient Glow --- */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-0 dark:opacity-100">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full filter blur-[120px]"></div>
      </div>

      {/* --- ADAPTIVE PARTICLES --- */}
      {/* Dark mode = Bright white stars | Light mode = Soft primary-colored floating dust */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse-subtle bg-primary/40 dark:bg-white"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* --- METEORS --- */}
      {/* Meteors only show up in Dark Mode */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="hidden dark:block meteor animate-meteor"
          style={{
            width: meteor.size * 35 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};