import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Richie Reach",
        short_name: "Richie Reach",
        description: "LinkedIn engagement leads for outbound teams. ICP-filtered, enriched, delivered weekly.",
        start_url: "/",
        display: "standalone",
        background_color: "#0A0A0A",
        theme_color: "#0A0A0A",
        icons: [
            {
                src: "/icons/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
