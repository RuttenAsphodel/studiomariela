import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  Home,
  Book,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  CalculatorIcon,
  TestTube,
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);



  const mainMenuItems = [
    { title: 'Inicio', icon: Home, path: '/' },
    { title: 'Ensayo Lenguaje', icon: Book, path: '/ensayolenguaje' },
    { title: 'Ensayo Lenguaje Desarrollo', icon: Book, path: '/ensayolenguajedesarrollo'},
    { title: 'Ensayo Matematicas', icon: CalculatorIcon, path: '/ensayomatematica' },
    { title: 'Ensayo Matematicas Aleatorio', icon: CalculatorIcon, path: '/ensayomaterandom' },
    { title: 'Ensayo Ciencias', icon: TestTube, path: '/ensayociencia' },
    { title: 'Cuestionario 1', icon: HelpCircle, path: '/cuestionario1' },
    { title: 'Cuestionario 2', icon: HelpCircle, path: '/cuestionario2' },
    { title: 'Cuestionario 3', icon: HelpCircle, path: '/cuestionario3' },
    { title: 'Cuestionario 4', icon: HelpCircle, path: '/cuestionario4' },
    { title: 'Cuestionario 5', icon: HelpCircle, path: '/cuestionario5' },
    { title: 'Cuestionario 6', icon: HelpCircle, path: '/cuestionario6' },
    { title: 'Cuestionario 7', icon: HelpCircle, path: '/cuestionario7' },
  ];


  return (
    <div className={`min-h-screen bg-purple-700 text-white transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-20'
    } overflow-y-auto`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {isOpen && (
            <h2 className="text-xl font-bold">Centro de Estudio</h2>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 hover:text-red-600 transition-colors"
          >
            {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        <nav>
          {/* Menú Principal */}
          <ul className="space-y-2 mb-6">
            {mainMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-100 hover:text-red-700 transition-colors"
                >
                  <item.icon size={24} className="min-w-[24px]" />
                  {isOpen && (
                    <span className="ml-3">{item.title}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>


          
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;