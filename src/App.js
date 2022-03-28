import { useEffect, useRef, useState } from 'react';
import './App.css';
import History from './components/history/History.jsx';


function App() {
  const [ firstNumber, setFirstNumber ] = useState("");
  const [ secondNumber, setSecondNumber ] = useState("");
  const [ result, setResult ] = useState("");
  const  memory = useRef(0);
  const [ resultHistory, setResultHistory ] = useState([]);

  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }

  function marcarHandler(event){
    
    

  }

  function addHandler (event){
    //setResultHistory([...resultHistory, parseFloat(firstNumber)+parseFloat(secondNumber)])
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
      if (result!=null)
        setResultHistory([...resultHistory,result]);
    }, [result]
  )

  return (
    <>
      <h1>Calculadora</h1>
      <div class="cuadricula">
      <section class="primera-columna">
        <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
        <br></br>
        <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
        <p>{result}</p>
        <History results={resultHistory}/>      
      </section>
      <aside class="segunda-columna">
        <input type="button" class="tecla" value={"0"} onClick={marcarHandler}/>
        <input type="button" class="tecla" value={"1"} onClick={marcarHandler}/>
        <input type="button" class="tecla" value={"2"} onClick={marcarHandler}/>
        <input type="button" class="tecla" value={"3"} onClick={marcarHandler}/>
        <input type="button" class="tecla" value={"4"} onClick={marcarHandler}/>      
        <input type="button" class="tecla" value={"5"} onClick={marcarHandler}/>
        <input type="button" class="tecla" value={"6"} onClick={marcarHandler}/>
        <input type="button" class="tecla" value={"7"} onClick={marcarHandler}/>    
        <input type="button" class="tecla" value={"8"} onClick={marcarHandler}/>
        <input type="button" class="tecla" value={"9"} onClick={marcarHandler}/>

        <input type="button" value={"+"} onClick={addHandler}/>
        <input type="button" value={"-"} onClick={substractionHandler}/>
        <input type="button" value={"*"} onClick={multiplyHandler}/>
        <input type="button" value={"/"} onClick={divideHandler}/>
        <input type="button" value={"C"} onClick={deleteHandler}/>
        <input type="button" value={"M+"} onClick={memoryHandler}/>
        <input type="button" value={"MR"} onClick={copyHandler}/>
      </aside>
      </div>
    </>
  );
}

export default App;
