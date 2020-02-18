import React, { useState } from 'react';
import axios from 'axios';

const operatorList = [
    'add',
    'subtract',
    'multiply',
    'divide'
]

const Calculator = ({ first, second, result, operation }) => {
    const [firstNum, setFirst] = useState(first);
    const [secondNum, setSecond] = useState(second);
    const [operator, setOperator] = useState(operation);
    const [resultNum, setResult] = useState(result)

    const handleUserInput = (field, value) => {
        const setState = field === 'first' ? setFirst : setSecond;
        setState(value);
        setOperator('');
        setResult('');
    };

    const handleUserSubmission = async (operator) => {
        const res = await axios.post(`/api/${operator}`, {
            first: firstNum,
            second: secondNum
        });
        setOperator(res.data.operation);
        setResult(res.data.result)
    };

    return (
        <div className="wrapper">
            <input value={firstNum} onChange={e => handleUserInput('first', e.target.value)}/>
            <div className="operator">{operator}</div>
            <input value={secondNum} onChange={e=> handleUserInput('second', e.target.value)}/>
            <div>{`= ${resultNum}`}</div>
            <div>
                {operatorList.map(item => 
                    <button onClick={ ()=> handleUserSubmission(item)}>{item}</button>
                )}
            </div>

            <style jsx>{`
                .wrapper {
                    height: 500px;
                    width: 400px;
                    background:#c1c1c1;
                    padding: 15px;
                }

                .operator {
                    min-height: 18.4px;
                }

                button {
                    background-color:#fff;
                    border: none;
                    border-radius: 7px;
                    padding: 4px 10px;
                    margin-left: 5px;
                }
            `}</style>
        </div>
    );
};

export default Calculator;