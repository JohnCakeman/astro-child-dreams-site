
import { useState } from "react";
import { Star } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#about-guide", label: "О пособии" },
    { href: "#for-whom", label: "Для кого" },
    { href: "#benefits", label: "Преимущества" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#faq", label: "FAQ" },
    { href: "#author", label: "Автор" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 magic-backdrop">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Star className="w-8 h-8 text-purple-600 twinkling-star" />
            <h1 className="text-xl md:text-2xl font-bold magic-text font-caveat">
              Детская Астрология
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="magic-text hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/+7UrXiA62gZ45NDky"
            className="magic-button hidden md:block"
          >
            Купить
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden magic-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 magic-backdrop rounded-xl p-4 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 magic-text hover:text-purple-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://t.me/+7UrXiA62gZ45NDky"
              className="magic-button block text-center mt-4"
            >
              Купить
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
