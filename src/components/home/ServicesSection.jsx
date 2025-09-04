import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { 
  Code2, 
  ShoppingBag, 
  Zap, 
  Smartphone, 
  Database, 
  Palette,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Complete web applications built with React, Node.js, Express, and MongoDB. From concept to deployment.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Third-party Integrations"],
      color: "from-blue-500 to-cyan-500",
      price: ""
    },
    {
      icon: ShoppingBag,
      title: "Shopify Development",
      description: "Custom Shopify stores that convert visitors into customers. Theme customization and app integration.",
      features: ["Custom Theme Development", "Store Setup & Configuration", "Payment Gateway Integration", "Performance Optimization"],
      color: "from-green-500 to-emerald-500",
      price: ""
    },
    {
      icon: Zap,
      title: "Freelance & Consulting",
      description: "Quick turnaround projects and technical consulting. Perfect for urgent fixes and expert guidance.",
      features: ["Bug Fixes & Improvements", "Code Reviews", "Technical Consulting", "Performance Audits"],
      color: "from-purple-500 to-pink-500",
      price: ""
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What I <span className="text-gradient">Do</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I help businesses and individuals bring their digital ideas to life with 
            cutting-edge web technologies and thoughtful design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-effect border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20 flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-center mb-6">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    <Button 
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300`}
                      onClick={scrollToContact}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect border-blue-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need something custom?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Every project is unique. I offer flexible pricing and custom solutions 
              tailored to your specific needs. Let's discuss your project and find 
              the perfect approach that fits your budget and timeline.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Mobile-First</h4>
                <p className="text-gray-400 text-sm">All projects are built responsive and mobile-optimized</p>
              </div>
              <div className="text-center">
                <Database className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Scalable</h4>
                <p className="text-gray-400 text-sm">Built to grow with your business needs</p>
              </div>
              <div className="text-center">
                <Palette className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Custom Design</h4>
                <p className="text-gray-400 text-sm">Unique designs that reflect your brand</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}