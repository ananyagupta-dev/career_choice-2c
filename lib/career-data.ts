export type EducationLevel = 'middle' | 'highschool' | 'senior' | 'college'
export type Stream = 'PCM' | 'PCB' | 'COMMERCE' | 'ARTS'
export type Specialization = 'Tech' | 'Business' | 'Creative' | 'Science' | 'Social'

export const EDUCATION_LEVELS: { id: EducationLevel; label: string; hint: string }[] = [
  { id: 'middle', label: 'Middle School', hint: '6th–8th' },
  { id: 'highschool', label: 'High School', hint: '9th–10th' },
  { id: 'senior', label: 'Senior High', hint: '11th–12th' },
  { id: 'college', label: 'College / Graduate', hint: 'Undergraduate or beyond' },
]

export const STREAMS: { id: Stream; label: string; hint: string }[] = [
  { id: 'PCM', label: 'PCM', hint: 'Physics, Chem, Maths' },
  { id: 'PCB', label: 'PCB', hint: 'Physics, Chem, Bio' },
  { id: 'COMMERCE', label: 'COMMERCE', hint: 'Business & Finance' },
  { id: 'ARTS', label: 'ARTS', hint: 'Humanities & Design' },
]

export const SPECIALIZATIONS: { id: Specialization; label: string; hint: string }[] = [
  { id: 'Tech', label: 'Technology', hint: 'AI, Cloud, Software' },
  { id: 'Business', label: 'Business', hint: 'Finance, Startups, Consulting' },
  { id: 'Creative', label: 'Creative', hint: 'Design, Media, Content' },
  { id: 'Science', label: 'Science', hint: 'Research, Life Sciences' },
  { id: 'Social', label: 'Social Impact', hint: 'NGO, Policy, Sustainability' },
]

export type Career = {
  id: string
  title: string
  tagline: string
  streams: Stream[]
  category: 'Tech' | 'Creative' | 'Science' | 'Business' | 'Social'
  salary: string
  growth: string
  skills: string[]
}

export const CAREERS: Career[] = [
  {
    id: 'ai-cloud-architect',
    title: 'AI Cloud Architect',
    tagline: 'Design the cloud systems that power tomorrow\u2019s AI.',
    streams: ['PCM'],
    category: 'Tech',
    salary: '₹15–45 LPA',
    growth: '+41%',
    skills: ['AWS / Azure', 'Kubernetes', 'MLOps'],
  },
  {
    id: 'uiux',
    title: 'UI/UX Designer',
    tagline: 'Shape how millions of people use apps every day.',
    streams: ['PCM', 'ARTS', 'COMMERCE'],
    category: 'Creative',
    salary: '₹6–18 LPA',
    growth: '+24%',
    skills: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    tagline: 'Turn messy numbers into decisions that matter.',
    streams: ['PCM', 'COMMERCE'],
    category: 'Tech',
    salary: '₹8–25 LPA',
    growth: '+36%',
    skills: ['Python', 'Statistics', 'Machine Learning'],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    tagline: 'Lead teams that build products people love.',
    streams: ['PCM', 'COMMERCE', 'ARTS'],
    category: 'Business',
    salary: '₹12–35 LPA',
    growth: '+19%',
    skills: ['Strategy', 'Communication', 'Analytics'],
  },
  {
    id: 'marine-biologist',
    title: 'Marine Biologist',
    tagline: 'Study and protect life beneath the ocean surface.',
    streams: ['PCB'],
    category: 'Science',
    salary: '₹4–12 LPA',
    growth: '+8%',
    skills: ['Field Research', 'Ecology', 'Lab Work'],
  },
  {
    id: 'genetic-counselor',
    title: 'Genetic Counselor',
    tagline: 'Help families understand their genetic health.',
    streams: ['PCB'],
    category: 'Science',
    salary: '₹5–14 LPA',
    growth: '+16%',
    skills: ['Genetics', 'Empathy', 'Counseling'],
  },
  {
    id: 'biomedical-engineer',
    title: 'Biomedical Engineer',
    tagline: 'Design devices that save and improve lives.',
    streams: ['PCB', 'PCM'],
    category: 'Tech',
    salary: '₹5–16 LPA',
    growth: '+12%',
    skills: ['CAD', 'Biology', 'Electronics'],
  },
  {
    id: 'robotics',
    title: 'Robotics Engineer',
    tagline: 'Build machines that move, sense and think.',
    streams: ['PCM'],
    category: 'Tech',
    salary: '₹7–22 LPA',
    growth: '+21%',
    skills: ['C++', 'ROS', 'Embedded Systems'],
  },
  {
    id: 'game-designer',
    title: 'Game Designer',
    tagline: 'Craft worlds, stories and mechanics players love.',
    streams: ['PCM', 'ARTS'],
    category: 'Creative',
    salary: '₹4–15 LPA',
    growth: '+15%',
    skills: ['Unity', 'Storytelling', 'Level Design'],
  },
  {
    id: 'fintech-analyst',
    title: 'FinTech Analyst',
    tagline: 'Work where finance meets cutting-edge technology.',
    streams: ['COMMERCE', 'PCM'],
    category: 'Business',
    salary: '₹6–20 LPA',
    growth: '+27%',
    skills: ['Excel', 'SQL', 'Financial Modeling'],
  },
  {
    id: 'brand-strategist',
    title: 'Brand Strategist',
    tagline: 'Build the identity and voice of modern brands.',
    streams: ['COMMERCE', 'ARTS'],
    category: 'Business',
    salary: '₹5–15 LPA',
    growth: '+11%',
    skills: ['Marketing', 'Research', 'Storytelling'],
  },
  {
    id: 'content-creator',
    title: 'Content Strategist',
    tagline: 'Plan stories that grow audiences across platforms.',
    streams: ['ARTS', 'COMMERCE'],
    category: 'Creative',
    salary: '₹4–12 LPA',
    growth: '+18%',
    skills: ['Writing', 'Video', 'SEO'],
  },
  {
    id: 'psychologist',
    title: 'Counseling Psychologist',
    tagline: 'Support people through challenges and growth.',
    streams: ['ARTS', 'PCB'],
    category: 'Social',
    salary: '₹4–12 LPA',
    growth: '+14%',
    skills: ['Psychology', 'Listening', 'Ethics'],
  },
  {
    id: 'urban-planner',
    title: 'Urban Planner',
    tagline: 'Design greener, smarter cities for the future.',
    streams: ['ARTS', 'PCM'],
    category: 'Social',
    salary: '₹5–14 LPA',
    growth: '+10%',
    skills: ['GIS', 'Policy', 'Sustainability'],
  },
  {
    id: 'sports-analyst',
    title: 'Sports Data Analyst',
    tagline: 'Use data to give teams a winning edge.',
    streams: ['PCM', 'COMMERCE'],
    category: 'Tech',
    salary: '₹5–15 LPA',
    growth: '+22%',
    skills: ['Python', 'Visualization', 'Sports Science'],
  },
]

