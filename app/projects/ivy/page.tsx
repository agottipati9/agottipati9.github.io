"use client";

import React, { useState, ReactNode } from 'react';
import { ArrowLeft, FileText, PlayCircle, X } from 'lucide-react';


const Link: React.FC<{ href: string; children: ReactNode; className?: string }> = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

export default function ProjectPage() {
  // State to manage the visibility of the video modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
              Offline Meta-learning for Real-time Bandwidth Estimation
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Using offline learning to dynamically select the best algorithm in real-time.
              </p>
              <div className="flex justify-center flex-wrap gap-4 mt-6">
                <a
                  href="https://arxiv.org/pdf/2409.19867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-semibold shadow-md"
                >
                  <FileText className="h-5 w-5" />
                  <span>Read Paper</span>
                </a>
                <a
                  href="https://github.com/agottipati9/Ivy-Bandwidth-Estimation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 font-semibold shadow-md"
                  >
                  <FileText className="h-5 w-5" />
                  <span>View Code</span>
                </a>
                {/* Changed from <a> to <button> to trigger the modal */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 font-semibold shadow-md"
                >
                  <PlayCircle className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            <div className="mb-10">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 flex justify-center">
                <img 
                  src="/static/ivy/ivy_stack.png" 
                  alt="Ivy's Network Architecture Diagram" 
                  className="rounded-md object-contain max-h-[250px]"
                />
              </div>
              <p className="text-center text-sm text-slate-500 mt-4 italic">
                 Fig. 1: Ivy&apos;s simple architecture: A lightweight neural network takes in real-time network data and selects the optimal bandwidth estimation (BWE) algorithm to use.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">Problem & Motivation</h3>
              <p>
                Video call quality can be frustratingly inconsistent because network conditions change constantly—a phenomenon known as &quot;data drift&quot;. A single bandwidth estimation (BWE) algorithm that works perfectly on a stable home WiFi might fail miserably on a fluctuating 5G connection. The industry&apos;s standard solution—periodically retraining a single model—is inefficient and often leads to &quot;catastrophic forgetting,&quot; where improving performance for new conditions degrades performance for old ones. Furthermore, trying to learn new strategies during live calls is impractical, as it can actively harm the user&apos;s experience.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 mt-8">Our Approach & Contribution</h3>
              <p>
                Instead of searching for a single &quot;one-size-fits-all&quot; solution, we developed <strong>Ivy</strong>, a &quot;metapolicy&quot; that acts like an orchestrator for BWE algorithms. Ivy&apos;s job is not to estimate bandwidth itself, but to dynamically select the best-specialized algorithm for the immediate network conditions. We used a technique called <strong>offline meta-learning</strong>, training Ivy on a fixed dataset of video call telemetry without any live network interaction. Critically, Ivy is optimized directly for user <strong>Quality of Experience (QoE)</strong>—a measure of perceived call quality—rather than just raw network metrics, which don&apos;t always correlate with a better experience.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 mt-8">Results & Impact</h3>
              <p>
                Implemented in Microsoft Teams, Ivy demonstrated significant real-world benefits. It improved video MOS (QoE) by <strong>5.9% to 11.2%</strong> compared to using any single BWE algorithm on its own. Its main value is preventing catastrophic failures; by intelligently switching algorithms, Ivy avoids the conditions that challenge any single algorithm, preventing quality drops that would otherwise occur. It also outperformed existing online selection methods in QoE by up to <strong>11.4%</strong>. Lastly, Ivy proved to be far more data-efficient than traditional online learning, delivering up to <strong>28% better QoE</strong> while using the same amount of training data.
              </p>
              
              <div className="mt-12 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  <div className="flex flex-col">
                    <div className="bg-slate-100/80 border border-slate-200/80 rounded-lg p-4 flex items-center justify-center h-60">
                      <img 
                        src="/static/ivy/baselines.PNG" 
                        alt="Ivy's performance compared to baselines" 
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-3 italic">
                      Fig. 2: Ivy&apos;s performance compared to online QoS-based heuristics in high bandwidth networks. It succeeds by prioritizing user experience (QoE) over network metrics (QoS).
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-slate-100/80 border border-slate-200/80 rounded-lg p-4 flex items-center justify-center h-60">
                      <img 
                        src="/static/ivy/offline_vs_online.png" 
                        alt="Offline vs Online Learning Data Efficiency" 
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-3 italic">
                      Fig. 3: Ivy&apos;s offline learning approach is far more data-efficient, achieving ~28% higher QoE than online models trained on the same 1000 call logs.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditionally rendered video modal */}
            {isModalOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={closeModal} // Close modal by clicking the background
              >
                <div 
                  className="relative bg-white p-2 rounded-xl shadow-2xl max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside it
                >
                  {/* Close (X) button */}
                  <button
                    onClick={closeModal}
                    className="absolute -top-3 -right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-110 transition-all z-10 shadow-md"
                    aria-label="Close video player"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <div className="aspect-w-16 aspect-h-9">
                    <video 
                      src="/static/ivy/demo.mp4" 
                      controls 
                      autoPlay 
                      className="w-full h-full rounded-lg"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            )}
    </main>
  );
}