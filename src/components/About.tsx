import { Code, Smartphone, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Specialized in Flutter development with deep understanding of mobile UX patterns"
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Strong advocate for maintainable code using MVVM and state management best practices"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimizing app performance and implementing efficient state management solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative developer with experience in agile environments and cross-functional teams"
    }
  ];

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Flutter Developer currently working full-time at Dhaka Softwares, 
            with previous experience at Smart Software Limited. My expertise lies in building 
            high-performance mobile applications using modern architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-border/50 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over <span className="text-primary font-semibold">2.5+ years</span> of 
                professional development experience, I've specialized in creating robust mobile 
                applications for various domains including E-Commerce, HRM, and custom solutions.
              </p>
              <p>
                I'm passionate about staying updated with the latest Flutter developments, 
                exploring new technologies like Kotlin and Go, and implementing clean 
                architecture patterns that ensure scalable and maintainable codebases.
              </p>
              <p>
                Currently pursuing opportunities to work on challenging projects that push 
                the boundaries of mobile development while contributing to meaningful solutions 
                that impact users positively.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up grid grid-cols-2 gap-4">
            <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">2.5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">4+</div>
              <div className="text-muted-foreground">Apps Published</div>
            </div>
            <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;