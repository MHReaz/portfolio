import { Mail, MessageSquare, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "reazmehadihasan@gmail.com",
      link: "mailto:reazmehadihasan@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "linkedin.com/in/reazmh",
      link: "https://www.linkedin.com/in/reazmh/",
      primary: false
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/MehadiReaz",
      link: "https://github.com/MehadiReaz",
      primary: false
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in",
      value: "Dhaka, Bangladesh",
      link: null,
      primary: false
    }
  ];

  const currentTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Dhaka',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit'
  });

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just chatting about technology.
            Feel free to reach out!
          </p>
        </div>

        {/* Availability status */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 tech-badge bg-tech-green/10 border-tech-green/20 text-tech-green">
            <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse" />
            <span>Available for new opportunities</span>
            <span className="text-xs opacity-75">({currentTime} Bangladesh Time)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            {contactMethods.map((method, index) => (
              <Card key={index} className={`card-hover bg-gradient-card border-border/50 ${method.primary ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${method.primary ? 'bg-primary/20' : 'bg-muted'}`}>
                      <method.icon className={`w-6 h-6 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      {method.link ? (
                        <a 
                          href={method.link} 
                          target={method.link.startsWith('http') ? '_blank' : undefined}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary hover:text-primary/80 transition-colors font-mono text-sm"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="font-mono text-sm">{method.value}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ready to work together?</h3>
              <div className="space-y-6">
                <Card className="card-hover bg-gradient-primary border-0 text-white">
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h4 className="text-xl font-bold mb-2">Start a conversation</h4>
                    <p className="opacity-90 mb-6">
                      Let's discuss your project requirements and how I can help bring your ideas to life.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="bg-white text-primary hover:bg-white/90 font-semibold"
                      asChild
                    >
                      <a href="mailto:reazmehadihasan@gmail.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="card-hover bg-gradient-card border-border/50 text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold gradient-text mb-1">24h</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover bg-gradient-card border-border/50 text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold gradient-text mb-1">Remote</div>
                      <div className="text-sm text-muted-foreground">Work Available</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Palestine message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 tech-badge bg-tech-green/10 border-tech-green/20 text-tech-green">
            <span className="text-lg">🇵🇸</span>
            <span className="font-medium">"From the river to the sea, Palestine will be free."</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;