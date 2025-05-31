import { Star } from "lucide-react";
const ForWhom = () => {
  return <section id="for-whom" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold magic-text mb-12 text-center font-caveat">
      </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="magic-backdrop rounded-3xl p-8 animate-fade-in hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-6">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4 twinkling-star" />
              <h3 className="text-2xl font-bold magic-text font-caveat">
                Для астрологов
              </h3>
            </div>
            <p className="text-lg magic-text leading-relaxed text-center">
              Расширьте свою практику, станьте экспертом, к которому возвращаются. 
              Получите инструмент для глубокой работы с детскими картами и реальными 
              запросами родителей.
            </p>
          </div>
          
          <div className="magic-backdrop rounded-3xl p-8 animate-fade-in hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-6">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4 twinkling-star" />
              <h3 className="text-2xl font-bold magic-text font-caveat">
                Для родителей
              </h3>
            </div>
            <p className="text-lg magic-text leading-relaxed text-center">
              Поймите своего ребёнка, научитесь поддерживать его в сложные периоды, 
              создайте гармонию в семье с помощью астрологических знаний.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ForWhom;