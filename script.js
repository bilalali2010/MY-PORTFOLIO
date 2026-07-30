/* ============================================================
   Bilal Ali — Portfolio
   Consolidated content data + rendering + interactions
   ============================================================ */

/* ---------------- CONTENT DATA ---------------- */

const services = [
  { title: "AI Chatbot Development", icon: "fa-comment-dots" },
  { title: "Frontend Website Design", icon: "fa-table-columns" },
  { title: "Portfolio Website Development", icon: "fa-globe" },
  { title: "Landing Page Development", icon: "fa-rocket" },
  { title: "Business Website Development", icon: "fa-briefcase" },
  { title: "Prompt Engineering", icon: "fa-terminal" },
  { title: "AI API Integration", icon: "fa-plug" },
  { title: "Business Automation", icon: "fa-gear" },
  { title: "Social Media Account Management", icon: "fa-share-nodes" },
  { title: "AI-Powered Content Creation", icon: "fa-sparkles" },
  { title: "Social Media Post Design", icon: "fa-image" },
  { title: "Content Planning & Scheduling", icon: "fa-calendar" },
  { title: "Graphic Design", icon: "fa-pen-nib" },
  { title: "Digital Product Development", icon: "fa-box" },
];

const skillCategories = [
  {
    title: "AI & Machine Learning",
    items: [
      "Generative AI", "LLM Integration", "Prompt Engineering",
      "AI Workflow Design", "AI Automation", "AI Agent Development",
      "RAG Systems", "Knowledge Base Chatbots", "Document AI",
      "Semantic Search", "Custom Chatbots", "PDF Chatbots",
    ],
  },
  { title: "Programming", items: ["Python", "HTML5", "CSS3", "JavaScript"] },
  {
    title: "Frontend Development",
    items: ["Responsive Design", "Landing Pages", "Portfolio Websites", "Luxury UI Design", "Interactive Animations"],
  },
  { title: "Deployment & Cloud", items: ["GitHub", "Vercel", "Railway", "Render", "Fly.io", "Koyeb"] },
  { title: "AI Platforms", items: ["ChatGPT", "Claude", "Gemini", "OpenRouter", "Hugging Face", "Streamlit"] },
  {
    title: "Additional Skills",
    items: ["Social Media Management", "Content Creation", "Graphic Design", "Digital Products", "E-book Creation", "SEO Content"],
  },
];

const websiteProjects = [
  {
    emoji: "🚗",
    title: "Aurelius Motors",
    description: "A premium luxury automotive brand website with a modern, immersive, and high-end user experience.",
    link: "https://aurelius-motors.vercel.app/",
  },
  {
    emoji: "💡",
    title: "Aurora Smart Tech",
    description: "A sleek and futuristic technology website showcasing innovative smart devices with elegant UI and animations.",
    link: "https://aurora-smart-tech.vercel.app/",
  },
  {
    emoji: "⌚",
    title: "Royal Luxora Watch",
    description: "A luxury watch brand website featuring a premium design, cinematic visuals, and refined product presentation.",
    link: "https://royal-luxora-watch.vercel.app/",
  },
  {
    emoji: "🏡",
    title: "Real Estate Luxora",
    description: "A modern luxury real estate website designed with sophisticated layouts, smooth animations, and premium property showcases.",
    link: "https://real-estate-luxora.vercel.app/",
  },
];

const chatbotProjects = [
  {
    emoji: "🎓",
    title: "NextGen Coaching Center",
    description: "An AI-powered coaching center website with an intelligent chatbot for answering student queries and providing instant assistance.",
    link: "https://nextgen-coaching-center.vercel.app/",
  },
  {
    emoji: "🏥",
    title: "Demo Hospital Website",
    description: "A hospital website integrated with a custom AI chatbot that assists visitors with hospital information, departments, doctors, and services.",
    link: "https://demo-hospital-web.vercel.app/",
  },
];

