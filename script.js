// ===================================
// ReelTech AI - Interactive Functionality
// ===================================

// Sample recommendation data for demo
const sampleRecommendations = [
    {
        interest: "Python Programming",
        recommendation: "Advanced Python Decorators - Complete Guide",
        category: "Programming",
        difficulty: "Intermediate",
        confidence: "92%"
    },
    {
        interest: "Web Development",
        recommendation: "React Hooks Explained in 60 Seconds",
        category: "Frontend",
        difficulty: "Beginner",
        confidence: "88%"
    },
    {
        interest: "Machine Learning",
        recommendation: "Neural Networks from Scratch",
        category: "AI/ML",
        difficulty: "Advanced",
        confidence: "95%"
    },
    {
        interest: "Data Structures",
        recommendation: "Binary Trees Visualization & Implementation",
        category: "DSA",
        difficulty: "Intermediate",
        confidence: "90%"
    },
    {
        interest: "Cloud Computing",
        recommendation: "AWS Lambda Functions Tutorial",
        category: "Cloud",
        difficulty: "Intermediate",
        confidence: "87%"
    }
];

// DOM Elements
const currentReelInput = document.getElementById('currentReel');
const analyzeBtn = document.getElementById('analyzeBtn');
const loading = document.getElementById('loading');
const result = document.getElementById('result');
const interestEl = document.getElementById('interest');
const recommendationEl = document.getElementById('recommendation');
const categoryEl = document.getElementById('category');
const difficultyEl = document.getElementById('difficulty');
const confidenceEl = document.getElementById('confidence');
const contactForm = document.getElementById('contactForm');
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Analyze button click handler
analyzeBtn.addEventListener('click', analyzeContent);

// Also allow Enter key to trigger analysis
currentReelInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        analyzeContent();
    }
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show success message
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);

    // Reset form
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 72; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.problem-card, .team-card, .feature-item, .result-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Main analysis function
function analyzeContent() {
    const inputText = currentReelInput.value.trim();

    // Validate input
    if (!inputText) {
        alert('Please enter or paste a Reel description first!');
        currentReelInput.focus();
        return;
    }

    // Show loading, hide result
    loading.classList.remove('hidden');
    result.classList.add('hidden');

    // Simulate AI processing delay
    setTimeout(() => {
        // Get random recommendation from sample data
        const randomIndex = Math.floor(Math.random() * sampleRecommendations.length);
        const recommendation = sampleRecommendations[randomIndex];

        // Update result display
        interestEl.textContent = recommendation.interest;
        recommendationEl.textContent = recommendation.recommendation;
        categoryEl.textContent = recommendation.category;
        difficultyEl.textContent = recommendation.difficulty;
        confidenceEl.textContent = recommendation.confidence;

        // Hide loading, show result
        loading.classList.add('hidden');
        result.classList.remove('hidden');

    }, 1800); // 1.8 second simulated delay
}

// Add typing effect to hero title on load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
        }, 300);
    }
});

// Console message for developers
console.log('%c ReelTech AI - Built for Hackathon 2026 ', 
    'background: linear-gradient(135deg, #00f5d4, #7b2ff7); color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold;');
console.log('Transform scroll time into learn time! 🚀');
