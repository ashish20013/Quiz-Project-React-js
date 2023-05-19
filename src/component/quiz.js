import './quiz.css'
import { useState } from 'react';

const Quiz = ({ ashish }) => {

    const [index, setIndex] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const handlAns = (isCorrect) => {
if(isCorrect === true){
    setScore(index+1)
}
        const nextQuestion = index + 1;
        if (nextQuestion < ashish.length) {
            setIndex(nextQuestion)
        }else{
            setShowScore(true)
        }

    }

    return (

        <div className="main-box">
            {
                showScore ? <div> <h2>Your Score is {score} /{ashish.length}</h2> </div> :
                    <>
                        <div className="question-number"> <h1> Question  {index + 1}/{ashish.length}</h1></div>
                        <div className="question"> <h3>{ashish[index].question}</h3></div>
                        <div className='option'>
                            {
                                ashish[index].answer.map((ans, index) => {
                                    return (
                                        <div key={index}>
                                            <button onClick={()=>handlAns(ans.isCorrect)}>{ans.answerText}</button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </>
            }
        </div>


    )

};
export default Quiz;
