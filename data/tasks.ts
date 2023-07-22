// data/tasks.ts
import { Task } from '../interfaces/Task';

let tasks: Task[] = [];

export const getAllTasks = (): Task[] => {
  return tasks;
};

export const createTask = (task: Task): void => {
  tasks.push(task);
};

export const deleteTask = (taskId: string): void => {
  tasks = tasks.filter((task) => task.id !== taskId);
};
