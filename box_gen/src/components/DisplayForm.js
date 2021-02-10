import React from 'react';

const DisplayForm = ({ color }) => {
    const boxColor = {
        backgroundColor: [color],
        width: "300px",
        height: "300px",
        display: "inline-block",
        };
    return <div className="box m-2" style={boxColor}></div>;
};


export default DisplayForm;