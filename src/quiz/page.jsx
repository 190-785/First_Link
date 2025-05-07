import React from 'react';

const QuizPage = () => {
    const questions = Array.from({ length: 25 }, (_, index) => `Question ${index + 1}`);

    return (
        <div>
            <h1>Quiz Questions</h1>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
            <h1>There are {questions.length()} number of questions</h1>
        </div>
    );
};

export default QuizPage;