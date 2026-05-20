

// import { cn } from "@/lib/utils";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react"; // hamburger + close icons

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled
//           ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
//           : "py-5"
//       )}
//     >
//       <div className="container flex items-center justify-between">
//         {/* Logo */}
//         <a
//           href="#hero"
//           className="flex items-center text-xl font-bold text-primary"
//         >
//           <span className="relative z-10">
//             <span className="text-glow text-foreground">Nishad's</span> Portfolio
//           </span>
//         </a>

//         {/* Desktop nav */}
//         <div className="hidden space-x-8 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="transition duration-300 text-foreground/80 hover:text-primary"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Hamburger button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="z-50 md:hidden text-foreground focus:outline-none"
          
          
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile nav overlay */}
//       <div
//         className={cn(
//           "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-xl transition-all duration-300 md:hidden",
//           isMenuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         )}
//       >
//         {navItems.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             onClick={() => setIsMenuOpen(false)} // close after click
//             className="transition duration-300 text-foreground/80 hover:text-primary"
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  // Navigation State
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Theme Initialization
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  // Handle Theme Toggle
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Reusable Theme Button
  const ThemeButton = () => (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-3 rounded-full transition-all duration-300 focus:outline-none hover:bg-foreground/10 bg-foreground/5 md:bg-transparent"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-blue-900 dark:text-blue-100" />
      )}
    </button>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-lg shadow-sm border-foreground/10"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between mx-auto px-4 md:px-6">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center text-xl font-bold text-primary group z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative transition-transform duration-300 group-hover:scale-105">
            <span className="text-glow text-foreground">Nishad's</span> Portfolio
          </span>
        </a>

        {/* Desktop nav + Actions */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium transition duration-300 text-foreground/80 hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-6 bg-foreground/20"></div>

          {/* Theme Toggle (Desktop) */}
          <ThemeButton />
        </div>

        {/* Mobile Actions (Hamburger only on top level) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 p-2 rounded-md text-foreground focus:outline-none hover:bg-foreground/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-xl transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Navigation Links */}
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-semibold transition duration-300 text-foreground/80 hover:text-primary hover:scale-110"
          >
            {item.name}
          </a>
        ))}

        {/* Theme Toggle inside collapsed menu */}
        <div className="flex flex-col items-center gap-4 pt-8 mt-4 border-t border-foreground/10 w-1/2">
          <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
            Theme
          </span>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};