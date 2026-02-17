import { Metadata } from "next";

const SITE_URL = "https://richiereach.tech";
const SITE_NAME = "Richie Reach";
const DEFAULT_TITLE = "Find Active LinkedIn Leads | Richie Reach";
const DEFAULT_DESCRIPTION =
    "Get prospects who engaged with LinkedIn posts about your topic this week. ICP-filtered, enriched, delivered weekly.";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const generateMetadata = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    image = OG_IMAGE,
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/icon.svg"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/icon.svg"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: SITE_NAME,
        title,
        description,
        images: image
            ? [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: "Richie Reach — LinkedIn Engagement Leads for Outbound Teams",
                },
            ]
            : [],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : [],
    },
    robots: noIndex
        ? { index: false, follow: false }
        : {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
});
