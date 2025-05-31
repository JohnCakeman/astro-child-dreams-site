
import { Send } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto magic-backdrop rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold magic-text mb-6 font-caveat">
                Стоимость
              </h2>
              <div className="text-4xl md:text-5xl font-bold magic-text mb-4">
                3999₽
              </div>
              <p className="text-lg magic-text leading-relaxed">
                Разовая покупка, PDF-файл навсегда, поддержка автора.
              </p>
            </div>
            
            <div className="text-center">
              <a
                href="https://t.me/+7UrXiA62gZ45NDky"
                className="magic-button inline-flex items-center space-x-3 text-xl px-12 py-6"
              >
                <Send className="w-6 h-6" />
                <span>Купить</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
