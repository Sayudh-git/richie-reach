import { existsSync, readFileSync } from "node:fs";

const BASE_URL = "https://www.richiereach.tech";

function loadEnvLocal() {
    if (!existsSync(".env.local")) {
        return;
    }

    const envFile = readFileSync(".env.local", "utf8");

    for (const line of envFile.split(/\r?\n/)) {
        const match = line.match(/^([A-Z0-9_]+)=(.*)$/);

        if (!match) {
            continue;
        }

        const [, key, value] = match;
        process.env[key] = process.env[key] || value;
    }
}

loadEnvLocal();

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "";

const ALL_URLS = [
    "/",
    "/how-it-works",
    "/about",
    "/methodology",
    "/pricing",
    "/what-is-signal-led-outbound",
    "/linkedin-engagement-leads",
    "/richie-reach-vs-static-databases",
    "/for-agencies",
    "/for-sdr-teams",
    "/for-saas",
    "/integrations/clay",
    "/integrations/hubspot",
    "/alternatives/trigify",
    "/alternatives/phantombuster",
    "/signal-feed-explained",
    "/outbound-glossary",
    "/signal-led-vs-account-based",
    "/how-to-use-linkedin-for-outbound",
    "/blog",
    "/blog/filter-before-enrichment",
    "/blog/what-is-intent-data-b2b",
    "/blog/signal-decay-outbound",
    "/blog/enrichment-waterfall-clay",
    "/blog/weekly-outbound-queue",
    "/blog/b2b-outbound-timing-problem",
    "/blog/cold-email-deliverability-list-quality",
    "/blog/icp-filtering-outbound",
    "/blog/linkedin-comment-leads-quality",
    "/blog/outbound-without-spray-and-pray",
    "/blog/why-cold-email-gets-no-replies",
    "/blog/outbound-stack-early-stage-startup",
    "/blog/how-to-find-high-intent-linkedin-prospects",
    "/blog/is-apollo-enough-or-do-you-need-intent-data",
    "/blog/how-to-personalize-cold-email-at-scale",
    "/blog/do-you-need-trigify-or-is-clay-enough",
    "/blog/outbound-attribution-hubspot",
    "/blog/sales-triggers-b2b-outbound",
].map((path) => `${BASE_URL}${path}`);

async function submitUrls(urls: string[]) {
    if (!INDEXNOW_KEY) {
        throw new Error("INDEXNOW_KEY is missing. Add it to .env.local first.");
    }

    const payload = {
        host: "www.richiereach.tech",
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
    });

    console.log(`Submitted ${urls.length} URLs. Status: ${response.status}`);

    if (response.status !== 200 && response.status !== 202) {
        const text = await response.text();
        console.error("Response:", text);
    }
}

submitUrls(ALL_URLS).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
