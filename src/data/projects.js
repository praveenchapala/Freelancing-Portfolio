export const projectsData = [
  {
    id: 'n8n-ai-enterprise-engine',
    title: 'Enterprise Autonomous n8n Workflow Engine',
    category: 'n8n Workflows',
    tagline: 'Self-hosted AI processing pipeline handling 50,000+ daily events with 99.9% uptime.',
    summary: 'A resilient, self-hosted n8n automation hub built to replace expensive Zapier setups. Processes multi-channel leads, parses documents via Claude 3.5 Sonnet, and syncs Postgres DB in real-time.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    problem: 'Client was spending $1,800/month on Zapier tasks with frequent rate-limit timeouts, lost payloads, and zero error recovery for document parsing.',
    solution: 'Engineered a multi-node self-hosted n8n cluster on Hetzner VPS with custom Node.js execution blocks, Redis queueing, and automated Webhook fallbacks.',
    techStack: ['n8n', 'Docker', 'Python', 'Claude 3.5 Sonnet API', 'PostgreSQL', 'Redis'],
    architecture: [
      'Webhook Gateways standardizing incoming HTTP payloads',
      'Redis Queue orchestrating async job distribution',
      'n8n Sub-workflows handling LLM schema extraction & validation',
      'PostgreSQL data persistence with automatic rollback on error'
    ],
    challenges: [
      'Handling rate limits across 5 third-party APIs during peak traffic spikes.',
      'Ensuring 100% JSON schema validation from LLM output before database entry.',
      'Building zero-downtime hot reloading for sub-workflow deployments.'
    ],
    outcome: 'Reduced automation costs by 87% (saving ~$18.7k/year) while increasing event processing throughput by 400%.',
    githubUrl: 'https://github.com/praveenchapala/n8n-enterprise-automation-engine',
    liveUrl: 'https://github.com/praveenchapala/n8n-enterprise-automation-engine',
    featured: true,
    stats: {
      costSavings: '87%',
      eventsPerDay: '50,000+',
      latency: '<450ms'
    }
  },
  {
    id: 'autonomous-support-agent',
    title: 'Autonomous RAG Customer Support Agent',
    category: 'AI Agents',
    tagline: 'Multi-agent customer response engine with tool invocation & human escalation.',
    summary: 'An autonomous AI agent trained on complex SaaS documentation, equipped with database lookup tools, refund processing verification, and smart human escalation paths.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    problem: 'SaaS support team took an average of 14 hours to respond to technical billing and API integration tickets.',
    solution: 'Designed a LangChain autonomous agent using GPT-4o embeddings, Pinecone vector search, and custom REST API tools for automated ticket resolution.',
    techStack: ['LangChain', 'Python', 'FastAPI', 'Pinecone', 'React', 'Tailwind CSS'],
    architecture: [
      'Vector DB Semantic Search pulling relevant doc chunks',
      'Agent Reasoning Loop evaluating tool invocation necessity',
      'REST API Middleware executing account lookups safely',
      'Human-in-the-loop escalation trigger for sensitive actions'
    ],
    challenges: [
      'Eliminating LLM hallucinations when answering technical API endpoints.',
      'Maintaining conversation memory state efficiently across multi-turn sessions.'
    ],
    outcome: 'Resolved 74% of support tickets instantly without human intervention, reducing average resolution time from 14 hours to 8 seconds.',
    githubUrl: 'https://github.com/praveenchapala/rag-autonomous-support-agent',
    liveUrl: 'https://github.com/praveenchapala/rag-autonomous-support-agent',
    featured: true,
    stats: {
      ticketDeflection: '74%',
      avgResponse: '8 seconds',
      accuracy: '99.2%'
    }
  },
  {
    id: 'aurora-fullstack-saas',
    title: 'Aurora AI Operations Management Portal',
    category: 'Full Stack',
    tagline: 'High-performance React & Node dashboard for managing AI workflows and API metrics.',
    summary: 'A sleek, Vercel-inspired full-stack web application giving startup founders complete visibility into their active AI agents, API token usage, and automation health.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    problem: 'Founders lacked a single centralized dashboard to monitor multi-provider AI costs, workflow success rates, and live API logs.',
    solution: 'Built a lightweight React 19 SPA with Tailwind CSS, Framer Motion, Express REST API, and Supabase real-time subscriptions.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Supabase'],
    architecture: [
      'React frontend featuring dark luxury aesthetic & responsive layout',
      'WebSocket real-time channel updating system health metrics live',
      'Express REST API proxying vendor usage data securely',
      'Row Level Security (RLS) enabled Supabase backend'
    ],
    challenges: [
      'Maintaining smooth 60fps animations across complex data charts.',
      'Optimizing bundle size under 120KB for instantaneous first contentful paint.'
    ],
    outcome: 'Delivered a sub-second, production-ready SaaS dashboard praised for its Linear-level aesthetic and lightning responsiveness.',
    githubUrl: 'https://github.com/praveenchapala/aurora-ai-ops-portal',
    liveUrl: 'https://github.com/praveenchapala/aurora-ai-ops-portal',
    featured: true,
    stats: {
      lighthouse: '99/100',
      bundleSize: '115 KB',
      fps: '60 fps'
    }
  },
  {
    id: 'smart-lead-enrichment-pipeline',
    title: 'Realtime AI Lead Enrichment & Triage',
    category: 'AI Automation',
    tagline: 'Automated inbound lead research, qualification, and customized outreach generation.',
    summary: 'An automated pipeline that triggers when a user submits a contact form. Researches their company via web scraping, enriches CRM data, calculates ICP score, and drafts personalized emails.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    problem: 'Sales teams spent 20 minutes manually researching each inbound lead before sending a introductory reply.',
    solution: 'Built an automated Python + n8n flow using BeautifulSoup, Serper API, OpenAI, and HubSpot webhooks.',
    techStack: ['Python', 'n8n', 'OpenAI API', 'HubSpot API', 'Slack API'],
    architecture: [
      'Inbound Webhook listener parsing submission',
      'Serper API web search fetching recent company news & tech stack',
      'GPT-4 scoring lead against Ideal Customer Profile (ICP)',
      'Automated Slack notification with 1-click approval for email sending'
    ],
    challenges: [
      'Robustly handling rate-limited web scrapers and dynamic JS websites.',
      'Ensuring AI-generated sales emails read naturally without boilerplate AI tone.'
    ],
    outcome: 'Saves 25+ hours per sales rep weekly while reducing response time to qualified leads from 4 hours to under 2 minutes.',
    githubUrl: 'https://github.com/praveenchapala/ai-lead-enrichment-triage',
    liveUrl: 'https://github.com/praveenchapala/ai-lead-enrichment-triage',
    featured: false,
    stats: {
      timeSaved: '25 hrs/week',
      responseSpeed: '2 min',
      conversionBoost: '+32%'
    }
  },
  {
    id: 'high-converting-agency-landing',
    title: 'Linear-Inspired High-Converting Studio Landing Page',
    category: 'Landing Pages',
    tagline: 'Ultra-fast conversion-optimized digital storefront designed for tech agencies.',
    summary: 'A dark-mode, glassmorphic landing page designed for maximum founder conversion. Packed with micro-interactions, responsive typography, and accessibility features.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    problem: 'Agency was losing high-ticket clients due to a sluggish, outdated agency portfolio.',
    solution: 'Designed and engineered a custom React + Tailwind SPA featuring magnetic buttons, glow cards, smooth animations, and optimized SEO headers.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'SEO Meta'],
    architecture: [
      'Component-driven atomic architecture',
      'Framer Motion layout animations with GPU acceleration',
      'Semantic HTML5 structure with full ARIA accessibility'
    ],
    challenges: [
      'Achieving zero layout shift (CLS 0.0) while loading dynamic animated components.'
    ],
    outcome: 'Increased lead form submissions by 48% within 30 days of release.',
    githubUrl: 'https://github.com/praveenchapala/high-converting-agency-landing',
    liveUrl: 'https://github.com/praveenchapala/high-converting-agency-landing',
    featured: false,
    stats: {
      conversionIncrease: '+48%',
      cls: '0.00',
      loadTime: '0.3s'
    }
  }
];
