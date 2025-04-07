
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
  description?: string;
}

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  
  const skills: Skill[] = [
    { 
      name: "Node.js", 
      level: 80, 
      category: "Backend",
      description: "Server-side JavaScript runtime for building scalable network applications"
    },
    { 
      name: "Express.js", 
      level: 78, 
      category: "Backend",
      description: "Minimal and flexible Node.js web application framework"
    },
    { 
      name: "EJS", 
      level: 72, 
      category: "Web",
      description: "Embedded JavaScript templating for generating HTML markup with JavaScript" 
    },
    { 
      name: "Flutter", 
      level: 90, 
      category: "Mobile",
      description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop" 
    },
    { 
      name: "Dart", 
      level: 85, 
      category: "Mobile",
      description: "Programming language optimized for client-side development of web and mobile applications"
    },
    { 
      name: "Python", 
      level: 80, 
      category: "Programming",
      description: "High-level, interpreted programming language known for its readability and versatility"
    },
    { 
      name: "JavaScript", 
      level: 75, 
      category: "Web",
      description: "Dynamic programming language for web development and interactive web pages"
    },
    { 
      name: "Django", 
      level: 70, 
      category: "Web",
      description: "High-level Python web framework that encourages rapid development and clean design"
    },
    { 
      name: "Android SDK", 
      level: 65, 
      category: "Mobile",
      description: "Software development kit for creating Android mobile applications"
    },
    { 
      name: "iOS Development", 
      level: 60, 
      category: "Mobile",
      description: "Mobile application development for Apple's iOS platform using Swift"
    },
    { 
      name: "Swift", 
      level: 55, 
      category: "Mobile",
      description: "Powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS"
    },
    { 
      name: "MongoDB", 
      level: 70, 
      category: "Database",
      description: "NoSQL document database for modern, scalable web applications"
    },
    { 
      name: "GitHub", 
      level: 85, 
      category: "Tools",
      description: "Version control and collaboration platform for software development"
    },
    { 
      name: "State Management", 
      level: 80, 
      category: "Concepts",
      description: "Advanced techniques for managing application state in complex software systems"
    },
    { 
      name: "Tailwind", 
      level: 75, 
      category: "Web",
      description: "Utility-first CSS framework for rapidly building custom user interfaces"
    },
    { 
      name: "Bootstrap", 
      level: 70, 
      category: "Web",
      description: "Popular CSS framework for responsive and mobile-first web development"
    },
    { 
      name: "SQL", 
      level: 65, 
      category: "Database",
      description: "Standard language for managing and manipulating relational databases"
    },
    { 
      name: "C++", 
      level: 60, 
      category: "Programming",
      description: "High-performance programming language used for system/application development"
    }
  ];

  const categories = ["all", ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  const filteredSkills = selectedTab === "all" 
    ? skills
    : skills.filter(skill => skill.category === selectedTab);

  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">Technical Skills & Expertise</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-3"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across various domains, highlighting proficiency and expertise.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs 
            defaultValue="all"
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full max-w-4xl"
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
                  <div 
                    key={skill.name} 
                    className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white group-hover:text-white/90 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-white/70 transition-colors font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-white/10"
                        indicatorClassName="bg-gradient-to-r from-white/80 to-white"
                      />
                      {skill.description && (
                        <p className="text-xs text-gray-300 mt-2 italic">
                          {skill.description}
                        </p>
                      )}
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
      </div>
    </section>
  );
};

export default Skills;
