import React, { useState } from 'react';

const SchoolQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const quizSections = [
    {
      title: 'I. Género Lírico (30 puntos)',
      questions: [
        {
          id: 'lyric1',
          text: '¿Cuál es el propósito principal de un texto poético?',
          type: 'open',
          points: 5,
          maxLength: 150
        },
        {
          id: 'lyric2',
          text: 'Identifica y explica dos elementos de la estructura interna de un poema.',
          type: 'open',
          points: 10,
          maxLength: 250
        },
        {
          id: 'lyric3',
          text: 'Analiza el siguiente verso y señala qué figura literaria se utiliza: "El viento susurra secretos al mar."',
          type: 'open',
          points: 5,
          maxLength: 100
        },
        {
          id: 'lyric4',
          text: 'Escribe un pequeño poema utilizando al menos dos figuras literarias.',
          type: 'open',
          points: 10,
          maxLength: 200
        }
      ]
    },
    {
      title: 'II. Género Narrativo (30 puntos)',
      questions: [
        {
          id: 'narrative1',
          text: '¿Qué elementos conforman el mundo narrado en una historia?',
          type: 'open',
          points: 5,
          maxLength: 150
        },
        {
          id: 'narrative2',
          text: 'Explica cómo las acciones de un personaje pueden influir en el desarrollo de la historia.',
          type: 'open',
          points: 5,
          maxLength: 200
        },
        {
          id: 'narrative3',
          text: 'Lee el siguiente fragmento de un cuento y responde: ¿Cuál es el propósito del autor al escribir esta historia?',
          type: 'open',
          points: 10,
          maxLength: 250
        },
        {
          id: 'narrative4',
          text: 'Crea un personaje para una historia y describe su apariencia física y psicológica.',
          type: 'open',
          points: 10,
          maxLength: 250
        }
      ]
    },
    {
      title: 'III. Publicidad y Propaganda (20 puntos)',
      questions: [
        {
          id: 'advertising1',
          text: '¿Cuál es la principal diferencia entre un anuncio publicitario y un mensaje propagandístico?',
          type: 'open',
          points: 5,
          maxLength: 150
        },
        {
          id: 'advertising2',
          text: 'Analiza un anuncio publicitario que hayas visto recientemente. Identifica el emisor, el receptor y el mensaje principal.',
          type: 'open',
          points: 10,
          maxLength: 250
        },
        {
          id: 'advertising3',
          text: '¿Por qué crees que las empresas utilizan slogans en sus anuncios?',
          type: 'open',
          points: 5,
          maxLength: 150
        }
      ]
    }
  ];

  const handleAnswerChange = (sectionIndex, questionIndex, value) => {
    const newAnswers = {...answers};
    const questionId = quizSections[sectionIndex].questions[questionIndex].id;
    newAnswers[questionId] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    quizSections.forEach(section => {
      section.questions.forEach(question => {
        const answer = answers[question.id];
        // Basic scoring: Award full points if answer is not empty
        if (answer && answer.trim().length > 0) {
          totalScore += question.points;
        }
      });
    });
    setScore(totalScore);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Prueba de Evaluación 6° Básico
      </h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
          />
        </div>
        
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Curso</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha</label>
            <input 
              type="date" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {quizSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">{section.title}</h2>
            {section.questions.map((question, questionIndex) => (
              <div key={question.id} className="mb-4 p-4 bg-blue-50 rounded-lg">
                <p className="mb-2 font-medium">{question.text}</p>
                <textarea
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                  rows={3}
                  maxLength={question.maxLength}
                  onChange={(e) => handleAnswerChange(sectionIndex, questionIndex, e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Máximo {question.maxLength} caracteres ({question.points} puntos)
                </p>
              </div>
            ))}
          </div>
        ))}

        <div className="text-center mt-6">
          <button
            onClick={calculateScore}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Calcular Puntaje
          </button>
        </div>

        {score !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-green-700">
              Puntaje Total: {score} / 80
            </h3>
            <p className="text-gray-600 mt-2">
              {score >= 56 ? '¡Excelente trabajo!' : 
               score >= 40 ? 'Buen desempeño, sigue practicando.' : 
               'Necesitas repasar algunos conceptos.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolQuiz;