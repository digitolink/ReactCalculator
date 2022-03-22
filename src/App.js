import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(null);
  const [ secondNumber, setSecondNumber ] = useState(null);
  const [ result, setResult ] = useState(null);
  const  memory = useRef(null);

  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }

  function addHandler (event){
    setResult(parseFloat(firstNumber)+parseFloat(secondNumber));
  }
  function substractionHandler (event){
    setResult(parseFloat(firstNumber)-parseFloat(secondNumber));
  }
  function multiplyHandler (event){
    setResult(parseFloat(firstNumber)*parseFloat(secondNumber));
  }
  function divideHandler (event){
    setResult(parseFloat(firstNumber)/parseFloat(secondNumber));
  }

  function deleteHandler (event){
    setResult(null);
    setSecondNumber("");
    setFirstNumber("");
  }

  function memoryHandler(event){
    memory.current=result;
    console.log(memory);
  }

  function copyHandler(event){
    setFirstNumber(memory.current);
  }
  
  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
    }
  )

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
      <br></br>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      <p>{result}</p>
      <input type="button" value={"+"} onClick={addHandler}/>
      <input type="button" value={"-"} onClick={substractionHandler}/>
      <input type="button" value={"*"} onClick={multiplyHandler}/>
      <input type="button" value={"/"} onClick={divideHandler}/>
      <input type="button" value={"C"} onClick={deleteHandler}/>
      <input type="button" value={"M+"} onClick={memoryHandler}/>
      <input type="button" value={"MR"} onClick={copyHandler}/>
      
    </>
  );
}

export default App;
