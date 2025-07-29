import React, { useState } from 'react';
import { Shield, Users, BookOpen, Award, ChevronRight, Lock, Globe, Smartphone, AlertTriangle, Eye, Menu, X } from 'lucide-react';
import { portfolioSessions, PortfolioSession } from './data/portfolioData';
import { teamMembers, TeamMember } from './data/membersData';
import SessionDetail from './components/SessionDetail';
import MemberDetail from './components/MemberDetail';
import ImageWithFallback from './components/ImageWithFallback';
import Gallery from './components/Gallery';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<PortfolioSession | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSessionClick = (session: PortfolioSession) => {
    setSelectedSession(session);
  };
  
  const handleBackToPortfolio = () => {
    setSelectedSession(null);
  };

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };
  
  const handleBackToTeam = () => {
    setSelectedMember(null);
  };

  // If a session is selected, show the detail view
  if (selectedSession) {
    return <SessionDetail session={selectedSession} onBack={handleBackToPortfolio} />;
  }

  // If a member is selected, show the detail view
  if (selectedMember) {
    return <MemberDetail member={selectedMember} onBack={handleBackToTeam} />;
  }



  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/Adobe Express - file.png" 
                alt="TechCivix Logo" 
                className="h-16 w-auto bg-transparent"
                onError={(e) => {
                  console.log('Failed to load logo');
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TechCivix
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#mission" className="hover:text-cyan-400 transition-colors">Mission</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
              <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
              <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
              <a href="#contact" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-cyan-400 transition-colors" onClick={toggleMenu}>Home</a>
                <a href="#mission" className="hover:text-cyan-400 transition-colors" onClick={toggleMenu}>Mission</a>
                <a href="#services" className="hover:text-cyan-400 transition-colors" onClick={toggleMenu}>Services</a>
                <a href="#achievements" className="hover:text-cyan-400 transition-colors" onClick={toggleMenu}>Achievements</a>
                <a href="#team" className="hover:text-cyan-400 transition-colors" onClick={toggleMenu}>Team</a>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors" onClick={toggleMenu}>Portfolio</a>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors" onClick={toggleMenu}>Gallery</a>
                <a href="#contact" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors w-fit" onClick={toggleMenu}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 text-sm mb-6 border border-cyan-700/50">
              <Shield className="h-4 w-4 mr-2" />
              Cyber Smart India Initiative
            </div>
            <div className="flex justify-center mb-6">
              <img 
                src="/images/Adobe Express - file.png" 
                alt="TechCivix Logo" 
                className="h-24 md:h-32 w-auto bg-transparent"
                onError={(e) => {
                  console.log('Failed to load hero logo');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              TechCivix
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering citizens against cyber threats through education, awareness, and real-world cybersecurity training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Learn More
                <ChevronRight className="h-5 w-5 inline ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To educate and empower every citizen against the growing threats of cybercrime
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Online Scams", description: "Protecting users from fraudulent websites and malicious online schemes" },
              { icon: Lock, title: "Digital Theft", description: "Securing personal data and preventing unauthorized access to digital assets" },
              { icon: Smartphone, title: "Social Media Fraud", description: "Identifying and avoiding social media scams and fake profiles" },
              { icon: Eye, title: "Sextortion & Phishing", description: "Recognizing and preventing blackmail attempts and phishing attacks" },
              { icon: AlertTriangle, title: "UPI Scams", description: "Safe digital payment practices and fraud prevention" },
              { icon: Users, title: "Job Scams", description: "Identifying legitimate employment opportunities and avoiding fake job offers" }
            ].map((threat, index) => (
              <div key={index} className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105">
                <threat.icon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{threat.title}</h3>
                <p className="text-gray-300">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity education through hands-on training and real-world examples
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Awareness Sessions */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all">
              <BookOpen className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Awareness Sessions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Cybercrime types explained with real-world examples
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Case studies from local investigations
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Live phishing and fraud demonstrations
                </li>
              </ul>
            </div>

            {/* Digital Hygiene Workshops */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all">
              <Shield className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Digital Hygiene Workshops</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Safe browsing and social media practices
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Strong password creation techniques
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Advanced scam detection methods
                </li>
              </ul>
            </div>

            {/* Field Outreach */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all">
              <Users className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Field Outreach</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Schools, Colleges, RWAs, Offices, Public Places
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Interactive bilingual sessions (Hindi & English)
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Real-time Q&A with trained professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognized by law enforcement and trusted by the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <Award className="h-16 w-16 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">GPCSII Internship Recognition</h3>
              <p className="text-gray-300 mb-6">
                Received appreciation letter from <strong className="text-cyan-400">ACP Prayanshu Deewan Sir</strong> and 
                <strong className="text-cyan-400"> Rakshit Tandon Sir</strong> during our GPCSII internship. Selected from 1100+ students, 
                only a few received this prestigious recognition on stage.
              </p>
              <div className="bg-cyan-900/30 border border-cyan-700/50 rounded-lg p-4">
                <p className="text-cyan-300 font-semibold">🏆 Elite Recognition</p>
                <p className="text-gray-300 text-sm">Handpicked by Cyber Police leadership for outstanding performance</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-700/50">
                <h4 className="text-xl font-semibold text-white mb-2">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-cyan-400 mr-3" />
                    Handpicked by Cyber Police leadership
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-5 w-5 text-cyan-400 mr-3" />
                    Backed by real cases and technical knowledge
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-cyan-400 mr-3" />
                    Guided by experts, trained by professionals
                  </li>
                  <li className="flex items-center">
                                      <Globe className="h-5 w-5 text-cyan-400 mr-3" />
                  Building a Cyber Smart India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated cybersecurity professionals committed to building a safer digital future for our community
            </p>
            <div className="mt-4">
              <span className="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-700/50">
                {teamMembers.length} Team Members
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 cursor-pointer"
                onClick={() => handleMemberClick(member)}
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-cyan-500/30">
                    <img
                      src={member.imagePath}
                      alt={`${member.name} profile photo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log(`Failed to load image: ${member.imagePath}`);
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center hidden">
                      <div className="text-center">
                        <Users className="h-8 w-8 text-cyan-400" />
                        <p className="text-gray-300 text-sm mt-2">Profile</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold">{member.role}</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm line-clamp-3">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 2).map((skill, index) => (
                      <span key={index} className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-700/50">
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full">
                        +{member.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>Click to view full profile</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-4 rounded-xl border border-cyan-700/50 inline-block">
              <p className="text-gray-300 text-sm">
                Currently showing <span className="text-cyan-400 font-semibold">{teamMembers.length}</span> team members
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-700/50 inline-block">
              <h3 className="text-xl font-bold text-white mb-2">Our Commitment</h3>
              <p className="text-gray-300">
                Every team member brings unique expertise and dedication to our mission of creating a Cyber Smart India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Outreach Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact through community engagement and hands-on cybersecurity education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioSessions.map((session) => (
              <div 
                key={session.id} 
                className="bg-gray-800/80 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 cursor-pointer"
                onClick={() => handleSessionClick(session)}
              >
                <div className="h-48">
                  <ImageWithFallback
                    src={session.imagePath}
                    alt={`${session.title} session image`}
                    className="w-full h-full object-cover"
                    fallbackIcon={<Users className="h-12 w-12 text-cyan-400" />}
                    fallbackText={`Outreach Session #${session.id}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">{session.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{session.location} • {session.date}</p>
                  <p className="text-gray-300 text-sm mb-3">{session.shortDescription}</p>
                  <div className="flex items-center text-cyan-400 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>Click to view full details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 bg-gray-800/50 inline-block px-6 py-3 rounded-lg border border-gray-700">
              📸 Click on any session card to view detailed information and photos
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to make your community cyber-smart? Let's work together to build a safer digital future.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="h-6 w-6 text-cyan-400 mr-3" />
                      <span className="text-gray-300">TechCivix Cybersecurity</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-6 w-6 text-cyan-400 mr-3" />
                      <span className="text-gray-300">India</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-cyan-400 mr-3" />
                      <span className="text-gray-300">Community Outreach Program</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Schedule a Session</h3>
                  <p className="text-gray-300 mb-6">
                    Interested in organizing a cybersecurity awareness session for your organization? 
                    Contact us to schedule an interactive workshop tailored to your community's needs.
                  </p>
                  <button className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    Request Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TechCivix
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>Building a Cyber Smart India</p>
              <p className="text-sm mt-1">© 2024 TechCivix. Empowering digital citizens.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;