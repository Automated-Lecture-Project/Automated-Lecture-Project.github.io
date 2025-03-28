
import { FileText, Briefcase, Award, Code } from 'lucide-react';

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Next.js", 
    "Tailwind CSS", "UI/UX Design", "Figma", "Adobe XD",
    "JavaScript", "HTML", "CSS", "Git"
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl font-serif font-bold text-primary">BP</div>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-primary font-medium">Designer & Developer</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate web developer and designer with over 5 years of experience creating 
                beautiful, functional websites and applications. I specialize in crafting user-centered 
                digital experiences that help businesses connect with their audience.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My approach combines creative design thinking with technical problem-solving to 
                deliver solutions that not only look great but also perform exceptionally well.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Education</h4>
                    <p className="text-gray-600">Bachelor's in Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Briefcase className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Experience</h4>
                    <p className="text-gray-600">5+ Years in Web Development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Expertise</h4>
                    <p className="text-gray-600">Frontend & UI/UX Design</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Projects</h4>
                    <p className="text-gray-600">50+ Successful Projects</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
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
    </section>
  );
};

export default About;
