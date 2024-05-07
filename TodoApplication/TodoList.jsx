import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState(["WakeUP", "Freshup", "Eat breakfast"]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function editTask(index) {
        setEditIndex(index);
        setEditedTask(tasks[index]);
    }

    function saveEditedTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editedTask;
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditedTask("");
    }

    function cancelEdit() {
        setEditIndex(null);
        setEditedTask("");
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='todolist'>
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    placeholder='Enter your Task'
                    onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTask}
                                    onChange={(e) => setEditedTask(e.target.value)}
                                />
                                <button onClick={() => saveEditedTask(index)}>Save</button>
                                <button onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : (
                                <>
                                    <span className="text">{task}</span>&nbsp;
                                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                                    <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                                    <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                                    <button className="edit-button" onClick={() => editTask(index)}>Edit</button>
                                </>
                            )}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;
