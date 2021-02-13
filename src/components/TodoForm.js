import React, { useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const focusInput = useRef(null);

    useEffect(() =>{
        focusInput.current.focus();
    })

    const handleChange = event =>{
        setInput(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    }

    return (

        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>
                <input type="text" placeholder="Update your item" 
                value={input} name="text" 
                className="todo-input edit" onChange={handleChange}
                ref={focusInput}/>
                <button onClick={handleSubmit} className="todo-button edit">Update</button>
            </>) 
            : 
            (<>
                <input type="text" placeholder="Add a Todo" 
                value={input} name="text" 
                className="todo-input" onChange={handleChange}
                ref={focusInput}/>
                <button onClick={handleSubmit} className="todo-button">Add Todo</button>
            </>)}

        </form>
            
    );
}

export default TodoForm;
