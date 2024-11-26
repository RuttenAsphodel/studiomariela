import React, { useState } from 'react';

const LanguageQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    date: '',
    genre1Q1: '',
    genre1Q2: '',
    genre1Q3: '',
    genre2Q1: '',
    genre2Q2: '',
    genre3Q1: '',
    genre3Q2: '',
    genre3Q3: '',
  });

  const [score, setScore] = useState(null);

  const correctAnswers = {
    genre1Q1: 'Expresar sentimientos y emociones',
    genre1Q2: 'La voz que expresa los sentimientos en el poema',
    genre1Q3: 'Metáfora',
    genre2Q1: 'Ambiente',
    genre2Q2: 'Entretener y emocionar',
    genre3Q1: 'El anuncio publicitario vende productos y la propaganda vende ideas',
    genre3Q2: 'Una frase corta y pegadiza que identifica una marca o producto',
    genre3Q3: 'Quien envia el mensaje',

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
        totalScore += 10;
      }
    });
    setScore(totalScore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateScore();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-700">
        Prueba de Evaluación: Lenguaje 6° Básico
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

        {/* Quiz Sections */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">I. Género Lírico (30 puntos)</h2>
          <div className="mb-4">
            <p>1. ¿Cuál es el propósito principal de un poema?</p>
            {['Narrar una historia', 'Expresar sentimientos y emociones', 'Informar sobre un tema', 'Dar instrucciones'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre1Q1"
                  value={option}
                  checked={formData.genre1Q1 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <p>2. ¿Qué es el hablante lírico en un poema?</p>
            {['La persona que escribe el poema', 'La voz que expresa los sentimientos en el poema', 'El personaje principal de un poema', 'El lector del poema'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre1Q2"
                  value={option}
                  checked={formData.genre1Q2 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <p>3. ¿Cuál de las siguientes es una figura literaria?</p>
            {['Sustantivo', 'Adjetivo', 'Metáfora', 'Verbo'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre1Q3"
                  value={option}
                  checked={formData.genre1Q3 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4">II. Género Narrativo (20 puntos)</h2>
          <div className="mb-4">
            <p>1. ¿Qué elemento del mundo narrado describe el lugar donde ocurren los hechos?</p>
            {['Personaje', 'Ambiente', 'Acción', 'Tiempo'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre2Q1"
                  value={option}
                  checked={formData.genre2Q1 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <p>2. ¿Cuál es el propósito principal de un cuento?</p>
            {['Informar sobre un hecho', 'Entretener y emocionar', 'Dar instrucciones', 'Expresar una opinión'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre2Q2"
                  value={option}
                  checked={formData.genre2Q2 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4">III. Publicidad y Propaganda (30 puntos)</h2>
          <div className="mb-4">
            <p>1. ¿Cuál es la principal diferencia entre un anuncio publicitario y un mensaje propagandístico?</p>
            {['El anuncio publicitario vende productos y la propaganda vende ideas', 'El anuncio publicitario es más corto', 'La propaganda es más divertida', 'No hay diferencia'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre3Q1"
                  value={option}
                  checked={formData.genre3Q1 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mb-4">
            <p>2. ¿Qué es un slogan?</p>
            {['Una frase corta y pegadiza que identifica una marca o producto', 'El nombre del producto', 'La imagen de un anuncio', 'El precio del producto'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre3Q2"
                  value={option}
                  checked={formData.genre3Q2 === option}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mb-4">
            <p>3. ¿Qué se define como emisor?</p>
            {['Quien recibe el mensaje', 'El mensaje que se esta enviando', 'Los medios de comunicacion', 'Quien envia el mensaje'].map((option, index) => (
              <label key={index} className="block text-gray-700 text-medium">
                <input
                  type="radio"
                  name="genre3Q3"
                  value={option}
                  checked={formData.genre3Q3 === option}
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
          <p className="text-lg">Puntaje: {score} / 80</p>
          <p className="text-lg">
            {score >= 50 ? '¡Excelente trabajo!' : 
             score >= 30 ? 'Buen trabajo, puedes mejorar.' : 
             'Necesitas repasar los temas.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default LanguageQuiz;