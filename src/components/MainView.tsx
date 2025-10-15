import React from 'react';
import { Task } from '../types';
import styles from './MainView.module.css';

interface MainViewProps {
  currentTask: Task | null;
  onNextTask: () => void;
  onManageTasks: () => void;
  isEmpty: boolean;
}

const MainView: React.FC<MainViewProps> = ({
  currentTask,
  onNextTask,
  onManageTasks,
  isEmpty
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isEmpty ? (
          <div className={styles.emptyMessage}>
            <h2>タスクを登録してください</h2>
            <p>「リスト管理」ボタンからタスクを追加できます</p>
          </div>
        ) : (
          <div className={styles.taskDisplay}>
            <h1 className={styles.taskText}>
              {currentTask?.text || 'タスクを読み込み中...'}
            </h1>
          </div>
        )}
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.nextButton}
            onClick={onNextTask}
            disabled={isEmpty}
          >
            次へ
          </button>
          <button 
            className={styles.manageButton}
            onClick={onManageTasks}
          >
            リスト管理
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainView;
