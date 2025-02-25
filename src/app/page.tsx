"use client"

import Link from "next/link"
import "tailwindcss/tailwind.css"
import { Globe2, Server, Mail, Code, Palette, Bot, ArrowUpRight, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DecryptedText from "./ui/decryptedtext"
import PixelCard from "./ui/pixelcard"
import Image from "next/image"
import RollingGallery from "./ui/rollinggallery"
export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const services = [
    {
      icon: <Palette className="h-8 w-8 text-orange-700" />,
      title: "Web Tools",
      description: "Creating intuitive and engaging user experiences",
    },
    {
      icon: <Code className="h-8 w-8 text-orange-700" />,
      title: "Design to Code",
      description: "Converting your designs into clean, efficient, and responsive code",
    },
    {
      icon: <Globe2 className="h-8 w-8 text-orange-700" />,
      title: "Domain & Hosting",
      description: "Secure domain registration and reliable hosting solutions for your digital presence",
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-700" />,
      title: "Email Services",
      description: "Professional email hosting and management for your business communications",
    },
   
    {
      icon: <Server className="h-8 w-8 text-orange-700" />,
      title: "Technical Support",
      description: "24/7 expert technical assistance for all your web-related needs",
    },
    {
      icon: <Bot className="h-8 w-8 text-orange-700" />,
      title: "AI Solutions",
      description: "Cutting-edge AI integration services for modern business needs",
    },
  ]

  const menuItems = [
    { title: "HOME", href: "/" },
    { title: "SERVICES", href: "#services" },
   
    { title: "CONTACT", href: "#contact" },
  ]

  return (
    <div
      className={`min-h-screen  transition-colors duration-300 ${isDark ? "dark bg-black text-white" : "bg-[#f8f8f8]"}`}
    >
      <header className=" fixed w-full top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-black/80">
        <div className="flex items-center max-w-7xl mx-auto justify-between p-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="flex space-x-2">
              <div className="h-2 w-2  rounded-full bg-orange-700"></div>
              <div className="h-2 w-2  rounded-full bg-orange-700"></div>
            </div>
            <span className="text-sm font-medium text-black dark:text-white">the UNTITLED co.</span>
          </motion.div>
          <div className="flex items-center space-x-6">
            <button className="text-sm hover:opacity-75 transition-opacity text-black dark:text-white" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href="mailto:hello@vedantmute.online" className="text-sm hover:underline text-black dark:text-white">
              CONTACT US
            </a>
            <button className="flex flex-col space-y-1 z-50 text-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 bg-current origin-center transition-transform"
              ></motion.span>
              <motion.span
                animate={isMenuOpen ? { rotate: -45 } : { rotate: 0 }}
                className="h-0.5 w-6 bg-current origin-center transition-transform"
              ></motion.span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black"
          >
            <div className="flex items-center justify-center h-full">
              <nav className="text-center text-black dark:text-white">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-4xl font-light my-9 hover:text-blue-600 hover:underline dark:hover:text-blue-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto relative pt-24">
        <section className="px-6 pt-12">
          {/* Gradient blob */}
          <div
            className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 opacity-50 blur-3xl dark:opacity-30"
            aria-hidden="true"
          />

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-7xl font-light leading-tight tracking-tight text-black dark:text-white"
            >
              <DecryptedText text="WE PROVIDE"/> <br />
              <DecryptedText text="BEST DIGITAL"/><br />
              <DecryptedText text="SERVICES"/>
              
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-24 flex justify-between"
            >
              <div className="max-w-md">
                <button className="relative px-8 py-3 rounded-full border-2 border-blck dark:border-current group overflow-hidden">
                  <a href="mailto:hello@vedantmute.online" className="relative z-10 text-black dark:text-white">wanna discuss ?</a>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 border border-current rounded-full opacity-50"
                  ></motion.div>
                  <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  
                </button>
                <p className="mt-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  WE ARE THE LEADERS IN WEB DEVELOPMENT
                  <br />
                  INDUSTRY WITH THOUSANDS OF USERBASE.
                </p>
              </div>

              <div className="flex items-end">
                <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-2 cursor-pointer">
                  <span className="text-sm text-black dark:text-white">WHO WE ARE</span>
                  <span className="h-px w-12 bg-current text-black dark:text-white"></span>
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-24 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400"
            >
              We create quality content and cool ideas. We create websites, applications, 3D design, motion design and
              animation. We bring the most daring ideas to life
            </motion.p>
          </div>
        </section>
        <section className="pt-16">
        <div className=" px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="p-6 rounded-lg  grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                        10+
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Projects
                    </p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                        2
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Years Experience
                    </p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                        3+
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Clients
                    </p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
                        98%
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Satisfaction
                    </p>
                </div>
            </div>
        </div>
    </section>
        {/* Services Section */}
        <section id="services" className="mt-16 px-6 py-20 ">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light mb-16 text-black dark:text-white"
            >
              OUR SERVICES
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
               
                    <div className=" p-6 group hover:shadow-lg transition-all duration-300 relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 dark:bg-black/50">
                      <div className="relative z-10">
                        <motion.div whileHover={{ scale: 1.1 }} className="mb-4 text-orange-900 dark:text-orange-400">
                          {service.icon}
                        </motion.div>
                        <h3 className="text-xl font-medium mb-2 text-black dark:text-white">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                        <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-gradient-to-br from-orange-600/5 to-blue-600/10 dark:from-blue-400/5 dark:to-blue-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                 
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="text-white py-20 px-6 dark:bg-black/90">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              
              
              <div className="flex flex-row justify-between">
            <span className="text-sm font-medium text-black dark:text-white flex items-center gap-4"><div className="flex space-x-2">
              <div className="h-2 w-2  rounded-full bg-orange-700"></div>
              <div className="h-2 w-2  rounded-full bg-orange-700"></div>
            </div>the UNTITLED co.</span>
                <Image src="https://github.com/Vedant-edu/Images/blob/main/the.png?raw=true" height={100} width={100} alt="Company Logo"/>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <p className="text-sm text-gray-400">© 2024. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="#" className="text-sm text-gray-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  )
}
