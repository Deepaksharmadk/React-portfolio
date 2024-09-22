import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DownloadIcon } from 'lucide-react';
import deepakSharma from '../../../public/dks-removebg.png';
import Typing from '../typing/Typing';

export default function About() {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl bg-navy-800 border-none shadow-lg">
        <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex-1 space-y-3 sm:space-y-4 text-center lg:text-left">
            <p className="text-white text-base sm:text-lg">Hi, I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Deepak Sharma
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white">
              I'm a{' '}
              <span className="text-teal-400">
                <Typing />
              </span>
            </p>
            <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
              I'm a passionate MERN Stack Developer with strong foundation in
              web development technologies. Currently a final year B.tech
              student, I am always excited to learn and explore new
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto">
                <DownloadIcon className="mr-2 h-4 w-4" /> Check Resume
              </Button>
            </div>
          </div>
          <div className="relative w-41 h-41 sm:w-100 sm:h-100 md:w-80  md:h-80  lg:w-64 lg:h-64 mt-6 lg:mt-0 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-white-500 blur-lg opacity-75"></div>
            <img
              src={deepakSharma}
              alt="Deepak Sharma"
              className="rounded-full object-cover z-10 relative w-full h-full border-orange-400 border-2 border-dotted"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
