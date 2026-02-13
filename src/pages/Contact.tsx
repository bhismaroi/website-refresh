import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Clock, Mail, Headphones, Info } from "lucide-react";
import corporateHero from "@/assets/corporate-hero.jpg";

const Contact = () => {
  return (
    <Layout>
      <PageHero title="Contact" backgroundImage={corporateHero} />

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Contact</h2>

                <div className="space-y-5">
                  <div>
                    <h3 className="font-sans font-semibold text-foreground uppercase text-sm tracking-wide mb-2">Address</h3>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <p>
                        PT MOL Indonesia<br />
                        Menara Astra 30th Floor<br />
                        Jl. Jenderal Sudirman, Karet Tengsin,<br />
                        Kecamatan Tanah Abang, Kota Jakarta Selatan,<br />
                        Daerah Khusus Ibukota Jakarta 10250
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-foreground uppercase text-sm tracking-wide mb-2">Phone</h3>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone size={18} className="text-primary flex-shrink-0" />
                      <a href="tel:+622186656855" className="hover:text-primary transition-colors">(62-21) 8665 6855</a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-foreground uppercase text-sm tracking-wide mb-2">Business Hours</h3>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm space-y-1">
                        <p>Monday — Thursday: 08.00 – 16.30</p>
                        <p>Friday: 08.00 – 17.00</p>
                        <p>Saturday-Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Email */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-foreground">Send Us a Message</h2>

              <div className="bg-secondary rounded-xl p-6 space-y-5">
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-sm mb-2">Email for business related issues</h3>
                  <a
                    href="mailto:IDPCC@molgroup.com"
                    className="flex items-center gap-3 text-primary hover:underline font-medium"
                  >
                    <Headphones size={18} />
                    IDPCC@molgroup.com
                  </a>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-foreground text-sm mb-2">Email for career related issues</h3>
                  <a
                    href="mailto:IDADM@molgroup.com"
                    className="flex items-center gap-3 text-primary hover:underline font-medium"
                  >
                    <Info size={18} />
                    IDADM@molgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4264e24be51%3A0x92b42d2a1a8a6ca0!2sMenara%20Astra!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Menara Astra Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
