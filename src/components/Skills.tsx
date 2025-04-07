
import React from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "Flutter", level: 90, category: "Mobile" },
    { name: "Dart", level: 85, category: "Mobile" },
    { name: "Python", level: 80, category: "Programming" },
    { name: "JavaScript", level: 75, category: "Web" },
    { name: "Django", level: 70, category: "Web" },
    { name: "Android SDK", level: 65, category: "Mobile" },
    { name: "GitHub", level: 85, category: "Tools" },
    { name: "State Management", level: 80, category: "Concepts" },
    { name: "Tailwind", level: 75, category: "Web" },
    { name: "Bootstrap", level: 70, category: "Web" },
    { name: "SQL", level: 65, category: "Database" },
    { name: "C++", level: 60, category: "Programming" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">My Skills</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I've acquired a diverse range of skills throughout my journey as a developer.
            Here's an overview of my technical expertise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-semibold font-poppins text-portfolio-darkBlue mb-4">
                {category} Development
              </h3>
              
              <div className="space-y-5">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-lightBlue rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold font-poppins text-gray-900 mb-8 text-center">
            All Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter", "Dart", "Python", "JavaScript", "Django", "Android SDK", 
              "GitHub", "State Management", "Mobile Applications", "Tailwind CSS", 
              "Bootstrap", "SQL", "C++", "Firebase", "REST API", "JSON",
              "Git", "VS Code", "Android Studio", "UI/UX", "Responsive Design"
            ].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
