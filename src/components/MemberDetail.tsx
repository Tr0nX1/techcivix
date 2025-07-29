import React from 'react';
import { ArrowLeft, Linkedin, Github, Mail, Award, Users, BookOpen, Shield, Globe } from 'lucide-react';
import { TeamMember } from '../data/membersData';
import ImageWithFallback from './ImageWithFallback';

interface MemberDetailProps {
  member: TeamMember;
  onBack: () => void;
}

const MemberDetail: React.FC<MemberDetailProps> = ({ member, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Team
          </button>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/30">
              <ImageWithFallback
                src={member.imagePath}
                alt={`${member.name} profile photo`}
                className="w-full h-full object-cover"
                fallbackIcon={<Users className="h-12 w-12 text-cyan-400" />}
                fallbackText="Profile Photo"
              />
            </div>
            
            {/* Member Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {member.name}
              </h1>
              <p className="text-xl text-cyan-400 font-semibold mt-2">{member.role}</p>
              
              {/* Social Links */}
              {member.socialLinks && (
                <div className="flex items-center gap-4 mt-4">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a
                      href={`mailto:${member.socialLinks.email}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Email
                    </a>
                  )}
                  {member.socialLinks.website && (
                    <a
                      href={member.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      Website
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">About {member.name}</h2>
              <p className="text-gray-300 leading-relaxed">{member.bio}</p>
            </div>

            {/* Expertise */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Shield className="h-6 w-6 text-cyan-400 mr-2" />
                Areas of Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {member.expertise.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Award className="h-6 w-6 text-cyan-400 mr-2" />
                Key Achievements
              </h2>
              <div className="space-y-4">
                {member.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-cyan-400">
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-700/50">
              <h3 className="text-xl font-bold mb-4 text-white">Member Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">{member.expertise.length} Areas of Expertise</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">{member.achievements.length} Key Achievements</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">Active Team Member</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-4">
                Interested in collaborating with {member.name} or learning more about their expertise?
              </p>
              <button className="w-full bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Contact {member.name.split(' ')[0]}
              </button>
            </div>

            {/* Team Contribution */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Team Contribution</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">Cybersecurity Training</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">Community Outreach</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">Digital Safety Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail; 