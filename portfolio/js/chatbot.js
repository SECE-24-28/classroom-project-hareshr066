// AI Chatbot for Harish R Portfolio
class PortfolioChatbot {
    constructor() {
        this.knowledge = {
            personal: {
                name: "Haresh R",
                alternateName: "Haresh R",
                course: "B.Tech Artificial Intelligence & Data Science",
                year: "1st Year Student (2025)",
                location: "Tamil Nadu, India",
                goal: "To become a successful businessperson and build impactful AI products"
            },
            skills: ["Python", "C Programming", "HTML/CSS/JavaScript", "Data Science", "NLP", "STL in C++", "DSA & Competitive Programming"],
            projects: [
                "AI Finance Assistant in Python",
                "Virtual Therapy Assistant for Anxiety",
                "HealthifyMe Web App Clone",
                "PDF Query Retrieval System using MongoDB Atlas",
                "INGRES Virtual Assistant (Smart India Hackathon)",
                "HackRx 6.0 GenAI Project"
            ],
            achievements: [
                "HackRx 6.0 GenAI Hackathon Participant",
                "Smart India Hackathon (PS25066) Participant",
                "Qubitron Quiz (CIT) Participant",
                "Event Organization & Business Interest"
            ]
        };
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createChatbot();
        this.bindEvents();
    }

    createChatbot() {
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <div id="chatbot-toggle" class="chatbot-toggle">
                    <i class="fas fa-robot"></i>
                </div>
                <div id="chatbot-window" class="chatbot-window">
                    <div class="chatbot-header">
                        <h4>Ask about Haresh R</h4>
                        <button id="chatbot-close" class="chatbot-close">&times;</button>
                    </div>
                    <div id="chatbot-messages" class="chatbot-messages">
                        <div class="bot-message">
                            Hi! I'm Haresh's AI assistant. Ask me anything about his skills, projects, or background!
                        </div>
                    </div>
                    <div class="chatbot-input">
                        <input type="text" id="chatbot-input" placeholder="Ask me about Haresh..." />
                        <button id="chatbot-send"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    bindEvents() {
        document.getElementById('chatbot-toggle').addEventListener('click', () => this.toggleChat());
        document.getElementById('chatbot-close').addEventListener('click', () => this.closeChat());
        document.getElementById('chatbot-send').addEventListener('click', () => this.sendMessage());
        document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbot-window');
        window.style.display = this.isOpen ? 'flex' : 'none';
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('chatbot-window').style.display = 'none';
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';
        
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    }

    addMessage(message, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `${sender}-message`;
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateResponse(message) {
        const msg = message.toLowerCase();
        
        // Personal info
        if (msg.includes('name') || msg.includes('who')) {
            return `His name is ${this.knowledge.personal.name}.`;
        }
        
        if (msg.includes('course') || msg.includes('study') || msg.includes('education')) {
            return `He's pursuing ${this.knowledge.personal.course}, currently in his ${this.knowledge.personal.year}.`;
        }
        
        if (msg.includes('location') || msg.includes('where') || msg.includes('from')) {
            return `He's from ${this.knowledge.personal.location}.`;
        }
        
        if (msg.includes('goal') || msg.includes('future') || msg.includes('career')) {
            return `His career goal is: ${this.knowledge.personal.goal}.`;
        }
        
        // Skills
        if (msg.includes('skill') || msg.includes('technology') || msg.includes('programming')) {
            return `His key skills include: ${this.knowledge.skills.join(', ')}.`;
        }
        
        if (msg.includes('python')) {
            return "Yes! Python is one of his strongest skills. He's built several AI projects using Python.";
        }
        
        if (msg.includes('ai') || msg.includes('artificial intelligence')) {
            return "He's passionate about AI! He's studying AI & Data Science and has worked on projects like AI Finance Assistant and Virtual Therapy Assistant.";
        }
        
        // Projects
        if (msg.includes('project')) {
            return `His notable projects include: ${this.knowledge.projects.join(', ')}.`;
        }
        
        if (msg.includes('hackathon')) {
            return "He's participated in major hackathons including HackRx 6.0 GenAI and Smart India Hackathon (PS25066).";
        }
        
        if (msg.includes('finance') || msg.includes('financial')) {
            return "He built an AI Finance Assistant in Python that provides personalized investment recommendations and budget analysis using machine learning.";
        }
        
        if (msg.includes('therapy') || msg.includes('mental health')) {
            return "He created a Virtual Therapy Assistant for anxiety management using NLP and conversational AI techniques.";
        }
        
        // Achievements
        if (msg.includes('achievement') || msg.includes('award') || msg.includes('accomplishment')) {
            return `His achievements include: ${this.knowledge.achievements.join(', ')}.`;
        }
        
        // Contact
        if (msg.includes('contact') || msg.includes('reach') || msg.includes('email')) {
            return "You can contact him through the contact form on this website or check his social media links in the contact section.";
        }
        
        // Experience
        if (msg.includes('experience') || msg.includes('work')) {
            return "As a 1st year student, he's focused on building projects and participating in hackathons to gain practical experience in AI and software development.";
        }
        
        // Default responses
        const defaultResponses = [
            "That's an interesting question! You can find more details about Harish in the different sections of this portfolio.",
            "I'd recommend checking out his projects and achievements sections for more specific information.",
            "Feel free to ask about his skills, projects, education, or career goals!",
            "You can also contact him directly using the contact form if you need more detailed information."
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioChatbot();
});