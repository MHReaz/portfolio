import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 95, color: "bg-primary" },
        { name: "Dart", level: 95, color: "bg-primary" },
        { name: "Firebase", level: 90, color: "bg-tech-orange" },
        { name: "Kotlin", level: 75, color: "bg-secondary" },
        { name: "Android Studio", level: 90, color: "bg-tech-green" },
        { name: "Xcode", level: 80, color: "bg-muted-foreground" }
      ]
    },
    {
      title: "State Management",
      skills: [
        { name: "Bloc", level: 90, color: "bg-primary" },
        { name: "GetX", level: 95, color: "bg-tech-orange" },
        { name: "Provider", level: 85, color: "bg-secondary" },
        { name: "Riverpod", level: 80, color: "bg-primary" }
      ]
    },
    {
      title: "Payment & APIs",
      skills: [
        { name: "PayPal", level: 85, color: "bg-primary" },
        { name: "Stripe", level: 85, color: "bg-secondary" },
        { name: "SSLCommerz", level: 90, color: "bg-tech-green" },
        { name: "bKash", level: 95, color: "bg-tech-orange" },
        { name: "REST API", level: 95, color: "bg-primary" },
        { name: "Socket.IO", level: 80, color: "bg-muted-foreground" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "GitHub", level: 95, color: "bg-muted-foreground" },
        { name: "Postman", level: 90, color: "bg-tech-orange" },
        { name: "VS Code", level: 95, color: "bg-primary" },
        { name: "Google Maps", level: 85, color: "bg-tech-green" }
      ]
    }
  ];

  const technologies = [
    "Flutter", "Dart", "Firebase", "Kotlin", "Java", "Go",
    "Bloc", "GetX", "Provider", "Riverpod", "PayPal", "Stripe",
    "SSLCommerz", "bKash", "Google Maps", "Socket.IO", "REST API",
    "GitHub", "Postman", "VS Code", "Android Studio", "Xcode"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable mobile applications
            with focus on performance and user experience.
          </p>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="tech-badge animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-hover bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold gradient-text">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;