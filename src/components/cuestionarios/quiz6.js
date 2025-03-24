import React, { useState } from 'react';

const OrientExpressQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState("");

  const questions = [
    {
      question: "¿Cuál es el nombre real del hombre asesinado en el tren?",
      options: [
        "Samuel Edward Ratchett",
        "John Arbuthnot Armstrong",
        "Luigi Cassetti",
        "Hector MacQueen"
      ],
      correct: 2,
      feedback: "Correcto: El nombre real del hombre asesinado era Luigi Cassetti, un criminal que había secuestrado al bebé de la familia Armstrong."
    },
    {
      question: "¿Quién es el detective que investiga el caso?",
      options: [
        "Hércules Pope",
        "Hercule Poirot",
        "Sherlock Holmes",
        "G. Lestrade"
      ],
      correct: 1,
      feedback: "Correcto: Hercule Poirot es el famoso detective belga que resuelve el caso en la novela de Agatha Christie."
    },
    {
      question: "¿Qué conexión tenían los pasajeros con el caso Armstrong?",
      options: [
        "Eran familiares de la víctima",
        "Todos trabajaban para la familia Armstrong",
        "Estaban relacionados con el secuestro del bebé Armstrong",
        "Eran investigadores del caso"
      ],
      correct: 2,
      feedback: "Correcto: Los pasajeros estaban relacionados con el secuestro del bebé Armstrong, un crimen que terminó en tragedia para la familia."
    },
    {
      question: "¿Por qué los pasajeros decidieron cometer el asesinato?",
      options: [
        "Por robo",
        "Venganza por el caso Armstrong",
        "Disputa política",
        "Error accidental"
      ],
      correct: 1,
      feedback: "Correcto: Los pasajeros actuaron por venganza, ya que Cassetti (Ratchett) había escapado de la justicia por el secuestro del bebé Armstrong."
    },
    {
      question: "¿Cómo concluye Poirot su investigación?",
      options: [
        "Declara culpable a un pasajero",
        "Sugiere dos posibles soluciones",
        "Determina que fue suicidio",
        "Culpa a un intruso"
      ],
      correct: 1,
      feedback: "Correcto: Poirot ofrece dos posibles soluciones: una oficial y otra que implica a todos los pasajeros."
    },
    {
      question: "¿Qué relación tenía la doncella de la víctima con el caso Armstrong?",
      options: [
        "Era la madre del bebé secuestrado",
        "Era la hermana de la niñera del bebé",
        "Era la tía de la víctima",
        "Era la esposa de Cassetti"
      ],
      correct: 1,
      feedback: "Correcto: La doncella era la hermana de la niñera del bebé Armstrong, quien se suicidó tras el secuestro."
    },
    {
      question: "¿Qué medio de transporte es el escenario principal de la historia?",
      options: [
        "El Orient Express",
        "El Transiberiano",
        "El tren bala japonés",
        "El Eurostar"
      ],
      correct: 0,
      feedback: "Correcto: La historia transcurre en el Orient Express, un famoso tren de lujo que conectaba Europa."
    },
    {
      question: "¿Quién escribió 'Asesinato en el Orient Express'?",
      options: [
        "Arthur Conan Doyle",
        "Agatha Christie",
        "Raymond Chandler",
        "Dorothy L. Sayers"
      ],
      correct: 1,
      feedback: "Correcto: La novela fue escrita por Agatha Christie, la famosa autora de misterio."
    },
    {
      question: "¿Qué nacionalidad tiene Hercule Poirot?",
      options: [
        "Francés",
        "Inglés",
        "Belga",
        "Alemán"
      ],
      correct: 2,
      feedback: "Correcto: Poirot es belga, un detalle importante en muchas de sus historias."
    },
    {
      question: "¿Qué impide que el tren continúe su viaje?",
      options: [
        "Una tormenta de nieve",
        "Un sabotaje",
        "Un accidente",
        "Un bloqueo político"
      ],
      correct: 0,
      feedback: "Correcto: Una tormenta de nieve detiene el tren, lo que permite a Poirot investigar el crimen."
    },
    {
      question: "¿Qué objeto clave encuentra Poirot en el compartimento de la víctima?",
      options: [
        "Un cuchillo ensangrentado",
        "Un pañuelo con la inicial 'H'",
        "Una carta de amenaza",
        "Un reloj roto"
      ],
      correct: 1,
      feedback: "Correcto: Poirot encuentra un pañuelo con la inicial 'H', una pista importante."
    },
    {
      question: "¿Qué profesión tenía la víctima antes de cambiar su identidad?",
      options: [
        "Médico",
        "Gánster",
        "Abogado",
        "Periodista"
      ],
      correct: 1,
      feedback: "Correcto: Cassetti era un gánster involucrado en el secuestro del bebé Armstrong."
    },
    {
      question: "¿Cuántas personas participaron directamente en el asesinato?",
      options: [
        "1",
        "5",
        "12",
        "Todas las del vagón"
      ],
      correct: 3,
      feedback: "Correcto: Todos los pasajeros del vagón participaron en el asesinato como un acto de justicia colectiva."
    },
    {
      question: "¿Qué hace Poirot al final con su conclusión?",
      options: [
        "La entrega a la policía",
        "La oculta para proteger a los pasajeros",
        "La publica en un periódico",
        "La comparte solo con su asistente"
      ],
      correct: 1,
      feedback: "Correcto: Poirot decide ocultar la verdad para proteger a los pasajeros, quienes actuaron por venganza."
    },
    {
      question: "¿Qué personaje representa la voz de la razón en la historia?",
      options: [
        "El conductor del tren",
        "El doctor Constantine",
        "El coronel Arbuthnot",
        "La señorita Debenham"
      ],
      correct: 1,
      feedback: "Correcto: El doctor Constantine ayuda a Poirot y aporta lógica a la investigación."
    },
    {
      question: "¿Qué simboliza el Orient Express en la historia?",
      options: [
        "El lujo y la elegancia",
        "Un microcosmos de la sociedad",
        "La velocidad del progreso",
        "Un símbolo de la guerra"
      ],
      correct: 1,
      feedback: "Correcto: El tren representa un microcosmos de la sociedad, con pasajeros de diferentes orígenes y motivaciones."
    },
    {
      question: "¿Qué papel juega la nieve en la trama?",
      options: [
        "Simboliza la pureza",
        "Aísla el tren y a los sospechosos",
        "Es una metáfora del frío emocional",
        "No tiene relevancia"
      ],
      correct: 1,
      feedback: "Correcto: La nieve aísla el tren, lo que permite a Poirot concentrarse en los pasajeros como únicos sospechosos."
    },
    {
      question: "¿Qué importancia tiene el reloj de la víctima?",
      options: [
        "Muestra la hora del crimen",
        "Está roto, lo que confunde a Poirot",
        "Es un regalo de uno de los pasajeros",
        "Contiene una pista oculta"
      ],
      correct: 0,
      feedback: "Correcto: El reloj muestra la hora del crimen, una pista crucial para Poirot."
    },
    {
      question: "¿Qué representa el final ambiguo de la historia?",
      options: [
        "La complejidad de la justicia",
        "La incompetencia de Poirot",
        "Un error de la autora",
        "Un giro innecesario"
      ],
      correct: 0,
      feedback: "Correcto: El final ambiguo refleja la complejidad de la justicia y la moralidad."
    },
    {
      question: "¿Qué lección principal deja la novela?",
      options: [
        "La justicia no siempre es blanca o negra",
        "El crimen nunca paga",
        "La venganza es inútil",
        "La ley siempre prevalece"
      ],
      correct: 0,
      feedback: "Correcto: La novela explora cómo la justicia no siempre es blanca o negra, especialmente en casos de venganza."
    }
  ];

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].correct) {
      setScore(score + 5); // 5 puntos por respuesta correcta (total 100)
      setFeedback("✅ " + questions[currentQuestion].feedback);
    } else {
      setFeedback("❌ Incorrecto. " + questions[currentQuestion].feedback);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setFeedback("");
      } else {
        setShowScore(true);
      }
    }, 2000); // 2 segundos de retroalimentación antes de pasar a la siguiente pregunta
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {showScore ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Tu puntaje: {score}/100</h2>
          <p>
            {score === 100
              ? "¡Perfecto! Eres un verdadero experto en 'Asesinato en el Orient Express'."
              : score >= 70
              ? "¡Bien hecho! Sabes mucho sobre la historia, pero hay detalles por repasar."
              : "¡Necesitas revisar la novela nuevamente!"}
          </p>
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <h3>Pregunta {currentQuestion + 1}/{questions.length}</h3>
            <p>{questions[currentQuestion].question}</p>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc' }}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <p style={{ marginTop: '20px', color: feedback.includes("✅") ? 'green' : 'red' }}>{feedback}</p>}
        </div>
      )}
    </div>
  );
};

export default OrientExpressQuiz;