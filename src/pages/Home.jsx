// import { ThemeToggle } from "../components/ThemeToggle";
// import {StarBackground} from '@/components/StarBackground';
// import { Navbar } from "./Navbar";
// import { HeroSection } from "../components/HeroSection";
// import { AboutSection } from "../components/AboutSection";
// import { SkillSection } from "../components/SkillSection";
// import { ProjectsSection } from "../components/ProjectsSection";
// import { ContactSection } from "../components/ContactSection";



// export const Home=()=>{
//     return(
//         <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
//             {/* Theme Toggle */}
//             <ThemeToggle/>


//             {/* Background Effect */}
//             <StarBackground/>


//             {/* Navbar */}
//             <Navbar/>


//             {/* Main Content */}
//             <main>
//                 <HeroSection/>
//                 <AboutSection/>
//                 <SkillSection/>
//                 <ProjectsSection/>
//                 <ContactSection/>
//             </main>


//             {/* Footer */}


//         </div>
//     );
// }


import { StarBackground } from '@/components/StarBackground';
import { Navbar } from "./Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { CertificateSection } from "../components/CertificateSection"; // ✅ Import the new section
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
            {/* Background Effect */}
            <StarBackground/>

            {/* Navbar (Theme Toggle is now inside here) */}
            <Navbar/>

            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <CertificateSection/> {/* ✅ Added right after Skills */}
                <ProjectsSection/>
                <ContactSection/>
            </main>
        </div>
    );
}