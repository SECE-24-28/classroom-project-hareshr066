// Portfolio Configuration
// Modify these values to customize your portfolio

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Haresh R",
        alternateName: "Haresh R",
        course: "B.Tech Artificial Intelligence & Data Science",
        year: "1st Year Student (2025)",
        location: "Tamil Nadu, India",
        careerGoal: "To become a successful businessperson and build impactful AI products."
    },

    // Contact Information (Update with your actual details)
    contact: {
        email: "harish@example.com",
        github: "https://github.com/harishr",
        linkedin: "https://linkedin.com/in/harishr",
        phone: "+91 XXXXX XXXXX" // Optional
    },

    // Typing Animation Texts
    typingTexts: [
        "AI Student",
        "Developer", 
        "Future Businessperson",
        "Tech Enthusiast",
        "Problem Solver",
        "Data Scientist"
    ],

    // Skills with proficiency levels (0-100)
    skills: [
        { name: "Python", level: 85, icon: "fab fa-python" },
        { name: "C Programming", level: 80, icon: "fas fa-code" },
        { name: "HTML, CSS, JavaScript", level: 60, icon: "fab fa-html5" },
        { name: "Data Science", level: 75, icon: "fas fa-chart-line" },
        { name: "NLP", level: 70, icon: "fas fa-brain" },
        { name: "STL in C++", level: 65, icon: "fas fa-cogs" },
        { name: "DSA & Competitive Programming", level: 70, icon: "fas fa-trophy" }
    ],

    // Projects
    projects: [
        {
            title: "AI Finance Assistant",
            description: "Intelligent financial advisor built with Python, providing personalized investment recommendations and budget analysis using machine learning algorithms.",
            technologies: ["Python", "ML", "Finance"],
            icon: "fas fa-chart-pie",
            github: "", // Add your GitHub link
            demo: ""    // Add demo link if available
        },
        {
            title: "Virtual Therapy Assistant",
            description: "AI-powered mental health companion designed to help users manage anxiety through conversational therapy and mood tracking.",
            technologies: ["NLP", "Python", "Healthcare"],
            icon: "fas fa-heart",
            github: "",
            demo: ""
        },
        {
            title: "HealthifyMe Web App Clone",
            description: "Full-stack fitness tracking application with calorie counting, workout plans, and progress monitoring features.",
            technologies: ["Web Dev", "JavaScript", "Health"],
            icon: "fas fa-dumbbell",
            github: "",
            demo: ""
        },
        {
            title: "PDF Query Retrieval System",
            description: "Document search and retrieval system using MongoDB Atlas for efficient PDF content indexing and natural language queries.",
            technologies: ["MongoDB", "NLP", "Search"],
            icon: "fas fa-file-pdf",
            github: "",
            demo: ""
        },
        {
            title: "INGRES Virtual Assistant",
            description: "Smart India Hackathon project - Intelligent virtual assistant for government services with voice recognition and automated query resolution.",
            technologies: ["AI", "Voice Tech", "Gov Tech"],
            icon: "fas fa-robot",
            github: "",
            demo: ""
        },
        {
            title: "HackRx 6.0 GenAI Project",
            description: "Generative AI solution developed for HackRx 6.0, focusing on innovative applications of large language models for business automation.",
            technologies: ["GenAI", "LLM", "Innovation"],
            icon: "fas fa-magic",
            github: "",
            demo: ""
        }
    ],

    // Achievements
    achievements: [
        {
            title: "HackRx 6.0 GenAI Hackathon",
            description: "Participated in one of India's premier GenAI hackathons, developing innovative solutions using cutting-edge AI technologies.",
            icon: "fas fa-trophy"
        },
        {
            title: "Smart India Hackathon (PS25066)",
            description: "Selected participant in Smart India Hackathon, working on government problem statement PS25066 with innovative tech solutions.",
            icon: "fas fa-flag-india"
        },
        {
            title: "Qubitron Quiz (CIT)",
            description: "Participated in technical quiz competition at Chennai Institute of Technology, demonstrating knowledge in emerging technologies.",
            icon: "fas fa-brain"
        },
        {
            title: "Event Organization & Business Interest",
            description: "Actively involved in organizing technical events and developing business acumen through various entrepreneurial initiatives.",
            icon: "fas fa-users"
        }
    ],

    // Theme Colors (CSS Custom Properties)
    theme: {
        primaryGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        secondaryGradient: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
        accentColor: "#00f5ff",
        secondaryAccent: "#ff00ff",
        textColor: "#ffffff"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}