import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              СИП-Строй
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Проекты
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#advantages"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Преимущества
            </a>
            <Link
              to="/contacts"
              className={`transition-colors ${
                location.pathname === "/contacts"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Контакты
            </Link>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600">
            Получить консультацию
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
