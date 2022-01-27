import './App.css';
import { useState } from 'react';

function App() {
  const [title , setTitle] = useState('')
  const [todos , setTodos] = useState([])
  const Submit = (e)=>{
    e.preventDefault();
    setTodos([...todos , title]);
    setTitle('');
  }
  const deleted = (index)=>{
    todos.splice(index,1);
    setTodos([...todos]);
  }
  return (
    <div className="App">
      <div className=''>
        <form onSubmit={Submit}>
          ADD TODO:
          <input className='border-2 border-black mx-4' name='todo' value={title} onChange={e => setTitle(e.target.value)} />
          <button className='bg-green-600 border-black border-2 mx-4'>Submit</button>
        </form>
      </div>
      <div>
        {todos.map((val,index)=>{
          return(
            <div className='mx-4 my-4 border-2 border-black'>
              <h1>{index+1} : {val}</h1>
              <button className='bg-red-500 border-black border-2 mx-4 my-2' onClick={ () => deleted(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;