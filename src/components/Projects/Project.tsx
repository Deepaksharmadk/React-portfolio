import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import image from '../../../public/images/Screenshot 2024-09-22 095408.png';
import res from '../../../public/images/re.png';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    image: <img src={image} className="w-100% h-100% object-contain" />,
    projectName: 'Like Hotel Booking App',
    githubLink: 'https://github.com/Deepaksharmadk/hotelbooking_plateform',
    websiteLink: 'https://hotelbookingapp-3b9l.onrender.com/',
    badges: [
      'React',
      'Tailwind',
      'MongoDB',
      'Express.js',
      'Node.js',
      'JWT',
      'multer',
      'cloudinary',
      'React-Query',
      'typescript',
    ],
  },
  {
    image: <img src={res} className="w-100% h-100% object-contain" />,
    projectName: 'Like Food Ordering App',
    githubLink:
      'https://github.com/Deepaksharmadk/Enterprise-Level-Food-Ordering-Platform-frontend',
    websiteLink: 'https://foodordingapp.onrender.com/',
    badges: [
      'React',
      'Tailwind',
      'MongoDB',
      'Express.js',
      'Node.js',
      'JWT',
      'multer',
      'cloudinary',
      'React-Query',
      'typescript',
    ],
  },
];

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-orange-500">
        My Project Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="w-full overflow-hidden">
            <div className="bg-[#282c34] p-4 flex justify-center items-center">
              {project.image}
            </div>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-center">
                {project.projectName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.badges.map((badge, idx) => (
                  <Badge key={idx} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
