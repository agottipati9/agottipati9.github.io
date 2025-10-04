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
                Dynamic Pacing for Real-time Satellite Traffic
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Stabilizing satellite video calls by adapting WebRTC for LEO networks.
              </p>
              <div className="flex justify-center flex-wrap gap-4 mt-6">
                <a
                  href="https://arxiv.org/pdf/2507.09798"
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
                  src="/static/dynamic-pacing/architecture.png" 
                  alt="System Workflow Diagram" 
                  className="rounded-md object-contain max-h-[450px]"
                />
              </div>
              <p className="text-center text-sm text-slate-500 mt-4 italic">
                 Fig. 1: Our system's workflow: An initial policy is deployed to collect telemetry from user calls. This data is then clustered to build an "expert" policy, which a neural network is then trained to imitate prior to deployment.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4">Problem & Motivation</h3>
              <p>
                 Ever experienced frustrating freezes on a video call over satellite internet? While LEO constellations like Starlink are revolutionizing global connectivity, they create a challenging environment for real-time video. The constant, rapid movement of satellites and the frequent "handovers" between them cause sudden latency spikes and instability. Standard video conferencing tools, designed for stable terrestrial networks, use a rigid "one-size-fits-all" approach for sending data. This static method fails in space—either being too cautious and wasting bandwidth during stable periods or too aggressive during handovers, causing packet loss and a choppy user experience.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 mt-8">Our Approach & Contribution</h3>
              <p>
                 Our solution was to design a smarter, dynamic system that anticipates and adapts to the satellite network's behavior. Instead of a single static rule, we developed a <strong>handover-aware</strong> policy that adjusts how it sends video data based on predicted satellite handovers. Using a technique called offline imitation learning,  We trained a lightweight Transformer model to mimic an "expert" policy derived from thousands of video call logs. This allows the system to make intelligent decisions in near real-time: it minimizes latency when the connection is stable and prioritizes connection stability during turbulent handover periods.
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 border-l-4 border-blue-500 pl-4 mt-8">Results & Impact</h3>
              <p>
                This adaptive approach delivered dramatic improvements over the standard WebRTC configuration. In emulated satellite environments, the system achieved up to a <strong>3x boost in video bitrate</strong> while cutting the video freeze rate by up to <strong>62%</strong>. More importantly, on live Starlink connections, the policy reduced the freeze rate by up to <strong>41%</strong> and reduced the mean packet loss by <strong>40%</strong>, proving its effectiveness in a real-world setting. These results represent a step towards enabling smooth, high-quality video calls for the growing number of users on LEO satellite networks.
              </p>

              <div className="mt-8 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-100/80 border border-slate-200/80 rounded-lg p-4 flex flex-col items-center justify-center aspect-[4/3]">
                  <img 
                  src="/static/dynamic-pacing/bitrate.png" 
                  alt="Video Bitrate in Starlink" 
                  className="rounded-md object-contain max-h-[450px]"
                />
                  </div>
                  <div className="bg-slate-100/80 border border-slate-200/80 rounded-lg p-4 flex flex-col items-center justify-center aspect-[4/3]">
                  <img 
                  src="/static/dynamic-pacing/freeze.png" 
                  alt="Video Freeze Rate in Starlink" 
                  className="rounded-md object-contain max-h-[450px]"
                />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                  <p className="text-center text-sm text-slate-500 italic">
                      Fig. 2: Video bitrate performance in live Starlink environments, showing our approach ("Ours") maintains higher quality than the default ("Def") and other baselines.
                  </p>
                  <p className="text-center text-sm text-slate-500 italic">
                      Fig. 3: Our policy significantly reduces the rate of video freezes per minute compared to the default WebRTC policy on live Starlink networks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}