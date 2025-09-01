"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { NightSky } from "@/components/night-sky"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <NightSky />

      <nav className="fixed top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="#intro" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
              My Hobbies
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "#", label: "Home" },
                { href: "#", label: "About" },
                { href: "#", label: "Work" },
                { href: "#", label: "Blog" },
                { id: "intro", label: "Hobbies" },
                { href: "#", label: "Guestbook" },
                { href: "#", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href || `#${item.id}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "sailing", "coding", "politics"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-accent" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0 pt-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 w-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-accent font-mono tracking-wider">WELCOME TO MY WORLD</div>
                <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-balance">
                  Exploring Life Through
                  <br />
                  <span className="text-accent">Passion Projects</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-lg">
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Welcome to my personal space where I share my journey through
                  <span className="text-foreground"> sailing adventures</span>,
                  <span className="text-foreground"> coding experiments</span>, and
                  <span className="text-foreground"> political insights</span>.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    Always exploring
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <div className="text-sm text-accent font-mono">CURRENT PROJECTS</div>
                <div className="space-y-4">
                  <div className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h3 className="text-lg font-medium mb-2">Ocean Data Tracker</h3>
                    <p className="text-muted-foreground text-sm">
                      Combining my love for sailing with data visualization
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h3 className="text-lg font-medium mb-2">Policy Analysis Tool</h3>
                    <p className="text-muted-foreground text-sm">Making political data more accessible to everyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="sailing" ref={(el) => (sectionsRef.current[1] = el)} className="min-h-screen py-32 opacity-0">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-light text-balance">Sailing Adventures</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Finding freedom and perspective on the open water
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
                    <img
                      src="/sailing-yacht-on-open-ocean-at-sunset.png"
                      alt="Sailing at sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
                    <img
                      src="/sailboat-racing-with-crew-on-deck.png"
                      alt="Sailing race with crew"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    There's something magical about being out on the water, where the only sounds are the wind in the
                    sails and the gentle lapping of waves against the hull. Sailing has taught me patience, respect for
                    nature, and the importance of preparation and adaptability.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From weekend coastal cruises to longer offshore passages, each journey brings new challenges and
                    unforgettable moments. The ocean is both teacher and playground, demanding respect while offering
                    unparalleled beauty and tranquility.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[3/4] bg-card rounded-lg border border-border overflow-hidden">
                  <img
                    src="/sailor-adjusting-sails-on-sailboat-mast-view.png"
                    alt="Sailor working on mast"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-accent">Recent Adventures</h3>
                  <div className="space-y-3">
                    {[
                      { location: "San Francisco Bay", date: "Dec 2024", type: "Day Sail" },
                      { location: "Monterey Bay", date: "Nov 2024", type: "Weekend Trip" },
                      { location: "Channel Islands", date: "Oct 2024", type: "Week-long Cruise" },
                    ].map((trip, index) => (
                      <div key={index} className="p-4 bg-card border border-border rounded-lg">
                        <div className="font-medium">{trip.location}</div>
                        <div className="text-sm text-muted-foreground">
                          {trip.date} • {trip.type}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-accent">Certifications</h3>
                  <div className="space-y-2">
                    <div className="text-sm">ASA 101 - Basic Keelboat</div>
                    <div className="text-sm">ASA 103 - Basic Coastal Cruising</div>
                    <div className="text-sm">ASA 104 - Bareboat Cruising</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coding" ref={(el) => (sectionsRef.current[2] = el)} className="min-h-screen py-32 opacity-0">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-light text-balance">Coding & Technology</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Building digital solutions and exploring new technologies
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light">Current Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about creating tools that solve real problems and make life easier. Whether it's a
                    simple automation script or a complex web application, I love the process of turning ideas into
                    functional software.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-accent">Technologies I Love</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Tailwind CSS", "Vue.js", "HTML", "Daisy UI", "CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-card border border-border rounded-full hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Recent Projects</h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Coding Commons",
                        description: "A vibrant coding community platform connecting developers worldwide",
                        tech: ["Vue.js", "Python", "Tailwind CSS"],
                        status: "Active",
                        hasLogo: true,
                      },
                      {
                        name: "Personal Portfolio",
                        description: "My showcase built with modern web technologies and interactive animations",
                        tech: ["HTML", "CSS", "Three.js", "Vanta Waves"],
                        status: "Complete",
                        hasLogo: false,
                      },
                    ].map((project, index) => (
                      <div
                        key={index}
                        className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {project.hasLogo && (
                                <div className="w-8 h-8 bg-muted/50 rounded border border-border flex items-center justify-center text-xs text-muted-foreground">
                                  Logo
                                </div>
                              )}
                              <h4 className="font-medium">{project.name}</h4>
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                project.status === "Active"
                                  ? "bg-green-500/20 text-green-400"
                                  : project.status === "Complete"
                                    ? "bg-blue-500/20 text-blue-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <span key={tech} className="text-xs px-2 py-1 bg-muted/50 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="politics" ref={(el) => (sectionsRef.current[3] = el)} className="min-h-screen py-32 opacity-0">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-light text-balance">Political Engagement</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Staying informed through research, analysis, and thoughtful discourse
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    While I'm not actively involved in political campaigns or organizations, I maintain a keen interest
                    in understanding the political landscape through dedicated research and analysis. I stay informed by
                    following news developments, engaging with journalists, and consuming diverse perspectives through
                    debates and podcasts.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My approach focuses on understanding complex policy issues through data analysis and factual
                    research. I believe in the importance of being an informed citizen who can engage in meaningful
                    political discourse based on evidence and thorough understanding of the issues.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="font-medium mb-3 text-accent">Migration Policy</h4>
                    <p className="text-sm text-muted-foreground">
                      Researching one of the most influential factors in current UK politics, analyzing data and policy
                      impacts.
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="font-medium mb-3 text-accent">Military Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Studying military powers, defense budgets, and geopolitical implications through factual analysis.
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="font-medium mb-3 text-accent">Education System</h4>
                    <p className="text-sm text-muted-foreground">
                      Examining educational policies, outcomes, and reforms to understand their societal impact.
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="font-medium mb-3 text-accent">Public Transport</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyzing transportation infrastructure, policy decisions, and their effects on communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-accent">Current Research Focus</h3>
                  <div className="space-y-3">
                    {[
                      "UK Migration Policy Impact",
                      "Defense Budget Analysis",
                      "Education System Reform",
                      "Public Transport Infrastructure",
                      "Political Debate Analysis",
                    ].map((interest, index) => (
                      <div key={index} className="p-3 bg-card border border-border rounded text-sm">
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-accent">Information Sources</h3>
                  <div className="space-y-3">
                    {[
                      { source: "Political Podcasts", type: "Audio Analysis" },
                      { source: "Journalist Interviews", type: "Direct Engagement" },
                      { source: "Policy Debates", type: "Live Coverage" },
                      { source: "Research Papers", type: "Academic Sources" },
                    ].map((source, index) => (
                      <div key={index} className="p-3 bg-card border border-border rounded">
                        <div className="text-sm font-medium">{source.source}</div>
                        <div className="text-xs text-muted-foreground">{source.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-border relative z-10">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Thanks for exploring my hobbies with me. Feel free to reach out if you share any of these interests!
            </p>
            <div className="flex justify-center gap-6">
              <Link href="mailto:hello@example.com" className="text-accent hover:text-accent/80 transition-colors">
                Email
              </Link>
              <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                GitHub
              </Link>
              <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                LinkedIn
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 • Built with passion and curiosity</div>
          </div>
        </footer>
      </main>
    </div>
  )
}
