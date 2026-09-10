export interface Activity {
  id: string;
  missionNumber: string;
  title: string;
  date: string;
  category: string;
  status: 'COMPLETED' | 'ACTIVE' | 'ARCHIVED';
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  highlights: string[];
  gallery: string[];
  metrics: {
    participants: number;
    hours: number;
    projects: number;
  };
}

export const activitiesData: Activity[] = [
  {
    id: 'm-01',
    missionNumber: 'MISSION 001',
    title: 'AI WORKSHOP // NEURAL SYNAPSE',
    date: 'OCTOBER 14, 2026',
    category: 'ARTIFICIAL INTELLIGENCE',
    status: 'COMPLETED',
    shortDescription: 'Deep architectural exploration of modern autonomous agents, neural latent spaces, and real-time computer vision pipelines.',
    fullDescription: 'An intensive, 3-day deep immersion into deep learning architectures, transformer dynamics, and localized generative pipelines. Cadets and senior engineers constructed custom transformer models capable of real-time synthetic data augmentation and automated code synthesis under extreme latency constraints.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Constructed localized diffusion transformers capable of sub-50ms inference on consumer hardware',
      'Engineered multi-agent collaboration protocols for automated vulnerability discovery',
      'Over 140 student researchers and aspiring engineers participated across 18 breakout squads',
      'Keynote session with frontier autonomous systems architects'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop'
    ],
    metrics: {
      participants: 142,
      hours: 36,
      projects: 24
    }
  },
  {
    id: 'm-02',
    missionNumber: 'MISSION 002',
    title: 'DESIGN SPRINT // HOLOGRAPHIC UX',
    date: 'NOVEMBER 04, 2026',
    category: 'DESIGN SYSTEMS',
    status: 'COMPLETED',
    shortDescription: 'Rapid 48-hour prototyping marathon transforming raw scientific telemetry into immersive, spatial heads-up visual interfaces.',
    fullDescription: 'Spatial interfaces represent the new frontier of interaction design. Mission 002 mobilized 28 multidisciplinary teams to draft next-generation human-machine interfaces (HMI), spatial glass shaders, and ultra-high-density data dashboards tailored for aerospace and autonomous robotics command centers.',
    coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Pioneered 3D gesture-driven HUD components operating on low-latency WebGL shaders',
      'Authored the ASTHRA Titanium Design System: a high-contrast dark aesthetic spec for telemetry',
      'Mentorship by principal interface designers from top creative tech studios',
      'Live user testing with over 300 telemetry stress scenarios'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop'
    ],
    metrics: {
      participants: 110,
      hours: 48,
      projects: 19
    }
  },
  {
    id: 'm-03',
    missionNumber: 'MISSION 003',
    title: 'HACKATHON // PROJECT TITAN',
    date: 'DECEMBER 02, 2026',
    category: 'HACKATHON',
    status: 'COMPLETED',
    shortDescription: '36-hour non-stop engineering deployment producing production-grade prototypes solving planetary resilience and security challenges.',
    fullDescription: 'The flagship annual engineering trial of ASTHRA. 40 squads locked into the central auditorium for 36 continuous hours of code synthesis, hardware assembly, and distributed system orchestration. Solutions spanned satellite telemetry routers, decentralized identity tokens, and autonomous micro-rover pathfinders.',
    coverImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Deployed 34 live cloud endpoints during the final countdown review',
      'Physical hardware lab setup with 3D printers, oscilloscope benches, and embedded micro-controllers',
      '$15,000 equivalent in student seed grants and cloud computational credits awarded',
      'Final live demo showcase evaluated by a panel of venture technologists'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop'
    ],
    metrics: {
      participants: 220,
      hours: 36,
      projects: 38
    }
  },
  {
    id: 'm-04',
    missionNumber: 'MISSION 004',
    title: 'TECH TALK // QUANTUM HORIZONS',
    date: 'JANUARY 18, 2027',
    category: 'TECH TALK',
    status: 'COMPLETED',
    shortDescription: 'Classified deep dive into post-quantum cryptography, q-bit fault tolerance, and the future of secure computational networks.',
    fullDescription: 'A premier intellectual seminar hosted inside the main ASTHRA amphitheater. Esteemed research scientists and quantum computation fellows delivered technical breakdowns of lattice-based cryptography, Shor algorithm countermeasures, and cryogenic qubit stabilization protocols.',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Technical breakdown of NIST Post-Quantum Cryptographic Standards (Kyber & Dilithium)',
      'Live demonstration of quantum circuit simulation via Qiskit and cloud-linked cryo-nodes',
      'Interactive fireside Q&A addressing quantum decryption timelines and defense strategy',
      'Classified briefing pack distributed to all registered operatives'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop'
    ],
    metrics: {
      participants: 185,
      hours: 6,
      projects: 4
    }
  },
  {
    id: 'm-05',
    missionNumber: 'MISSION 005',
    title: 'INNOVATION MEETUP // NEXUS FOUNDRY',
    date: 'FEBRUARY 08, 2027',
    category: 'INNOVATION MEETUP',
    status: 'COMPLETED',
    shortDescription: 'High-frequency cross-pollination event connecting student founders, hardware hackers, and visionary mentors across divisions.',
    fullDescription: 'Nexus Foundry broke down department silos. Software engineers, industrial product designers, and electrical specialists converged to present alpha prototypes, pitch moonshot initiatives, and form cross-functional squads for upcoming international tech competitions.',
    coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      '12 student research spinoff prototypes unveiled in open showcase booths',
      'Speed-mentoring rounds with senior industry software architects and venture builders',
      'Formation of 8 new specialized research divisions within the ASTHRA ecosystem',
      'Live lightning demonstrations of student-built hardware synthesizers and vision models'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop'
    ],
    metrics: {
      participants: 160,
      hours: 8,
      projects: 12
    }
  },
  {
    id: 'm-06',
    missionNumber: 'MISSION 006',
    title: 'CODING CHALLENGE // APEX ALGORITHM',
    date: 'FEBRUARY 24, 2027',
    category: 'CODING CHALLENGE',
    status: 'COMPLETED',
    shortDescription: 'High-octane algorithmic combat testing memory optimization, graph theory, and real-time concurrent thread execution.',
    fullDescription: 'The ultimate computational showdown. 90 top algorithmic problem solvers competed in a timed, bracket-style arena. Contenders solved extreme graph optimization, dynamic programming matrices, and high-frequency lock-free concurrency puzzles under intense time-penalty rules.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Custom ASTHRA code execution sandbox running automated test vectors in under 20ms',
      'Dynamic real-time scoreboard projected across 4 auditorium displays',
      'Over 4,200 code submissions evaluated across 6 intense rounds of algorithmic combat',
      'Grand Champion title and ceremonial Titanium Key awarded to final victor'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop'
    ],
    metrics: {
      participants: 90,
      hours: 12,
      projects: 6
    }
  }
];
