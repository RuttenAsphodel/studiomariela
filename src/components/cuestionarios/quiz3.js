import React, { useState } from 'react';

const ThorMythologyQuiz = () => {
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
      q7: ''
    },
    openQuestions: {
      q1: '',
      q2: ''
    }
  });

  const [score, setScore] = useState(null);

  const multipleChoiceAnswers = {
    q1: 'c',
    q2: 'c',
    q3: 'c',
    q4: 'a',
    q5: 'c',
    q6: 'a',
    q7: 'a'
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
        totalScore += 14;
      }
    });
    setScore(totalScore);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Thor, el Dios del Trueno
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

        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div key={num} className="mb-4">
            <p className="font-semibold mb-2">
              {num}. {[
                "¿Quién era Thor en la mitología nórdica?",
                "¿Cuál era la relación de Thor con Odín?",
                "¿Con qué arma era famoso Thor?",
                "¿Qué protegía Thor?",
                "¿Qué le gustaba hacer a Thor en su tiempo libre?",
                "¿Dónde se encontraba el palacio de Thor?",
                "¿Qué representa Thor en la mitología nórdica?"
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
                    ["Un gigante de hielo", "El dios del mar", "El dios del trueno", "El rey de los dioses"],
                    ["Eran enemigos", "Eran hermanos", "Eran padre e hijo", "No tenían relación"],
                    ["Una espada mágica", "Un arco y flecha", "Un martillo", "Un tridente"],
                    ["La agricultura y la fertilidad", "La sabiduría y la poesía", "La juventud, el rayo, el fuego y la arquitectura", "El amor y la belleza"],
                    ["Tejer", "Leer poemas", "Masacrar gigantes", "Navegar"],
                    ["En el reino de Asgard", "En el fondo del mar", "En el centro de la Tierra", "En la Luna"],
                    ["La fuerza y el poder", "La sabiduría y la inteligencia", "El engaño y la astucia", "La muerte y la destrucción"]
                  ][num-1][['a', 'b', 'c', 'd'].indexOf(letter)]}
                </label>
              </div>
            ))}
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-semibold mb-2">Pregunta Abierta 1: ¿Qué aspectos de Thor más te llamaron la atención? ¿Por qué?</label>
          <textarea
            value={formData.openQuestions.q1}
            onChange={(e) => handleOpenQuestionChange('q1', e.target.value)}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Pregunta Abierta 2: Si pudieras tener un poder similar al de Thor, ¿cuál sería y por qué?</label>
          <textarea
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

export default ThorMythologyQuiz;