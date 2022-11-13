import React from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';


export default function Todo({ todos, completeTask, removeTask }) {
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
                <div className="align-left">{todo.text}</div>
            <div className="todo-next">{todo.next}</div>
            <div className="icons" key={todo.id}>
                <TiTick className={todo.isComplete ? 'hide' : 'tick'} onClick={() => { completeTask(todo.id) }}></TiTick>
                <RiCloseCircleLine className='cross' onClick={() => { removeTask(todo.id) }}></RiCloseCircleLine>

            </div>
        </div>
    ))
}
