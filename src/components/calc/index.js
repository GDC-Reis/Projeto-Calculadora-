import { useState } from 'react';
import './calc.css';


const calc = () => {

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState(0);

    function inputNum(valor){
        let input = valor.target.value;
        console.log("valor do input", input);
        if(num === 0){
            setNum(input)
        }else{
            setNum(num + input)
        }
    }

    function clear(){
        setNum(0)
    }

    function porcentagem(){
        setNum(num / 100);
    }

    function operatorHandle (e){
        let operatporInput = e.target.value;
        console.log("Valor do operador: ", operatporInput);
        setOperator(operatporInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){

        if(operator === '/'){
            setNum(oldNum / num);
        }else if(operator === 'X'){
            setNum(oldNum * num);
        }else if(operator === '-'){
            setNum(oldNum - num);
        }else if(operator === '+'){
            setNum(parseFloat(oldNum) + parseFloat(num));
        }

        console.log("oldNum:", oldNum);
        console.log("num: ", num);
        console.log("Calculou")
    }


    return ( 
        <>
            <section className="section1">
                <div>
                    <h1>{num}</h1>

                    <div className='div_buttons'>
                        <button onClick={clear}>Clear</button>
                        <button>+/-</button>
                        <button onClick={porcentagem} >%</button>
                        <button onClick={operatorHandle} value="/">/</button>
                        <button onClick={operatorHandle} value="+">+</button>
                        <button onClick={operatorHandle} value="-">-</button>
                        <button onClick={operatorHandle} value="X">X</button>
                        <button onClick={inputNum} value={9}>9</button>
                        <button onClick={inputNum} value={8}>8</button>
                        <button onClick={inputNum} value={7}>7</button>
                        <button onClick={inputNum} value={6}>6</button>
                        <button onClick={inputNum} value={5}>5</button>
                        <button onClick={inputNum} value={4}>4</button>
                        <button onClick={inputNum} value={3}>3</button>
                        <button onClick={inputNum} value={2}>2</button>
                        <button onClick={inputNum} value={1}>1</button>
                        <button onClick={inputNum} value={0}>0</button>
                        <button onClick={inputNum} value={"."}>,</button>
                        <button onClick={calculate}>=</button>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default calc;