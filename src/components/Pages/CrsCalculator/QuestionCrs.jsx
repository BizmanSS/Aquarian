import React from 'react';

function QuestionCrs({ id, questionText, options, onChange }) {
    return (
        <div className='question'>
            <label>{questionText}</label>
            <select onChange={event => onChange(id, event.target.value)}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default QuestionCrs;