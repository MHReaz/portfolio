import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Dhaka Softwares",
      position: "App Developer",
      period: "2024 - Present",
      location: "Dhaka, Bangladesh",
      description: [
        "Developing scalable mobile applications for enterprise clients",
        "Implementing clean architecture and performance optimizations",
        "Providing E-Commerce solutions to renowned brands in Bangladesh",
        "Leading mobile development initiatives and mentoring junior developers"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "GetX", "REST API"],
      current: true
    },
    {
      company: "Smart Software Limited",
      position: "Jr. Software Engineer",
      period: "Jun 2023 - Dec 2023",
      location: "Dhaka, Bangladesh",
      description: [
        "Deployed 4+ major releases for HRM applications",
        "Built government awareness apps for snake bite prevention",
        "Developed location-based features using Google Maps integration",
        "Collaborated with cross-functional teams on multiple projects"
      ],
      technologies: ["Flutter", "SQLite", "Google Maps", "GetX", "Geolocation"],
      current: false
    }
  ];

  const education = {
    degree: "BSc. in Computer Science and Engineering",
    institution: "American International University-Bangladesh",
    period: "2020 - 2024",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Graduated with strong foundation in software engineering principles",
      "Published research on cloud-powered bidding marketplaces",
      "Participated in multiple tech competitions and hackathons"
    ]
  };

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in mobile development and continuous learning path.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className={`card-hover bg-gradient-card border-border/50 ${exp.current ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary" />
                        {exp.company}
                        {exp.current && (
                          <span className="tech-badge text-xs">Current</span>
                        )}
                      </CardTitle>
                      <p className="text-lg text-secondary font-semibold">{exp.position}</p>
                    </div>
                    <div className="text-right text-muted-foreground">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <Card className="card-hover bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {education.degree}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">{education.institution}</p>
                </div>
                <div className="text-right text-muted-foreground">
                  <div className="flex items-center gap-2 lg:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-end mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {education.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;