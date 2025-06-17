"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code,
  Palette,
  Monitor,
  Star,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  FileText,
  Award,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownloadCV = () => {
    // Create a blob with HTML content of the resume
    const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Purushotham V Mitti - Resume</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 5px;
    }
    .contact-info {
      text-align: center;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .section {
      margin-bottom: 20px;
    }
    h2 {
      border-bottom: 1px solid #333;
      padding-bottom: 5px;
    }
    .job {
      margin-bottom: 15px;
    }
    .job-title {
      font-weight: bold;
      margin-bottom: 5px;
    }
    .job-company {
      font-style: italic;
    }
    .job-period {
      color: #666;
      font-size: 14px;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skill {
      background: #f0f0f0;
      padding: 3px 8px;
      border-radius: 3px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <h1>Purushotham V Mitti</h1>
  <div class="contact-info">
    Bangalore, India | Phone: 8073366293 | Email: purushothamvmitti05@gmail.com<br>
    LinkedIn: linkedin.com/in/purushotham-v-mitti | GitHub: github.com/purushothamvmitti05
  </div>
  
  <div class="section">
    <h2>Professional Summary</h2>
    <p>Strategic and results-driven Computer Science and Design graduate with proven experience in Python development, backend automation, and full-stack web technologies. Skilled in building scalable, data-driven solutions using modern frameworks and tools. Adept at solving real-world problems through efficient code, optimized databases, and agile collaboration. Eager to contribute as a Software or Backend Engineer in innovative, impact-driven teams.</p>
  </div>
  
  <div class="section">
    <h2>Education</h2>
    <div class="job">
      <div class="job-title">Bachelor of Engineering in Computer Science and Design</div>
      <div class="job-company">K.S. Institute of Technology, Bangalore</div>
      <div class="job-period">2023 – 2025 | CGPA: 8.35</div>
    </div>
  </div>
  
  <div class="section">
    <h2>Technical Skills</h2>
    <div class="skills">
      <span class="skill">Python</span>
      <span class="skill">Java</span>
      <span class="skill">JavaScript</span>
      <span class="skill">HTML/CSS</span>
      <span class="skill">MSSQL</span>
      <span class="skill">SQL Automation</span>
      <span class="skill">Flask</span>
      <span class="skill">Machine Learning</span>
      <span class="skill">IoT</span>
      <span class="skill">Git</span>
      <span class="skill">Docker</span>
      <span class="skill">Linux</span>
      <span class="skill">Aveva Reports</span>
    </div>
  </div>
  
  <div class="section">
    <h2>Internship Experience</h2>
    <div class="job">
      <div class="job-title">Software Developer Intern – Python & Database Systems</div>
      <div class="job-company">Utthunga Technologies Pvt Ltd, Bangalore</div>
      <div class="job-period">February 2025 – May 2025</div>
      <ul>
        <li>Automated database operations and reporting using MSSQL and Aveva Reports, reducing manual tasks by 30%.</li>
        <li>Optimized stored procedures and complex queries, improving database response time by 25%.</li>
        <li>Designed database automation workflows, now extending unit testing with Python scripting for advanced data processing.</li>
      </ul>
    </div>
    
    <div class="job">
      <div class="job-title">Full Stack Web Development Intern</div>
      <div class="job-company">Varcons Technologies Pvt Ltd</div>
      <div class="job-period">April 2024 – May 2024</div>
      <ul>
        <li>Developed a Student Bus Pass System using PHP and SQL, cutting application processing time by 40% for 500+ students.</li>
        <li>Designed and built a fully responsive front-end using HTML, CSS, and JavaScript.</li>
        <li>Worked in an Agile team, delivering the project two weeks ahead of schedule.</li>
      </ul>
    </div>
    
    <div class="job">
      <div class="job-title">Python Programming Intern</div>
      <div class="job-company">YBI Foundation</div>
      <div class="job-period">August 2024 – October 2024</div>
      <ul>
        <li>Developed multiple Python scripts for data processing, automation, and analysis.</li>
        <li>Built real-time mini-projects using Python libraries such as NumPy, Pandas, and Matplotlib.</li>
        <li>Enhanced Python debugging and optimization skills through collaborative code reviews.</li>
      </ul>
    </div>
    
    <div class="job">
      <div class="job-title">IoT and Micro Python Intern</div>
      <div class="job-company">Cranes Varsity</div>
      <div class="job-period">October 2023 – December 2023</div>
      <ul>
        <li>Designed a Gas Leakage Detector using ESP32 and gas sensors with real-time SMS alert system.</li>
        <li>Developed a Classroom Automation System for remote device control via mobile app, improving energy efficiency.</li>
        <li>Configured MQTT protocol for reliable IoT device communication.</li>
      </ul>
    </div>
  </div>
  
  <div class="section">
    <h2>Projects</h2>
    <div class="job">
      <div class="job-title">Medico - Medical Guidance System</div>
      <p>ML-powered healthcare platform with disease prediction, medicine recommendations, and blood bank assistance using Random Forest algorithm.</p>
    </div>
    
    <div class="job">
      <div class="job-title">Animal Rescue Web Application</div>
      <p>Platform for uploading injured animal images, notifying nearby veterinary hospitals with QR-based donation system.</p>
    </div>
    
    <div class="job">
      <div class="job-title">Online Quiz Application</div>
      <p>Interactive quiz platform with admin panel, question management, and user tracking system.</p>
    </div>
  </div>
  
  <div class="section">
    <h2>Certifications</h2>
    <ul>
      <li>Full Stack Web Development – Varcons Technologies Pvt Ltd</li>
      <li>Python Programming – YBI Foundation</li>
      <li>Introduction to Cloud Computing – IBM</li>
      <li>Java Programming – Great Learning</li>
      <li>Industrial Robotics and Applications – GTTC-Siemens Center of Excellence</li>
      <li>AWS Glue for Data Engineers – In Progress (Udemy)</li>
    </ul>
  </div>
</body>
</html>
  `

    const blob = new Blob([resumeHTML], { type: "text/html" })
    const url = URL.createObjectURL(blob)

    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = url
    link.download = "Purushotham_V_Mitti_Resume.html"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(url), 100)
  }

  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "HTML/CSS",
    "MSSQL",
    "SQL Automation",
    "Flask",
    "Machine Learning",
    "IoT",
    "Git",
    "Docker",
    "Linux",
    "Aveva Reports",
  ]

  const projects = [
    {
      title: "Medico - Medical Guidance System",
      description:
        "ML-powered healthcare platform with disease prediction, medicine recommendations, and blood bank assistance using Random Forest algorithm",
      tech: ["Python", "Flask", "Machine Learning", "HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/purushothamvmitti05",
      live: "#",
      category: "Machine Learning",
    },
    {
      title: "Animal Rescue Web Application",
      description:
        "Platform for uploading injured animal images, notifying nearby veterinary hospitals with QR-based donation system",
      tech: ["HTML", "CSS", "JavaScript", "QR Integration"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/purushothamvmitti05",
      live: "#",
      category: "Web Development",
    },
    {
      title: "Orizon - Food Delivery System",
      description: "Online food ordering platform with menu browsing, order placement, and management system",
      tech: ["HTML", "CSS", "JavaScript", "MSSQL"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/purushothamvmitti05",
      live: "#",
      category: "Web Development",
    },
    {
      title: "Professional Portfolio",
      description:
        "Comprehensive online portfolio showcasing technical skills, projects, and achievements with interactive design",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/purushothamvmitti05",
      live: "https://purushothamvmitti05.github.io/",
      category: "Web Development",
    },
    {
      title: "MetaSpark - Healthcare UI",
      description: "Modern healthcare appointment booking interface designed in Figma with user-centric approach",
      tech: ["Figma", "UI/UX Design", "Prototyping"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      category: "UI Design",
    },
    {
      title: "Online Quiz Application",
      description: "Interactive quiz platform with admin panel, question management, and user tracking system",
      tech: ["Python", "HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/purushothamvmitti05",
      live: "https://v0-python-quiz-app-six.vercel.app/",
      category: "Applications",
    },
  ]

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Utthunga Technologies Pvt Ltd",
      period: "February 2025 – May 2025",
      description:
        "Automated database operations using MSSQL and Aveva Reports, reducing manual tasks by 30%. Optimized stored procedures improving response time by 25%.",
      skills: ["Python", "MSSQL", "Aveva Reports", "Database Automation"],
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Varcons Technologies Pvt Ltd",
      period: "April 2024 – May 2024",
      description:
        "Developed Student Bus Pass System using PHP and SQL, reducing processing time by 40% for 500+ students. Delivered project two weeks ahead of schedule.",
      skills: ["PHP", "SQL", "HTML", "CSS", "JavaScript", "Agile"],
    },
    {
      title: "Python Programming Intern",
      company: "YBI Foundation",
      period: "August 2024 – October 2024",
      description:
        "Developed Python scripts for data processing and automation. Built real-time projects using NumPy, Pandas, and Matplotlib.",
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Analysis"],
    },
    {
      title: "IoT and Micro Python Intern",
      company: "Cranes Varsity",
      period: "October 2023 – December 2023",
      description:
        "Designed Gas Leakage Detector using ESP32 and Classroom Automation System. Configured MQTT protocol for IoT communication.",
      skills: ["IoT", "ESP32", "MicroPython", "MQTT", "Sensors"],
    },
  ]

  const testimonials = [
    {
      name: "Rohit Patil",
      role: "Project Manager",
      content:
        "Purushotham was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of the client.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Dipti",
      role: "Business Owner",
      content:
        "Purushotham was hired to create a corporate identity. We were very pleased with the work done. Professional approach and excellent technical skills.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Web Design",
      description: "Modern and responsive web design with user-centric approach and professional aesthetics.",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web development using modern technologies and frameworks for scalable solutions.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions with Python, automation tools, and database optimization.",
    },
  ]

  const certifications = [
    "Full Stack Web Development – Varcons Technologies Pvt Ltd",
    "Python Programming – YBI Foundation",
    "Introduction to Cloud Computing – IBM",
    "Java Programming – Great Learning",
    "Industrial Robotics and Applications – GTTC-Siemens",
    "AWS Glue for Data Engineers – In Progress (Udemy)",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 lg:hidden bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Sidebar */}
        <AnimatePresence>
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className={`
              fixed lg:sticky top-0 left-0 h-screen w-80 bg-black/20 backdrop-blur-xl border-r border-white/10 p-6 z-40
              ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              transition-transform duration-300 ease-in-out overflow-y-auto
            `}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="relative"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-purple-500/50 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Purushotham V Mitti"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black animate-pulse" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Purushotham V Mitti
                </h1>
                <p className="text-gray-400 mt-2">Aspiring Developer</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full space-y-4 text-sm"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-xs">purushothamvmitti05@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">+91 8073866293</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">8 November, 2001</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Bengaluru, India</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-4"
              >
                <Button size="icon" variant="ghost" className="hover:bg-purple-500/20" asChild>
                  <a href="https://github.com/purushothamvmitti05" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-purple-500/20" asChild>
                  <a href="https://linkedin.com/in/purushotham-v-mitti" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-purple-500/20">
                  <Twitter className="w-5 h-5" />
                </Button>
              </motion.div>

              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={handleDownloadCV}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </motion.aside>
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-0 z-30 bg-black/20 backdrop-blur-xl border-b border-white/10 p-4"
          >
            <div className="flex justify-center">
              <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full max-w-2xl">
                <TabsList className="grid w-full grid-cols-5 bg-white/5 backdrop-blur-sm">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="resume">Resume</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="blog">Blog</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.nav>

          <div className="p-6 lg:p-12">
            <Tabs value={activeSection} onValueChange={setActiveSection}>
              {/* About Section */}
              <TabsContent value="about" className="space-y-12">
                <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
                  <motion.div variants={fadeInUp}>
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      About Me
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        I'm Purushotham V Mitti, a passionate and results-driven Computer Science and Design student
                        from Bangalore, India. With hands-on experience in Full Stack Web Development, IoT, and UI/UX
                        Design, I specialize in building scalable and user-centric solutions. My technical expertise
                        spans Python, Java, JavaScript, MSSQL, and web technologies, along with a keen interest in the
                        intersection of design and development.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed mt-4">
                        As a strategic and results-driven developer, I have proven experience in Python development,
                        backend automation, and full-stack web technologies. I'm skilled in building scalable,
                        data-driven solutions using modern frameworks and tools, with a focus on solving real-world
                        problems through efficient code, optimized databases, and agile collaboration.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-6">What I'm Doing</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="group"
                        >
                          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                              </div>
                              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                              <p className="text-gray-400">{service.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-6">Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 px-4 py-2"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-center mb-4">
                                <Image
                                  src={testimonial.avatar || "/placeholder.svg"}
                                  alt={testimonial.name}
                                  width={50}
                                  height={50}
                                  className="rounded-full mr-4"
                                />
                                <div>
                                  <h4 className="font-semibold">{testimonial.name}</h4>
                                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                              </div>
                              <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <p className="text-gray-300">{testimonial.content}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>

              {/* Resume Section */}
              <TabsContent value="resume" className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Resume
                  </h2>

                  {/* Professional Summary */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                      <CardContent className="p-6">
                        <p className="text-gray-300 leading-relaxed">
                          Strategic and results-driven Computer Science and Design graduate with proven experience in
                          Python development, backend automation, and full-stack web technologies. Skilled in building
                          scalable, data-driven solutions using modern frameworks and tools. Adept at solving real-world
                          problems through efficient code, optimized databases, and agile collaboration. Eager to
                          contribute as a Software or Backend Engineer in innovative, impact-driven teams.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Education</h3>
                      <div className="space-y-6">
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                          <CardContent className="p-6">
                            <h4 className="text-xl font-semibold">Bachelor of Engineering</h4>
                            <p className="text-purple-400">Computer Science and Design</p>
                            <p className="text-gray-400">K.S. Institute of Technology, Bangalore</p>
                            <p className="text-gray-400">2023 – 2025 | CGPA: 8.35</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                      <div className="space-y-3">
                        {certifications.map((cert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                              <CardContent className="p-4">
                                <div className="flex items-center">
                                  <Award className="w-5 h-5 text-purple-400 mr-3" />
                                  <p className="text-gray-300 text-sm">{cert}</p>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-6">Experience</h3>
                    <div className="space-y-6">
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                            <CardContent className="p-6">
                              <h4 className="text-xl font-semibold">{exp.title}</h4>
                              <p className="text-purple-400">{exp.company}</p>
                              <p className="text-gray-400 mb-3">{exp.period}</p>
                              <p className="text-gray-300 mb-4">{exp.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, skillIndex) => (
                                  <Badge key={skillIndex} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Portfolio Section */}
              <TabsContent value="portfolio" className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Portfolio
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="group"
                      >
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                          <div className="relative overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                              <Button size="icon" variant="secondary" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4" />
                                </a>
                              </Button>
                              {project.live !== "#" && (
                                <Button size="icon" variant="secondary" asChild>
                                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                </Button>
                              )}
                            </div>
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="bg-purple-500/80 text-white">
                                {project.category}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Blog Section */}
              <TabsContent value="blog" className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Blog & Publications
                  </h2>

                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="bg-purple-500/20 p-3 rounded-lg">
                          <FileText className="w-8 h-8 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">
                            MEDICO: SPECIALIZED MEDICINE GUIDANCE & BLOOD BANK ASSISTANCE
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                            <span>
                              Published in International Research Journal of Modernization in Engineering Technology and
                              Science
                            </span>
                            <Badge variant="outline">Research Paper</Badge>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                            <span>Volume: 07/Issue: 04/April-2025</span>
                            <span>Impact Factor: 8.187</span>
                            <span>e-ISSN: 2582-5208</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-purple-400">Authors</h4>
                          <p>
                            Dhanush BK, Kusum Pakira, <strong>Purushotham V Mitti</strong>, Mamatha C
                          </p>
                          <p className="text-sm text-gray-400">
                            Department of Computer Science & Design, K S Institute of Technology, Bengaluru, Karnataka,
                            India
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-purple-400">Abstract</h4>
                          <p className="leading-relaxed">
                            This paper introduces Medico, a unique digital platform crafted to offer thorough guidance
                            on medicine and support for blood banks, making healthcare more accessible with its
                            organized and user-friendly design. It allows users to delve into medicine suggestions
                            tailored to specific medical conditions while providing precise information about drugs,
                            including dosages and safety tips, to help them make informed choices. Plus, there's a
                            dedicated section for blood bank assistance, making it easier to find essential information.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-purple-400">Key Features</h4>
                          <ul className="list-disc list-inside space-y-2">
                            <li>Machine Learning-powered disease prediction using Random Forest algorithm</li>
                            <li>Comprehensive medicine recommendation system</li>
                            <li>Blood bank assistance with real-time availability tracking</li>
                            <li>User-friendly interface with responsive design</li>
                            <li>Secure data handling and privacy protection</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-purple-400">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Python",
                              "Flask",
                              "Machine Learning",
                              "Random Forest",
                              "HTML",
                              "CSS",
                              "JavaScript",
                              "SQLite",
                            ].map((tech, index) => (
                              <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                          <p className="text-sm text-gray-400">
                            DOI: <span className="text-purple-400">https://www.doi.org/10.56726/IRJMETS72284</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center py-8">
                    <p className="text-gray-400 text-lg mb-4">More blog posts and publications coming soon...</p>
                    <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                      <BookOpen className="w-4 h-4 mr-2" />
                      View All Publications
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Contact Section */}
              <TabsContent value="contact" className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Contact
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Mail className="w-6 h-6 text-purple-400" />
                          <span>purushothamvmitti05@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Phone className="w-6 h-6 text-purple-400" />
                          <span>+91 8073866293</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <MapPin className="w-6 h-6 text-purple-400" />
                          <span>Bengaluru, India</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Github className="w-6 h-6 text-purple-400" />
                          <a
                            href="https://github.com/purushothamvmitti05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300"
                          >
                            github.com/purushothamvmitti05
                          </a>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Linkedin className="w-6 h-6 text-purple-400" />
                          <a
                            href="https://linkedin.com/in/purushotham-v-mitti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300"
                          >
                            linkedin.com/in/purushotham-v-mitti
                          </a>
                        </div>
                      </div>
                    </div>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                      <CardContent className="p-6">
                        <form className="space-y-4">
                          <div>
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                            />
                          </div>
                          <div>
                            <input
                              type="email"
                              placeholder="Your Email"
                              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                            />
                          </div>
                          <div>
                            <textarea
                              placeholder="Your Message"
                              rows={4}
                              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                            />
                          </div>
                          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
