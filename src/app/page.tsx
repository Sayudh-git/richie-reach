import Background from "@/components/global/background";
import Difference from "@/components/marketing/difference";
import Hero from "@/components/marketing/hero";
import Workflow from "@/components/marketing/workflow";
import Capibilities from "@/components/marketing/capibilities";
import Integrations from "@/components/marketing/integrations";
import WhoItsFor from "@/components/marketing/who-its-for";
import FAQ from "@/components/marketing/faq";
import Cta from "@/components/marketing/cta";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Difference />
            <Workflow />
            <Capibilities />
            <Integrations />
            <WhoItsFor />
            <FAQ />
            <Cta />
        </div>
    );
};

export default HomePage;