const DEGREES: Record<string, string> = {
  'ai-cloud-architect': 'B.Tech in Computer Science or IT',
  uiux: 'B.Des in Interaction Design or any degree + portfolio',
  'data-scientist': 'B.Tech / B.Sc in CS, Statistics or Maths',
  'product-manager': 'Any degree, then an MBA or APM programme',
  'marine-biologist': 'B.Sc in Zoology or Marine Science',
  'genetic-counselor': 'B.Sc Genetics, then M.Sc Genetic Counseling',
  'biomedical-engineer': 'B.Tech in Biomedical Engineering',
  robotics: 'B.Tech in Mechatronics, ECE or Robotics',
  'game-designer': 'B.Des in Game Design or B.Sc Animation',
  'fintech-analyst': 'B.Com / BBA / B.Tech, plus CFA Level 1',
  'brand-strategist': 'BBA / BMS or B.A. Mass Communication',
  'content-creator': 'B.A. Journalism, English or Mass Media',
  psychologist: 'B.A. / B.Sc Psychology, then M.A. Counseling',
  'urban-planner': 'B.Plan or B.Arch, then M.Plan',
  'sports-analyst': 'B.Sc Statistics / Data Science or B.Tech',
}

export type RoadmapStep = { stage: string; title: string; detail: string }

export function getRoadmap(career: Career): RoadmapStep[] {
  return [
    {
      stage: 'Class 11–12',
      title: `Build your ${career.streams[0]} foundation`,
      detail: `Score well in core subjects and start a small ${career.category.toLowerCase()} side project.`,
    },
    {
      stage: 'College',
      title: 'Choose the right degree',
      detail: DEGREES[career.id] ?? 'A related undergraduate degree.',
    },
    {
      stage: 'Skill up',
      title: `Master ${career.skills.slice(0, 2).join(' & ')}`,
      detail: `Use free courses, internships and competitions to practise ${career.skills.join(', ')}.`,
    },
    {
      stage: 'First role',
      title: `Launch as a junior ${career.title}`,
      detail: `Typical starting range ${career.salary}, in a field growing ${career.growth} each year.`,
    },
  ]
}

type MatchSeed = { id: string; match: number; hook: string; keywords: string[] }

