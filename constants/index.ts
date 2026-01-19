// Nav Links
export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
]

// Technologies
export const technologies = [
  {
    name: 'Python',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  },
  {
    name: 'SQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  },
  {
    name: 'R',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg',
  },
  {
    name: 'Java',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  },
  {
    name: 'C++',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'PyTorch',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
  },
  {
    name: 'Scikit-learn',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg',
  },
  {
    name: 'React',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'FastAPI',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  },
  {
    name: 'AWS',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Azure',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg',
  },
]

// Experiences
export const experiences = [
  {
    title: 'Brand Development & Marketing Associate',
    companyName: 'Coftech',
    icon: '/assets/shipd.svg', // Placeholder icon
    iconBg: '#050816',
    date: 'Nov 2025 – Present',
    points: [
      'Led client outreach and B2B deal acquisition efforts, successfully initiating long-term brand partnerships.',
      'Conducted market research and product identification to align offerings with client needs and industry demand.',
      'Developed and delivered high-impact product pitches, resulting in multiple strategic collaborations.',
      'Built the brand identity and digital marketing framework, optimizing content and social media strategies for growth.',
    ],
  },
  {
    title: 'Planning Specialist',
    companyName: 'The Project Suicide (TPS)',
    icon: '/assets/seath.svg', // Placeholder icon
    iconBg: '#050816',
    date: 'Oct 2025 – Present',
    points: [
      'Designed and maintained program roadmaps and milestone strategies for suicide awareness initiatives.',
      'Aligned localized ambassador plans with TPS’s global SDG 3.4.2 mental health goals.',
      'Tracked reporting progress and adjusted strategic plans for nationwide student-led campaigns.',
      'Ensured timely delivery of all planning-related outputs across multidisciplinary volunteer teams.',
    ],
  },
  {
    title: 'Lead Developer & AI Research Specialist',
    companyName: 'RAAMP — Autonomous Marketing Platform',
    icon: '/assets/shipd.svg', // Placeholder icon
    iconBg: '#050816',
    date: 'Aug 2025 – Present',
    points: [
      'Architected B2B platform leveraging causal AI, Bayesian analytics, and generative AI.',
      'Developed Geo-Intent Engine, Creative Studio, Trend Arbitrage Detector, and Churn Risk Detector.',
      'Implemented real-time trend detection and analytics dashboards, projecting 25% ROI increase.',
    ],
  },
  {
    title: 'AI Research Fellow & Machine Learning Engineer',
    companyName: 'Advanced AI Bootcamp, GIKI',
    icon: '/assets/honda.svg', // Placeholder icon
    iconBg: '#050816',
    date: 'Jul 2025 – Aug 2025',
    points: [
      'Applied ML techniques (regression, classification) and optimized deep learning models (CNNs, RNNs, Vision Transformers).',
      'Fine-tuned LLMs (BERT, GPT) for NLP tasks via LangChain and Hugging Face.',
      'Designed Generative AI solutions (GANs, diffusion models, Whisper, DALL·E) for multimodal applications.',
    ],
  },
  {
    title: 'Marketing Strategist',
    companyName: 'Kettli Restaurant',
    icon: '/assets/seath.svg', // Placeholder icon
    iconBg: '#050816',
    date: 'Mar 2024 – Jan 2025',
    points: [
      'Developed the brand’s positioning, visual identity, and audience segmentation strategy for market reentry.',
      'Directed influencer collaborations and UGC-driven campaigns, increasing engagement by 35%.',
      'Designed seasonal promotions and social media rollouts that strengthened online-to-offline conversions.',
    ],
  },
  {
    title: 'Business Intelligence Analyst & Data Engineer',
    companyName: 'Troon Technologies',
    icon: '/assets/honda.svg', // Placeholder icon
    iconBg: '#050816',
    date: 'Jul 2024 – Aug 2024',
    points: [
      'Architected automated KPI dashboards using Python and Power BI, reducing reporting time.',
      'Designed enterprise SQL pipelines, improving data reliability by 40%.',
      'Conducted EDA supporting C-level decision-making and built interactive visualization reports improving insights adoption.',
    ],
  },
]

// Education
export const education = [
  {
    degree: 'Bachelors in Data Science',
    school: 'Comsats University Islamabad',
    date: 'Sep 2022 – Present',
    gpa: '',
    highlights: [
      'Specialized in Machine Learning, Business Intelligence, and Marketing Analytics.',
      'Practical experience in data storytelling, predictive modeling, and consumer insight generation.',
      'Applied Generative AI and RAG frameworks to automate campaign ideation.',
    ],
  },
]

// Projects
export const projects = [
  {
    title: 'Analytics Assistant Chatbot',
    description: 'Engineered a schema-aware NL-to-SQL assistant for Fetii’s structured ride-sharing datasets. Delivered precise, schema-aligned analytics to support operational decision-making.',
    tags: [
      { name: 'Generative AI', color: 'blue-text-gradient' },
      { name: 'NL-SQL', color: 'green-text-gradient' },
      { name: 'LangChain', color: 'pink-text-gradient' },
    ],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80', // Chatbot/AI related
    githubLink: 'https://github.com/abdullahaamir197',
  },
  {
    title: 'AI-Powered Solar Energy Consultant',
    description: 'Developed an AI-powered consultation platform for solar sizing, ROI analysis, and proposal generation using MCP and Agentic tools. Integrated localized, Pakistan-specific datasets.',
    tags: [
      { name: 'MCP', color: 'blue-text-gradient' },
      { name: 'Generative AI', color: 'green-text-gradient' },
      { name: 'LangGraph', color: 'pink-text-gradient' },
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', // Solar related
    githubLink: 'https://github.com/abdullahaamir197',
  },
  {
    title: 'Movie Revenue Predictor',
    description: 'Deployed end-to-end MLOps pipeline with CI/CD-enabled FastAPI for box-office prediction using TMDB dataset.',
    tags: [
      { name: 'MLflow', color: 'blue-text-gradient' },
      { name: 'FastAPI', color: 'green-text-gradient' },
      { name: 'Docker', color: 'pink-text-gradient' },
    ],
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80', // Movie/Cinema related
    githubLink: 'https://github.com/abdullahaamir197',
  },
]

// Research Publications (Kept empty for now as none explicitly provided apart from projects)
export const research: any[] = []

// Awards Categories
export const awardCategories: any[] = []

// Awards and Achievements
export const awards: any[] = []

// Certifications
export const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: '#',
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI',
    link: '#',
  },
  {
    title: 'Fine-tuning LLMs',
    issuer: 'Advanced AI Certification',
    link: '#',
  },
  {
    title: 'Supervised Learning with scikit-learn',
    issuer: 'RLHF',
    link: '#',
  },
  {
    title: 'AI for Everyone',
    issuer: 'DeepLearning.AI',
    link: '#',
  },
]

