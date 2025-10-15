import React, { useState, useEffect } from 'react';
import { Task, AppView } from './types';
import { saveTasks, loadTasks } from './utils/storage';
import { getRandomTask } from './utils/random';
import MainView from './components/MainView';
import TaskManageView from './components/TaskManageView';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [currentView, setCurrentView] = useState<AppView>('main');

  // アプリ起動時にローカルストレージからタスクを読み込み
  useEffect(() => {
    const loadedTasks = loadTasks();
    setTasks(loadedTasks);
    
    // タスクがある場合はランダムに1つ選択
    if (loadedTasks.length > 0) {
      const randomTask = getRandomTask(loadedTasks);
      setCurrentTask(randomTask);
    }
  }, []);

  // タスクが変更されたらローカルストレージに保存
  useEffect(() => {
    saveTasks(tasks);
    
    // 現在のタスクが削除された場合は新しいタスクを選択
    if (currentTask && !tasks.find(task => task.id === currentTask.id)) {
      if (tasks.length > 0) {
        const randomTask = getRandomTask(tasks);
        setCurrentTask(randomTask);
      } else {
        setCurrentTask(null);
      }
    }
  }, [tasks, currentTask]);

  const handleNextTask = () => {
    if (tasks.length > 0) {
      const randomTask = getRandomTask(tasks, currentTask?.id);
      setCurrentTask(randomTask);
    }
  };

  const handleUpdateTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
  };

  const handleManageTasks = () => {
    setCurrentView('manage');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
  };

  const isEmpty = tasks.length === 0;

  return (
    <div className="App">
      {currentView === 'main' ? (
        <MainView
          currentTask={currentTask}
          onNextTask={handleNextTask}
          onManageTasks={handleManageTasks}
          isEmpty={isEmpty}
        />
      ) : (
        <TaskManageView
          tasks={tasks}
          onUpdateTasks={handleUpdateTasks}
          onBackToMain={handleBackToMain}
        />
      )}
    </div>
  );
};

export default App;
