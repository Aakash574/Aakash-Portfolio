
import React from "react";
import { Calendar, Award, BookOpen } from "lucide-react";

interface EducationItem {
  institution: string;
  logo: string;
  degree: string;
  duration: string;
  location: string;
  activities?: string;
  skills: string[];
}

const Education = () => {
  const education: EducationItem[] = [
    {
      institution: "Bansal Institute of Science & Technology, Raisen Road, Kokta, Anand Nagar, Bhopal - 462021",
      logo: "/lovable-uploads/4eeb3d3c-601e-401a-a850-f4ccb92dcbc3.png",
      degree: "Bachelor of Technology - BTech, Computer Science",
      duration: "2019 - 2023",
      location: "Bhopal, Madhya Pradesh, India",
      activities: "Online Gaming",
      skills: ["SQL", "C++", "+14 skills"],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">Education</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic background and educational qualifications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-16 h-16 bg-white rounded-md flex-shrink-0 p-1 shadow-sm border border-gray-100">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                    <h4 className="text-lg font-medium text-portfolio-blue">{edu.degree}</h4>
                    
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    {edu.activities && (
                      <div className="mt-3">
                        <div className="flex items-center text-gray-700">
                          <BookOpen className="h-4 w-4 mr-2" />
                          <span className="text-sm">Activities and societies: {edu.activities}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-portfolio-blue" />
                        <span className="text-sm font-medium">Skills gained:</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap mt-2">
                        {edu.skills.map((skill, i) => (
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
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-portfolio-blue/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-portfolio-darkBlue mb-4">
              Training & Certifications
            </h3>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-md flex-shrink-0 p-1 shadow-sm border border-gray-100">
                  <img
                    src="/lovable-uploads/4eeb3d3c-601e-401a-a850-f4ccb92dcbc3.png"
                    alt="Bansal Institute"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Training and placement</h4>
                  <h5 className="text-md text-portfolio-blue">
                    Bansal Institute of Science & Technology
                  </h5>
                  
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      May 2022 - Mar 2023 · 11 mos
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <span className="text-sm text-gray-700">Environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
