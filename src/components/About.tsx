
import React from "react";
import { Code, Laptop, BookOpen, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              I am Aakash Panwar, a Computer Science Engineer with a deep passion for technology and a relentless drive to 
              innovate and simplify human life. My journey in the world of technology has equipped me with a diverse skill 
              set and a commitment to continuous learning.
            </p>
            <p className="text-lg text-gray-700">
              Currently working as a Flutter Developer at HackerKernel, I specialize in creating mobile applications 
              that bridge the gap between technical functionality and exceptional user experience.
            </p>
            <p className="text-lg text-gray-700">
              With expertise in Flutter, Dart, Python, JavaScript, and various frameworks, I tackle complex 
              challenges with clean, efficient code and a user-centered approach.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="h-1 w-1 bg-portfolio-blue rounded-full"></div>
                <span className="text-gray-700"><strong>Name:</strong> Aakash Panwar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-1 w-1 bg-portfolio-blue rounded-full"></div>
                <span className="text-gray-700"><strong>Location:</strong> Bhopal, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-1 w-1 bg-portfolio-blue rounded-full"></div>
                <span className="text-gray-700"><strong>Role:</strong> Flutter Developer</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-1 w-1 bg-portfolio-blue rounded-full"></div>
                <span className="text-gray-700"><strong>Experience:</strong> 1+ years</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-portfolio-lightBlue/10 p-3 inline-block mb-4">
                <Code className="h-6 w-6 text-portfolio-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Mobile Development</h3>
              <p className="text-gray-600">Crafting cross-platform applications using Flutter and Dart</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-portfolio-lightBlue/10 p-3 inline-block mb-4">
                <Laptop className="h-6 w-6 text-portfolio-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Web Development</h3>
              <p className="text-gray-600">Building websites with Django, Python, and JavaScript</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-portfolio-lightBlue/10 p-3 inline-block mb-4">
                <BookOpen className="h-6 w-6 text-portfolio-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Continuous Learner</h3>
              <p className="text-gray-600">Always expanding knowledge and staying updated with trends</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-portfolio-lightBlue/10 p-3 inline-block mb-4">
                <Briefcase className="h-6 w-6 text-portfolio-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Professional</h3>
              <p className="text-gray-600">Delivering high-quality solutions with attention to detail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
