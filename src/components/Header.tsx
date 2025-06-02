import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">СИП-Строй</h1>
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
            <a
              href="#contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
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
