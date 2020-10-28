import React from 'react';
import firebase from '../firebase'
import { useState } from 'react';
import { useEffect } from 'react';
import Todo from './Todo'

const GetData = () => {
    const db = firebase.firestore()
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const addTodo = e => {
        e.preventDefault()

        db.collection('todos').add({
            todo : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h2>GetData</h2>
                    <h1>hello world</h1>
                    <form onSubmit={addTodo} >
                        <input
                        onChange={e => setInput(e.target.value)}
                        value={input}
                            className="form-control"
                            placeholder="type your text"
                            type="text" />
                        <button className="btn btn-info my-3" >submit</button>
                    </form>
                    { todos.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default GetData;