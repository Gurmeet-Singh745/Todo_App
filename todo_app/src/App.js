import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState(" ");

  //when app loads get todos from database
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({id: doc.id ,todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      //to get value in order
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1>To Do App</h1>
      <form>
       <FormControl>
        <InputLabel >Write a Todo</InputLabel>
        <Input value={input} onChange={(event) => setInput(event.target.value)}></Input>
  
       </FormControl>
       <Button type="submit" variant="contained" color="primary" onClick={addTodo} disabled={!input}>Add ToDo</Button>
      </form>
      
      <ul>
        {todos.map((todo) => (
         <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
