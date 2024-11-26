import React, { useState } from 'react';

const WonderWomanQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    multipleChoice: {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: ''
    },
    openQuestions: {
      q1: '',
      q2: ''
    }
  });

  const [score, setScore] = useState(null);

  const multipleChoiceAnswers = {
    q1: 'b',
    q2: 'a',
    q3: 'c',
    q4: 'b',
    q5: 'b',
    q6: 'a',
    q7: 'c',
    q8: 'd'
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
        totalScore += 12.5;
      }
    });
    setScore(totalScore);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Wonder Woman
        </h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2">Nombre:</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Fecha:</label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className="mb-4">
            <p className="font-semibold mb-2">
              {num}. {[
                "¿A qué universo de cómics pertenece Wonder Woman?",
                "¿Cuál es el verdadero nombre de Wonder Woman?",
                "¿De dónde proviene Wonder Woman?",
                "¿Quiénes son las amazonas?",
                "¿Quién es la madre de Wonder Woman?",
                "¿Qué poderes posee Wonder Woman?",
                "¿Cuál es el símbolo más representativo de Wonder Woman?",
                "¿Qué representa Wonder Woman en la cultura popular?"
              ][num-1]}
            </p>
            {['a', 'b', 'c', 'd'].map((letter) => (
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
                    ["Marvel", "DC Comics", "Vertigo", "Image Comics"],
                    ["Diana Prince", "Selina Kyle", "Clark Kent", "Bruce Wayne"],
                    ["Krypton", "Atlantis", "Themyscira", "Wakanda"],
                    ["Un grupo de guerreras vikingas", "Un grupo de guerreras mitológicas", "Un grupo de guerreras extraterrestres", "Un grupo de guerreras ninja"],
                    ["Afrodita", "Hipólita", "Hera", "Atenea"],
                    ["Superfuerza, vuelo, invulnerabilidad", "Telepatía, telequinesis, control mental", "Manipulación del tiempo, creación de ilusiones", "Todas las anteriores"],
                    ["Un escudo con una estrella", "Un martillo", "Un lazo de la verdad", "Un anillo de poder"],
                    ["La fuerza y la independencia femenina", "La inteligencia y la astucia", "La valentía y el liderazgo", "Todas las anteriores"]
                  ][num-1][['a', 'b', 'c', 'd'].indexOf(letter)]}
                </label>
              </div>
            ))}
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-semibold mb-2">Pregunta Abierta 1: ¿Qué significa Wonder Woman para ti como símbolo de empoderamiento?</label>
          <textarea
            value={formData.openQuestions.q1}
            onChange={(e) => handleOpenQuestionChange('q1', e.target.value)}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Pregunta Abierta 2: Si pudieras tener un poder de Wonder Woman, ¿cuál elegirías y por qué?</label>
          <textarea
            value={formData.openQuestions.q2}
            onChange={(e) => handleOpenQuestionChange('q2', e.target.value)}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        <div className="text-center">
          <button 
            onClick={calculateScore}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
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

export default WonderWomanQuiz;