// Volunteer Experience
export const volunteer = [
  {
    title: 'Planning Strategist',
    organization: 'The Project Suicide (TPS)',
    date: 'Oct 2025 – Present',
    description: 'Designed and maintained program roadmaps and milestone strategies for suicide awareness initiatives. Aligned localized ambassador plans with TPS’s global SDG 3.4.2 mental health goals. Tracked reporting progress and adjusted strategic plans for nationwide student-led campaigns. Ensured timely delivery of all planning-related outputs across multidisciplinary volunteer teams.',
  },
]

// Topmate Reviews (Removed as not provided)
export const topmateReviews: any[] = []

// Social Links
export const socialLinks = {
  github: 'https://github.com/abdullahaamir197',
  linkedin: 'https://linkedin.com/in/abdullah-aamir',
  email: 'mailto:abdullahaamir197@gmail.com',
}

// Contact Info
export const contactInfo = {
  email: 'abdullahaamir197@gmail.com',
  phone: '+92 336 9869866',
  location: 'Rawalpindi, Pakistan',
  linkedin: 'linkedin.com/in/abdullah-aamir',
  github: 'github.com/abdullahaamir197',
}

// Personal Info (Assuming there's a place for this maybe in another file, but putting it here if custom fields exist)
export const personalInfo = {
  name: 'Abdullah Aamir',
  title: 'Data Science & Marketing Specialist',
  bio: 'My passion has always revolved around marketing, brand development, and creative storytelling. While I chose to formally pursue a degree in Data Science and Artificial Intelligence, my career has evolved at the intersection of both fields; combining data-driven intelligence with marketing strategy. Today, I specialize in building brands, leading digital campaigns, and leveraging AI-powered insights to drive measurable growth, engagement, and innovation in marketing ecosystems.',
  profilePic: '/assets/profile.jpeg',
}
