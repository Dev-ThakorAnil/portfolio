import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowDown, Github, Mail, Download, Code2, Zap, Palette } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen p-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute px-4 inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div 
            className="w-32 h-32 mx-auto mb-8 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-blue-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I'm <span className="text-gradient">Shivanexe</span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="flex items-center space-x-3">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span>Full Stack Developer</span>
              <span className="text-blue-400">•</span>
              <Zap className="w-6 h-6 text-purple-400" />
              <span>Creator</span>
              <span className="text-blue-400">•</span>
              <Palette className="w-6 h-6 text-cyan-400" />
              <span>Freelancer</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Turning ideas into reality with elegant design, clean code, and modern technology.
            crafting digital experiences that are fast, scalable, and impactful.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('#portfolio')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Hire Me
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { icon: Github, href: "https://github.com/Shivanexe", color: "hover:text-gray-300" },
              { icon: Mail, href:"iamshivan.exe@gmail.com", color: "hover:text-blue-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-gray-500 ${social.color} transition-colors duration-300 p-3 rounded-full hover:bg-white/5`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <button 
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}