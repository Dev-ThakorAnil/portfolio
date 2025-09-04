import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Code2, Github, Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./components/ui/button";

export default function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: "Home", href: createPageUrl("Home"), section: "#home" },
    { name: "About", href: "#about", section: "#about" },
    { name: "Portfolio", href: "#portfolio", section: "#portfolio" },
    { name: "Services", href: "#services", section: "#services" },
    { name: "Contact", href: "#contact", section: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <style>{`
        :root {
          --primary: #0f172a;
          --primary-foreground: #f8fafc;
          --secondary: #1e293b;
          --accent: #3b82f6;
          --accent-bright: #60a5fa;
          --muted: #64748b;
          --border: #334155;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .glass-effect {
          backdrop-filter: blur(12px);
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .nav-blur {
          backdrop-filter: blur(16px);
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Shivanexe</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.section}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.section);
                  }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.section}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.section);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20 md:pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">shivan.exe</span>
              </div>
              <p className="text-gray-400 text-sm">
                Full Stack Developer & Creator building amazing digital experiences.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.section}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.section);
                    }}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Shivanexe/" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@shivanexe" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/shivanexe" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shivanexe" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/shivanexe" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shivanexe. Crafted with ❤️ and lots of coffee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
