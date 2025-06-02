import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами для консультации по строительству домов из
            СИП-панелей
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Наши контакты
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="MapPin"
                    className="text-blue-600 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес офиса</h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Строительная, д. 15, офис 201
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Phone" className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (800) 555-01-23</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@sip-stroy.ru</p>
                    <p className="text-gray-600">sales@sip-stroy.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Clock" className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Время работы
                    </h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Мы в социальных сетях
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Phone" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Как нас найти
              </h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                  <p>Интерактивная карта</p>
                  <p className="text-sm">г. Москва, ул. Строительная, д. 15</p>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Отправить сообщение
            </h2>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тема обращения
                </label>
                <Input placeholder="Консультация по строительству" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <Textarea
                  placeholder="Расскажите о своих планах строительства, интересующих проектах или задайте вопросы..."
                  rows={6}
                />
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-gray-600">
                  Я согласен с обработкой персональных данных и получением
                  информационных сообщений
                </label>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Info" className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Быстрая консультация
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Обычно отвечаем в течение 1 часа в рабочее время
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon
                name="Award"
                className="text-orange-500 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Опыт работы
              </h3>
              <p className="text-gray-600">
                Более 10 лет строим качественные дома из СИП-панелей
              </p>
            </div>
            <div>
              <Icon
                name="Users"
                className="text-orange-500 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Довольных клиентов
              </h3>
              <p className="text-gray-600">
                Построили дома для 500+ семей по всей России
              </p>
            </div>
            <div>
              <Icon
                name="Shield"
                className="text-orange-500 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантия</h3>
              <p className="text-gray-600">
                Предоставляем гарантию на все виды работ до 5 лет
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
