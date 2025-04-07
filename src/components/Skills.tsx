
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  
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

  const categories = ["all", ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  const filteredSkills = selectedTab === "all" 
    ? skills
    : skills.filter(skill => skill.category === selectedTab);

  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">My Skills</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-3"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I've acquired a diverse range of skills throughout my journey as a developer.
            Here's an overview of my technical expertise:
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs 
            defaultValue="all"
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full max-w-3xl"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 mb-8 bg-black/50">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  className="text-sm capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedTab} className="mt-0 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredSkills.map((skill) => (
                  <div key={skill.name} className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all group">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white group-hover:text-white/90 transition-colors">{skill.name}</span>
                        <span className="text-sm text-gray-400 group-hover:text-white/70 transition-colors font-mono">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-white/10"
                        indicatorClassName="bg-gradient-to-r from-white/80 to-white"
                      />
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-400">{skill.category}</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-white/80"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold font-poppins text-white mb-8 text-center">
            Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Flutter", "Dart", "Python", "JavaScript", "Django", "Android SDK", 
              "GitHub", "State Management", "Mobile Applications", "Tailwind CSS", 
              "Bootstrap", "SQL", "C++", "Firebase", "REST API", "JSON",
              "Git", "VS Code", "Android Studio", "UI/UX", "Responsive Design"
            ].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 text-gray-200 shadow-sm hover:border-white/30 hover:bg-black/60 transition-all cursor-default"
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
