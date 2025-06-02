import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src={project.image}
              alt={project.name}
              className="w-full aspect-video object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Площадь</div>
                <div className="text-xl font-bold">{project.area} м²</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-600">Этажность</div>
                <Badge variant="secondary" className="text-base">
                  {project.floors} этаж
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-600">Комнат</div>
                <div className="text-xl font-bold">{project.rooms}</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-600">Материал</div>
                <div className="font-semibold">{project.material}</div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-sm text-gray-600 mb-1">Стоимость</div>
              <div className="text-3xl font-bold text-blue-600">
                {project.price}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Описание проекта</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Особенности</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              Заказать проект
            </Button>
            <Button variant="outline" className="flex-1">
              Скачать планировку
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
