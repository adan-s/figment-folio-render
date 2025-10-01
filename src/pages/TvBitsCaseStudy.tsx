import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import tvBitsGlow1 from "../assets/tv-bits-glow-1.png";
import tvBitsGlow2 from "../assets/tv-bits-glow-2.png";
import tvBitCase1 from "../assets/tv-bits-case-1.png";
import tvBitCaseIcon1 from "../assets/tv-bits-case-icon-1.png";
import tvBitsProblemImg1 from "../assets/tv-bits-case-problem-statement-img-1.svg";
import tvBitsProblemImg2 from "../assets/tv-bits-case-problem-statement-img-2.svg";
import tvBitsProblemImg3 from "../assets/tv-bits-case-problem-statement-img-3.svg";
import tvBitsGoalsImg1 from "../assets/tv-bits-case-goals.svg";
import tvBitsResearchImg1 from "../assets/tv-bits-case-insights.svg";
import tvBitsUserFlowImg1 from "../assets/tv-bits-case-user-flow.svg";

export default function TvBitsCaseStudy() {
  return (
    <div className="bg-black text-white font-sans relative min-h-screen">
      {/* Top Left Glow */}
      <div
        className="fixed top-0 left-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <img
          src={tvBitsGlow1}
          alt=""
          className="w-[400px] h-auto opacity-90"
          style={{ transform: "translate(-50px, -50px)" }}
        />
      </div>

      {/* Top Right Glow */}
      <div
        className="fixed top-0 right-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <img
          src={tvBitsGlow2}
          alt=""
          className="w-[400px] h-auto opacity-90"
          style={{ transform: "translate(50px, -50px)" }}
        />
      </div>

      <div className="relative" style={{ zIndex: 10 }}>
        <Navigation />
        <div className="mt-24 max-w-6xl mx-auto px-4">
          {/* Header */}
          <header className="text-center py-8">
            <h2 className="text-red-500 uppercase font-extrabold tracking-widest text-3xl">
              TV Bits
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold my-2">
              Design That Performs
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              TV Bits was a unique and challenging project I worked on for Wurl
              which is a leading company in connected TV and content
              distribution. The core idea was to deliver bite-sized,
              TikTok-style video ads within streaming environments. My role was
              to design an immersive, platform-consistent experience across TV
              apps, web interfaces, and mobile screens.
            </p>
          </header>

          {/* Tags */}
          <section className="flex flex-col md:flex-row justify-center gap-6 px-4">
            <div
              className="px-6 py-2 rounded-full backdrop-blur-lg bg-opacity-20 border border-white/20 w-full md:w-auto md:min-w-[120px] text-center"
              style={{ backgroundColor: "#330C0C" }}
            >
              <p className="text-white">TV Design</p>
            </div>
            <div
              className="px-6 py-2 rounded-full backdrop-blur-lg bg-opacity-40 border border-white/20 w-full md:w-auto md:min-w-[120px] text-center"
              style={{ backgroundColor: "#330C0C" }}
            >
              <p className="text-white">Web Design</p>
            </div>
            <div
              className="px-6 py-2 rounded-full backdrop-blur-lg bg-opacity-20 border border-white/20 w-full md:w-auto md:min-w-[120px] text-center"
              style={{ backgroundColor: "#330C0C" }}
            >
              <p className="text-white">Mobile Design</p>
            </div>
          </section>

          {/* Created for company WURL */}
          <section>
            <h2 className="text-center font-normal mt-4 text-white">
              ⚡Created for company WURL
            </h2>
          </section>

          {/* Hero Images */}
          <section className="flex justify-center items-center py-8 px-4">
            <img
              src={tvBitCase1}
              alt="TV Bits"
              className="max-w-4xl w-full h-auto rounded-lg"
            />
          </section>

          <div
            className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit mx-auto"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="flex items-center gap-2">
              <img src={tvBitCaseIcon1} alt="TV Bits" className="w-5 h-5" />
              <p className="text-white text-sm">Requirement</p>
            </div>
          </div>
          {/* Problem Statement */}
          <section className="text-center py-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold my-2">
              Problem Statement
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              This wasn't a typical single platform design. had to design and
              decide experience for three very different environments
            </p>
            <ul
              className="text-gray-300 max-w-2xl mx-auto space-y-2 font-bold list-disc list-inside"
              style={{ listStyleType: "disc", color: "#ea580c" }}
            >
              <li>
                <span className="text-orange-600">TV:</span>{" "}
                <span className="text-white">
                  Limited input (remote navigation), large screens, lean-back
                  behavior
                </span>
              </li>
              <li>
                <span className="text-orange-600">Web:</span>{" "}
                <span className="text-white">
                  Interactive, scroll-driven UX
                </span>
              </li>
              <li>
                <span className="text-orange-600">Mobile:</span>{" "}
                <span className="text-white">
                  Gesture-based, fast-paced, attention-driven interactions
                </span>
              </li>
            </ul>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-8">
            {/* TV Design */}
            <div className="relative group">
              <img
                src={tvBitsProblemImg1}
                alt="TV Design"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"></div>
              <div className="absolute top-2 right-4 px-3 py-1 rounded-full backdrop-blur-lg border border-white/20 bg-transparent">
                <p className="text-white text-sm font-semibold">TV Design</p>
              </div>
            </div>

            {/* Mobile Design */}
            <div className="relative group">
              <img
                src={tvBitsProblemImg2}
                alt="Mobile Design"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full backdrop-blur-lg border border-white/20 bg-transparent">
                <p className="text-white text-sm font-semibold">
                  Mobile Design
                </p>
              </div>
            </div>

            {/* Web Design */}
            <div className="relative group">
              <img
                src={tvBitsProblemImg3}
                alt="Web Design"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full backdrop-blur-lg border border-white/20 bg-transparent">
                <p className="text-white text-sm font-semibold">Web Design</p>
              </div>
            </div>
          </section>

          {/* Goals & Objectives */}
          <section>
            {/* Goals Button Header */}

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Image Column */}
              <div className="flex justify-center items-center">
                <img
                  src={tvBitsGoalsImg1}
                  alt="Goals & Objectives"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>

              {/* Goals Text Column */}
              <div className="flex flex-col justify-center pt-4">
                <div className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit bg-transparent">
                  <div className="flex items-center gap-2">
                    <img src={tvBitCaseIcon1} alt="Goals" className="w-5 h-5" />
                    <p className="text-white text-sm">Goals</p>
                  </div>
                </div>

                <h2 className="text-xl mt-3 font-semibold text-white mb-4">
                  Goals & Objectives
                </h2>
                <p className="text-gray-300 mb-3 text-sm">
                  As the sole UI/UX designer on the project, my goals were to:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm list-none">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Create a consistent but platform-adaptive design system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Ensure the video-first experience felt engaging across all
                      screen sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Optimize user interaction flows for each device's input
                      model (remote, mouse, touch)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Strike a balance between ad visibility and user engagement
                      — without disrupting entertainment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Research & Insights */}
          <section className="py-10 mt-8 p-4">
            {/* Research & Insights Button Header */}

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Research & Insights Text Column */}
              <div className="flex flex-col justify-center pt-4">
                <div className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit bg-transparent">
                  <div className="flex items-center gap-2">
                    <img src={tvBitCaseIcon1} alt="Goals" className="w-5 h-5" />
                    <p className="text-white text-sm">Research & Insights</p>
                  </div>
                </div>

                <h2 className="text-xl mt-3 font-semibold text-white mb-4">
                  Research & Insights
                </h2>
                <p className="text-gray-300 mb-3 text-sm">
                  Before jumping into visuals, I analyzed the UX patterns of:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm mb-6 list-disc list-inside font-bold">
                  <li>
                    TikTok, Instagram Reels, YouTube Shorts (for interaction
                    pacing and content flow)
                  </li>
                  <li>
                    Roku and Apple TV interfaces (for remote control navigation
                    and UI legibility on TVs)
                  </li>
                  <li>
                    Web video players and OTT platforms (for ad behavior and
                    engagement techniques)
                  </li>
                </ul>

                <p className="text-gray-300 mb-3 text-sm">
                  From this, I developed three core principles to guide the
                  experience design:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside font-bold">
                  <li>
                    Immersive by Default – Video should always be the focal
                    point
                  </li>
                  <li>
                    Quick Interaction – Minimal distractions, with fast,
                    intuitive controls
                  </li>
                  <li>
                    Content-aware Layouts – UI adapts to screen type and
                    interaction method
                  </li>
                </ul>
              </div>
              {/* Image Column */}
              <div className="flex justify-center items-center">
                <img
                  src={tvBitsResearchImg1}
                  alt="Goals & Objectives"
                  className="max-w-full h-80 rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* User Flow */}
          <section className="py-16 px-6">
            <div className="flex flex-col justify-center pt-4">
              <div className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit bg-transparent">
                <div className="flex items-center gap-2">
                  <img src={tvBitCaseIcon1} alt="Goals" className="w-5 h-5" />
                  <p className="text-white text-sm">User Flow</p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-white mt-4">
              Initial User Flow
            </h2>
            <img
              src={tvBitsUserFlowImg1}
              alt="User Flow Diagram"
              className="w-full rounded-lg shadow-lg mt-6"
            />
          </section>

          {/* Persona */}
          <section className="bg-gray-900 py-16 px-6">
            <h2 className="text-2xl font-semibold text-pink-500">
              User Persona
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold">Persona A</h3>
                <p className="text-gray-300 mt-2">
                  Loves movies, streams daily, values easy navigation and quick
                  access to content.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold">Persona B</h3>
                <p className="text-gray-300 mt-2">
                  Occasional user, prefers recommendations, and minimal
                  interaction for content discovery.
                </p>
              </div>
            </div>
          </section>

          {/* Branding & Design System */}
          <section className="py-16 px-6">
            <h2 className="text-2xl font-semibold text-pink-500">
              Branding & Design System
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Colors</h3>
                <div className="flex gap-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500"></div>
                  <div className="w-10 h-10 rounded-full bg-purple-500"></div>
                  <div className="w-10 h-10 rounded-full bg-orange-500"></div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Typography</h3>
                <p className="text-gray-300 mt-2">Heading: Bold Sans</p>
                <p className="text-gray-300">Body: Regular Sans</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="bg-gray-900 py-16 px-6">
            <h2 className="text-2xl font-semibold text-pink-500">
              How it works for TV Navigation
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold">Step 1</h3>
                <p className="text-gray-300 mt-2">
                  User browses categories using remote navigation.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold">Step 2</h3>
                <p className="text-gray-300 mt-2">
                  Content preview loads with recommendations.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold">Step 3</h3>
                <p className="text-gray-300 mt-2">
                  User selects and plays desired content seamlessly.
                </p>
              </div>
            </div>
          </section>

          {/* Final Reflection */}
          <section className="py-16 px-6">
            <h2 className="text-2xl font-semibold text-pink-500">
              Final Reflection
            </h2>
            <p className="text-gray-300 mt-4">
              Designing for TV navigation required balancing simplicity and
              engagement. The key takeaway was creating a scalable design system
              that works across devices while remaining accessible.
            </p>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 py-12 text-center">
            <p className="text-gray-400 mb-4">
              Thanks for watching till the end 🚀
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-pink-500 px-6 py-2 rounded-lg hover:bg-pink-600">
                Get in Touch
              </button>
              <button className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-700">
                View More
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
