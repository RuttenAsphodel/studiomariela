import React, { useState } from 'react';

const EarthSignalsQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    date: '',
    multipleChoice: {
      comprehension: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
      },
      analysis: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      }
    },
    openQuestions: {
      analysis: {
        q5: ''
      },
      open: {
        q1: '',
        q2: '',
        q3: ''
      }
    }
  });

  const [score, setScore] = useState(null);

  const multipleChoiceAnswers = {
    comprehension: {
      q1: 'b',
      q2: 'a',
      q3: 'b',
      q4: 'c',
      q5: 'b'
    },
    analysis: {
      q1: 'b',
      q2: 'd',
      q3: 'c',
      q4: 'c'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultipleChoiceChange = (section, question, answer) => {
    setFormData(prev => ({
      ...prev,
      multipleChoice: {
        ...prev.multipleChoice,
        [section]: {
          ...prev.multipleChoice[section],
          [question]: answer
        }
      }
    }));
  };

  const handleOpenQuestionChange = (section, question, value) => {
    setFormData(prev => ({
      ...prev,
      openQuestions: {
        ...prev.openQuestions,
        [section]: {
          ...prev.openQuestions[section],
          [question]: value
        }
      }
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    
    Object.keys(multipleChoiceAnswers.comprehension).forEach(key => {
      if (formData.multipleChoice.comprehension[key] === multipleChoiceAnswers.comprehension[key]) {
        totalScore += 10;
      }
    });

    Object.keys(multipleChoiceAnswers.analysis).forEach(key => {
      if (formData.multipleChoice.analysis[key] === multipleChoiceAnswers.analysis[key]) {
        totalScore += 8;
      }
    });

    setScore(totalScore);
  };

  const renderMultipleChoiceSection = (section, questions) => (
    questions.map((question, index) => (
      <div key={`${section}-${index + 1}`} className="mb-4">
        <p className="font-semibold mb-2">
          {index + 1}. {question.text}
        </p>
        {question.options.map((option, optionIndex) => (
          <div key={`option-${optionIndex}`} className="mb-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name={`${section}-q${index + 1}`}
                value={['a', 'b', 'c', 'd'][optionIndex]}
                checked={formData.multipleChoice[section][`q${index + 1}`] === ['a', 'b', 'c', 'd'][optionIndex]}
                onChange={() => handleMultipleChoiceChange(section, `q${index + 1}`, ['a', 'b', 'c', 'd'][optionIndex])}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    ))
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Señales en la tierra de arriba
        </h1>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
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
            <label className="block mb-2">Curso:</label>
            <input 
              type="text" 
              name="course"
              value={formData.course}
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

        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Preguntas de Comprensión</h2>
        {renderMultipleChoiceSection('comprehension', [
          {
            text: "¿Qué anuncia el viento del mar según el poema?",
            options: ["La llegada de la primavera", "Una tormenta o lluvia", "El inicio de la cosecha", "Un viaje en barco"]
          },
          {
            text: "¿Cómo se sienten los \"sembrados\" en el poema?",
            options: ["Felices y fuertes", "Enfermos y débiles", "Indiferentes", "Ansiosos"]
          },
          {
            text: "¿Qué llevan los botes en el poema?",
            options: ["Personas", "Sueños", "Alimentos", "Herramientas"]
          },
          {
            text: "¿Qué sucede con los botes al final del poema?",
            options: ["Se hunden", "Se pierden en el mar", "Llegan a su destino", "Se vuelcan"]
          },
          {
            text: "¿Qué ocurre con la naturaleza después de la lluvia?",
            options: ["Se seca", "Se vuelve más verde y vigorosa", "Se destruye", "Permanece igual"]
          }
        ])}

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Preguntas de Análisis</h2>
        {renderMultipleChoiceSection('analysis', [
          {
            text: "¿Qué crees que representa el \"Llaima\" en el poema?",
            options: ["Un lugar tranquilo", "Una fuerza poderosa de la naturaleza", "Un símbolo de esperanza", "Un personaje importante"]
          },
          {
            text: "¿Qué emociones crees que transmite el poema?",
            options: ["Alegría y optimismo", "Tristeza y desesperanza", "Miedo y angustia", "Una mezcla de emociones, como esperanza y temor"]
          },
          {
            text: "¿Cuál crees que es el mensaje principal del poema?",
            options: ["La importancia de la naturaleza", "Los efectos del cambio climático", "La fuerza del espíritu humano", "La belleza de la vida"]
          },
          {
            text: "¿Qué figura literaria predominante encuentras en el poema?",
            options: ["Metáfora", "Comparación", "Personificación", "Hipérbole"]
          }
        ])}

        <div className="mb-4 mt-4">
          <label className="block font-semibold mb-2">5. ¿Cómo crees que el autor logra transmitir la idea de cambio en el poema?</label>
          <textarea
            value={formData.openQuestions.analysis.q5}
            onChange={(e) => handleOpenQuestionChange('analysis', 'q5', e.target.value)}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Preguntas Abiertas</h2>
        {[
          "¿Qué te impresionó más del poema? ¿Por qué?",
          "¿Puedes relacionar alguna parte del poema con algo que hayas vivido o visto? Explícalo.",
          "¿Qué otras preguntas te surgen al leer este poema?"
        ].map((question, index) => (
          <div key={`open-q${index + 1}`} className="mb-4">
            <label className="block font-semibold mb-2">{index + 1}. {question}</label>
            <textarea
              value={formData.openQuestions.open[`q${index + 1}`]}
              onChange={(e) => handleOpenQuestionChange('open', `q${index + 1}`, e.target.value)}
              className="w-full p-2 border rounded h-24"
            />
          </div>
        ))}

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

export default EarthSignalsQuiz;