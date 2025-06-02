import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{project.name}</CardTitle>
          <Badge variant="secondary">{project.floors} этаж</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Площадь:</span>
            <span className="font-semibold">{project.area} м²</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Комнат:</span>
            <span className="font-semibold">{project.rooms}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Материал:</span>
            <span className="font-semibold">{project.material}</span>
          </div>

          <div className="pt-2 border-t">
            <div className="text-2xl font-bold text-blue-600">
              {project.price}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
