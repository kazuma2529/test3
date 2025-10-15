import { Task } from '../types';

export const getRandomTask = (tasks: Task[], excludeId?: string): Task | null => {
  if (tasks.length === 0) {
    return null;
  }

  // 除外するタスクがある場合は、それ以外のタスクから選択
  const availableTasks = excludeId 
    ? tasks.filter(task => task.id !== excludeId)
    : tasks;

  if (availableTasks.length === 0) {
    // 除外後に対象がない場合は、すべてのタスクから選択
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  }

  const randomIndex = Math.floor(Math.random() * availableTasks.length);
  return availableTasks[randomIndex];
};
