import React from 'react'

export default function Todos({ todoList, onPress, handleDelete,completeAll }) {
    return (
        <div>
            <section class="main">
                <input class="toggle-all" type="checkbox"/>
                <label for="toggle-all" onClick={completeAll}>
                    Mark all as complete
                </label>

                <ul class="todo-list">
                    {todoList.map((todo, i) => (
                        <li key={i} class={todo.isComplete ? "completed" : ""}>
                            <div class="view">
                                <input class="toggle" type="checkbox" checked={todo.isComplete} onChange={()=>onPress(todo.id)} />
                                <label>{todo.todo}</label>
                                <button class="destroy" onClick={()=>handleDelete(todo.id)}></button>
                            </div>
                        </li>

                    ))}

                </ul>
            </section>
        </div>
    )
}
