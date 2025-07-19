import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-tech-green/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="tech-badge mb-4 inline-block">👋 Available for new opportunities</span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Mehadi Hasan Reaz</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Passionate <span className="text-primary font-semibold">Flutter Developer</span> with{" "}
              <span className="text-secondary font-semibold">2.5+ years</span> of experience building 
              high-performance mobile applications and scalable solutions.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-primary group">
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10 group">
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/MehadiReaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 card-hover"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/reazmh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 card-hover"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:reazmehadihasan@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 card-hover"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;