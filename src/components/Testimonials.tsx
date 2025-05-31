
import { useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Анна Петрова",
      city: "Москва",
      role: "Астролог",
      text: "Методика Лолиты изменила мою практику! Теперь я могу давать родителям конкретные рекомендации, которые действительно работают. Дети становятся спокойнее, а родители благодарны.",
      avatar: "👩‍🦰"
    },
    {
      name: "Елена Смирнова",
      city: "Санкт-Петербург",
      role: "Мама двоих детей",
      text: "Наконец-то я поняла, почему мой сын такой активный! Благодаря пособию нашла способы направить его энергию в нужное русло. Отношения в семье стали гармоничнее.",
      avatar: "👩‍💼"
    },
    {
      name: "Марина Козлова",
      city: "Екатеринбург",
      role: "Астролог-консультант",
      text: "Профессиональный подход к детской астрологии! Техники компенсации работают удивительно эффективно. Рекомендую всем коллегам, кто работает с семьями.",
      avatar: "👩‍🏫"
    },
    {
      name: "Ольга Васильева",
      city: "Новосибирск",
      role: "Психолог-астролог",
      text: "Глубокая проработка каждой планеты в детской карте. Особенно ценны практические примеры и возрастные особенности. Это настоящий профессиональный инструмент.",
      avatar: "👩‍⚕️"
    },
    {
      name: "Татьяна Иванова",
      city: "Казань",
      role: "Мама-одиночка",
      text: "Пособие помогло мне лучше понять дочь-подростка. Теперь знаю, как поддержать её в сложный период. Конфликтов стало меньше, понимания больше.",
      avatar: "👩‍💻"
    },
    {
      name: "Светлана Морозова",
      city: "Ростов-на-Дону",
      role: "Многодетная мама",
      text: "У меня трое детей, все разные. Методика помогла найти подход к каждому. Особенно благодарна за разбор сложных аспектов и способы их гармонизации.",
      avatar: "👩‍👧‍👦"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold magic-text mb-12 text-center font-caveat">
          Отзывы астрологов и родителей
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card text-center">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <h4 className="text-xl font-bold magic-text mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-600 mb-2">{testimonial.city}</p>
                    <p className="text-sm text-purple-500 mb-6">{testimonial.role}</p>
                    <p className="text-lg magic-text leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex justify-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-purple-200 hover:bg-purple-300 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <span className="text-purple-800 font-bold">←</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-purple-200 hover:bg-purple-300 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <span className="text-purple-800 font-bold">→</span>
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
