import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  imageUrl: string;
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    imageUrl: '../../../public/images/javascript-svgrepo-com.svg',
  },
  {
    name: 'TypeScript',
    imageUrl: '../../../public/images/typescript-svgrepo-com.svg',
  },
  {
    name: 'React',
    imageUrl: '../../../public/images/react-logo-svgrepo-com.svg',
  },
  {
    name: 'Tailwind CSS',
    imageUrl: '../../../public/images/tailwind-svgrepo-com.svg',
  },
  {
    name: 'Node.js',
    imageUrl: '../../../public/images/node-js-svgrepo-com.svg',
  },
  {
    name: 'Express.js',
    imageUrl: '../../../public/images/express-svgrepo-com.svg',
  },
  {
    name: 'MongoDB',
    imageUrl: '../../../public/images/mongodb-svgrepo-com.svg',
  },
  {
    name: 'Redux-toolkit',
    imageUrl: '../../../public/images/redux-svgrepo-com.svg',
  },
  {
    name: 'React-Query',
    imageUrl: '../../../public/images/React Query.png',
  },
  {
    name: 'Hono.js',
    imageUrl: '../../../public/images/Hono Framework Icon.png',
  },
];

export default function SkillSection() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500 r-b-4">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-10 h-10 relative mb-4">
                  <img
                    src={skill.imageUrl}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {skill.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
