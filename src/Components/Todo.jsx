import React from 'react';
import { useState } from 'react';
import firebase from '../firebase'
import { Modal, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Todo = ({todo}) => {
    const db = firebase.firestore()
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const openHandler = () => {
        setOpen(true)
    }

    const closeHandler = () => {
        setOpen(false)
    }

    const updatedTodo = () => {
        console.log(todo.id)
        db.collection('todos').doc(todo.id).set({
            todo : input,
        }, { merge : true } )
        setOpen(false)
    }

    const deleteHandler = (id) => {
        db.collection('todos').doc(id).delete()
    }

    return (
        <div>
            <h2> {todo.todo} </h2>
            <h6>hello world</h6>
            <Modal  open={open}
            onClose={closeHandler} >
                <div className={classes.paper} >
                    <h1>Open</h1>
                    <input 
                    onChange={e => setInput(e.target.value) }
                    placeholder={todo.todo}
                    value={input}
                    className="form-control"
                    type="text"/>
                    <button onClick={updatedTodo} className="btn btn-primary" >Updated todo</button>
                    <button onClick={closeHandler} className='btn btn-danger' >close</button>
                </div>
            </Modal>
            <button 
            onClick={openHandler}
            className='btn btn-info' >Edit</button>
            <button 
            className="btn btn-danger" 
            onClick={() => deleteHandler(todo.id) } >Delete</button>
        </div>
    );
};

export default Todo;