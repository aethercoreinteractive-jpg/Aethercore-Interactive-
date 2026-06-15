// Define your section order here (Lower number = Higher up)
const categoryOrder = {
    "Editors Choice": 1,
    "Games": 3,
    "Apps": 4,
    "Student Utilities": 2
};

const aetherCoreApps = [
    // --- Editors Choice ---
    { 
    id: 1.1, 
    category: "Editors Choice", 
    title: "Page Forge", 
    logo: "Pageforge-Logo.png", 
    description: "Transform your images into professional PDF documents (Image to PDF) with Page Forge.\n\nIdeal for:\n• Work & Business: Scanning invoices, receipts, and contracts.\n• Students: Digitizing notes, assignments, and study materials.\n• Personal Use: Archiving IDs, medical documents, or creating digital albums.", 
    preview: ["Pageforge-1.png", "Pageforge-2.png", "Pageforge-3.png", "Pageforge-4.png", "Pageforge-5.png"], 
    url: "https://sharanmusician.com/Page-Forge/",
    rating: "5/5"
    },
    { 
        id: 1.2, 
        category: "Editors Choice", 
        title: "Resume Architect", 
        logo: "assets/resume-logo.png", 
        description: "Build professional resumes.", 
        preview: ["assets/resume-prev1.jpg"], 
        url: "#",
        rating: "4/5"
    },

    // --- Games ---
    { 
        id: 2.1, 
        category: "Games", 
        title: "Brainstorm Quiz", 
        logo: "assets/quiz-logo.png", 
        description: "Test your skills.", 
        preview: ["assets/quiz-prev1.jpg"], 
        url: "#",
        rating: "5/5"
    },
    { 
        id: 2.2, 
        category: "Games", 
        title: "Neon Racer", 
        logo: "assets/calc-logo.png", 
        description: "High-speed arcade action.", 
        preview: ["assets/calc-prev1.jpg"], 
        url: "#",
        rating: "4/5"
    },

    // --- Apps ---
    { 
        id: 3.1, 
        category: "Apps", 
        title: "Scientific Calculator", 
        logo: "ScientificLogo.png", 
        description: "Advanced engineering tool.", 
        preview: ["assets/calc-prev1.jpg"], 
        url: "#",
        rating: "5/5"
    },
    { 
        id: 3.2, 
        category: "Apps", 
        title: "Exam Result Portal", 
        logo: "assets/results-logo.png", 
        description: "Check results.", 
        preview: ["assets/results-prev1.jpg"], 
        url: "#",
        rating: "4/5"
    },

    // --- Student Utilities---
    { 
        id: 4.1, 
        category: "Student Utilities", 
        title: "Unidesk", 
        logo: "UnideskLogo.png", 
        description: "Simplify your academic life with Unidesk, the all-in-one student utility suite by Aethercore Interactive.\n\nIdeal for:\n• Daily Organization: Tracking exam schedules, monitoring result updates, and managing your academic timetable.\n• Productivity: Accessing essential tools like PDF-to-image converters and document handlers.\n• All-in-One Management: Centralizing every student need—from routine tasks to critical academic announcements—in one seamless interface.", 
        preview: ["Unidesk-1.jpg", "Unidesk-2.jpg", "Unidesk-3.jpg", "Unidesk-4.jpg", "Unidesk-5.jpg", "Unidesk-6.jpg"], 
        url: "https://rrbmusics-afk.github.io/Unidesk/",
        rating: "5/5"
    },
    { 
        id: 4.2, 
        category: "Student Utilities", 
        title: "Scientific Calci", 
        logo: "ScientificLogo.png", 
        description: "Solve complex equations and master technical precision with Scientific Calci (Scientific Calculator).\n\nIdeal for:\n• STEM Professionals: Handling advanced calculus, statistical modeling, and intricate engineering equations.\n• Students: Mastering physics, chemistry, and mathematics with reliable, high-speed computation for assignments and exams.\n• Technical Projects: Streamlining unit conversions, data analysis, and professional-grade measurements.", 
        preview: ["Scientific-1.png", "Scientific-calculator.jpg"], 
        url: "https://sharanmusician.com/Scientific-calculator-/",
        rating: "4/5"
    },
     { 
        id: 4.3, 
        category: "Student Utilities", 
        title: "Cutoff Calci", 
        logo: "CutoffLogo.png", 
        description: "Determine your engineering college admission prospects with TNEA Cutoff Calculator.\n\nIdeal for:\n• Prospective Students: Estimating admission chances based on historical cutoff trends and your specific community rank.\n• Career Planning: Comparing seat availability across top-tier institutions to build an optimized preference list.\n• Admission Strategy: Analyzing last-year opening and closing ranks to make data-driven decisions for TNEA counseling.", 
        preview: ["Scientific-1.png", "Scientific-calculator.jpg"], 
        url: "https://rrbmusics-afk.github.io/Cutoff-Calculator/",
        rating: "4/5"
    },
    { 
        id: 4.4, 
        category: "Student Utilities", 
        title: "CGPA Calci", 
        logo: "CPGA-Logo.png", 
        description: "Calculate your academic standing with precision using CGPA Calci (CGPA Calculator).\n\nIdeal for:\n• Engineering Students: Tracking semester-wise performance, calculating credit-weighted averages, and forecasting final degree grades.\n• Academic Planning: Managing complex grading scales, lab-to-theory credit ratios, and GPA requirements for internships.\n• Degree Tracking: Monitoring progress toward graduation requirements and identifying subjects needing performance improvement.",
        preview: ["CGPA-1.png", "CGPA-2.jpg"], 
        url: "https://rrbmusics-afk.github.io/CGPA-Calculator/",
        rating: "4/5"
    },
    { 
        id: 4.5, 
        category: "Student Utilities", 
        title: "12th % Calci", 
        logo: "12%Logo.png", 
        description: "Calculate your academic standing instantly with the 12th Percentage Calculator.\n\nIdeal for:\n• Students: Converting board exam marks into accurate percentage scores for college admissions.\n• Application Processes: Quickly verifying eligibility for university entrance requirements and scholarship criteria.\n• Academic Planning: Easily evaluating your performance across different subjects and board-specific grading systems.",
        preview: ["12%-1.png", "12%-2.jpg"], 
        url: "https://rrbmusics-afk.github.io/Percentage-calculator/",
        rating: "5/5"
    }
];
