import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, User, Code, Briefcase, GraduationCap, Award, ChevronDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      
      // Show scroll to top button after scrolling down
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Mouli Pappu
            </h1>
            <div className="hidden md:flex space-x-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-50 text-blue-600 font-medium shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center py-20">
            <div className={`mb-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="inline-block animate-fade-in">Mouli</span>{' '}
                <span className="inline-block animate-fade-in" style={{ animationDelay: '200ms' }}>Pappu</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-700 mb-2 font-medium">
                <span className="inline-block animate-fade-in" style={{ animationDelay: '400ms' }}>
                  Software Developer | Data Science Enthusiast
                </span>
              </div>
              <p className={`text-lg text-gray-500 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`} style={{ animationDelay: '600ms' }}>
                <MapPin className="w-4 h-4 inline mr-2" />
                Visakhapatnam, Andhra Pradesh
              </p>
            </div>
            
            <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-800 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ animationDelay: '800ms' }}>
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md" asChild>
                <a href="tel:+919392853320">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9392853320
                </a>
              </Button>
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md" asChild>
                <a href="mailto:moulirichatd68@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md" asChild>
                <a href="https://www.linkedin.com/in/mouli-pappu" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md" asChild>
                <a href="https://github.com/Moulirichards" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ animationDelay: '1000ms' }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                View My Work
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <Card className="max-w-4xl mx-auto transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 leading-relaxed">
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
      <section id="experience" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-600 mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <Badge variant="secondary" className="mb-2 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start group/item">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-300"></span>
                        <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{resp}</span>
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
      <section id="projects" className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</CardTitle>
                    <Badge variant="outline" className="mt-2 md:mt-0 border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors duration-300">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors duration-300"></span>
                        <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{feature}</span>
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
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg group" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 cursor-default"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
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
      <section id="education" className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <Card className="transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Lovely Professional University</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-600 mt-1">
                      Computer Science and Engineering (AI & ML)
                    </CardDescription>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <Badge variant="secondary" className="mb-2 bg-blue-50 text-blue-700">
                      <Calendar className="w-3 h-3 mr-1" />
                      2021 - 2025
                    </Badge>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      Jalandhar, Punjab
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 mb-4">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] group">
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{cert.name}</h4>
                        <p className="text-gray-600">{cert.provider}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 border-blue-200 text-blue-700">
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
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            Always excited to collaborate on innovative projects and explore new opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105" asChild>
              <a href="mailto:moulirichatd68@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <p className="text-gray-400">© 2024 Mouli Pappu. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          size="sm"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
