import { Link } from "react-router-dom";
import { ArrowRight, Anchor, Ship, Fuel, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-ship.jpg";
import dryBulker from "@/assets/dry-bulker.jpg";
import carCarrier from "@/assets/car-carrier.jpg";
import lngCarrier from "@/assets/lng-carrier.jpg";
import businessDev from "@/assets/business-dev.jpg";

const services = [
  { title: "Dry Bulkers", image: dryBulker, icon: Ship },
  { title: "Car Carriers", image: carCarrier, icon: Anchor },
  { title: "LNG Carriers", image: lngCarrier, icon: Fuel },
  { title: "Business Development", image: businessDev, icon: Briefcase },
];

const missions = [
  { letter: "C", text: "Contribute to the global development of MOL Group" },
  { letter: "T", text: "Take an active and constructive role in pushing forward the interests of MOL Group" },
  { letter: "E", text: "Ensure our business activities help in the advancement of Indonesia" },
  { letter: "R", text: "Remain committed to the principles of ESG (Environment, Social and Governance) in all our business activities" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 text-sm uppercase tracking-[0.3em] mb-4 animate-fade-up font-sans font-medium">
            MOL Indonesia · PT MOL Ship Agency Indonesia · PT MOL Gas Maritime Solutions Indonesia
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            From the Oceans, We Provide a Prosperous Future
          </h1>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-mol-ocean transition-colors"
            >
              Services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* News Release */}
      <section className="section-gradient py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl font-display font-bold text-foreground">News Release</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-primary transition-colors border-l-2 border-primary pl-4 py-1">
                01/03/2023 – PT MOL Blue Ocean Indonesia, a subsidiary company of MOL Group has been announced on March 1, on the coast of Bali, Indonesia, it unveiled a marine debris collection ship.
              </a>
              <a href="#" className="block hover:text-primary transition-colors border-l-2 border-primary pl-4 py-1">
                01/03/2023 – Teaming up with Turtle Hatchery on Marine Debris Collection Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-mol-blue-light font-medium mb-3">An Agent of Mitsui O.S.K. Lines, Ltd.</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">PT MOL INDONESIA</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mitsui O.S.K. Lines, Ltd. (MOL) is a multimodal transportation shipping group that meets diverse transport needs with one of the world's largest merchant fleets and a comprehensive approach to safety.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To further contribute to economic growth, the MOL Group works toward its ideal on the global stage: becoming an excellent and resilient company that leads the worldwide shipping industry.
              </p>
              <Link
                to="/corporate-profile"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-mol-ocean transition-colors"
              >
                Company Profile <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {missions.map((m) => (
                <div key={m.letter} className="bg-secondary rounded-lg p-5">
                  <span className="text-3xl font-display font-bold text-mol-blue-light">{m.letter}</span>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-mol-navy" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-12">
            PT MOL INDONESIA<br />Mission Statement
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {missions.map((m) => (
              <div key={m.letter} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-lg p-6 text-left">
                <span className="text-4xl font-display font-bold text-mol-blue-light">{m.letter}</span>
                <p className="text-primary-foreground/80 text-sm mt-3 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                to="/services"
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <img src={svc.image} alt={svc.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-mol-navy/90 via-mol-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <svc.icon size={24} className="text-mol-blue-light mb-2" />
                  <h3 className="text-lg font-display font-semibold text-primary-foreground">{svc.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
