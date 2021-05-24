import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({hanldeAddTodo}) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if( description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        hanldeAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Learn ..."
                    autoComplete="off"
                    value= { description }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
