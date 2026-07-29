export const servicesData = [
  {
    id: 'ai-automation',
    title: 'AI & Workflow Automation',
    tagline: 'Eliminate 80% of repetitive operational tasks',
    iconName: 'Cpu',
    problem: 'Startups waste hundreds of engineering and ops hours on manual data syncs, invoice processing, lead triage, and cross-platform notifications.',
    solution: 'Custom, multi-step autonomous workflows engineered with python scripts, webhooks, LLM parsers, and event triggers operating 24/7 with error recovery.',
    benefits: [
      'Reduces operational overhead by up to 80%',
      'Eliminates manual human data-entry errors',
      'Instantaneous multi-channel data routing',
      'Full audit trails and error retry mechanisms'
    ],
    tech: ['Python', 'OpenAI API', 'Claude 3.5 Sonnet', 'Webhooks', 'Docker']
  },
  {
    id: 'n8n-workflows',
    title: 'n8n Workflow Engineering',
    tagline: 'Self-hosted, cost-effective automation engines',
    iconName: 'Workflow',
    problem: 'Zapier and Make become astronomically expensive at scale, locking you into fragile, vendor-locked, non-customizable automation flows.',
    solution: 'Production-grade self-hosted n8n instances integrated with custom JavaScript/Node modules, Postgres databases, vector storage, and secure OAuth credentials.',
    benefits: [
      'Zero per-task tier cost (90% cheaper than Zapier)',
      '100% data privacy & self-hosted compliance',
      'Complex branching logic & custom JS execution',
      'Seamless deployment on Docker / Cloud VPS'
    ],
    tech: ['n8n', 'Self-Hosted VPS', 'JavaScript', 'PostgreSQL', 'Redis']
  },
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    tagline: 'Intelligent agents that plan, execute & adapt',
    iconName: 'Bot',
    problem: 'Standard chatbots fail when faced with complex, multi-step business logic that requires tools, memory, dynamic execution, and human-in-the-loop validation.',
    solution: 'LangChain and LlamaIndex agents equipped with web search, database querying, code execution, email sending, and stateful memory loops.',
    benefits: [
      'Handles non-deterministic unstructured queries',
      'Executes multi-step task chains automatically',
      'Integrated tool access (CRM, Database, Email, APIs)',
      'Includes safety guardrails & human approval gates'
    ],
    tech: ['LangChain', 'LlamaIndex', 'Python', 'Pinecone', 'FastAPI']
  },
  {
    id: 'full-stack',
    title: 'Full Stack Web Applications',
    tagline: 'Modern, high-performance web applications',
    iconName: 'Code2',
    problem: 'Slow, clunky web applications built on outdated monoliths suffer from low conversions, high bounce rates, and poor developer velocity.',
    solution: 'Lightning-fast React, Vite, and Next.js applications paired with clean REST/GraphQL APIs, Serverless backends, and robust database models.',
    benefits: [
      'Sub-second page loading speeds (98+ Lighthouse)',
      'Responsive, modern UI with polished UX',
      'Clean component architecture for easy scaling',
      'End-to-end type safety & test coverage'
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'api-integrations',
    title: 'Custom API Integrations & Middleware',
    tagline: 'Connect disparate SaaS platforms seamlessly',
    iconName: 'Layers',
    problem: 'SaaS tools (Stripe, HubSpot, Salesforce, Slack, Notion) don’t talk to each other cleanly out of the box, creating data silos.',
    solution: 'Custom Node.js/Python middleware microservices handling data mapping, rate limiting, authentication, payload transformation, and webhook handling.',
    benefits: [
      'Single source of truth across all platforms',
      'Robust retry logic and rate limit management',
      'Encrypted payload transmission and security',
      'Real-time webhooks and websocket push sync'
    ],
    tech: ['Node.js', 'Express', 'FastAPI', 'REST', 'GraphQL', 'Webhooks']
  },
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Pages',
    tagline: 'Designed like Linear, Vercel & Stripe',
    iconName: 'Layout',
    problem: 'Generic template sites look amateurish and fail to build instant trust with startup founders, technical leads, and enterprise buyers.',
    solution: 'Bespoke, high-converting digital experiences with glassmorphic UI, fluid micro-interactions, responsive layouts, and SEO performance.',
    benefits: [
      'Instant brand authority & startup trust',
      'Optimized conversion funnels & magnetic CTAs',
      'Pixel-perfect responsiveness across all devices',
      'Sub-50ms interaction response times'
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'SEO Meta']
  },
  {
    id: 'chatbots',
    title: 'RAG Knowledge Base Chatbots',
    tagline: 'Train AI on your company documentation',
    iconName: 'MessageSquareCode',
    problem: 'Support teams are buried under thousands of repetitive customer questions, while internal staff waste hours looking up company docs.',
    solution: 'Retrieval-Augmented Generation (RAG) bots trained on your PDFs, Notion pages, GitHub repos, and API docs with hallucination prevention.',
    benefits: [
      'Answers 70%+ of support tickets automatically',
      'Cites exact source documents for total accuracy',
      'Integrates into Slack, WhatsApp, Web, and Discord',
      'Continuous automatic syncing with knowledge base'
    ],
    tech: ['OpenAI Embeddings', 'Pinecone', 'LangChain', 'Python', 'React Widget']
  }
];
