import React from 'react';
import { ArrowLeft, Users, Calendar, MapPin, CheckCircle, MessageCircle, Image as ImageIcon } from 'lucide-react';
import { PortfolioSession } from '../data/portfolioData';
import ImageWithFallback from './ImageWithFallback';

interface SessionDetailProps {
  session: PortfolioSession;
  onBack: () => void;
}

const SessionDetail: React.FC<SessionDetailProps> = ({ session, onBack }) => {
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
            Back to Portfolio
          </button>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {session.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-300">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-cyan-400 mr-2" />
              <span>{session.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-cyan-400 mr-2" />
              <span>{session.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-cyan-400 mr-2" />
              <span>{session.fullDetails.participants}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl overflow-hidden border border-gray-700">
              <div className="h-64 md:h-80">
                <ImageWithFallback
                  src={session.imagePath}
                  alt={`${session.title} session image`}
                  className="w-full h-full object-cover"
                  fallbackIcon={<ImageIcon className="h-16 w-16 text-cyan-400" />}
                  fallbackText="Session Image"
                />
              </div>
            </div>

            {/* Overview */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Session Overview</h2>
              <p className="text-gray-300 leading-relaxed">{session.fullDetails.overview}</p>
            </div>

            {/* Key Topics */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Key Topics Covered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {session.fullDetails.keyTopics.map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Session Outcomes</h2>
              <div className="space-y-3">
                {session.fullDetails.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {session.fullDetails.testimonials && session.fullDetails.testimonials.length > 0 && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                  <MessageCircle className="h-6 w-6 text-cyan-400 mr-2" />
                  Participant Testimonials
                </h2>
                <div className="space-y-4">
                  {session.fullDetails.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-cyan-400">
                      <p className="text-gray-300 italic">"{testimonial}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Images */}
            {session.fullDetails.images && session.fullDetails.images.length > 0 && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Session Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {session.fullDetails.images.map((imagePath, index) => (
                    <div key={index} className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg p-4 border border-gray-700">
                      <div className="h-32 rounded overflow-hidden">
                        <ImageWithFallback
                          src={imagePath}
                          alt={`${session.title} gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                          fallbackIcon={<ImageIcon className="h-8 w-8 text-cyan-400" />}
                          fallbackText={`Image ${index + 1}`}
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-2 truncate">{imagePath}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Info Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Session Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">{session.location}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-white font-medium">{session.date}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Participants</p>
                  <p className="text-white font-medium">{session.fullDetails.participants}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-700/50">
              <h3 className="text-xl font-bold mb-4 text-white">Session Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">{session.fullDetails.keyTopics.length} Topics Covered</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-300">{session.fullDetails.outcomes.length} Key Outcomes</span>
                </div>
                {session.fullDetails.testimonials && (
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{session.fullDetails.testimonials.length} Testimonials</span>
                  </div>
                )}
                {session.fullDetails.images && (
                  <div className="flex items-center">
                    <ImageIcon className="h-5 w-5 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{session.fullDetails.images.length} Gallery Images</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Interested in Similar Sessions?</h3>
              <p className="text-gray-300 mb-4">
                Want to organize a cybersecurity awareness session for your organization?
              </p>
              <button className="w-full bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Request Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetail; 