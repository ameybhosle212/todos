import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [title , setTitle] = useState('')
  const [todos , setTodos] = useState([])
  const [edi , setEdi ] = useState(0);
  const [changedValue , setChangedValue ] = useState('');
  const [indexed , setIndexed] = useState(0);
  useEffect(()=>{
    // console.log(todos);
  },[edi])
  const Submit = (e)=>{
    e.preventDefault();
    setTodos([...todos , title]);
    setTitle('');
  }
  const deleted = (index)=>{
    todos.splice(index,1);
    setTodos([...todos]);
  }
  const Edit = (index)=>{
    var d = todos.splice(index,1);
    setChangedValue(d);
    setIndexed(index);
    console.log(todos);
    setEdi(1);
  }
  const Edited = ()=>{
    todos.splice(indexed,0, changedValue)
    // todos[indexed] = changedValue ;
    setTodos([...todos])
    console.log(todos);
    setChangedValue('')
    setEdi(0);
  }
  return (
    <div className="App">
      {edi ? 
        <div>
          <form>
            Edit Todo:
            <input name='edit' value={changedValue} onChange={e => setChangedValue(e.target.value)} />
            <button onClick={Edited}>Set Todo</button>
          </form>
        </div>
        : 
        <div className=''>
          <form onSubmit={Submit}>
            ADD TODO:
            <input className='border-2 border-black mx-4' name='todo' value={title} onChange={e => setTitle(e.target.value)} />
            <button className='bg-green-600 border-black border-2 mx-4'>Submit</button>
          </form>
        </div>}
      <div>
        {todos.map((val,index)=>{
          if(val != ""){
            return(
              <div className='mx-4 my-4 border-2 border-black'>
                <h1>{index+1} : {val}</h1>
                <button className='bg-green-600 border-black border-2 mx-4' onClick={() => Edit(index)}>Edit</button>
                <button className='bg-red-500 border-black border-2 mx-4 my-2' onClick={ () => deleted(index)}>Delete</button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;