import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  Palette,
  Coffee,
  Target,
  Heart,
  DatabaseZap,
  FileCode2,
} from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "JavaScript", level: 95, icon: Code, color: "bg-yellow-500" }, // JS Yellow
    { name: "React", level: 90, icon: Globe, color: "bg-cyan-500" }, // React Cyan
    { name: "Next.js", level: 90, icon: FileCode2, color: "bg-gray-400" }, // Next.js Dark Gray
    { name: "Node.js", level: 85, icon: Database, color: "bg-green-600" }, // Node Green
    { name: "Shopify", level: 88, icon: Smartphone, color: "bg-emerald-500" }, // Shopify Greenish
    { name: "MongoDB", level: 80, icon: Database, color: "bg-teal-500" }, // Mongo Teal
    { name: "Express", level: 85, icon: Zap, color: "bg-orange-500" }, // Express Orange
    { name: "SQL", level: 80, icon: DatabaseZap, color: "bg-indigo-500" }, // SQL Indigo
  ];

  const values = [
    {
      icon: Coffee,
      title: "Passionate Coder",
      description:
        "I live and breathe code. Every project is a chance to learn something new and push boundaries.",
    },
    {
      icon: Target,
      title: "Client-Focused",
      description:
        "Your success is my success. I'm committed to delivering solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Quality First",
      description:
        "Clean, maintainable code isn't just a preference—it's a promise I make to every project.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Hi there! I'm Shivan 👋
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer who loves creating digital
                experiences that make a difference. With expertise in modern web
                technologies and a keen eye for design, I bring ideas to life
                through clean, efficient code.
              </p>
              <p>
                My journey started with curiosity about how websites work, and
                it evolved into a deep passion for building scalable
                applications. I specialize in React, Node.js, and Shopify
                development, helping businesses establish their digital
                presence.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                creating content, or collaborating with fellow developers. I
                believe in continuous learning and sharing knowledge with the
                community.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-blue-500/20 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <h4 className="text-white font-semibold mb-3">
                    Also experienced with:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "TypeScript",
                      "Python",
                      "Java",
                      "AWS",
                      "Docker",
                      "Tailwind CSS",
                      "Sass",
                      "Git & GitHub",
                      "REST API",
                      "WebSockets",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