const STREAM_MATCHES: Record<Stream, MatchSeed[]> = {
  PCM: [
    { id: 'ai-cloud-architect', match: 94, hook: 'Your maths edge makes complex AI systems feel like puzzles.', keywords: ['coding', 'tech', 'computer', 'ai', 'cloud'] },
    { id: 'uiux', match: 89, hook: 'Logic plus creativity is exactly what great product design needs.', keywords: ['drawing', 'design', 'art', 'apps'] },
    { id: 'data-scientist', match: 87, hook: 'You can turn the numbers you already love into real-world impact.', keywords: ['maths', 'math', 'data', 'numbers', 'sports'] },
  ],
  PCB: [
    { id: 'biomedical-engineer', match: 93, hook: 'Blend biology with tech to build devices that save lives.', keywords: ['tech', 'building', 'coding', 'machines'] },
    { id: 'genetic-counselor', match: 90, hook: 'Your biology depth meets a calling to help families directly.', keywords: ['helping', 'people', 'genetics', 'health'] },
    { id: 'marine-biologist', match: 86, hook: 'Turn your curiosity about life into ocean-saving research.', keywords: ['nature', 'ocean', 'animals', 'travel'] },
  ],
  COMMERCE: [
    { id: 'fintech-analyst', match: 94, hook: 'Your finance basics are the launchpad for UPI-scale innovation.', keywords: ['money', 'finance', 'tech', 'numbers'] },
    { id: 'product-manager', match: 90, hook: 'Business sense plus big-picture thinking make you a natural leader.', keywords: ['leading', 'business', 'apps', 'ideas'] },
    { id: 'brand-strategist', match: 86, hook: 'Shape how the world sees the brands you already follow.', keywords: ['marketing', 'social', 'stories', 'fashion'] },
  ],
  ARTS: [
    { id: 'uiux', match: 93, hook: 'Your eye for people and visuals is the heart of great UX.', keywords: ['drawing', 'design', 'art', 'apps'] },
    { id: 'psychologist', match: 90, hook: 'Your empathy and curiosity about minds can change lives.', keywords: ['helping', 'people', 'listening', 'mind'] },
    { id: 'content-creator', match: 87, hook: 'Turn your storytelling instinct into audience-building strategy.', keywords: ['writing', 'video', 'music', 'stories'] },
  ],
}

export type TopMatch = { career: Career; match: number; hook: string }

export function getTopMatches(stream: Stream, interests: string): TopMatch[] {
  const text = interests.toLowerCase()
  return STREAM_MATCHES[stream]
    .map((seed) => {
      const career = CAREERS.find((c) => c.id === seed.id)!
      const boost = seed.keywords.some((k) => text.includes(k)) ? 4 : 0
      return { career, match: Math.min(99, seed.match + boost), hook: seed.hook }
    })
    .sort((a, b) => b.match - a.match)
}

export type MarketTrend = {
  id: string
  title: string
  sector: string
  growth: number
  openings: string
  summary: string
}

export const MARKET_TRENDS: MarketTrend[] = [
  {
    id: 'ai',
    title: 'Generative AI roles',
    sector: 'Technology',
    growth: 42,
    openings: '1.2L+',
    summary: 'Prompt engineering, AI product and ML ops roles are booming across startups and enterprises.',
  },
  {
    id: 'green',
    title: 'Green energy jobs',
    sector: 'Sustainability',
    growth: 31,
    openings: '80K+',
    summary: 'Solar, EV and climate-tech companies are hiring engineers, analysts and policy experts.',
  },
  {
    id: 'health',
    title: 'Digital healthcare',
    sector: 'Healthcare',
    growth: 26,
    openings: '65K+',
    summary: 'Telemedicine, health data and biotech research are creating new hybrid careers.',
  },
  {
    id: 'creator',
    title: 'Creator economy',
    sector: 'Media',
    growth: 22,
    openings: '50K+',
    summary: 'Brands need video editors, content strategists and community managers more than ever.',
  },
  {
    id: 'fintech',
    title: 'FinTech & digital payments',
    sector: 'Finance',
    growth: 28,
    openings: '70K+',
    summary: 'UPI-scale innovation drives demand for analysts, risk experts and product thinkers.',
  },
]

export type Skill = { name: string; type: 'Technical' | 'Creative'; demand: number }

export const SKILLS: Skill[] = [
  { name: 'Python', type: 'Technical', demand: 94 },
  { name: 'Prompt Engineering', type: 'Technical', demand: 90 },
  { name: 'Cloud (AWS / Azure)', type: 'Technical', demand: 86 },
  { name: 'Data Analysis', type: 'Technical', demand: 88 },
  { name: 'Cybersecurity', type: 'Technical', demand: 84 },
  { name: 'UI/UX Design', type: 'Creative', demand: 89 },
  { name: 'Video Editing', type: 'Creative', demand: 82 },
  { name: 'Storytelling', type: 'Creative', demand: 78 },
  { name: 'Motion Graphics', type: 'Creative', demand: 76 },
  { name: '3D Modeling', type: 'Creative', demand: 72 },
]
