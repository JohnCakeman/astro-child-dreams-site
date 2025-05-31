
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative">
      {/* Content overlay */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto magic-backdrop rounded-3xl p-8 md:p-12 animate-fade-in bg-[#b49fc5]/[0.51]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold magic-text mb-6 font-caveat leading-tight">
            Детская Астрология: Основы компенсаторики и гармонизации от А до Я
          </h1>
          
          <p className="text-lg md:text-xl magic-text mb-8 max-w-3xl mx-auto leading-relaxed">
            Помогите ребенку раскрыть свой потенциал, опираясь на знания астрологии 
            и проверенные методики компенсации
          </p>
          
          <a href="https://t.me/+7UrXiA62gZ45NDky" className="magic-button inline-block animate-glow">
            Купить пособие
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
