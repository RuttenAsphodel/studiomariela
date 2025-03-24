import React, { useState } from 'react';

const CivicEducationQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(12).fill(null));

  const questions = [
    {
      question: "¿Cuál es el significado de democracia?",
      options: [
        "Casta gobernante",
        "Sistema autocrático",
        "Gobierno de una sola persona",
        "Sistema de gobierno por el pueblo"
      ],
      correctAnswer: 3
    },
    {
      question: "¿Qué es una república democrática?",
      options: [
        "Gobierno militar",
        "Gobierno por medio de representantes elegidos",
        "Gobierno de una monarquía",
        "Gobierno por mandato divino"
      ],
      correctAnswer: 1
    },
    {
      question: "¿Qué significa el poder político a través del voto?",
      options: [
        "Manipulación del poder",
        "Imposición de reglas sin consulta",
        "Decisión por el gobierno central",
        "Participación ciudadana en elecciones"
      ],
      correctAnswer: 3
    },
    {
      question: "¿Por qué están divididos los poderes del estado?",
      options: [
        "Para consolidar el poder",
        "Para dividir recursos",
        "Para evitar abuso de poder",
        "Para reducir la política"
      ],
      correctAnswer: 2
    },
    {
      question: "¿Cuáles son los poderes del estado?",
      options: [
        "Ejecutivo, Legislativo, Educativo",
        "Judicial, Militar, Religioso",
        "Militar, Educativo, Económico",
        "Ejecutivo, Legislativo, Judicial"
      ],
      correctAnswer: 3
    },
    {
      question: "¿Cuáles son las funciones del estado?",
      options: [
        "Proveer servicios públicos, asegurar justicia",
        "Regular la moral religiosa",
        "Controlar todas las empresas",
        "Asignar alimentos diarios"
      ],
      correctAnswer: 0
    },
    {
      question: "¿Qué es la Constitución?",
      options: [
        "Documento de política partidaria",
        "Libro de historia nacional",
        "Guía de costumbres nacionales",
        "Conjunto de leyes fundamentales"
      ],
      correctAnswer: 3
    },
    {
      question: "¿Qué significa ser ciudadano en Chile?",
      options: [
        "No tener obligaciones",
        "Tener derechos y deberes",
        "Solo recibir beneficios",
        "Ser obligado a votar"
      ],
      correctAnswer: 1
    },
    {
      question: "¿Cuánto dura un gobierno municipal?",
      options: [
        "Cuatro años",
        "Seis años",
        "Un año",
        "Dos años"
      ],
      correctAnswer: 0
    },
    {
      question: "¿Es cierto que los diputados trabajan en el congreso nacional?",
      options: [
        "Sí",
        "No"
      ],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el propósito de la división de los poderes del estado?",
      options: [
        "Centralizar todo el poder en un solo órgano",
        "Crear conflictos entre diferentes ramas del gobierno",
        "Establecer un sistema de control y balance entre poderes",
        "Debilitar la estructura gubernamental"
      ],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es la importancia de la representación popular en una democracia?",
      options: [
        "Permite que solo los políticos tomen decisiones",
        "Garantiza que los ciudadanos elijan a sus representantes",
        "Reduce la participación ciudadana",
        "Centraliza el poder en un solo líder"
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerOptionClick = (selectedOption) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = selectedOption;
    setSelectedAnswers(newSelectedAnswers);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswers(Array(12).fill(null));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Cuestionario de Educación Cívica
        </h1>
        
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Tu puntuación: {score} de {questions.length}
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <h3 className="text-xl font-medium mb-4 text-gray-800">Revisión de respuestas:</h3>
              {questions.map((question, index) => (
                <div 
                  key={index} 
                  className={`mb-4 p-3 rounded-md ${
                    selectedAnswers[index] === question.correctAnswer 
                      ? 'bg-green-100 border-green-300' 
                      : 'bg-red-100 border-red-300'
                  } border`}
                >
                  <p className="font-semibold text-gray-800">
                    <strong>Pregunta {index + 1}:</strong> {question.question}
                  </p>
                  <p className="text-gray-700">
                    <strong>Tu respuesta:</strong> {question.options[selectedAnswers[index]]}
                  </p>
                  {selectedAnswers[index] !== question.correctAnswer && (
                    <p className="text-red-700">
                      <strong>Respuesta correcta:</strong> {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button 
              onClick={resetQuiz} 
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Volver a intentar
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-2">
                <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="text-xl font-medium text-gray-800">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleAnswerOptionClick(index)}
                  className={`
                    w-full p-3 rounded-md text-left transition-all duration-200
                    ${selectedAnswers[currentQuestion] === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 hover:bg-blue-100 text-gray-800'}
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              {currentQuestion > 0 && (
                <button 
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Anterior
                </button>
              )}
              {currentQuestion < questions.length - 1 ? (
                <button 
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Siguiente
                </button>
              ) : (
                <button 
                  onClick={() => setShowScore(true)}
                  className="ml-auto bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Finalizar
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CivicEducationQuiz;