import React, { useState } from 'react';

const MathQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const quizSections = [
    {
      title: 'Sección 1: Razones y Porcentajes (40 puntos)',
      sections: [
        {
          subtitle: 'Selección Múltiple (20 puntos)',
          questions: [
            {
              id: 'ratios1',
              text: '¿Cuál es la razón entre 3 manzanas y 5 naranjas?',
              type: 'multiple',
              points: 5,
              options: [
                { label: '3:5', correct: true },
                { label: '5:3', correct: false },
                { label: '8:1', correct: false },
                { label: '1:1', correct: false }
              ]
            },
            {
              id: 'ratios2',
              text: 'Si un pantalón cuesta $20.000 y tiene un descuento del 25%, ¿cuánto pagaré?',
              type: 'multiple',
              points: 5,
              options: [
                { label: '$15.000', correct: true },
                { label: '$20.000', correct: false },
                { label: '$10.000', correct: false },
                { label: '$25.000', correct: false }
              ]
            },
            {
              id: 'ratios3',
              text: 'Expresa el número decimal 0,75 como porcentaje',
              type: 'multiple',
              points: 5,
              options: [
                { label: '75%', correct: true },
                { label: '7,5%', correct: false },
                { label: '0,75%', correct: false },
                { label: '50%', correct: false }
              ]
            },
            {
              id: 'ratios4',
              text: '¿Qué representa un 10% de 200?',
              type: 'multiple',
              points: 5,
              options: [
                { label: '20', correct: true },
                { label: '10', correct: false },
                { label: '200', correct: false },
                { label: '2', correct: false }
              ]
            }
          ]
        },
        {
          subtitle: 'Resolución de Problemas (20 puntos)',
          questions: [
            {
              id: 'ratiosProblem1',
              text: 'En una clase hay 12 niñas y 18 niños. ¿Cuál es la razón entre niñas y niños?',
              type: 'open',
              points: 10
            },
            {
              id: 'ratiosProblem2',
              text: 'Si el 30% de los estudiantes de un colegio juega básquetbol y hay 400 estudiantes, ¿cuántos estudiantes juegan básquetbol?',
              type: 'open',
              points: 10
            }
          ]
        }
      ]
    },
    {
      title: 'Sección 2: Ángulos y sus Relaciones (30 puntos)',
      sections: [
        {
          subtitle: 'Identificación y Cálculo (20 puntos)',
          questions: [
            {
              id: 'angles1',
              text: '¿Qué tipo de ángulo es un ángulo recto?',
              type: 'multiple',
              points: 5,
              options: [
                { label: 'Un ángulo de 90°', correct: true },
                { label: 'Un ángulo de 45°', correct: false },
                { label: 'Un ángulo de 180°', correct: false },
                { label: 'Un ángulo de 60°', correct: false }
              ]
            },
            {
              id: 'angles2',
              text: '¿Qué son ángulos complementarios?',
              type: 'multiple',
              points: 5,
              options: [
                { label: 'Ángulos que suman 90°', correct: true },
                { label: 'Ángulos que suman 180°', correct: false },
                { label: 'Ángulos que suman 360°', correct: false },
                { label: 'Ángulos que suman 45°', correct: false }
              ]
            },
            {
              id: 'angles3',
              text: 'En un triángulo, ¿cuánto suman los ángulos internos?',
              type: 'multiple',
              points: 5,
              options: [
                { label: '180°', correct: true },
                { label: '90°', correct: false },
                { label: '360°', correct: false },
                { label: '270°', correct: false }
              ]
            },
            {
              id: 'angles4',
              text: 'Un ángulo obtuso mide más de:',
              type: 'multiple',
              points: 5,
              options: [
                { label: '90°', correct: true },
                { label: '45°', correct: false },
                { label: '180°', correct: false },
                { label: '60°', correct: false }
              ]
            }
          ]
        },
        {
          subtitle: 'Resolución de Problemas (10 puntos)',
          questions: [
            {
              id: 'anglesProblem1',
              text: 'Si dos ángulos son complementarios y uno mide 35°, ¿cuánto mide el otro?',
              type: 'open',
              points: 5
            },
            {
              id: 'anglesProblem2',
              text: 'En un triángulo equilátero, ¿cuánto mide cada ángulo interior?',
              type: 'open',
              points: 5
            }
          ]
        }
      ]
    },
    {
      title: 'Sección 3: Patrones y Álgebra (30 puntos)',
      sections: [
        {
          subtitle: 'Secuencias y Patrones (15 puntos)',
          questions: [
            {
              id: 'patterns1',
              text: '¿Cuál es el siguiente número en la secuencia: 2, 4, 6, 8, ...?',
              type: 'multiple',
              points: 5,
              options: [
                { label: '10', correct: true },
                { label: '7', correct: false },
                { label: '9', correct: false },
                { label: '5', correct: false }
              ]
            },
            {
              id: 'patterns2',
              text: 'Identifica el patrón en la siguiente secuencia: 1, 4, 9, 16, ...',
              type: 'multiple',
              points: 5,
              options: [
                { label: '25', correct: true },
                { label: '20', correct: false },
                { label: '15', correct: false },
                { label: '12', correct: false }
              ]
            },
            {
              id: 'patterns3',
              text: '¿Qué número sigue en la secuencia: 3, 6, 12, 24, ...?',
              type: 'multiple',
              points: 5,
              options: [
                { label: '48', correct: true },
                { label: '36', correct: false },
                { label: '30', correct: false },
                { label: '54', correct: false }
              ]
            }
          ]
        },
        {
          subtitle: 'Expresiones Algebraicas y Ecuaciones (15 puntos)',
          questions: [
            {
              id: 'algebra1',
              text: 'Escribe una expresión algebraica para representar "el doble de un número más 5"',
              type: 'open',
              points: 5
            },
            {
              id: 'algebra2',
              text: 'Resuelve la ecuación: x + 3 = 10',
              type: 'open',
              points: 5
            },
            {
              id: 'algebra3',
              text: 'Si y = 2x + 1, ¿cuál es el valor de y cuando x = 3?',
              type: 'open',
              points: 5
            }
          ]
        }
      ]
    }
  ];

  const handleAnswerChange = (sectionIndex, subsectionIndex, questionIndex, optionIndex) => {
    const newAnswers = {...selectedAnswers};
    const questionId = quizSections[sectionIndex].sections[subsectionIndex].questions[questionIndex].id;
    newAnswers[questionId] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    quizSections.forEach(section => {
      section.sections.forEach(subsection => {
        subsection.questions.forEach((question, questionIndex) => {
          if (question.type === 'multiple') {
            const selectedOptionIndex = selectedAnswers[question.id];
            if (selectedOptionIndex !== undefined && 
                question.options[selectedOptionIndex].correct) {
              totalScore += question.points;
            }
          }
          // For open-ended questions, we'll add some points for non-empty answers
          else if (question.type === 'open') {
            const answer = selectedAnswers[question.id];
            if (answer && answer.trim().length > 0) {
              totalScore += question.points;
            }
          }
        });
      });
    });
    setScore(totalScore);
  };

  return (
    <div className="container mx-auto p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Prueba de Evaluación: Matemáticas 6° Básico
      </h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-700">Nombre</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
          />
        </div>
        
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-700">Curso</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700">Fecha</label>
            <input 
              type="date" 
              className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {quizSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">{section.title}</h2>
            {section.sections.map((subsection, subsectionIndex) => (
              <div key={subsection.subtitle} className="mb-4">
                <h3 className="text-lg font-medium mb-3 text-blue-600">{subsection.subtitle}</h3>
                {subsection.questions.map((question, questionIndex) => (
                  <div key={question.id} className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <p className="mb-3 font-medium">{question.text}</p>
                    {question.type === 'multiple' ? (
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label 
                            key={option.label} 
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name={question.id}
                              className="text-blue-600 focus:ring-blue-500"
                              onChange={() => handleAnswerChange(sectionIndex, subsectionIndex, questionIndex, optionIndex)}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <textarea
                        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                        rows={3}
                        placeholder="Escribe tu respuesta aquí"
                        onChange={(e) => {
                          const newAnswers = {...selectedAnswers};
                          newAnswers[question.id] = e.target.value;
                          setSelectedAnswers(newAnswers);
                        }}
                      />
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      {question.points} puntos
                    </p>
                  </div>
                ))}
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
            <h3 className="text-2xl font-bold text-blue-700">
              Puntaje Total: {score} / 100
            </h3>
            <p className="text-gray-600 mt-2">
              {score >= 80 ? '¡Excelente comprensión matemática!' : 
               score >= 60 ? 'Buen desempeño, sigue practicando.' : 
               'Necesitas repasar algunos conceptos matemáticos.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathQuiz;