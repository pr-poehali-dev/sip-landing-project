import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Строительство домов из{" "}
            <span className="text-blue-600">СИП панелей</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Быстрое, энергоэффективное и надежное строительство. Готовые проекты
            домов от 50 до 300 м² с полной комплектацией под ключ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              Посмотреть проекты
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Рассчитать стоимость
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                30 дней
              </div>
              <div className="text-gray-600">Срок строительства</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                50 лет
              </div>
              <div className="text-gray-600">Срок службы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-gray-600">Экономия на отоплении</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
