export interface Newsletter {
  id: string;
  code: string;
  title: string;
  date: string;
  volume: string;
  classification: 'TOP SECRET' | 'RESTRICTED' | 'CLASSIFIED' | 'CONFIDENTIAL';
  coverImage: string;
  shortDescription: string;
  summary: string;
  highlights: string[];
  readTime: string;
  pages: number;
}

export const newslettersData: Newsletter[] = [
  {
    id: 'arch-01',
    code: 'ARCHIVE 001',
    title: 'ASTHRA INSIGHTS // THE GENESIS EDITION',
    date: 'OCTOBER 2026',
    volume: 'VOL. IV // ISSUE 01',
    classification: 'TOP SECRET',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Inaugural tactical intelligence dispatch analyzing foundation paradigms in autonomous edge AI and student-led robotics.',
    summary: 'Archive 001 establishes the foundational engineering roadmap for ASTHRA. It provides deep retrospective reports on our transition from decentralized student interest clubs into an elite multidisciplinary innovation department capable of shipping national-level technical initiatives.',
    highlights: [
      'Comprehensive teardown of localized neural inferencing hardware setups',
      'Architectural blueprint for the ASTHRA High-Speed Computational Cluster',
      'Exclusive interview with student leads on founding the Autonomous Systems Wing',
      'Analysis of global computational shifts toward small language models (SLMs)'
    ],
    readTime: '12 MIN READ',
    pages: 28
  },
  {
    id: 'arch-02',
    code: 'ARCHIVE 002',
    title: 'TECH FRONTIER // SYNTHETIC HORIZONS',
    date: 'DECEMBER 2026',
    volume: 'VOL. IV // ISSUE 02',
    classification: 'RESTRICTED',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Special technical report focusing on spatial computing interfaces, WebGPU shaders, and neural rendering breakthroughs.',
    summary: 'A forensic exploration of real-time computer graphics, spatial audio topologies, and physical human-computer interaction paradigms. Features benchmark data comparing WebGPU render pipelines against traditional CPU-bound canvases.',
    highlights: [
      'Comparative latency benchmarks across WebGL 2.0 and WebGPU compute pipelines',
      'Designing non-invasive biometric telemetry dashboards for astronautics simulation',
      'The mathematics behind bezier-interpolated spatial motion physics',
      'Spotlight on top open-source spatial shader contributions by ASTHRA members'
    ],
    readTime: '15 MIN READ',
    pages: 34
  },
  {
    id: 'arch-03',
    code: 'ARCHIVE 003',
    title: 'THE INNOVATOR // HARDWARE SYNTHESIS',
    date: 'JANUARY 2027',
    volume: 'VOL. IV // ISSUE 03',
    classification: 'CLASSIFIED',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Hardware division dossier documenting custom PCB design, embedded real-time OS kernels, and micro-drone flight controllers.',
    summary: 'An elite technical publication unmasking the internal schematics, component selection rationale, and firmware architecture developed inside the ASTHRA Prototyping Laboratory. From high-speed signal integrity to battery chemistry management.',
    highlights: [
      'Custom 4-layer PCB routing guide for high-frequency RF telemetry modules',
      'Implementation notes on FreeRTOS task prioritization in multi-threaded microcontrollers',
      'Thermal dissipation strategies for high-density silicon prototyping',
      'Field test telemetry from the autonomous sub-orbital glider test flight'
    ],
    readTime: '18 MIN READ',
    pages: 42
  },
  {
    id: 'arch-04',
    code: 'ARCHIVE 004',
    title: 'DIGITAL HORIZONS // CIPHER PROTOCOLS',
    date: 'FEBRUARY 2027',
    volume: 'VOL. IV // ISSUE 04',
    classification: 'TOP SECRET',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Cybernetics and security briefing covering zero-knowledge rollups, hardware enclave security, and defensive threat modeling.',
    summary: 'Classified analysis of emerging cryptographic primitives and adversarial machine learning defenses. Authored collaboratively by the ASTHRA Cybersecurity Squad and external defensive research fellows.',
    highlights: [
      'Mathematical foundations of succinct non-interactive arguments of knowledge (zk-SNARKs)',
      'Side-channel electromagnetic analysis of consumer microcontrollers',
      'Red-team exercise post-mortem: Penetration testing isolated subnetworks',
      'Security roadmap for 2027 department-wide infrastructure hardening'
    ],
    readTime: '14 MIN READ',
    pages: 36
  }
];
