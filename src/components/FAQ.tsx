import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "Для кого это пособие?",
    answer: "Пособие создано для астрологов, которые хотят углубить свои знания в области детской астрологии, и для родителей, стремящихся лучше понять своих детей через призму астрологических знаний."
  }, {
    question: "Нужно ли быть профессиональным астрологом, чтобы использовать пособие?",
    answer: "Нет, пособие адаптировано как для профессионалов, так и для родителей без специального образования. Все техники изложены простым и понятным языком с практическими примерами."
  }, {
    question: "Что я получу после покупки?",
    answer: "Вы получите PDF-файл с полной методикой компенсаторики для детей разных возрастов, практические техники работы с каждой планетой, а также пожизненный доступ к материалам."
  }, {
    question: "Как быстро я увижу результат?",
    answer: "Первые изменения можно заметить уже через 2-3 недели регулярного применения техник. Полная гармонизация происходит в течение 1-3 месяцев в зависимости от индивидуальных особенностей ребёнка."
  }, {
    question: "Можно ли использовать пособие для работы с группой детей?",
    answer: "Да, методика подходит для работы с группами детей в детских садах, школах, развивающих центрах. Также эффективна для семейных консультаций с несколькими детьми."
  }, {
    question: "Как купить пособие?",
    answer: "Для покупки перейдите в наш Telegram-канал по ссылке на сайте. Там вы найдёте всю информацию об оплате и получите пособие сразу после подтверждения платежа."
  }, {
    question: "Есть ли поддержка после покупки?",
    answer: "Да, в течение 30 дней после покупки вы можете задавать вопросы по применению методики в нашем Telegram-канале. Автор лично отвечает на все вопросы."
  }];
  return <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto magic-backdrop rounded-3xl p-8 md:p-12 animate-fade-in bg-[#cfc5dd]/85">
          <h2 className="text-3xl md:text-4xl font-bold magic-text mb-12 text-center font-caveat">
            Вопросы и ответы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-purple-200 rounded-xl">
                <AccordionTrigger className="magic-text font-semibold text-left px-6 py-4 hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="magic-text px-6 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;