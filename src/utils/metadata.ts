import { Metadata } from "next";

const SITE_URL = "https://www.richiereach.tech";
const SITE_NAME = "Richie Reach";
const DEFAULT_TITLE = "Find Active LinkedIn Leads | Richie Reach";
const DEFAULT_DESCRIPTION =
    "Get prospects who engaged with LinkedIn posts about your topic this week. ICP-filtered, enriched, delivered weekly.";
const OG_IMAGE = `${SITE_URL}/images/hero-image.jpg`;
const DEFAULT_OG_IMAGE_ALT =
    "Richie Reach - LinkedIn engagement signal feed for B2B outbound teams";

export const generateMetadata = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    image = OG_IMAGE,
    canonical = "/",
    openGraphTitle,
    openGraphDescription,
    twitterTitle,
    twitterDescription,
    keywords,
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
    imageAlt = DEFAULT_OG_IMAGE_ALT,
    imageWidth = 1344,
    imageHeight = 768,
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    canonical?: string;
    openGraphTitle?: string;
    openGraphDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    keywords?: Metadata["keywords"];
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => {
    const resolvedCanonical = canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical}`;

    return {
        title,
        description,
        keywords,
        icons,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: resolvedCanonical,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: resolvedCanonical,
            siteName: SITE_NAME,
            title: openGraphTitle ?? title,
            description: openGraphDescription ?? description,
            images: image
                ? [
                    {
                        url: image,
                        width: imageWidth,
                        height: imageHeight,
                        alt: imageAlt,
                    },
                ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: twitterTitle ?? title,
            description: twitterDescription ?? description,
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
    };
};
