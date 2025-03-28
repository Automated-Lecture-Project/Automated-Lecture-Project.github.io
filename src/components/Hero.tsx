
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Animated particles or shapes (simplified with divs) */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 20}s ease-in-out infinite`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto md:ml-0">
          <h1 className="opacity-0 animate-fade-in [animation-delay:200ms] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Creating Digital Experiences That <span className="text-primary">Inspire</span>
          </h1>
          
          <p className="opacity-0 animate-fade-in [animation-delay:400ms] mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
            I'm a passionate designer and developer crafting beautiful, functional websites 
            and applications that help businesses grow and thrive in the digital world.
          </p>
          
          <div className="opacity-0 animate-fade-in [animation-delay:600ms] mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a 
              href="#about"
              className="btn border border-gray-300 hover:border-primary hover:text-primary px-6 py-3 rounded-md transition-colors"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
