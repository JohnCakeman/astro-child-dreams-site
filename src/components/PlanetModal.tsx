
import { useEffect } from "react";
import { useMobile } from "@/hooks/useMobile";

interface PlanetModalProps {
  planet: string | null;
  onClose: () => void;
}

const PlanetModal = ({ planet, onClose }: PlanetModalProps) => {
  const isMobile = useMobile();
  
  const planetDescriptions = {
    luna: {
      title: "Луна",
      description: "Эмоции, привязанности, внутренний мир. Как формируется эмоциональная база ребёнка, что даёт ему чувство безопасности, как поддерживать и гармонизировать эмоциональные реакции в разные периоды развития."
    },
    sun: {
      title: "Солнце", 
      description: "Личность, самооценка, проявление себя. Как раскрывается индивидуальность, что влияет на уверенность в себе, как поддержать ребёнка в формировании здоровой самооценки и лидерских качеств."
    },
    mercury: {
      title: "Меркурий",
      description: "Мышление, речь, обучение. Как развивается интеллект, особенности восприятия информации, как помочь ребёнку раскрыть свои умственные способности и преодолеть трудности в обучении."
    },
    venus: {
      title: "Венера",
      description: "Чувства, отношения, эстетика. Как формируются привязанности, дружба, чувство прекрасного, как поддержать гармонию в отношениях с окружающими и развить эмоциональный интеллект."
    },
    mars: {
      title: "Марс",
      description: "Энергия, активность, воля. Как проявляется энергия ребёнка, особенности активности, как направить силу в конструктивное русло и научить справляться с агрессией и упрямством."
    }
  };

  useEffect(() => {
    if (planet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [planet]);

  // Автоматически закрываем модальное окно через 3 секунды на десктопе при hover
  useEffect(() => {
    if (planet && !isMobile) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [planet, isMobile, onClose]);

  if (!planet || !planetDescriptions[planet as keyof typeof planetDescriptions]) {
    return null;
  }

  const planetData = planetDescriptions[planet as keyof typeof planetDescriptions];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="max-w-2xl w-full magic-backdrop rounded-3xl p-8 animate-scale-in relative"
        style={{ boxShadow: '0 0 50px rgba(147, 51, 234, 0.3)' }}
        onMouseLeave={!isMobile ? onClose : undefined}
      >
        {isMobile && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-200 hover:bg-purple-300 flex items-center justify-center transition-colors duration-300"
          >
            <span className="text-purple-800 font-bold">×</span>
          </button>
        )}
        
        <h3 className="text-2xl md:text-3xl font-bold magic-text mb-6 font-caveat text-center">
          {planetData.title}
        </h3>
        
        <p className="text-lg magic-text leading-relaxed text-center">
          {planetData.description}
        </p>
      </div>
    </div>
  );
};

export default PlanetModal;
