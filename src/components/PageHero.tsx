interface PageHeroProps {
  title: string;
  backgroundImage: string;
}

const PageHero = ({ title, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground animate-fade-up">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
