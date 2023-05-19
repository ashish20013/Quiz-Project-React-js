import Quiz from "./component/quiz";


//import "./App.css"

function App() {

  const quiz = [
    {
      question: " what is React",
      answer: [
        { answerText: 'Librery', isCorrect: true },
        { answerText: 'Program', isCorrect: false },
        { answerText: 'API', isCorrect: false },
        { answerText: 'Language', isCorrect: true },

      ],
    }, {
      question: " whar is javascript",
      answer: [
        { answerText: 'Librery', isCorrect: false },
        { answerText: 'Program', isCorrect: false },
        { answerText: 'API', isCorrect: false },
        { answerText: 'Language', isCorrect: true },

      ],
    },
    {
      question: " whar is MUI",
      answer: [
        { answerText: 'Librery', isCorrect: true },
        { answerText: 'Program', isCorrect: false },
        { answerText: 'API', isCorrect: false },
        { answerText: 'Language', isCorrect: false },

      ],
    }, {
      question: " whar is routing",
      answer: [
        { answerText: 'Librery', isCorrect: true },
        { answerText: 'Program', isCorrect: false },
        { answerText: 'API', isCorrect: false },
        { answerText: 'Languag', isCorrect: false },

      ],
    }
  ];

  return (
    <>
      <Quiz ashish={quiz} />
    </>

  )
}

export default App;