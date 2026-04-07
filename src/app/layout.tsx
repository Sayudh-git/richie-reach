import { base, heading, serif, mono } from "@/constants";
import "@/styles/globals.css";
import { cn, generateMetadata } from "@/utils";
import Providers from "@/components/global/providers";
import FlareCursor from "@/components/global/flare-cursor";
import LoadingScreen from "@/components/global/loading-screen";
import SmoothScroll from "@/components/global/smooth-scroll";
import Script from "next/script";

import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="llms" href="/llms.txt" />
                <link rel="llms-full" href="/llms-full.txt" />
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
                <link rel="preconnect" href="https://app.cal.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.google.com" />
            </head>
            <body
                className={cn(
                    "min-h-dvh bg-background text-foreground font-base antialiased overflow-x-hidden dark",
                    base.variable,
                    heading.variable,
                    serif.variable,
                    mono.variable,
                )}
            >
                <Providers>
                    <LoadingScreen />
                    <FlareCursor />
                    <SmoothScroll>
                        <div className="noise-overlay" aria-hidden="true" />
                        <main className="w-full relative">
                            <Navbar />
                            {children}
                            <Footer />
                        </main>
                    </SmoothScroll>
                </Providers>
                <Script
                    id="cal-embed"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                        Cal("init", "15min", {origin:"https://app.cal.com"});
                        Cal.ns["15min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#18181b"},"dark":{"cal-brand":"#00ff88"}},"hideEventTypeDetails":false,"layout":"month_view"});
                        `
                    }}
                />
                {/* Google Analytics 4 */}
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <>
                        <Script
                            id="ga4-script"
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                        />
                        <Script
                            id="ga4-init"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                                `
                            }}
                        />
                    </>
                )}
                {/* Microsoft Clarity */}
                {process.env.NEXT_PUBLIC_CLARITY_ID && (
                    <Script
                        id="clarity-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");
                            `
                        }}
                    />
                )}
            </body>
        </html >
    );
};
