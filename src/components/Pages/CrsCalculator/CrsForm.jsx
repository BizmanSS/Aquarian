import React, { useState, useEffect } from 'react';
import banner from '../../../Assets/Rectangle 156.png';
import QuestionCrs from './QuestionCrs';
import questionConfig from './questionConfig';
import '../../../styles/CrsCalculator.css';
import scoreMapPws from './scoreMap';
const CrsForm = () => {

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

    const handleChange = (id, value, name='') => {
      const newAnswers = {...answers, [id]: value};
      let newScore = 0
      for (let i = 1; i < questionConfig.length; i++) {
          const question = questionConfig[i];
          if (!question.condition(newAnswers)) {
              delete newAnswers[question.id];
          }
          else{
            console.log(scoreMapPws)
            console.log(scoreMapPws[question.id], question.id)
            const ans = newAnswers[question.id];
            newScore += scoreMapPws[question.id]?.[ans] ?? 0;
          }
      }
      setAnswers(newAnswers);
      setScore(newScore);

      console.log(newScore);
    };


  return (
        <div className = "form-container">
            {questionConfig.map(question => (
                question.condition(answers) && (
                    <QuestionCrs
                        key={question.id}
                        id={question.id.toString()}
                        questionText={question.text}
                        options={question.options}
                        onChange={handleChange}
                    />
                )
            ))}
            <div className = "score-display">Score: {score}</div>
        </div>
  );
};

export default CrsForm;
