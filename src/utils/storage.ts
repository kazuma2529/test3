import { Task } from '../types';

const STORAGE_KEY = 'randomTaskPicker_tasks';

export const saveTasks = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('タスクの保存に失敗しました:', error);
  }
};

export const loadTasks = (): Task[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('タスクの読み込みに失敗しました:', error);
  }
  return [];
};

export const generateTaskId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
