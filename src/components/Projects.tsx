import { ExternalLink, Download, Play, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Dazzle - Multi-brand Gadget Store",
      description: "E-Commerce app featuring phones, tablets, MacBooks with secure checkout and multiple payment gateway integrations including SSLcommerz and BKash.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "GetX", "Firebase", "SSLcommerz", "BKash"],
      highlights: [
        "Multi-vendor marketplace with advanced filtering",
        "Secure payment processing with local gateways",
        "Real-time inventory management",
        "Order tracking and notification system"
      ],
      links: {
        demo: "#",
        download: "#",
        github: "#"
      },
      featured: true
    },
    {
      title: "Smart HRM",
      description: "Enterprise HR solution for payroll, attendance, and leave management with comprehensive employee data management and reporting features.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "SQLite", "REST API", "GetX"],
      highlights: [
        "Complete employee lifecycle management",
        "Automated payroll calculations",
        "Biometric attendance integration",
        "Advanced reporting dashboard"
      ],
      links: {
        playstore: "https://play.google.com/store/apps/details?id=com.smart.hrm",
        appstore: "https://apps.apple.com/app/smart-hrm/id987654321",
        demo: "#"
      },
      featured: true
    },
    {
      title: "Snakebite Emergency App",
      description: "Life-saving application providing immediate access to antivenom hospital contacts, first aid guides, and emergency protocols for snakebite incidents.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Geolocation", "GetX", "Firebase"],
      highlights: [
        "GPS-based hospital finder",
        "Offline first aid guide",
        "Emergency contact system",
        "Multi-language support"
      ],
      links: {
        playstore: "https://play.google.com/store/apps/details?id=com.smartsoftware.snakebite&hl=bn",
        appstore: "https://apps.apple.com/us/app/snake-bite-awareness-app/id6504925995"
      },
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of mobile applications I've built, from e-commerce platforms 
            to enterprise solutions and life-saving emergency apps.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-border/50 overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-muted rounded-lg m-6 flex items-center justify-center">
                    <div className="text-muted-foreground text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                      <p>Project Preview</p>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-10 left-10 tech-badge bg-primary text-primary-foreground">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-bold mb-4">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-secondary">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.links.playstore && (
                        <Button size="sm" className="btn-primary text-xs" asChild>
                          <a href={project.links.playstore} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4 mr-2" />
                            Play Store
                          </a>
                        </Button>
                      )}
                      {project.links.appstore && (
                        <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/10 text-xs" asChild>
                          <a href={project.links.appstore} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            App Store
                          </a>
                        </Button>
                      )}
                      {project.links.download && (
                        <Button size="sm" variant="outline" className="border-secondary/20 hover:bg-secondary/10 text-xs" asChild>
                          <a href={project.links.download}>
                            <Download className="w-4 h-4 mr-2" />
                            Download APK
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="border-border hover:bg-muted text-xs" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View all projects */}
        <div className="text-center mt-12">
          <Button className="btn-secondary" asChild>
            <a href="https://github.com/MehadiReaz?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;