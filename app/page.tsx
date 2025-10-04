"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, FileText, GraduationCap, BrainCircuit, Waypoints, Bot, ChevronLeft, ChevronRight, Link as LinkIcon } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = React.useState('research');
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const images = [
    '/static/dogs/dogs1.PNG?text==Dex+Leia',
    '/static/dogs/dogs2.PNG?text==Dex',
    '/static/dogs/dogs3.PNG?text==Leia',
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
        const scrollAmount = sliderRef.current.offsetWidth;
        sliderRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
        const scrollAmount = sliderRef.current.offsetWidth * index;
        sliderRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
        const index = Math.round(slider.scrollLeft / slider.offsetWidth);
        setCurrentSlide(index);
    };

    let debounceTimer;
    const debouncedScrollHandler = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(handleScroll, 150);
    };

    slider.addEventListener('scroll', debouncedScrollHandler);
    return () => slider.removeEventListener('scroll', debouncedScrollHandler);
  }, []);

  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex items-center gap-8 p-8 md:p-12">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20"></div>
                <img
                  className="relative h-48 w-48 md:h-56 md:w-56 object-cover rounded-full mx-auto border-4 border-white shadow-xl"
                  src="/static/portrait.PNG"
                  alt="Aashish Gottipati"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full mb-3">
                <span className="text-sm font-semibold text-blue-700">PhD Student</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                Aashish Gottipati
              </h1>
              <p className="text-lg md:text-xl text-blue-600 font-medium mb-4">
                University of Texas at Austin
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl">
                Fourth-year PhD student advised by Lili Qiu, specializing in applying reinforcement learning to build networked systems that continuously learn and adapt to the real world.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:agottipati@utexas.edu"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">Email</span>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=fGbLPkAAAAAJ&hl=en&oi=ao"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700"
                  aria-label="Google Scholar"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-sm font-medium">Scholar</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/aashish-gottipati-705aa717a"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="./static/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
                  aria-label="Download CV"
                >
                  <FileText className="h-5 w-5" />
                  <span className="text-sm font-medium">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8 p-1">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('research')}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'research'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-gray-100'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'about'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-gray-100'
              }`}
            >
              About
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'research' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* RL for Systems Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <Waypoints className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">RL for Systems</h3>
                    <p className="text-emerald-50 text-sm">Optimizing systems through RL</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <ProjectItem
                    title="Dynamic Pacing for Real-time Satellite Traffic"
                    paperLink="https://arxiv.org/pdf/2507.09798"
                    projectLink="/projects/dynamic-pacing"
                    venue="In review"
                  />
                  <ProjectItem
                    title="Offline Meta-learning for Real-time Bandwidth Estimation"
                    paperLink="https://arxiv.org/pdf/2409.19867"
                    projectLink="/projects/ivy"
                    venue="In review"
                  />
                  <ProjectItem
                    title="Offline to Online Learning for Real-Time Bandwidth Estimation"
                    paperLink="https://arxiv.org/pdf/2309.13481"
                    projectLink="/projects/merlin"
                    venue="ICC '25"
                  />
                </div>
              </div>
            </div>

            {/* LLMs for Systems Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <BrainCircuit className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">LLMs for Systems</h3>
                    <p className="text-blue-50 text-sm">Automating system design with LLMs</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <ProjectItem
                    title="Congestion Control System Optimization with Large Language Models"
                    paperLink="https://arxiv.org/pdf/2508.16074"
                    venue="In review"
                  />
                  <ProjectItem
                    title="Designing Adaptive Bitrate Algorithms via Large Language Models"
                    paperLink="https://dl.acm.org/doi/pdf/10.1145/3696348.3696868"
                    venue="HotNets '24"
                  />
                </div>
              </div>
            </div>

            {/* Robotics Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <Bot className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Robotics</h3>
                    <p className="text-purple-50 text-sm">TBD</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                </div>
              </div>
            </div>
          </div>
        )}
{activeTab === 'about' && (
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group">
                <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-lg shadow-inner" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-full snap-center">
                      <img src={src} alt={`About me ${index + 1}`} className="w-full h-[450px] object-cover rounded-lg" />
                    </div>
                  ))}
                </div>
                <button
                    onClick={() => scrollSlider(-1)}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/60 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-6 w-6 text-slate-800" />
                </button>
                <button
                    onClick={() => scrollSlider(1)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/60 hover:bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-6 w-6 text-slate-800" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-6 bg-white' : 'w-3 bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Beyond the serious stuff
                </h3>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                  My interests are pretty simple: I like to read, stay active, and hangout with my dogs, Dex and Leia. And if I had to rank them, they&apos;d win every time!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function ProjectItem({ title, paperLink, projectLink, venue}) {
  return (
    <div className="border-l-4 border-slate-200 pl-4 hover:border-blue-500 transition-colors">
      <h4 className="font-semibold text-slate-800 leading-snug mb-3 text-base">{title} {venue && <span className="ml-2 font-normal italic text-slate-500">{venue}</span>}
      </h4>
      <div className="flex flex-wrap gap-2">
        {paperLink && (
          <a
            href={paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-xs font-medium text-slate-700 transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            Paper
          </a>
        )}
        {projectLink && (
          <Link
            href={projectLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 rounded-md text-xs font-medium text-blue-700 transition-colors"
          >
            <LinkIcon className="h-3.5 w-3.5" />
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

