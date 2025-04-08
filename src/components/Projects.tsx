import { Button } from "@/components/ui/button";
import { Github, Globe, Smartphone } from "lucide-react";

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
  platforms?: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Docnet Web and Mobile Platform",
      duration: "2023",
      description:
        "A comprehensive healthcare platform connecting doctors, patients, and medical services across web and mobile platforms.",
      image: "/lovable-uploads/88674cb4-ea44-4826-9e50-22ea5039fada.png",
      skills: [
        "Flutter",
        "Cross-Platform",
        "Web",
        "Mobile",
        "iOS",
        "Android",
        "Healthcare Tech",
      ],
      company: "Docnet",
      companyLogo: "/lovable-uploads/88674cb4-ea44-4826-9e50-22ea5039fada.png",
      demoLink: "https://doctor.docnet.tn/login",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.docnet.doctor",
      iosLink: "https://apps.apple.com/app/docnet-doctor/id1234567890", // Placeholder iOS link
      platforms: ["Web", "Android", "iOS"],
      featured: true,
    },
    {
      title: "Docnet Patient App",
      duration: "2022 - 2023",
      description:
        "Mobile application for patients to manage health records, schedule appointments, and interact with healthcare providers.",
      image: "/lovable-uploads/46b3e011-ef23-49b4-b0ce-59dd61da9d45.png",
      skills: [
        "Flutter",
        "Mobile",
        "Healthcare",
        "State Management",
        "Patient Care",
      ],
      company: "Docnet",
      companyLogo: "/lovable-uploads/88674cb4-ea44-4826-9e50-22ea5039fada.png",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.docnet.patient",
      platforms: ["Android"],
      featured: true,
    },
    {
      title: "Basalon",
      duration: "2022",
      description:
        "Event booking and management mobile application with cross-platform functionality and seamless user experience.",
      image: "/lovable-uploads/7390cffa-475d-490d-b891-17a4cb3fca58.png",
      skills: [
        "Flutter",
        "Mobile",
        "Event Management",
        "Cross-Platform",
        "iOS",
        "Android",
      ],
      androidLink:
        "https://play.google.com/store/apps/details?id=il.co.basalon",
      iosLink: "https://apps.apple.com/app/basalon/id987654321", // Placeholder iOS link
      platforms: ["Android", "iOS"],
      featured: true,
    },
    {
      title: "Closerrr",
      duration: "Current Project",
      description:
        "Innovative social networking platform bridging connections through advanced technology and user-centric design.",
      image: "/lovable-uploads/a9d6849a-c5a6-46f1-a5d2-2301ef3f1b1a.png",
      skills: [
        "Flutter",
        "React",
        "Node.js",
        "Express",
        "Social Networking",
        "Full-Stack",
      ],
      featured: true,
    },
    {
      title: "CoffeeTwist",
      duration: "Current Project",
      description:
        "Specialty coffee ordering and delivery application with personalized recommendations and seamless user experience.",
      image: "/lovable-uploads/b0be43a4-8ba2-4d59-8cc2-cfbd7ac7d95d.png",
      skills: [
        "Flutter",
        "iOS",
        "Android",
        "Firebase",
        "E-commerce",
        "Mobile App",
      ],
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-white mx-auto mt-3"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive showcase of innovative projects spanning web,
            mobile, and cross-platform technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-white/10 hover:shadow-lg hover:border-black/20 transition-all group"
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
                        className="p-2 bg-white rounded-full hover:bg-white/80 hover:text-black transition-colors text-black"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-white/80 hover:text-black transition-colors text-black"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.androidLink && (
                      <a
                        href={project.androidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-white/80 hover:text-black transition-colors text-black"
                      >
                        <Smartphone className="h-5 w-5" />
                      </a>
                    )}
                    {project.iosLink && (
                      <a
                        href={project.iosLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-white/80 hover:text-black transition-colors text-black"
                      >
                        <Smartphone className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.platforms &&
                    project.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 text-white px-2 py-1 rounded-full border border-white/20"
                      >
                        {platform}
                      </span>
                    ))}
                </div>

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
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
