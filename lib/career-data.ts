export type Stream = 'PCM' | 'PCB' | 'COMMERCE' | 'ARTS'

export const STREAMS: { id: Stream; label: string; hint: string }[] = [
  { id: 'PCM', label: 'PCM', hint: 'Physics, Chem, Maths' },
  { id: 'PCB', label: 'PCB', hint: 'Physics, Chem, Bio' },
  { id: 'COMMERCE', label: 'COMMERCE', hint: 'Business & Finance' },
  { id: 'ARTS', label: 'ARTS', hint: 'Humanities & Design' },
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
