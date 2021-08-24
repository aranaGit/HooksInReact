import { useEffect, useRef, useState } from "react";
import ShowDate from "./components/ShowDate"

/*
useRef hooks use
1) Dom reference
2) used for storing previous state
3) hold  mutable value prevent re-render of component
*/

function App() {
  const [name, setName]  = useState("Ashok");
  const [flag, setFlag]  = useState(false);
  const [step, setSteps]  = useState(()=>{
    console.log("one time");
    return 0;
  });
  const [names, setNames]=  useState([]);
  const inputEl = useRef("");
  const [counter, setCounter] = useState(0);

  const previousconterRef = useRef("");
  
  function changeName() {
    setName("Rana");
    setFlag(!flag);
  }
  function increment() {
    setSteps((prevState) => prevState+1);
    console.log("Increment called");
  }
  function decreament() {
    setSteps(step-1);
  }

  function addNames(e) {
    e.preventDefault();
    setNames([...names, {id:names.length, name}]);
    setName("");
  }

  const resetInput = () => {
    setName("");
    inputEl.current.focus();
  }

  useEffect(() => {
    previousconterRef.current = counter;
  }, [counter]);
  return (
    <>
      <div className="App">
        <h>hello, {flag ? name : ""} </h>
        <button onClick={changeName}>Click Me</button>
      </div>
      <hr></hr>
      <button onClick={increment}>+</button>
      {step}
      <button onClick={decreament}>-</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input
          type="input"
          placeholder="default"
          ref={inputEl}
          value={name}
          onChange={(e)=>setName(e.target.value)}>
        </input>
        <button>Submit</button>
      </form>
      <hr></hr>
      <ul>
        {names.map((item)=>(
        <li key={item.id}>{item.name}</li>))}
      </ul>
      <ShowDate></ShowDate>
      <hr></hr>
      <div>
        <input 
          type="text" 
          value={name}
          ref={inputEl}
          onChange={(e) => setName(e.target.value)}></input>
        <button onClick={resetInput}>Reset</button>
      </div>
      <hr></hr>
      <div>
        <h1> Current Counter is  {counter}</h1>
        {typeof previousconterRef.current !== "undefined" && (
          <h2> Previous counter is : {previousconterRef.current}</h2>
        )}
        <button onClick= {(e) => setCounter(Math.ceil(Math.random()*100))}>Generate counter</button>
      </div>
    </>
  );
}

export default App;
