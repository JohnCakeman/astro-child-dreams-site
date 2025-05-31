import { Send } from "lucide-react";
const Contacts = () => {
  return <section id="contacts" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto magic-backdrop rounded-3xl p-8 md:p-12 animate-fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-bold magic-text mb-8 font-caveat">
            Остались вопросы?
          </h2>
          
          <p className="text-lg magic-text mb-8 leading-relaxed">Пишите в Telegram! Отвечу на все ваши вопросы о методическом пособии</p>
          
          <div className="space-y-6">
            <a href="https://t.me/+7UrXiA62gZ45NDky" className="magic-button inline-flex items-center space-x-3">
              <Send className="w-6 h-6" />
              <span>Связаться в Telegram</span>
            </a>
            
            <div className="text-center">
              <p className="magic-text mb-2">Телеграм-канал:</p>
              <a href="https://t.me/+7UrXiA62gZ45NDky" className="text-purple-600 hover:text-purple-800 font-semibold underline">
                @astro_children_guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contacts;