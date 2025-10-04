"use client";

import React from 'react';
import { ArrowLeft, FileText, PlayCircle } from 'lucide-react';

const Link = ({ href, children, ...props }) => <a href={href} {...props}>{children}</a>;

export default function ProjectPage() {
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
              Offline to Online Learning for Real-Time Bandwidth Estimation
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Combining the wisdom of expert-designed algorithms with the adaptability of deep learning to enhance quality of experience.
              </p>
              <div className="flex justify-center flex-wrap gap-4 mt-6">
                <a
                  href="https://arxiv.org/pdf/2309.13481" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-semibold shadow-md"
                >
                  <FileText className="h-5 w-5" />
                  <span>Read Paper</span>
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 rounded-lg text-slate-500 font-semibold cursor-not-allowed opacity-60"
                  aria-disabled="true"
                >
                  <PlayCircle className="h-5 w-5" />
                  <span>Demo Coming Soon</span>
                </a>
              </div>
            </div>

            <div className="mb-10">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 flex justify-center">
                <img 
                  src="/static/merlin/merlin_stack.png" 
                  alt="Merlin's integration into a real-time communication media stack" 
                  className="rounded-md object-contain max-h-[250px]"
                />
              </div>
              <p className="text-center text-sm text-slate-500 mt-4 italic">
                 Fig. 1: Merlin&apos;s integration into a real-time communication (RTC) stack. It processes network state information to predict available bandwidth, which then guides the video codec&apos;s bitrate.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">Problem & Motivation</h3>
              <p>
                Delivering consistently high-quality video calls is a major challenge because network conditions are incredibly diverse and constantly changing. Traditional <strong>heuristic-based</strong> algorithms, like those in WebRTC, are robust but rigid; manually tuning their many parameters for each user&apos;s unique environment is practically impossible. On the other hand, modern <strong>Reinforcement Learning (RL)</strong> approaches can adapt, but they learn from scratch. This &quot;trial-and-error&quot; process is extremely inefficient, requiring hundreds of thousands of live calls to converge, which is too slow and risky for real-world user experience.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 mt-8">Our Approach & Contribution</h3>
              <p>
                We introduce <strong>Merlin</strong>, a system that achieves the best of both worlds. Instead of building an algorithm from scratch, we transform a battle-tested, expert-designed heuristic (an Unscented Kalman Filter from Microsoft Teams) into a neural network. We use a technique called <strong>Behavioral Cloning</strong>, which allows Merlin to learn the heuristic&apos;s sophisticated policy entirely from offline telemetry logs, with zero live network interaction during initial training. This cloned neural network captures years of domain expertise. The key innovation is that this policy can then be efficiently <strong>fine-tuned</strong> on a small amount of live data to personalize it for a user&apos;s specific network, avoiding the manual process of tuning network parameters.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 mt-8">Results & Impact</h3>
              <p>
                Merlin successfully generalized from offline simulations to the real world, matching the performance of the original heuristic in live, intercontinental video calls with no statistical difference in user Quality of Experience (QoE). By fine-tuning on just 75 calls, Merlin improved user QoE by up to <strong>7.8%</strong> compared to the baseline heuristic, demonstrating effective personalization. The most significant result is its efficiency: Merlin converges to a high-quality policy using <strong>80% fewer</strong> video calls than state-of-the-art online RL methods, making continuous end-user personalization a practical reality.
              </p>
              
              <div className="mt-12 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  <div className="flex flex-col">
                    <div className="bg-slate-100/80 border border-slate-200/80 rounded-lg p-4 flex items-center justify-center h-60">
                      <img 
                        src="/static/merlin/ft_vs_pt.PNG" 
                        alt="Chart showing QoE improvement after finetuning Merlin" 
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-3 italic">
                      Fig. 2: Personalization in action. After fine-tuning on specific network types (Low and High Bandwidth), Merlin significantly improves QoE by up to 7.8% over the original heuristic policy.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-slate-100/80 border border-slate-200/80 rounded-lg p-4 flex items-center justify-center h-60">
                      <img 
                        src="/static/merlin/merlin_vs_online.PNG" 
                        alt="Chart comparing data efficiency of online vs offline learning" 
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-3 italic">
                      Fig. 3: Merlin&apos;s approach is far more sample-efficient. Online RL models require ~50,000 calls to converge, whereas Merlin achieves a high-quality policy with a fraction of the live data, thanks to offline pretraining.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}