const workProcess = [
  { step: "01", title: "DISCOVER", description: "Understanding goals, audience, and project requirements.", icon: "fa-magnifying-glass" },
  { step: "02", title: "IDEATE", description: "Planning, wireframing, and creating the right concept.", icon: "fa-lightbulb" },
  { step: "03", title: "DESIGN", description: "Crafting visual design with a focus on user experience.", icon: "fa-pencil" },
  { step: "04", title: "DEVELOP", description: "Building fast, responsive, and high-performing applications.", icon: "fa-code" },
  { step: "05", title: "DELIVER", description: "Testing, optimizing, and launching with perfection.", icon: "fa-rocket" },
];

const responsibilities = [
  "Developed custom AI chatbots for business automation.",
  "Built document-based AI assistants using knowledge bases.",
  "Integrated AI APIs into web applications.",
  "Designed premium, responsive frontend websites.",
  "Created modern landing pages and portfolio websites.",
  "Engineered prompts for AI-powered workflows.",
  "Managed social media accounts for brands and businesses.",
  "Generated engaging AI-assisted social media content, captions, graphics, and marketing materials.",
  "Planned and maintained consistent content strategies to improve online engagement.",
  "Deployed web applications to cloud platforms.",
  "Collaborated with clients to deliver tailored AI and web solutions.",
];

const strengths = [
  "Creative Problem Solving", "Attention to Detail", "Strong Communication",
  "Client-Focused Development", "Clean UI Design", "AI Solution Architecture",
  "Continuous Learning", "Adaptability", "Time Management",
];

/* ---------------- RENDERING ---------------- */

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = services.map((s, i) => `
    <div class="service-card">
      <div class="service-card__top">
        <div class="service-card__icon"><i class="fa-solid ${s.icon}"></i></div>
        <span class="service-card__num">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <h3 class="service-card__title">${s.title}</h3>
    </div>
  `).join("");
}

function renderSkills() {
  const wrap = document.getElementById("skillCategories");
  wrap.innerHTML = skillCategories.map(cat => `
    <div>
      <h3 class="skill-cat__title">${cat.title}</h3>
      <div class="skill-cat__tags">
        ${cat.items.map(item => `<span class="tag">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderProcess() {
  const wrap = document.getElementById("processSteps");
  wrap.innerHTML = workProcess.map(step => `
    <div class="process-step">
      <div class="process-step__head">
        <span class="process-step__num">${step.step}</span>
        <div class="process-step__icon"><i class="fa-solid ${step.icon}"></i></div>
      </div>
      <div>
        <h4 class="process-step__title">${step.title}</h4>
        <p class="process-step__desc">${step.description}</p>
      </div>
    </div>
  `).join("");
}

function renderResponsibilities() {
  const wrap = document.getElementById("responsibilities");
  wrap.innerHTML = responsibilities.map((r, i) => `
    <div class="resp">
      <span class="resp__num">${String(i + 1).padStart(2, "0")}</span>
      <p class="resp__text">${r}</p>
    </div>
  `).join("");
}

function renderProjectCards(containerId, projects) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  wrap.innerHTML = projects.map(p => `
    <div class="project-card">
      <div class="project-card__top">
        <span class="project-card__emoji">${p.emoji}</span>
        <h4 class="project-card__title">${p.title}</h4>
      </div>
      <p class="project-card__desc">${p.description}</p>
      <a class="project-card__link" href="${p.link}" target="_blank" rel="noopener noreferrer">
        Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `).join("");
}

function renderProjects() {
  renderProjectCards("websiteProjects", websiteProjects);
  renderProjectCards("chatbotProjects", chatbotProjects);
}

function renderStrengths() {
  const wrap = document.getElementById("strengths");
  wrap.innerHTML = strengths.map(s => `<span class="tag-static">${s}</span>`).join("");
}

/* ---------------- INTERACTIONS ---------------- */

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => observer.observe(item));
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:bilalali0905@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderProjects();
  renderSkills();
  renderProcess();
  renderResponsibilities();
  renderStrengths();
  initNavbarScroll();
  initRevealOnScroll();
  initContactForm();
});
