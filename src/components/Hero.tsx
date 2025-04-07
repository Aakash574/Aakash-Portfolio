
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-32 md:pb-40 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/ddeb90d7-4cb2-49a5-bd3d-bb1e46e3ef3a.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-medium text-gray-300">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins tracking-tight">
                Aakash Panwar
              </h1>
              <div className="h-1 w-20 bg-portfolio-lightBlue mt-2"></div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-medium text-gray-200">
              Flutter Developer | SDE 2
            </h3>
            
            <p className="text-base md:text-lg text-gray-300 max-w-2xl">
              Computer Science Engineer with a deep passion for technology and a relentless drive 
              to innovate and simplify human life. Specializing in Dart, Python, JS, Django, Flutter with Tailwind and Bootstrap.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-portfolio-lightBlue transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-portfolio-lightBlue transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com" 
                className="text-white hover:text-portfolio-lightBlue transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white" size="lg">
                Download CV
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src="/lovable-uploads/b0be43a4-8ba2-4d59-8cc2-cfbd7ac7d95d.png" 
                  alt="Aakash Panwar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-portfolio-darkBlue px-6 py-2 rounded-full font-medium shadow-lg">
                Flutter Developer
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white flex items-center flex-col">
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
