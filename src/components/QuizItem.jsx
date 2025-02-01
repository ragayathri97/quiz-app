import React from 'react'

function QuizItem({ question, onAnswerSelect, selectedAnswer}) {
  return (
    <div>
        <h3>{question.text}</h3>
        {question.options.map(option=>(
            <label key={option}>
                <input type="radio" name={question.id}
                value={option} checked={selectedAnswer ===option}
                onChange={()=>onAnswerSelect(question.id, option)}
                />
                {option}
            </label>
        ))}
    </div>
  );
}

export default QuizItem;