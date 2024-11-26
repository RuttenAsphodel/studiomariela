import React, { useState, useEffect } from 'react';

const MathQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    date: '',
    answers: {}
  });
  const [score, setScore] = useState(null);

  // Función para generar números aleatorios
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Función para generar preguntas aleatorias
  const generateQuestions = () => {
    const newQuestions = [
      {
        id: 'q1',
        text: 'Resuelve la multiplicación:',
        num1: generateRandomNumber(12, 98),
        num2: generateRandomNumber(3, 15),
        operation: '*',
        correctAnswer: null
      },
      {
        id: 'q2',
        text: 'Realiza la división:',
        num1: generateRandomNumber(60, 200),
        num2: generateRandomNumber(4, 12),
        operation: '/',
        correctAnswer: null
      },
      {
        id: 'q3',
        text: 'Resuelve la suma de fracciones con distinto denominador:',
        num1: generateRandomNumber(1, 6),
        num2: generateRandomNumber(1, 6),
        num3: generateRandomNumber(2, 8),
        num4: generateRandomNumber(2, 8),
        operation: '+',
        correctAnswer: null
      },
      {
        id: 'q4',
        text: 'Calcula el área de un rectángulo:',
        base: generateRandomNumber(5, 20),
        altura: generateRandomNumber(3, 15),
        correctAnswer: null
      },
      {
        id: 'q5',
        text: 'Resuelve el problema de porcentajes:',
        total: generateRandomNumber(200, 500),
        porcentaje: generateRandomNumber(10, 40),
        correctAnswer: null
      }
    ];

    // Calcular respuestas correctas
    const questionsWithAnswers = newQuestions.map(q => {
      switch(q.id) {
        case 'q1':
          q.correctAnswer = q.num1 * q.num2;
          q.displayText = `${q.num1} × ${q.num2}`;
          break;
        case 'q2':
          q.correctAnswer = Math.floor(q.num1 / q.num2);
          q.displayText = `${q.num1} ÷ ${q.num2}`;
          break;
        case 'q3':
          // Cálculo de suma de fracciones
          const lcm = q.num3 * q.num4 / calculateGCD(q.num3, q.num4);
          const newNum1 = q.num1 * (lcm / q.num3);
          const newNum2 = q.num2 * (lcm / q.num4);
          q.correctAnswer = (newNum1 + newNum2);
          q.displayText = `(${q.num1}/${q.num3}) + (${q.num2}/${q.num4})`;
          break;
        case 'q4':
          q.correctAnswer = q.base * q.altura;
          q.displayText = `Base: ${q.base} cm, Altura: ${q.altura} cm`;
          break;
        case 'q5':
          q.correctAnswer = Math.round((q.total * q.porcentaje) / 100);
          q.displayText = `${q.porcentaje}% de ${q.total}`;
          break;
        default:
          break;
      }
      return q;
    });

    setQuestions(questionsWithAnswers);
  };

  // Calcular máximo común divisor para fracciones
  const calculateGCD = (a, b) => {
    return b === 0 ? a : calculateGCD(b, a % b);
  };

  // Generar preguntas al cargar el componente
  useEffect(() => {
    generateQuestions();
    // eslint-disable-next-line
  }, []);

  // Manejador de cambios en respuestas
  const handleAnswerChange = (questionId, value) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value
      }
    }));
  };

  // Manejador de cambios en información personal
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calcular puntaje
  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(q => {
      const userAnswer = parseInt(formData.answers[q.id] || 0);
      if (userAnswer === q.correctAnswer) {
        totalScore += 20;
      }
    });
    setScore(totalScore);
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateScore();
  };

  // Generar nuevas preguntas
  const regenerateQuestions = () => {
    generateQuestions();
    setFormData(prev => ({
      ...prev,
      answers: {}
    }));
    setScore(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Prueba de Matemáticas 6to Básico
      </h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Información Personal */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handlePersonalInfoChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Curso:
            <input 
              type="text" 
              name="course" 
              value={formData.course} 
              onChange={handlePersonalInfoChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha:
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handlePersonalInfoChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </label>
        </div>

        {/* Preguntas de Matemáticas */}
        <div className="mb-6">
          {questions.map((question, index) => (
            <div key={question.id} className="mb-4 p-4 bg-gray-100 rounded">
              <p className="font-semibold mb-2">
                {index + 1}. {question.text}
              </p>
              <p className="mb-2 text-lg font-bold">{question.displayText}</p>
              <input
                type="number"
                placeholder="Tu respuesta"
                value={formData.answers[question.id] || ''}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar Cuestionario
          </button>
          <button 
            type="button"
            onClick={regenerateQuestions}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Generar Nuevo Cuestionario
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
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Respuestas Correctas:</h3>
            {questions.map((question, index) => (
              <p key={question.id}>
                {index + 1}. {question.displayText} = {question.correctAnswer}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MathQuiz;