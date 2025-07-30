import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const CyberSecurityShield: React.FC = () => {
  return (
    <div className="fixed top-1/2 right-8 transform -translate-y-1/2 pointer-events-none z-20 hidden lg:block">
      {/* Main Shield Container */}
      <div className="relative">
        {/* Scanning Ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-dashed border-cyan-400/30 rounded-full animate-spin-slow"></div>
        
        {/* Outer Protection Ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse-slow"></div>
        
        {/* Main Shield */}
        <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full border-2 border-cyan-400/40 backdrop-blur-sm flex items-center justify-center animate-float">
          {/* Shield Icon */}
          <Shield className="w-12 h-12 text-cyan-400 animate-shield" />
          
          {/* Scanning Line */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
          </div>
        </div>
        
        {/* Security Status Indicators */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center animate-pulse-slow">
          <CheckCircle className="w-3 h-3 text-green-400" />
        </div>
        
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400/20 rounded-full flex items-center justify-center animate-pulse-slow">
          <Lock className="w-3 h-3 text-blue-400" />
        </div>
        
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400/20 rounded-full flex items-center justify-center animate-pulse-slow">
          <Eye className="w-3 h-3 text-purple-400" />
        </div>
        
        {/* Threat Detection */}
        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-5 h-5 bg-red-400/20 rounded-full flex items-center justify-center animate-pulse-slow">
          <AlertTriangle className="w-2.5 h-2.5 text-red-400" />
        </div>
        
        {/* Data Flow Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-float"
              style={{
                left: `${12 + Math.sin(i * 1) * 20}px`,
                top: `${12 + Math.cos(i * 1) * 20}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Awareness Pulse */}
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-cyan-400/5 animate-pulse-slow"></div>
        
        {/* Protection Aura */}
        <div className="absolute inset-0 w-24 h-24 rounded-full border border-cyan-400/10 animate-glow"></div>
      </div>
      
      {/* Status Text */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center">
        <div className="bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-400/30">
          <span className="text-cyan-400 text-xs font-medium">SECURE</span>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityShield; 