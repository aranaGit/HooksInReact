import { useState } from "react";
import ShowDate from "./components/ShowDate"


function App() {
  const [name, setName]  = useState("Ashok");
  const [flag, setFlag]  = useState(false);
  const [step, setSteps]  = useState(()=>{
    console.log("one time");
    return 0;
  });
  const [names, setNames]=  useState([]);

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
    </>
  );
}

export default App;