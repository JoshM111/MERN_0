import React from "react";

const Results = ({ state }) => {
    return (
    <div>
        <h1>Results</h1>
        {Object.values(state).map((field) => (
        <p>{field}</p>
    ))}
    </div>
    );
};

export default Results;