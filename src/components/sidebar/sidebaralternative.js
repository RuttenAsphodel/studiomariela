import React, { useState } from 'react';
import { 
  Home,
  Users,
  Settings,
  HelpCircle,
  FileQuestion,
  GraduationCap,
  Brain,
  Code,
  Beaker,
  ChevronDown,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Sidebar Component
const SidebarAlter = ({ onNavigate, currentPath = '/' }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const quizCategories = [
    {
      title: 'Programación',
      icon: Code,
      quizzes: ['JavaScript', 'Python', 'React', 'Node.js']
    },
    {
      title: 'Ciencias',
      icon: Beaker,
      quizzes: ['Física', 'Química', 'Biología', 'Matemáticas']
    },
    {
      title: 'Conocimientos Generales',
      icon: Brain,
      quizzes: ['Historia', 'Geografía', 'Arte', 'Literatura']
    },
    {
      title: 'Educación',
      icon: GraduationCap,
      quizzes: ['Inglés', 'Español', 'Teoría', 'Prácticas']
    }
  ];

  const mainMenuItems = [
    { title: 'Inicio', icon: Home, path: '/' },
    { title: 'Usuarios', icon: Users, path: '/users' },
    { title: 'Cuestionarios', icon: FileQuestion, path: '/quizzes' },
    { title: 'Configuración', icon: Settings, path: '/settings' },
    { title: 'Ayuda', icon: HelpCircle, path: '/help' },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const isActive = (path) => currentPath === path;

  return (
    <div className={`min-h-screen bg-gray-800 text-white transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-20'
    } overflow-y-auto`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {isOpen && (
            <h2 className="text-xl font-bold">Portal Quiz</h2>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        <nav>
          {/* Menú Principal */}
          <ul className="space-y-2 mb-6">
            {mainMenuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className={`w-full flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                    isActive(item.path) ? 'bg-gray-700' : ''
                  }`}
                >
                  <item.icon size={24} className="min-w-[24px]" />
                  {isOpen && (
                    <span className="ml-3">{item.title}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Separador */}
          {isOpen && (
            <div className="border-t border-gray-600 my-4">
              <h3 className="text-sm text-gray-400 uppercase mt-4 mb-2 px-3">
                Categorías de Cuestionarios
              </h3>
            </div>
          )}

          {/* Categorías de Cuestionarios */}
          <ul className="space-y-2">
            {quizCategories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => isOpen && toggleSubmenu(index)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <category.icon size={24} className="min-w-[24px]" />
                    {isOpen && (
                      <span className="ml-3">{category.title}</span>
                    )}
                  </div>
                  {isOpen && (
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        activeSubmenu === index ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Submenú de Cuestionarios */}
                {isOpen && activeSubmenu === index && (
                  <ul className="ml-8 mt-2 space-y-2">
                    {category.quizzes.map((quiz, quizIndex) => (
                      <li key={quizIndex}>
                        <button
                          onClick={() => onNavigate(`/quiz/${category.title.toLowerCase()}/${quiz.toLowerCase()}`)}
                          className={`w-full flex items-center p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${
                            isActive(`/quiz/${category.title.toLowerCase()}/${quiz.toLowerCase()}`) 
                              ? 'bg-gray-700 text-white' 
                              : ''
                          }`}
                        >
                          <BookOpen size={16} className="min-w-[16px]" />
                          <span className="ml-2">{quiz}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarAlter