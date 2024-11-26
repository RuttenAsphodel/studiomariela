import React, { useState } from 'react';

const EnergyQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const quizSections = [
    {
      title: 'I. Conceptos Básicos (60 puntos)',
      questions: [
        {
          id: 'basic1',
          text: '¿Cuál de las siguientes es una fuente de energía renovable?',
          type: 'multiple',
          points: 12,
          options: [
            { label: 'Petróleo', correct: false },
            { label: 'Carbón', correct: false },
            { label: 'Energía solar', correct: true },
            { label: 'Gas natural', correct: false }
          ]
        },
        {
          id: 'basic2',
          text: '¿Qué tipo de energía se transforma en energía sonora cuando hablamos?',
          type: 'multiple',
          points: 12,
          options: [
            { label: 'Energía química', correct: false },
            { label: 'Energía eléctrica', correct: false },
            { label: 'Energía mecánica', correct: true },
            { label: 'Energía lumínica', correct: false }
          ]
        },
        {
          id: 'basic3',
          text: 'La energía eólica se obtiene de:',
          type: 'multiple',
          points: 12,
          options: [
            { label: 'El sol', correct: false },
            { label: 'El viento', correct: true },
            { label: 'El agua', correct: false },
            { label: 'La tierra', correct: false }
          ]
        },
        {
          id: 'basic4',
          text: '¿Cuál de las siguientes es una transformación de energía?',
          type: 'multiple',
          points: 12,
          options: [
            { label: 'Un árbol creciendo', correct: false },
            { label: 'Un libro sobre una mesa', correct: false },
            { label: 'Una bombilla encendida', correct: true },
            { label: 'Un lápiz sobre papel', correct: false }
          ]
        },
        {
          id: 'basic5',
          text: 'La energía se conserva, esto significa que:',
          type: 'multiple',
          points: 12,
          options: [
            { label: 'Se crea continuamente', correct: false },
            { label: 'Se destruye al utilizarse', correct: false },
            { label: 'Cambia de forma pero no se pierde', correct: true },
            { label: 'Se mantiene siempre igual', correct: false }
          ]
        }
      ]
    },
    {
      title: 'II. Aplicación (40 puntos)',
      questions: [
        {
          id: 'application1',
          text: '¿Cuál de las siguientes acciones contribuye al ahorro de energía?',
          type: 'multiple',
          points: 8,
          options: [
            { label: 'Dejar las luces encendidas al salir de una habitación', correct: false },
            { label: 'Utilizar el auto para trayectos cortos', correct: false },
            { label: 'Desconectar los aparatos electrónicos cuando no se usan', correct: true },
            { label: 'Bañarse con agua caliente durante mucho tiempo', correct: false }
          ]
        },
        {
          id: 'application2',
          text: '¿Qué tipo de energía se utiliza principalmente en una central hidroeléctrica?',
          type: 'multiple',
          points: 8,
          options: [
            { label: 'Energía solar', correct: false },
            { label: 'Energía eólica', correct: false },
            { label: 'Energía hidráulica', correct: true },
            { label: 'Energía nuclear', correct: false }
          ]
        },
        {
          id: 'application3',
          text: 'Un panel solar convierte la energía solar en:',
          type: 'multiple',
          points: 8,
          options: [
            { label: 'Energía térmica', correct: false },
            { label: 'Energía eléctrica', correct: true },
            { label: 'Energía química', correct: false },
            { label: 'Energía mecánica', correct: false }
          ]
        },
        {
          id: 'application4',
          text: '¿Cuál de los siguientes aparatos transforma la energía eléctrica en energía luminosa?',
          type: 'multiple',
          points: 8,
          options: [
            { label: 'Una estufa', correct: false },
            { label: 'Un refrigerador', correct: false },
            { label: 'Una bombilla', correct: true },
            { label: 'Un ventilador', correct: false }
          ]
        },
        {
          id: 'application5',
          text: 'Un auto a gasolina transforma la energía química de la gasolina en:',
          type: 'multiple',
          points: 8,
          options: [
            { label: 'Energía eléctrica', correct: false },
            { label: 'Energía térmica y mecánica', correct: true },
            { label: 'Energía luminosa', correct: false },
            { label: 'Energía sonora', correct: false }
          ]
        }
      ]
    }
  ];

  const handleAnswerChange = (sectionIndex, questionIndex, optionIndex) => {
    const newAnswers = {...selectedAnswers};
    const questionId = quizSections[sectionIndex].questions[questionIndex].id;
    newAnswers[questionId] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    quizSections.forEach(section => {
      section.questions.forEach((question, questionIndex) => {
        const selectedOptionIndex = selectedAnswers[question.id];
        if (selectedOptionIndex !== undefined && 
            question.options[selectedOptionIndex].correct) {
          totalScore += question.points;
        }
      });
    });
    setScore(totalScore);
  };

  return (
    <div className="container mx-auto p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">
        Prueba de Evaluación: La Energía del Planeta
      </h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-green-700">Nombre</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
          />
        </div>
        
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-green-700">Curso</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700">Fecha</label>
            <input 
              type="date" 
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200"
            />
          </div>
        </div>

        {quizSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-green-700">{section.title}</h2>
            {section.questions.map((question, questionIndex) => (
              <div key={question.id} className="mb-4 p-4 bg-green-50 rounded-lg">
                <p className="mb-3 font-medium">{question.text}</p>
                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <label 
                      key={option.label} 
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={question.id}
                        className="text-green-600 focus:ring-green-500"
                        onChange={() => handleAnswerChange(sectionIndex, questionIndex, optionIndex)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {question.points} puntos
                </p>
              </div>
            ))}
          </div>
        ))}

        <div className="text-center mt-6">
          <button
            onClick={calculateScore}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Calcular Puntaje
          </button>
        </div>

        {score !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-green-700">
              Puntaje Total: {score} / 100
            </h3>
            <p className="text-gray-600 mt-2">
              {score >= 80 ? '¡Excelente comprensión de la energía!' : 
               score >= 60 ? 'Buen desempeño, sigue aprendiendo.' : 
               'Necesitas repasar los conceptos de energía.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnergyQuiz;