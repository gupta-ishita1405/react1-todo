import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const newTask =(elem)=>{
    setTask(elem.target.value)
  }
  const newDescription =(elem)=>{
    setDescription(elem.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");

    const newArr = [...allUsers, { task, description }];
    setAllUsers(newArr);
    setTask('');
    setDescription('');
    console.log("newArr")
  };
  const deleteHandler=(i)=>{
    const copyusers = [...allUsers];
    copyusers.splice(i,1);
    setAllUsers(copyusers);
  }

  return (
    <div>
      <h1 className='bg-black text-white p-5 text-3xl text-center font-bold'>Ishita's ToDo List</h1>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Task Here'
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }} />
        <input type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter Description Here'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }} />
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <div className='p-5 bg-gray-200'>
        {allUsers.map(function (elem,i) {

          return <div key={i} className='inline-block m-2 p-3 w-60 rounded-md text-center bg-white'>
            <h3 className='text-xl font-semibold text-center '>{elem.task}</h3>
            <p className='text-gray-600 text-lg'>{elem.description}</p>
            <button
            onClick={()=>{
              deleteHandler(i)
            }} 
            className='bg-red-800 text-sm mt-4 rounded text-white px-3 py-1'>Delete</button>
          </div>
        })}
      </div>
    </div>
    
  );
}

export default App;