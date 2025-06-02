import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  name: string;
  image: string;
  area: number;
  floors: number;
  price: string;
  material: string;
  rooms: number;
  description: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Дом Комфорт",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500",
    area: 120,
    floors: 2,
    price: "от 2 400 000 ₽",
    material: "СИП панели 174мм",
    rooms: 4,
    description:
      "Современный двухэтажный дом с продуманной планировкой. Идеально подходит для семьи из 4-5 человек. Большие окна обеспечивают отличное естественное освещение.",
    features: [
      "Энергоэффективность",
      "Быстрая сборка",
      "Экологичность",
      "Отличная звукоизоляция",
      "Сейсмостойкость",
      "Низкие эксплуатационные расходы",
    ],
  },
  {
    id: 2,
    name: "Дом Премиум",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
    area: 180,
    floors: 2,
    price: "от 3 600 000 ₽",
    material: "СИП панели 224мм",
    rooms: 5,
    description:
      "Просторный дом премиум-класса с панорамными окнами и террасой. Включает гостиную открытого типа, кабинет и две ванные комнаты.",
    features: [
      "Панорамные окна",
      "Терраса",
      "Гардеробная",
      "Кабинет",
      "Две ванные",
      "Система умный дом",
    ],
  },
  {
    id: 3,
    name: "Дом Эконом",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500",
    area: 80,
    floors: 1,
    price: "от 1 600 000 ₽",
    material: "СИП панели 174мм",
    rooms: 3,
    description:
      "Компактный одноэтажный дом для небольшой семьи. Оптимальное соотношение цены и качества. Идеален для дачного участка.",
    features: [
      "Компактность",
      "Доступная цена",
      "Быстрая сборка",
      "Энергоэффективность",
      "Простота обслуживания",
      "Готовность к проживанию",
    ],
  },
  {
    id: 4,
    name: "Дом Семейный",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=500",
    area: 150,
    floors: 2,
    price: "от 3 000 000 ₽",
    material: "СИП панели 174мм",
    rooms: 4,
    description:
      "Идеальный семейный дом с детской игровой зоной и большой кухней-гостиной. Продуманная планировка для комфортной жизни всей семьи.",
    features: [
      "Большая кухня-гостиная",
      "Детская зона",
      "Мастер-спальня",
      "Гардеробная",
      "Котельная",
      "Крытое крыльцо",
    ],
  },
  {
    id: 5,
    name: "Дом Модерн",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
    area: 200,
    floors: 2,
    price: "от 4 000 000 ₽",
    material: "СИП панели 224мм",
    rooms: 6,
    description:
      "Современный дом в стиле модерн с плоской крышей и большими окнами. Включает домашний кинотеатр и винный погреб.",
    features: [
      "Стиль модерн",
      "Плоская крыша",
      "Домашний кинотеатр",
      "Винный погреб",
      "Три спальни",
      "Сауна",
    ],
  },
  {
    id: 6,
    name: "Дом Классик",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=500",
    area: 250,
    floors: 2,
    price: "от 5 000 000 ₽",
    material: "СИП панели 224мм",
    rooms: 7,
    description:
      "Большой дом в классическом стиле с колоннами и балконом. Включает библиотеку, камин и просторную террасу для отдыха.",
    features: [
      "Классический стиль",
      "Колонны",
      "Балкон",
      "Библиотека",
      "Камин",
      "Просторная терраса",
    ],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Готовые проекты домов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий проект из нашего каталога или закажите
            индивидуальную разработку
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
