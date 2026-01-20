import { Routes } from "./routes";

export const NAV_LINKS = [
    {
        label: "How It Works",
        href: "#workflow",
    },
    {
        label: "Who It's For",
        href: "#who-its-for",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
] as const;

export const footerLinks = {
    product: [
        { label: "Features", href: "#capabilities" },
        { label: "Pricing", href: "#pricing" },
        { label: "Integrations", href: "#integrations" },
        { label: "Documentation", href: "/docs" }
    ],
    resources: [
        { label: "API", href: "/api" },
        { label: "Support", href: "/support" },
        { label: "Contact", href: "/contact" },
        { label: "Status", href: "/status" }
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Privacy", href: "/privacy" }
    ]
};

export const socialLinks = [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" }
];
