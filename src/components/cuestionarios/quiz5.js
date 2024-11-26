import React, { useState } from 'react';

const MythsLegendsQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    date: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });

  const [score, setScore] = useState(null);

  const correctAnswers = {
    q1: 'Conquistar el reino reclutando aliados',
    q2: 'Personajes de diversas mitologías y leyendas',
    q3: 'El Caleuche, el Alicanto, el Camahueto',
    q4: '2010',
    q5: 'Que algo es muy antiguo'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (formData[key] === correctAnswers[key]) {
        totalScore += 20;
      }
    });
    setScore(totalScore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateScore();
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Mitos y Leyendas
      </h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Personal Information */}
        <div className="mb-4">
          <label className="block text-gray-700 text-medium font-bold mb-2">
            Nombre:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </label>
          <label className="block text-gray-700 text-medium font-bold mb-2">
            Curso:
            <input 
              type="text" 
              name="course" 
              value={formData.course} 
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </label>
          <label className="block text-gray-700 text-medium font-bold mb-2">
            Fecha:
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </label>
        </div>

        {/* Quiz Questions */}
        <div className="mb-6">
          <div className="mb-4">
            <p>1. ¿Cuál es el objetivo principal de cada jugador en el juego "Mitos y Leyendas"?</p>
            {['Conquistar el reino reclutando aliados', 'Crear un mazo de cartas invencible', 'Destruir a todos los demás jugadores', 'Descubrir el tesoro escondido del reino'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="q1"
                  value={option}
                  checked={formData.q1 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mb-4">
            <p>2. ¿Qué tipo de personajes se pueden encontrar en el juego "Mitos y Leyendas"?</p>
            {['Solo personajes históricos', 'Solo personajes de la mitología griega', 'Personajes de diversas mitologías y leyendas', 'Solo personajes de la mitología nórdica'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="q2"
                  value={option}
                  checked={formData.q2 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mb-4">
            <p>3. ¿Qué personajes de leyendas chilenas están presentes en el juego?</p>
            {['El Caleuche, el Alicanto, el Camahueto', 'El Quetzalcóatl, el Inti, la Luna', 'El Yeti, el Kraken, el Chupacabra', 'El Minotauro, la Medusa, la Hidra'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="q3"
                  value={option}
                  checked={formData.q3 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mb-4">
            <p>4. ¿En qué año se estrenó la película basada en el juego "Mitos y Leyendas"?</p>
            {['2015', '2010', '2020', '2005'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="q4"
                  value={option}
                  checked={formData.q4 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mb-4">
            <p>5. ¿Qué significa el prefijo "in-" en la palabra "inmemoriales"?</p>
            {['Que algo es muy grande', 'Que algo es muy pequeño', 'Que algo es muy antiguo', 'Que algo es muy nuevo'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="q5"
                  value={option}
                  checked={formData.q5 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar Cuestionario
          </button>
        </div>
      </form>

      {score !== null && (
        <div className="text-center mt-4 p-4 bg-green-100 rounded">
          <h2 className="text-xl font-bold mb-2">Resultado del Examen</h2>
          <p className="text-lg">Nombre: {formData.name}</p>
          <p className="text-lg">Puntaje: {score} / 100</p>
          <p className="text-lg">
            {score >= 80 ? '¡Excelente trabajo!' : 
             score >= 50 ? 'Buen trabajo, puedes mejorar.' : 
             'Necesitas repasar los temas.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default MythsLegendsQuiz;