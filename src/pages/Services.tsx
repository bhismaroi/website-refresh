import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import corporateHero from "@/assets/corporate-hero.jpg";
import fsru from "@/assets/fsru.jpg";
import carCarrier from "@/assets/car-carrier.jpg";
import dryBulker from "@/assets/dry-bulker.jpg";
import businessDev from "@/assets/business-dev.jpg";

const Services = () => {
  return (
    <Layout>
      <PageHero title="Services" backgroundImage={corporateHero} />

      {/* LNG and Offshore */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-sm uppercase tracking-widest text-mol-blue-light font-medium mb-2">MOL Indonesia</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">LNG and Offshore Carrier</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MOL Indonesia (MOLI) also operates as a local ship management company in Indonesia, providing ship management services for Indonesian-flag LNG carriers and/or offshore assets. MOLI ensures that vessel operations are conducted in compliance with Indonesian regulations, while maintaining high standards of safety and operational excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MOLI develops its energy transport business on a worldwide scale, backed by the world's largest fleet, a track record of success, and decades of know-how. The company focuses on enhancing the quality of its fleet and providing the most up-to-date seafarer education and training in energy transport sectors including crude oil and LNG, which require advanced technological capabilities.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-display font-semibold text-foreground">Operating Vessels in Indonesia</h4>
              <figure className="rounded-xl overflow-hidden shadow-md">
                <img src={fsru} alt="FSRU Jawa Satu" className="w-full h-auto" />
                <figcaption className="bg-secondary px-4 py-2 text-sm text-muted-foreground text-center">FSRU Jawa Satu / Arunika Jaya</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Business Development */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Business Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                MOL future plans as development encompasses a wide scope of ideas, activities, and initiatives that management implement with the goal of making the MOL business better. Remain committed to the principles of ESG (Environment, Social and Governance) in business activities. MOL will contribute to enhancing the implementation and sustainability.
              </p>
            </div>
            <img src={businessDev} alt="Business Development" className="rounded-xl shadow-md w-full h-auto" />
          </div>
        </div>
      </section>

      {/* PT MOL Shipping Agency Indonesia */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center">PT MOL Ship Agency Indonesia</h2>

          {/* Car Carriers */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">Car Carriers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In our car carrier operations, we offer services that precisely meet the diversified transport needs and distribution patterns of today's automobile manufacturers. MOL, as a pioneer with a half century of success, provides comprehensive, top-quality, local market-oriented services.
              </p>
              <h4 className="font-sans font-semibold text-foreground mb-2">Vehicle Import and Export to Indonesia</h4>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>Weekly call to Jakarta</li>
                <li>Loading and discharging operation at the Car Terminal in Tanjung Priuk</li>
                <li>Next generation Car Carriers, FLEXIE series</li>
                <li>Increased number of liftable decks from 2 to 6</li>
                <li>Rounded bow shape to reduce wind resistance, expecting 2% lower CO₂ emissions</li>
              </ul>
            </div>
            <img src={carCarrier} alt="Car Carrier" className="rounded-xl shadow-md w-full h-auto" />
          </div>

          {/* Dry Bulkers */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <img src={dryBulker} alt="Dry Bulker" className="rounded-xl shadow-md w-full h-auto order-2 md:order-1" />
            <div className="order-1 md:order-2">
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">Dry Bulkers</h3>
              <p className="text-muted-foreground leading-relaxed">
                MOL's dry bulker fleet, the largest in the world, offers flexible, reliable services with a full lineup of specialized carriers designed to meet the specific characteristics of different cargoes and conditions at loading and discharging ports. We also have a wide range of versatile bulkers from small to large size, flexibly meeting various trades around the world and providing high-quality transport services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
