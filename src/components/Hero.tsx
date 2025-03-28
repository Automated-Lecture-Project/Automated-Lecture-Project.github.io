
import { ArrowRight, Shield, Swords } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-secondary/90 text-white border-b border-primary/20"
    >
      {/* Tactical Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-3xl mx-auto md:ml-0 space-y-6">
          <div className="flex items-center gap-4">
            <Swords className="h-10 w-10 text-primary" strokeWidth={1.5} />
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase animate-tactical-fade-in">
              Strategic <span className="text-primary">Digital Solutions</span>
            </h1>
          </div>
          
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl animate-tactical-fade-in [animation-delay:300ms]">
            Precision-engineered web experiences that deliver tactical performance 
            and strategic digital advantages for mission-critical objectives.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-tactical-fade-in [animation-delay:600ms]">
            <a 
              href="#projects"
              className="btn btn-primary px-6 py-3 rounded-sm inline-flex items-center gap-2 border border-primary/50 hover:bg-primary/90 transition-all"
            >
              Tactical Portfolio
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a 
              href="#about"
              className="btn border border-white/30 hover:border-primary px-6 py-3 rounded-sm text-white hover:text-primary transition-colors"
            >
              <Shield className="mr-2 h-4 w-4" /> Mission Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
