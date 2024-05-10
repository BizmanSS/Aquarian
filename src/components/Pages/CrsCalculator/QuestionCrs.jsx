import React from 'react';

function QuestionCrs({ id, questionText, options, onChange, error }) {
    return (
        <div className='question'>
            <label>{questionText}</label>
            <select onChange={event => onChange(id, event.target.value)} className={error ? "errorValidation" : ""}>
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