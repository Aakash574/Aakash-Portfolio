
import React from "react";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  duration: string;
  description: string;
  image: string;
  skills: string[];
  company?: string;
  companyLogo?: string;
  demoLink?: string;
  githubLink?: string;
  androidLink?: string;
  iosLink?: string;
  featured?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Docnet Web and App",
      duration: "2023",
      description: "A comprehensive healthcare platform for doctors with web and mobile app components. Built with Flutter for cross-platform functionality.",
      image: "/lovable-uploads/4eeb3d3c-601e-401a-a850-f4ccb92dcbc3.png",
      skills: ["Flutter", "Web", "Mobile", "iOS", "Android"],
      demoLink: "https://doctor.docnet.tn/login",
      androidLink: "https://play.google.com/store/apps/details?id=com.docnet.doctor",
      featured: true,
    },
    {
      title: "Docnet Patient App",
      duration: "2022 - 2023",
      description: "Companion app for patients to connect with healthcare providers on the Docnet platform, schedule appointments and manage health records.",
      image: "/lovable-uploads/46b3e011-ef23-49b4-b0ce-59dd61da9d45.png",
      skills: ["Flutter", "Mobile", "State Management"],
      androidLink: "https://play.google.com/store/apps/details?id=com.docnet.patient",
      featured: true,
    },
    {
      title: "Basalon",
      duration: "2022",
      description: "A mobile application for event booking and management with cross-platform functionality.",
      image: "/lovable-uploads/7390cffa-475d-490d-b891-17a4cb3fca58.png",
      skills: ["Flutter", "Mobile", "iOS", "Android"],
      androidLink: "https://play.google.com/store/apps/details?id=il.co.basalon",
      featured: true,
    },
    {
      title: "Closerrr",
      duration: "Current Project",
      description: "An innovative social networking platform currently in development. Details confidential.",
      image: "/lovable-uploads/a9d6849a-c5a6-46f1-a5d2-2301ef3f1b1a.png",
      skills: ["Flutter", "React", "Node.js", "Express"],
      featured: true,
    },
    {
      title: "CoffeeTwist",
      duration: "Current Project",
      description: "A specialty coffee ordering and delivery application currently in development.",
      image: "/lovable-uploads/b0be43a4-8ba2-4d59-8cc2-cfbd7ac7d95d.png",
      skills: ["Flutter", "iOS", "Android", "Firebase"],
      featured: true,
    },
    {
      title: "Growupp",
      duration: "Jul 2023 - Oct 2023",
      description: "A mobile application to help users track their personal growth and development goals with progress metrics and reminders.",
      image: "/lovable-uploads/4eeb3d3c-601e-401a-a850-f4ccb92dcbc3.png",
      skills: ["Python", "Django", "React"],
      demoLink: "https://example.com/growupp",
      githubLink: "https://github.com/example/growupp",
    },
    {
      title: "Enationn App",
      duration: "Feb 2023 - May 2023",
      description: "A Flutter-based application developed for CRTD Technologies focusing on community engagement and social interaction features.",
      image: "/lovable-uploads/46b3e011-ef23-49b4-b0ce-59dd61da9d45.png",
      skills: ["Flutter", "Dart", "Firebase"],
      company: "CRTD Technologies",
      companyLogo: "/lovable-uploads/10221b3a-5caa-4722-b4c6-8dfdfeee7f77.png",
      demoLink: "https://example.com/enationn",
    },
    {
      title: "Hackathon App",
      duration: "Dec 2022",
      description: "An application developed during a hackathon to connect developers with project ideas and facilitate team formation.",
      image: "/lovable-uploads/7390cffa-475d-490d-b891-17a4cb3fca58.png",
      skills: ["State Management", "Flutter", "Node.js"],
      githubLink: "https://github.com/example/hackathon-app",
    },
  ];

  // Filter featured projects for the main display
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">Featured Projects</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-3"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A selection of my recent work and projects that showcase my skills across web and mobile platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-white/10 hover:shadow-lg hover:border-white/20 transition-all group"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image || "https://via.placeholder.com/600x400"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div className="flex gap-3">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-white/80 hover:text-black transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-white/80 hover:text-black transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.androidLink && (
                      <a 
                        href={project.androidLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-white/80 hover:text-black transition-colors"
                      >
                        <Smartphone className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.companyLogo && (
                    <img 
                      src={project.companyLogo} 
                      alt={project.company} 
                      className="h-8 w-8 object-contain"
                    />
                  )}
                </div>
                
                <p className="text-sm text-gray-400 mb-3">{project.duration}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-black/40 text-gray-200 px-2 py-1 rounded-full border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
