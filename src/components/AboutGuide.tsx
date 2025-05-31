
interface AboutGuideProps {
  onPlanetClick: (planet: string) => void;
}

const AboutGuide = ({ onPlanetClick }: AboutGuideProps) => {
  const planets = [
    {
      name: "luna",
      image: "/lovable-uploads/af7af8cc-d266-4704-bb7f-59e3dfb1449a.png",
      title: "Луна"
    },
    {
      name: "sun", 
      image: "/lovable-uploads/c60927f6-34ec-4837-8bc0-674cf6b68565.png",
      title: "Солнце"
    },
    {
      name: "mercury",
      image: "/lovable-uploads/cd2d5a03-72db-4ac6-95df-8d3a720a3bdd.png", 
      title: "Меркурий"
    },
    {
      name: "venus",
      image: "/lovable-uploads/66dce05b-96c4-40ed-b6bc-074012b40633.png",
      title: "Венера"
    },
    {
      name: "mars",
      image: "/lovable-uploads/5fc683b5-f162-4bc8-a8a7-d28db143824a.png",
      title: "Марс"
    }
  ];

  return (
    <section id="about-guide" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto magic-backdrop rounded-3xl p-8 md:p-12 animate-fade-in bg-[#b49fc5]/[0.51]">
          <h2 className="text-3xl md:text-4xl font-bold magic-text mb-8 text-center font-caveat">
            Что внутри пособия
          </h2>
          
          <p className="text-lg md:text-xl magic-text mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Уникальная авторская методика, которая помогает астрологам и родителям глубже понять особенности ребёнка, выявить причины трудностей и подобрать индивидуальные решения для гармонизации. (нажми на планету)
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            {planets.map((planet) => (
              <div 
                key={planet.name} 
                className="text-center group cursor-pointer"
                onClick={() => onPlanetClick(planet.name)}
              >
                <img 
                  src={planet.image} 
                  alt={planet.title}
                  className="planet-icon mx-auto mb-3" 
                />
                <p className="magic-text font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  {planet.title}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <p className="text-lg magic-text mb-8">
              Пособие структурировано по возрастам: 0–3 года, 3–7 лет, подростки.
            </p>
            
            {/* Planets Video */}
            <div className="max-w-full mx-auto rounded-2xl overflow-hidden" style={{
              maxHeight: '400px',
              boxShadow: '0 0 30px rgba(147, 51, 234, 0.2)',
              border: '3px solid rgba(255, 255, 255, 0.6)'
            }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto floating-element"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              >
                <source src="/lovable-uploads/planets.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGuide;
