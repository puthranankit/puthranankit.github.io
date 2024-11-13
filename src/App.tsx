import React from 'react';
import { Mail, Linkedin, Github, Award, BookOpen, Briefcase, Code, ExternalLink, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 py-16 relative">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ankit Puthran
            </h1>
            <p className="text-xl text-gray-300 mb-8">Senior Software Engineer</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="mailto:ankit.putran@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all text-gray-300 hover:text-white">
                <Mail size={18} />
                ankit.putran@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ankitputhran/" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all text-gray-300 hover:text-white">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="https://github.com/" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all text-gray-300 hover:text-white">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <BookOpen size={28} className="text-blue-400" />
            About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 text-lg leading-relaxed">
              Experienced Software Engineer with expertise in full-stack development, cloud technologies, and enterprise applications. 
              Passionate about creating scalable solutions and mentoring teams to deliver high-quality software products.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase size={28} className="text-blue-400" />
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Senior Software Engineer",
                company: "Cisco Systems",
                period: "2021 - Present",
                responsibilities: [
                  "Led development of enterprise-scale applications using modern technologies",
                  "Implemented microservices architecture and cloud-native solutions",
                  "Mentored junior developers and conducted code reviews"
                ]
              },
              {
                title: "Software Engineer",
                company: "Cisco Systems",
                period: "2019 - 2021",
                responsibilities: [
                  "Developed and maintained critical business applications",
                  "Collaborated with cross-functional teams to deliver high-quality solutions",
                  "Optimized application performance and scalability"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar size={20} className="text-blue-400" />
                  <span className="text-gray-400">{job.period}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                <p className="text-blue-400 mb-4">{job.company}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Code size={28} className="text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Cloud Migration Platform",
                description: "Led the development of a cloud migration platform that helped enterprises transition their applications to AWS.",
                tech: ["React", "Node.js", "AWS", "Docker"],
                link: "https://project1.com"
              },
              {
                title: "Enterprise Dashboard",
                description: "Built a real-time analytics dashboard for monitoring system performance across multiple data centers.",
                tech: ["Vue.js", "Python", "GraphQL", "Kubernetes"],
                link: "https://project2.com"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all group">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-between">
                  {project.title}
                  <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Award size={28} className="text-blue-400" />
            Skills & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Node.js", "TypeScript", "AWS", "Docker",
                  "Kubernetes", "GraphQL", "MongoDB", "Python", "CI/CD"
                ].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Award size={16} className="text-blue-400" />
                  AWS Certified Solutions Architect
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Award size={16} className="text-blue-400" />
                  Microsoft Certified: Azure Developer
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;