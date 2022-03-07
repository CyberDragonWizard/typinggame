import React from 'react';

const Results = (props) => {
    return (
        <div className="results">
            <div className="title">
                <p>Correct answers: {props.countCorrect}</p>  
            </div>
            <div className="resultsContainer">
                <div className="correctResults">
                    <h3>Right</h3>
                    {props.correctResults.map((correctWord, index) => (
                        <div key={index} className="row">
                            <p>{correctWord}</p>
                        </div>
                    ))} 
                </div>
                <div className="wrongResults">
                <h3>Wrong</h3>
                    {props.wrongResults.map((wrongWord, index) => (
                        <div key={index} className="row">
                            <p>{wrongWord}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Results;