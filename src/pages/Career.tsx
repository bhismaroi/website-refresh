import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Mail } from "lucide-react";
import corporateHero from "@/assets/corporate-hero.jpg";

const Career = () => {
  return (
    <Layout>
      <PageHero title="Career" backgroundImage={corporateHero} />

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Why Join Us?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            PT MOL Indonesia (MOLINDO) is the agent of Mitsui O.S.K. Lines Ltd., a multi modal transport group which based in Tokyo, Japan. Currently, MOLINDO is currently based at Jakarta. Our corporate culture is dynamic, creative, and innovative as well as providing many and vary career opportunities. Discover the possibilities of joining us!
          </p>

          <div className="bg-secondary rounded-xl p-8 mb-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Current Open Positions</h3>
            <p className="text-muted-foreground">—</p>
            <p className="text-sm text-muted-foreground mt-2">No open positions at the moment. Please check back later.</p>
          </div>

          <div className="flex items-center gap-3 bg-mol-sky rounded-xl p-6">
            <Mail size={24} className="text-primary flex-shrink-0" />
            <div>
              <p className="font-sans font-medium text-foreground">Send your CV/Resume to:</p>
              <a href="mailto:IDADM@molgroup.com" className="text-primary hover:underline font-medium">IDADM@molgroup.com</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
