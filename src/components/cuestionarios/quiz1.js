import React, { useState } from 'react';

const MusicQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    multipleChoice: {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: ''
    },
    openQuestions: {
      q1: '',
      q2: ''
    }
  });

  const [score, setScore] = useState(null);

  const multipleChoiceAnswers = {
    q1: 'c',
    q2: 'b',
    q3: 'c',
    q4: 'b',
    q5: 'b'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultipleChoiceChange = (question, answer) => {
    setFormData(prev => ({
      ...prev,
      multipleChoice: {
        ...prev.multipleChoice,
        [question]: answer
      }
    }));
  };

  const handleOpenQuestionChange = (question, value) => {
    setFormData(prev => ({
      ...prev,
      openQuestions: {
        ...prev.openQuestions,
        [question]: value
      }
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.keys(multipleChoiceAnswers).forEach(key => {
      if (formData.multipleChoice[key] === multipleChoiceAnswers[key]) {
        totalScore += 20;
      }
    });
    setScore(totalScore);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          La Música Más Dulce
        </h1>
        
        <div className="mb-4">
          <label className="block mb-2">Nombre:</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Fecha:</label>
          <input 
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="mb-4">
            <p className="font-semibold mb-2">
              {num}. {[
                "¿Quién organizó una gran fiesta sin comida?",
                "¿Por qué los invitados se sorprendieron en la fiesta?",
                "¿Cuál fue la música más dulce según el sha Abbas?",
                "¿Por qué el sha Abbas consideró ese sonido la música más dulce?",
                "¿Qué lección podemos aprender de esta historia?"
              ][num-1]}
            </p>
            {['a', 'b', 'c'].map((letter) => (
              <div key={letter} className="mb-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`q${num}`}
                    value={letter}
                    checked={formData.multipleChoice[`q${num}`] === letter}
                    onChange={() => handleMultipleChoiceChange(`q${num}`, letter)}
                    className="mr-2"
                  />
                  {[
                    ["El sha Abbas.", "Merza Zaki.", "Uno de los ministros."],
                    ["Porque había demasiada comida.", "Porque no había nada de comida.", "Porque la música era muy extraña."],
                    ["La música de una flauta.", "El sonido de un arpa.", "El sonido de una cuchara en un plato vacío."],
                    ["Porque le gustaba mucho ese sonido.", "Porque sabía que los invitados tenían hambre.", "Porque quería hacer una broma."],
                    ["La música es más importante que la comida.", "A veces, las cosas más simples pueden ser las más valiosas.", "Siempre debemos tener comida en las fiestas."]
                  ][num-1][['a', 'b', 'c'].indexOf(letter)]}
                </label>
              </div>
            ))}
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-semibold mb-2">1. ¿Cómo te sentiste al leer esta historia?</label>
          <textarea
            name="q1"
            value={formData.openQuestions.q1}
            onChange={(e) => handleOpenQuestionChange('q1', e.target.value)}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">2. ¿Qué otro final se te ocurre para esta historia?</label>
          <textarea
            name="q2"
            value={formData.openQuestions.q2}
            onChange={(e) => handleOpenQuestionChange('q2', e.target.value)}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        <div className="text-center">
          <button 
            onClick={calculateScore}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Calcular Puntaje
          </button>
        </div>

        {score !== null && (
          <div className="mt-6 text-center">
            <p className="text-2xl font-bold">
              Puntaje Total: <span className="text-green-600">{score}/100</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicQuiz;