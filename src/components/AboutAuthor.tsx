const AboutAuthor = () => {
  return <section id="author" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto magic-backdrop rounded-3xl p-8 md:p-12 animate-fade-in bg-[#cfc5dd]/85">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <img src="/lovable-uploads/7e7d6bef-82f0-47c8-a230-153e206fdaa1.png" alt="Лолита Никольская" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover floating-element" style={{
              boxShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
              border: '4px solid rgba(255, 255, 255, 0.8)'
            }} />
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold magic-text mb-6 font-caveat">
                Лолита Никольская — ваш проводник в мир детской астрологии
              </h2>
              
              <div className="space-y-6 text-lg magic-text leading-relaxed">
                <p>
                  "Как профессиональный астролог с многолетним опытом работы с родителями и детьми, 
                  я разработала уникальную методику компенсаторики, которая позволяет не только понять 
                  характер вашего ребёнка, но и помочь ему гармонично развиваться."
                </p>
                
                <p className="italic">
                  "Компенсация — это целенаправленное осознанное обретение нового опыта, который 
                  изменяет воспитанные и врожденные установки. Истощение — как сигнал. 
                  Наполнение и спокойствие — как индикатор."
                </p>
                
                <p className="font-semibold">
                  Сертифицированный детский астролог
                </p>
                
                <a href="https://t.me/+7UrXiA62gZ45NDky" className="inline-block magic-button">
                  Телеграм-канал
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutAuthor;