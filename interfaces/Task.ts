// interfaces/Task.ts
interface Task {
  id: string;
  name: string;
  priority: number;
  prerequisiteTaskId?: string | null;
  isDone: boolean;
}
