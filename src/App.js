import logo from './logo.svg';
import './App.css';
import Action from './action';
import { useEffect, useState } from 'react';


function App() {

  const [state,setState] = useState([]);

  let getData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        setState(res);
        // setState(res.data.items);
    })
}
useEffect(()=>{
    getData();
},[])
  const names = state.map((ele)=>ele.name);
  return (
    <div className="App">
      <Action data={names}/>
    </div>
  );
}

export default App;
