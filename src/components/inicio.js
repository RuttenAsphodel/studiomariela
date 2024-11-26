import React from 'react';


const Inicio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white/20 p-8 rounded-xl shadow-2xl text-center w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-48 h-48">
            <img src="https://www.freeiconspng.com/uploads/education-png-0.png" alt="Globe" className="rounded-full" />
            <div className="absolute top-0 right-0 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-sm font-bold">🎓</span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">Bienvenido al Centro de Estudio</h1>
        <p className="text-xl mb-6 text-white">Ensayos de Pruebas y Cuestionarios</p>

      </div>
    </div>
  );
};

export default Inicio;