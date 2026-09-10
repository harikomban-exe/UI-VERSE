export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  division: string;
  codeName: string;
  image: string;
  bio: string;
  linkedin: string;
  skills: string[];
}

export interface CommitteeChapter {
  id: string;
  chapterNumber: string;
  year: string;
  subtitle: string;
  overview: string;
  members: CommitteeMember[];
}

export const committeeChapters: CommitteeChapter[] = [
  {
    id: 'chapter-01',
    chapterNumber: 'CHAPTER 01',
    year: '2026–27',
    subtitle: 'CURRENT COMMAND // VANGUARD DIVISION',
    overview: 'The active executive vanguard overseeing research divisions, high-stakes engineering hackathons, and department strategic initiatives.',
    members: [
      {
        id: 'c1-1',
        name: 'ARJUN MENON',
        role: 'TECHNICAL LEAD & ARCHITECT',
        division: 'CORE ARCHITECTURE',
        codeName: 'TITAN-01',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
        bio: 'Directs full-stack infrastructure, hardware integration benches, and systems research at ASTHRA.',
        linkedin: 'https://linkedin.com',
        skills: ['Distributed Systems', 'Rust', 'Autonomous Hardware', 'Cybernetics']
      },
      {
        id: 'c1-2',
        name: 'PRIYA NAIR',
        role: 'DIRECTOR OF OPERATIONS',
        division: 'TACTICAL COMMAND',
        codeName: 'CIPHER-02',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
        bio: 'Spearheads cross-division synergy, hackathon operational logistics, and venture relations.',
        linkedin: 'https://linkedin.com',
        skills: ['Strategic Operations', 'Program Architecture', 'Venture Relations']
      },
      {
        id: 'c1-3',
        name: 'VIKRAM VARMA',
        role: 'HEAD OF AI RESEARCH',
        division: 'NEURAL HORIZONS',
        codeName: 'SYNAPSE-03',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        bio: 'Focuses on multimodal synthetic networks, localized diffusion models, and automated logic solvers.',
        linkedin: 'https://linkedin.com',
        skills: ['Deep Learning', 'PyTorch', 'Transformer Mechanics', 'Model Quantization']
      },
      {
        id: 'c1-4',
        name: 'ANANYA IYER',
        role: 'CHIEF DESIGN OFFICER',
        division: 'SPATIAL & INTERACTION UX',
        codeName: 'PRISM-04',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
        bio: 'Architect of the ASTHRA visual universe, spatial UI guidelines, and cinematic brand identity.',
        linkedin: 'https://linkedin.com',
        skills: ['Spatial Computing', 'Creative Direction', 'WebGL Shaders', 'Design Systems']
      },
      {
        id: 'c1-5',
        name: 'ROHIT KULKARNI',
        role: 'HARDWARE & ROBOTICS CHIEF',
        division: 'PROTOTYPING LABS',
        codeName: 'FORGE-05',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
        bio: 'Leads custom PCB manufacturing, autonomous sensor suites, and embedded flight computing.',
        linkedin: 'https://linkedin.com',
        skills: ['Embedded Systems', 'PCB Layout', 'RTOS', 'Robotics Kinematics']
      },
      {
        id: 'c1-6',
        name: 'MEERA SEN',
        role: 'CHIEF OF INTELLIGENCE & ARCHIVES',
        division: 'PUBLICATIONS & DISPATCH',
        codeName: 'SCRIBE-06',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
        bio: 'Curates and authors the ASTHRA Archives dossiers, technical whitepapers, and symposium dispatches.',
        linkedin: 'https://linkedin.com',
        skills: ['Technical Research', 'Editorial Publishing', 'Symposium Design']
      }
    ]
  },
  {
    id: 'chapter-02',
    chapterNumber: 'CHAPTER 02',
    year: '2025–26',
    subtitle: 'FOUNDING PIONEERS // FOUNDRY SQUAD',
    overview: 'The founding pioneers who charted the initial ASTHRA blueprint, forged foundational labs, and established our legacy of heroic engineering.',
    members: [
      {
        id: 'c2-1',
        name: 'DEV PATEL',
        role: 'FOUNDING PRESIDENT',
        division: 'PIONEER DIRECTORS',
        codeName: 'ORIGIN-01',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
        bio: 'Envisioned the transition of ASTHRA into a premier superhero-grade student research institution.',
        linkedin: 'https://linkedin.com',
        skills: ['System Architecture', 'Strategy', 'Venture Incubation']
      },
      {
        id: 'c2-2',
        name: 'SNEHA RAO',
        role: 'FOUNDING TECH DIRECTOR',
        division: 'EARLY ARCHITECTS',
        codeName: 'GENESIS-02',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
        bio: 'Engineered the initial high-throughput compute clusters and initiated our first hackathon.',
        linkedin: 'https://linkedin.com',
        skills: ['Cloud Infrastructure', 'Network Security', 'Distributed Cache']
      },
      {
        id: 'c2-3',
        name: 'KABIR SHARMA',
        role: 'FOUNDING CREATIVE LEAD',
        division: 'BRAND GENESIS',
        codeName: 'SPECTRUM-03',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
        bio: 'Crafted the original visual aesthetic and heroic visual philosophy for ASTHRA.',
        linkedin: 'https://linkedin.com',
        skills: ['3D Modeling', 'Motion Branding', 'Visual Storytelling']
      },
      {
        id: 'c2-4',
        name: 'TANYA CHEN',
        role: 'FOUNDING RESEARCH OFFICER',
        division: 'NEURAL LABS',
        codeName: 'QUANTUM-04',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
        bio: 'Led the first cohort of student researchers into algorithmic security and edge machine learning.',
        linkedin: 'https://linkedin.com',
        skills: ['Algorithm Design', 'Computer Vision', 'Data Ethics']
      }
    ]
  }
];
