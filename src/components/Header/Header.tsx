import { Button } from '@/components/ui/button';
import { X, Linkedin } from 'lucide-react';
import Login from '../Login/Login';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Deepak</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Docs
                </a>
              </li>
            </ul>
          </nav>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/deepaksharmadk"
            className="text-gray-400 hover:text-orange-400  rel='noopener noreferrer'"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="px-2 py-1 rounded-lg flex items-center justify-center shadow-input bg-black hover:text-orange-400"
          >
            <X size={30} className="" />
            <span>@deepaksharmadk</span>
          </a>

          <Login />
        </div>
      </div>
    </header>
  );
}
