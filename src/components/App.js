
import React from "react";
import './../styles/App.css';

const App = () => {
  function hello(e){
    let x=e.target.value;
    console.log(e.target.value);
    if(x.trim===null){
      document.getElementById('t').innerText=`1`;
    }else{
      document.getElementById('t').innerText=`Hello ${x}`;
    }
  }
  return (
    <div>
        <label>Enter your name:</label>
        <br/>
        <input onChange={hello}/>
        <p id='t'></p>
    </div>
  )
}

export default App
