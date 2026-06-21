// Global PrimeVerse PDF Guides Configuration
const CONFIG = {
    // Modify, add or remove guides here. Everything is updated automatically!
    guides: [
        {
            id: "1",
            badgeText: "VIP ARCHITECTURE",
            title: "Beginner Trading Roadmap",
            author: "GANESH KUMAR",
            detailsTitle: 'The Ultimate <br> <span class="gold-text">Trading Plan</span> Manual',
            description: "Stop trading randomly. This detailed guide reveals the exact architectural framework used to identify patterns, manage high-leverage risk, and align entries systematically with long-term execution consistency.",
            originalPrice: "INR ₹999",
            discountPrice: "INR ₹0",
            driveLink: "https://drive.google.com/file/d/1juxE7t24gmPKs6jnmtg_KvBJv4b39s9h/view?usp=drive_link",
            tableName: "Beginner Trading Roadmap",
            ctaId: "ctaTradingPlan",
            alternate: false,
            // SVG line chart coordinates for book cover
            chartPath: "M 0,40 L 15,35 L 30,45 L 50,15 L 65,30 L 80,5 L 100,20",
            circleCx: "80",
            circleCy: "5"
        },
        {
            id: "2",
            badgeText: "SYSTEM GUIDE",
            title: "Trading journal template",
            author: "GANESH KUMAR",
            detailsTitle: 'Mastering <br> <span class="gold-text">Trading journal template</span>',
            description: "Eliminate emotional trading errors. Learn the psychological framework and mathematical logic required to process stop losses cleanly, protect capital, and hold trades patiently until they hit your take-profit targets.",
            originalPrice: "INR ₹4999",
            discountPrice: "INR ₹0",
            driveLink: "execution-journal.html",
            tableName: "Trading journal template",
            ctaId: "ctaSlTp",
            alternate: true,
            // SVG line chart coordinates for book cover
            chartPath: "M 0,15 L 20,10 L 40,35 L 55,32 L 80,5 L 100,8",
            circleCx: "80",
            circleCy: "5"
        },
        {
            id: "3",
            badgeText: "ACTION BLUEPRINT",
            title: "Trader's Goal<br>Setting Guide",
            author: "GANESH KUMAR",
            detailsTitle: 'The Strategic <br> <span class="gold-text">Goal Setting</span> Blueprint',
            description: "Structure your path to consistency. Build a routine-driven routine, define key trading milestones, establish a habit tracking process, and align daily actions with long-term execution growth.",
            originalPrice: "INR ₹999",
            discountPrice: "INR ₹0",
            driveLink: "https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID_3/view?usp=sharing",
            tableName: "goal_setting_leads",
            ctaId: "ctaGoal",
            alternate: false,
            // SVG line chart coordinates for book cover
            chartPath: "M 0,45 L 20,35 L 40,38 L 60,25 L 80,12 L 100,5",
            circleCx: "100",
            circleCy: "5"
        }
    ],
    // Supabase Configuration block. Replace with your actual database details!
    supabase: {
        url: "https://syjsyoqhgwtuskbzrald.supabase.co",
        anonKey: "sb_publishable_B5D2lqYKeXpR9QgsY-IJLQ_LCR9Ssjv",
        masterTable: "all_leads"
    }
};
