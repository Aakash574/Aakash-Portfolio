
import React from "react";
import { ExternalLink, Github } from "lucide-react";
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
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Growupp",
      duration: "Jul 2023 - Oct 2023",
      description: "A mobile application to help users track their personal growth and development goals with progress metrics and reminders.",
      image: "/lovable-uploads/4eeb3d3c-601e-401a-a850-f4ccb92dcbc3.png",
      skills: ["Python", "Django", "+2 skills"],
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
      skills: ["State Management", "Flutter", "+1 skill"],
      githubLink: "https://github.com/example/hackathon-app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">Featured Projects</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A selection of my recent work and projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all group"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image || "https://via.placeholder.com/600x400"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div className="flex gap-3">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  {project.companyLogo && (
                    <img 
                      src={project.companyLogo} 
                      alt={project.company} 
                      className="h-8 w-8 object-contain"
                    />
                  )}
                </div>
                
                <p className="text-sm text-gray-500 mb-3">{project.duration}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
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
          <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
