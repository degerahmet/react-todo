import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Todos from '../Todos/Todos';

export default function Main() {
    const [todo, setTodo] = useState({ todo: "", isComplete: false });
    const [todoList, setTodoList] = useState([])


    const onChangeInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, { ...todo, id: Math.floor(Math.random() * 10000) }])
    };

    const pressHandler = id => {
        let updatedTodos = todoList.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodoList(updatedTodos);
        console.log(todoList)
    };
    const handleDelete = id => {
        const removedTodo = [...todoList].filter(todo => todo.id !== id);
        setTodoList(removedTodo);
    };

    const completeAll = () => {
        let updatedTodos = todoList.map(todo => {
            todo.isComplete = true;
            return todo;
        })
        setTodoList(updatedTodos);
    }

    return (
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input
                        name="todo"
                        class="new-todo"
                        placeholder="What needs to be done?"
                        onChange={onChangeInput}
                        autoFocus />
                </form>
            </header>
            {/* <!-- This section should be hidden by default and shown when there are todos --> */}
            <Todos
                todoList={todoList}
                onPress={pressHandler}
                completeAll={completeAll}
                handleDelete={handleDelete} />

            {/* <!-- This footer should hidden by default and shown when there are todos --> */}
            <Footer />

        </section>

    )
}
