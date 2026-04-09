/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Megaphone,
  CalendarDays,
  Network,
  Users,
  Satellite,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Film,
  RadioTower,
  Rocket,
  Handshake,
  Quote,
  CheckCircle2,
  MonitorPlay,
  Share2,
  Settings,
  Video
} from 'lucide-react';

const services = [
  {
    title: 'Advertisement',
    icon: Megaphone,
    description: 'Strategic ad placements and creative campaigns designed to maximize your reach and ROI across multiple media platforms.',
    details: 'Leverage our extensive network to place your brand in front of the right audience. We handle everything from media planning to execution.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Events',
    icon: CalendarDays,
    description: 'End-to-end event management, from conceptualization to flawless execution for corporate and entertainment sectors.',
    details: 'Create unforgettable experiences with our comprehensive event solutions, including stage design, lighting, sound, and live broadcasting.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Channel Distribution',
    icon: Network,
    description: 'Expanding your viewership through robust satellite, cable, and digital network distribution strategies.',
    details: 'Ensure your content reaches millions globally with our secure and reliable channel distribution networks and partnerships.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Broadcast Manpower',
    icon: Users,
    description: 'Providing highly skilled professionals and technical crews for all your broadcasting and production needs.',
    details: 'Access our pool of experienced directors, camera operators, sound engineers, and production staff for your next big project.',
    image: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=2071&auto=format&fit=crop'
  },
  {
    title: 'Satellite & Digital Setup',
    icon: Satellite,
    description: 'State-of-the-art infrastructure setup, consulting, and deployment for seamless broadcasting operations.',
    details: 'From satellite uplinks to digital streaming setups, we provide the technical backbone required for modern media delivery.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  }
];

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Advertisement',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, submit logic would go here
    alert('Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      service: 'Advertisement',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1Nw49o-tG33rNr77OQtkGqL8l1UeVb2xv" 
              alt="Company Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            <a href="#contact" className="bg-orange-500 text-zinc-950 px-5 py-2.5 rounded-full font-bold hover:bg-orange-400 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1FnHNxV--HItuveFPlb0OKdFIm0JUyc00" 
            alt="SN Vision Media Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-500 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Broadcasting Excellence
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8"
            >
              WE AMPLIFY <br />
              <span className="text-orange-500">
                YOUR VISION
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-zinc-400 max-w-2xl mb-12 font-light"
            >
              We specialize in delivering creative, result-driven advertising solutions that help businesses reach the right audience at the right time. From digital marketing and social media promotions to TV, cable, and outdoor advertising, we provide end-to-end services tailored to your business needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#services" className="bg-orange-500 text-zinc-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-colors flex items-center gap-2 group inline-flex">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#clients" className="px-8 py-4 rounded-full font-bold text-lg border border-zinc-700 hover:border-orange-500 hover:text-orange-500 transition-colors inline-block text-center">
                Our Clients
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-orange-500/30 text-orange-500 text-sm font-bold tracking-wide uppercase mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              About SN Vision Media
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight mb-8 text-white">
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Impactful</span> Media Solutions
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed text-left md:text-center">
              <p>
                SN Vision Media is a recognized industry leader with over <strong className="text-white">20+ years of experience</strong> in television broadcasting, channel distribution, and digital media solutions, delivering high-performance, end-to-end services across the evolving media landscape.
              </p>
              <p>
                With deep expertise in satellite broadcasting, cable network ecosystems, and digital platforms, we specialize in building scalable media infrastructures and ensuring seamless content delivery across MSOs, LCO networks, IPTV, and OTT platforms.
              </p>
              <p>
                Our core strengths extend beyond traditional broadcasting into large-scale television event production and high-impact digital marketing campaigns, enabling brands and broadcasters to achieve maximum visibility and audience engagement.
              </p>
            </div>
          </motion.div>

          {/* Key Expertise */}
          <div className="mb-24">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-10 flex items-center gap-4"
            >
              <span className="text-4xl">🎯</span> Our Key Expertise Includes:
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Television Event Production at Scale",
                  desc: "Planning and executing large-format TV events, live shows, corporate broadcasts, and special programming with end-to-end technical coordination, multi-camera setups, and real-time broadcast workflows.",
                  icon: MonitorPlay
                },
                {
                  title: "Channel Distribution & Network Expansion",
                  desc: "Strategic placement and distribution across satellite, cable, and digital ecosystems, ensuring maximum reach and consistent signal delivery.",
                  icon: Network
                },
                {
                  title: "Broadcast Engineering & Playout Operations",
                  desc: "End-to-end management of uplink/downlink coordination, playout systems, automation, and transmission workflows.",
                  icon: Settings
                },
                {
                  title: "Digital Marketing & Social Media Campaigns",
                  desc: "Designing and executing data-driven campaigns across platforms like Instagram, YouTube, Facebook, and OTT ecosystems, focused on audience targeting, engagement, and brand growth.",
                  icon: Share2
                },
                {
                  title: "Content Production & Media Strategy",
                  desc: "Creation of high-quality TV content, commercials, branded content, and promotional assets aligned with market trends and viewer behavior.",
                  icon: Video
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 p-8 rounded-3xl hover:border-orange-500/30 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Edge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 flex items-center gap-4">
                <span className="text-4xl">🚀</span> Our Edge
              </h3>
              <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed">
                By combining technical expertise in broadcasting with strategic strength in digital marketing, SN Vision Media delivers a powerful hybrid approach that helps clients:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Maximize audience reach across TV & digital",
                  "Execute high-impact campaigns and events",
                  "Build strong brand visibility",
                  "Ensure reliable and scalable media operations"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 bg-zinc-950/50 border border-zinc-800/50 p-6 rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-white font-medium text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-orange-500/30 text-orange-500 text-sm font-bold tracking-wide uppercase mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Our Expertise
              </motion.div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6 text-white">
                SPECIALIZED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-lg">SERVICES</span>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                Comprehensive media solutions tailored to elevate your broadcasting and operational capabilities. We deliver <span className="text-orange-400 font-medium">excellence</span> across every touchpoint.
              </p>
            </div>
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex items-center gap-3 text-white font-bold bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-orange-500 hover:bg-orange-500/10 px-8 py-4 rounded-full transition-all duration-300 group shadow-xl"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-orange-500/50 transition-all duration-700 flex flex-col min-h-[420px] shadow-2xl hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:-translate-y-2 ${
                  index < 2 ? 'lg:col-span-3 md:col-span-2' : 'lg:col-span-2 md:col-span-1'
                }`}
              >
                {/* Cinematic Image Background (Fades in on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
                </div>
                
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative">
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-orange-500/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative w-16 h-16 rounded-2xl bg-zinc-800/80 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500/50 group-hover:bg-orange-500/20 transition-all duration-500 text-orange-500 shadow-xl">
                        <service.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-orange-500 shadow-xl">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="mt-auto transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-zinc-100 group-hover:text-white transition-colors duration-300 drop-shadow-md">{service.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Reveal on Hover Details */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <div className="pt-6 mt-2 border-t border-white/10">
                        <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                          {service.details}
                        </p>
                        <button className="flex items-center gap-2 text-sm font-bold text-zinc-950 bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-400 hover:scale-105 transition-all w-max shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee/Banner Section */}
      <section className="py-12 bg-orange-500 overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="text-4xl font-display font-black text-zinc-950 uppercase tracking-wider">One Point Solution</span>
              <span className="text-zinc-950">✦</span>
              <span className="text-4xl font-display font-black text-zinc-950 uppercase tracking-wider">SN Vision Media</span>
              <span className="text-zinc-950">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-orange-500/30 text-orange-500 text-sm font-bold tracking-wide uppercase mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Trusted Partners
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight mb-8 text-white max-w-4xl leading-tight">
              Trusted by Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Tamil Television & Media Networks</span>
            </h2>
            <div className="text-zinc-400 text-lg max-w-3xl space-y-6 font-light">
              <p>
                Over the past 20+ years, SN Vision Media has collaborated with a wide range of Tamil entertainment and news channels, supporting them across distribution, events, manpower, and broadcast operations.
              </p>
              <p>
                We have worked alongside some of the most recognized names in the industry, contributing to their reach expansion, content delivery, and operational excellence.
              </p>
            </div>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "https://lh3.googleusercontent.com/d/1729tx_J4KPAbVmZBqklJmInpC5DNWDQJ",
              "https://lh3.googleusercontent.com/d/1K8RoDjoMgt4ySTaYIL7HI05dHw_kyM64",
              "https://lh3.googleusercontent.com/d/1AvdlZX0csaealvaGC63JuPft-CZ-Pfd9",
              "https://lh3.googleusercontent.com/d/1iQGpsRpx7-6QOOPsILTScFhPeRGFy9f1",
              "https://lh3.googleusercontent.com/d/122bIaFoxOx31ysaYiRYiM0lnlgxOsO0i",
              "https://lh3.googleusercontent.com/d/1Z6UyJs88DnI8_XJsMThdZqQpCxYFVEOy"
            ].map((logo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-8 flex items-center justify-center aspect-video hover:border-orange-500/30 hover:bg-zinc-800/50 transition-all group shadow-lg"
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${i + 1}`} 
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6">
                LET'S BUILD <br />
                <span className="text-orange-500">TOGETHER</span>
              </h2>
              <p className="text-zinc-400 mb-12 max-w-md">
                Ready to elevate your media presence? Get in touch with our team of experts to discuss your next big project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">Email Us</p>
                    <p className="text-lg font-medium">info@snvisionmedia.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">Call Us (E. Nirmal)</p>
                    <p className="text-lg font-medium">+91 99623 18186</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">Visit Us</p>
                    <p className="text-lg font-medium leading-snug">
                      H3, Cherry Blossom, Eden Avenue<br />
                      A.P.J. Abdul Kalam Street, Ayanambakkam<br />
                      Chennai - 600 095
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-zinc-950 border ${errors.firstName ? 'border-red-500' : 'border-zinc-800'} rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`} 
                      placeholder="John" 
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950 border ${errors.email ? 'border-red-500' : 'border-zinc-800'} rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`} 
                    placeholder="john@example.com" 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-zinc-300 appearance-none"
                  >
                    <option>Advertisement</option>
                    <option>Events</option>
                    <option>Channel Distribution</option>
                    <option>Broadcast Manpower</option>
                    <option>Satellite Setup</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-zinc-950 border ${errors.message ? 'border-red-500' : 'border-zinc-800'} rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none`} 
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-orange-500 text-zinc-950 font-bold text-lg py-4 rounded-xl hover:bg-orange-400 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="flex items-center opacity-80"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1Nw49o-tG33rNr77OQtkGqL8l1UeVb2xv" 
              alt="Company Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-zinc-600 text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} SN Vision Media. All rights reserved.
          </motion.p>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="flex gap-4 text-zinc-600"
          >
            <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
          </motion.div>
        </motion.div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919962318186"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}
