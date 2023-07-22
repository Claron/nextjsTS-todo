// components/CreateTaskForm.tsx

import { useState } from 'react';
import { Task } from '../interfaces/Task';
import { getAllTasks, createTask, deleteTask } from '../data/tasks';

const CreateTaskForm = () => {
	const [tasks, setTasks] = useState<Task[]>(getAllTasks());
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState<number | ''>('');
    const [prerequisiteTaskId, setPrerequisiteTaskId] = useState<string | ''>('');

	const handleDeleteTask = (taskId: string) => {
		deleteTask(taskId);
		setTasks(getAllTasks());
	};

	const handleCreateTask = () => {
		const newTask: Task = {
			id: new Date().getTime().toString(),
			name: taskName,
			priority: priority === '' ? 0 : parseInt(priority),
			prerequisiteTaskId: prerequisiteTaskId === '' ? null : prerequisiteTaskId,
			isDone: false,
		};
  
		createTask(newTask);
		setTaskName('');
		setPriority('');
		setPrerequisiteTaskId('');
		setTasks(getAllTasks());
	};

    return (
        <div>
            <h2>Create Task</h2>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
            />
            <input
                type="number"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Priority (1 - 10)"
            />
            <input
                type="text"
                value={prerequisiteTaskId}
                onChange={(e) => setPrerequisiteTaskId(e.target.value)}
                placeholder="Prerequisite Task ID (optional)"
            />
            <button onClick={handleCreateTask}>Create Task</button>
			<div>
			  <h1>To-Do List</h1>
			  <ul>
				{tasks.map((task) => (
				  <li key={task.id}>
					{task.name} - Priority: {task.priority}{' '}
					<button onClick={() => handleDeleteTask(task.id)}>Delete</button>
				  </li>
				))}
			  </ul>
			</div>
        </div>
		
    );
};

export default CreateTaskForm;
