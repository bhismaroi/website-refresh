import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import corporateHero from "@/assets/corporate-hero.jpg";

const history = [
  { year: "1993", text: "PT Mitsui O.S.K Lines Indonesia established." },
  { year: "1994", text: "PT Mitsui O.S.K Lines Indonesia started operations." },
  { year: "2018", text: "Container business was transferred to PT Ocean Network Express (ONE)." },
  { year: "2019", text: "Corporate name change to PT MOL INDONESIA." },
  { year: "2025", text: "Company restructuring: agency business managed by PT MOL Ship Agency Indonesia, ship management by PT MOL Indonesia, and LNG sector by PT MOL Gas Maritime Solutions Indonesia." },
];

const missionStatements = [
  "Contribute to the global development of the MOL Group",
  "Take an active and constructive role in pushing forward the interests of the MOL Group",
  "Ensure our business activities help in the advancement of Indonesia",
  "Remain committed to the principles of ESG (Environment, Social and Governance) in all our business activities",
];

const charts = [
  { letter: "C", word: "hallenge", desc: "Innovate through insight", details: ["Proactively develop business opportunities by staying ahead of the curve.", "Make innovation for the further growth of the company."] },
  { letter: "H", word: "onesty", desc: "Do the right thing", details: ["Keep compliance as a Top Priority.", "Ensure that actions comply with social norms and the highest ethical standards."] },
  { letter: "A", word: "ccountability", desc: "Commit to acting with a sense of ownership", details: ["Tackle tasks with a sense of ownership and in cooperation with stakeholders."] },
  { letter: "R", word: "eliability", desc: "Earn trust through each task", details: ["Establish a trustworthy track record through one's daily actions."] },
  { letter: "T", word: "eamwork", desc: "Seek the best outcome through collaboration", details: ["Emphasize teamwork, embrace diversity and leverage individual competence."] },
  { letter: "S", word: "afety", desc: "Always think safety first", details: ["Ensure safety is always the highest priority.", "Safety is the foundation of our business."] },
];

const CorporateProfile = () => {
  return (
    <Layout>
      <PageHero title="Corporate Profile" backgroundImage={corporateHero} />

      {/* About */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">About</h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>PT MOL Indonesia (the Company), formerly named PT Mitsui O.S.K.Lines Indonesia, was established based on notarial deed No.93 of Lieke Lianadevi Tukgali, SH dated April 13, 1993, which was amended by deed No. 113 of the same notary dated June 30, 1993.</p>
            <p>Based on notarial deed of Felix Fransiscus Xaverius Handojo, SH No.7 dated May 6, 2019, the Company changed its name from PT Mitsui O.S.K. Lines Indonesia to PT MOL Indonesia.</p>
            <p>The Company is domiciled in Jakarta and started its commenced operations in 1994. In accordance with the Company's Articles of Association, the scope of the Company's activities mainly comprise of voyage industry operations, for both onshore and offshore and ocean freight business.</p>
            <p>Mitsui O.S.K. Lines, Ltd. (MOL) is a global corporate group that develops various social infrastructure businesses – centering on ocean shipping, technologies, and services to meet ever-changing social needs including environmental protection.</p>
            <p>The MOL Group aims to be a strong and resilient corporate group, improving daily life for people around the world, opening up bright new horizons, and providing new value to all stakeholders.</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10">History</h2>
          <div className="relative border-l-2 border-primary pl-8 space-y-8">
            {history.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[2.6rem] top-0 w-5 h-5 rounded-full bg-primary border-4 border-mol-sky" />
                <span className="text-lg font-display font-bold text-mol-blue-light">{item.year}</span>
                <p className="text-muted-foreground mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOLINDO Mission Statement */}
      <section className="py-16 bg-mol-navy">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-8">MOLINDO Mission Statement</h2>
          <ul className="space-y-3">
            {missionStatements.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-primary-foreground/80">
                <span className="text-mol-blue-light mt-1">▸</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Corporate Mission */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Corporate Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h4 className="font-sans font-semibold text-foreground">Group Mission</h4>
              <p className="flex items-start gap-2"><span className="text-mol-blue-light">▸</span> From the blue oceans, we sustain people's lives and ensure a prosperous future</p>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground">Group Vision</h4>
              <p className="flex items-start gap-2"><span className="text-mol-blue-light">▸</span> We will develop a variety of social infrastructure businesses in addition to traditional shipping businesses, and will meet the evolving social needs including environmental conservation, with innovative technology and services. MOL group aims to be a strong and resilient corporate group that provides new value to all stakeholders and grows globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MOL CHARTS */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center">
            MOL Group Values: MOL <span className="text-mol-blue-light">CHARTS</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {charts.map((c) => (
              <div key={c.letter} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-baseline gap-0.5 mb-2">
                  <span className="text-3xl font-display font-bold text-mol-blue-light">{c.letter}</span>
                  <span className="text-lg font-display font-semibold text-foreground">{c.word}</span>
                </div>
                <p className="text-sm font-sans font-medium text-foreground mb-2">{c.desc}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {c.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-mol-blue-light mt-0.5">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateProfile;
