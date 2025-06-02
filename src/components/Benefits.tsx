import { Star } from "lucide-react";
const Benefits = () => {
  const benefits = ["Авторская методика, проверенная на практике", "Пошаговые техники для всех возрастов", "Глубокий разбор негармоничных аспектов", "Практические рекомендации для реальных ситуаций", "Пожизненный доступ к PDF-материалам", "Подходит для специалистов и родителей"];
  return <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto magic-backdrop rounded-3xl p-8 md:p-12 animate-fade-in bg-[#cfc5dd]/85">
          <h2 className="text-3xl md:text-4xl font-bold magic-text mb-12 text-center font-caveat">
            Почему выбирают это пособие?
          </h2>
          
          <div className="grid gap-6">
            {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-purple-50/50 hover:bg-purple-100/50 transition-colors duration-300">
                <Star className="w-6 h-6 text-purple-600 flex-shrink-0 twinkling-star" />
                <p className="text-lg magic-text">{benefit}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;