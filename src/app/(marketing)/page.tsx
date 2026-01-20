import Background from "@/components/global/background";
import Difference from "@/components/marketing/difference";
import Hero from "@/components/marketing/hero";
// import ComparisonTable from "@/components/marketing/comparison-table"; // REMOVED: Phase 1
// import Hero from "@/components/marketing/hero";
import Workflow from "@/components/marketing/workflow";
import Capibilities from "@/components/marketing/capibilities";
import Integrations from "@/components/marketing/integrations";
import WhoItsFor from "@/components/marketing/who-its-for";
import FAQ from "@/components/marketing/faq";
import Cta from "@/components/marketing/cta";
// import ComparisonTable from "@/components/marketing/comparison-table"; // REMOVED: Phase 1
// import Socials from "@/components/marketing/socials"; // HIDDEN: Phase 1 - Logo grid section
// import WallOfLove from "@/components/marketing/wall-of-love"; // HIDDEN: Phase 1 - Testimonials section

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Difference />
            <Workflow />
            <Capibilities />
            <Integrations />
            {/* <Socials /> */} {/* HIDDEN: Phase 1 - Logo grid "Works seamlessly with" */}
            {/* <ComparisonTable /> */} {/* REMOVED: Phase 1 - "Why Database is a Dirty Word" section */}
            {/* <WallOfLove /> */} {/* HIDDEN: Phase 1 - Testimonials section */}
            <WhoItsFor /> {/* NEW: Phase 3 - "Who It's For" section */}
            <FAQ /> {/* NEW: Phase 3 - FAQ section */}
            <Cta />
        </div>
    );
};

export default HomePage;
