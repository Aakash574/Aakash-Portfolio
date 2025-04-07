
import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  logo: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  isRemote?: boolean;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Flutter Developer",
      company: "HackerKernel",
      logo: "/lovable-uploads/a9d6849a-c5a6-46f1-a5d2-2301ef3f1b1a.png",
      duration: "Apr 2024 - Present · 1 yr 1 mo",
      location: "Bhopal, Madhya Pradesh, India",
      description: "Working as a Flutter Developer, building cross-platform mobile applications for various clients.",
      skills: ["Flutter", "Flutter Dart", "+11 skills"],
    },
    {
      role: "Flutter Trainee",
      company: "HackerKernel",
      logo: "/lovable-uploads/a9d6849a-c5a6-46f1-a5d2-2301ef3f1b1a.png",
      duration: "Dec 2023 - Apr 2024 · 5 mos",
      location: "Bhopal, Madhya Pradesh, India",
      description: "Trained in Flutter development, learning mobile application development best practices.",
      skills: ["Android Studio", "Flutter Dart", "+7 skills"],
      isRemote: false,
    },
    {
      role: "Mobile Application Developer",
      company: "CRTD Technologies",
      logo: "/lovable-uploads/10221b3a-5caa-4722-b4c6-8dfdfeee7f77.png",
      duration: "Feb 2023 - Nov 2023 · 10 mos",
      location: "Bhopal, Madhya Pradesh, India",
      description: "Developed mobile applications using various technologies and frameworks.",
      skills: ["Dart", "Computer Science", "+8 skills"],
      isRemote: true,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">Work Experience</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey in the field of software development and mobile application development.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-gray-200 hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-portfolio-blue rounded-full mt-6"></div>
                
                <div className="md:ml-12 flex-1">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="w-12 h-12 bg-white rounded-md flex-shrink-0 p-1 shadow-sm border border-gray-100">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                        <h4 className="text-lg font-medium text-portfolio-blue">{exp.company}</h4>
                        
                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.duration}
                          </div>
                          
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          
                          {exp.isRemote && (
                            <div className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded-md">
                              Remote
                            </div>
                          )}
                        </div>
                        
                        <p className="mt-3 text-gray-700">{exp.description}</p>
                        
                        <div className="mt-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
