
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, User, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Prodesk IT",
      location: "Noida, Uttar Pradesh",
      period: "Nov'24 - present",
      responsibilities: [
        "Developed responsive and user friendly UI components using HTML, CSS, JavaScript, TypeScript and React.",
        "Contributed to the frontend of a major IT company's website, ensuring high performance and seamless design.",
        "Collaborated closely with the team lead to resolve UI/UX issues and implement design feedback.",
        "Implemented with the team lead to resolve UI/UX issues and implement design feedback. Participated in daily stand-ups and sprint planning, gaining hands-on experience in agile workflows."
      ]
    }
  ];

  const projects = [
    {
      title: "Open world AI – ai for everyone",
      period: "Jan'25- Mar'25",
      description: "Build a multilingual, voice-first IT platform for Digital Inclusion using React.js, TypeScript, Tailwind CSS, shadcn/UI, and the Web Speech API to provide accessible AI and digital education to illiterate and underprivileged users.",
      features: [
        "Integrated interactive UI components enabling real-time voice interaction in over six languages, featuring dynamic language switching, text-to-speech, and speech recognition.",
        "Created responsive educational modules, AI service dashboards, and job/internship portals, integrating user-friendly features like personalized dashboards, achievement tracking, and a multilingual support centre.",
        "Prioritized accessibility, cultural sensitivity, and mobile responsiveness to empower users across various languages and skill levels, fostering global digital inclusion."
      ]
    },
    {
      title: "Freehire – smart job portal for freshers",
      period: "Apr'25 - May'25",
      description: "Created a responsive and voice-enabled job portal for fresh graduates and entry-level job seekers, utilizing React.js, Tailwind CSS, Supabase, and Flask.",
      features: [
        "Designed core features such as voice and text job search, one-click apply, animated job cards, smart filters, and a personalized application tracking dashboard (powered by the Web Speech API).",
        "Integrated a resume builder and leveraged Supabase for real-time data management, user authentication, and file storage."
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    "Libraries & Frameworks": ["React.js", "Tailwind CSS", "Bootstrap", "Next.js"],
    "Database Management": ["MySQL", "Tableau", "Hadoop", "Power BI"]
  };

  const certifications = [
    { name: "Responsive web design", provider: "freeCodeCamp", date: "Jun'25" },
    { name: "Introduction to frontend web development", provider: "Meta", date: "Dec'24" },
    { name: "OOPs concepts in python, JavaScript pro certification", provider: "Code Chef", date: "Nov'24" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Mouli Pappu</h1>
            <div className="hidden md:flex space-x-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-slate-100 text-slate-800 font-medium'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 animate-fade-in">
                Mouli Pappu
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-2">Software Developer</p>
              <p className="text-lg text-slate-500">Visakhapatnam, Andhra Pradesh</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" className="hover-scale" asChild>
                <a href="tel:+919392853320">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9392853320
                </a>
              </Button>
              <Button variant="outline" className="hover-scale" asChild>
                <a href="mailto:moulirichatd68@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="hover-scale" asChild>
                <a href="https://www.linkedin.com/in/mouli-pappu" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="hover-scale" asChild>
                <a href="https://github.com/Moulirichards" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            <Button 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full hover-scale"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          </div>
          
          <Card className="max-w-4xl mx-auto hover-scale">
            <CardContent className="p-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                Passionate and dedicated software developer with a solid academic foundation and a genuine love for creating responsive web and 
                mobile applications. I enjoy turning complex problems into elegant solutions and thrive in development-driven environments. Always 
                curious and eager to learn, I'm excited to apply what I know to real-world challenges and grow alongside a collaborative, forward-
                thinking team. Enthusiastic about AI and Machine Learning, constantly exploring ways to blend intelligent solutions with web 
                technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-slate-800">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-600 mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <Badge variant="secondary" className="mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <p className="text-sm text-slate-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-600">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-slate-200 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-slate-800 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Lovely Professional University</CardTitle>
                    <CardDescription className="text-lg font-medium text-slate-600 mt-1">
                      Computer Science and Engineering (AI & ML)
                    </CardDescription>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <Badge variant="secondary" className="mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      2021 - 2025
                    </Badge>
                    <p className="text-sm text-slate-500 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      Jalandhar, Punjab
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 mb-4">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-slate-800">{cert.name}</h4>
                        <p className="text-slate-600">{cert.provider}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {cert.date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-6">
            Always excited to collaborate on innovative projects and explore new opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-slate-800" asChild>
              <a href="mailto:moulirichatd68@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>
          <Separator className="my-8 bg-slate-600" />
          <p className="text-slate-400">© 2024 Mouli Pappu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
