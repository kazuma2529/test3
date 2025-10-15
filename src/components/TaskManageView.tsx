import React, { useState } from 'react';
import { Task } from '../types';
import styles from './TaskManageView.module.css';

interface TaskManageViewProps {
  tasks: Task[];
  onUpdateTasks: (tasks: Task[]) => void;
  onBackToMain: () => void;
}

const TaskManageView: React.FC<TaskManageViewProps> = ({
  tasks,
  onUpdateTasks,
  onBackToMain
}) => {
  const [newTaskText, setNewTaskText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const MAX_TASKS = 5;
  const MAX_TEXT_LENGTH = 20;

  const handleAddTask = () => {
    const trimmedText = newTaskText.trim();
    if (trimmedText && tasks.length < MAX_TASKS && trimmedText.length <= MAX_TEXT_LENGTH) {
      const newTask: Task = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        text: trimmedText
      };
      onUpdateTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const handleEditTask = (id: string, newText: string) => {
    if (newText.trim() && newText.length <= MAX_TEXT_LENGTH) {
      const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, text: newText.trim() } : task
      );
      onUpdateTasks(updatedTasks);
      setEditingId(null);
      setEditingText('');
    }
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    onUpdateTasks(updatedTasks);
  };

  const handleClearAll = () => {
    if (window.confirm('すべてのタスクを削除しますか？この操作は取り消せません。')) {
      onUpdateTasks([]);
    }
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const isAddDisabled = !newTaskText.trim() || tasks.length >= MAX_TASKS || newTaskText.length > MAX_TEXT_LENGTH;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>タスク管理</h1>
        
        <div className={styles.addSection}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="新しいタスクを入力（20文字以内）"
              maxLength={MAX_TEXT_LENGTH}
              className={styles.input}
            />
            <button
              onClick={handleAddTask}
              disabled={isAddDisabled}
              className={styles.addButton}
            >
              追加
            </button>
          </div>
          <div className={styles.limits}>
            <span className={styles.limitText}>
              {newTaskText.length}/{MAX_TEXT_LENGTH}文字
            </span>
            <span className={styles.limitText}>
              {tasks.length}/{MAX_TASKS}個
            </span>
          </div>
        </div>

        <div className={styles.taskList}>
          {tasks.length === 0 ? (
            <p className={styles.emptyMessage}>タスクが登録されていません</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className={styles.taskItem}>
                {editingId === task.id ? (
                  <div className={styles.editContainer}>
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      maxLength={MAX_TEXT_LENGTH}
                      className={styles.editInput}
                      autoFocus
                    />
                    <div className={styles.editButtons}>
                      <button
                        onClick={() => handleEditTask(task.id, editingText)}
                        className={styles.saveButton}
                        disabled={!editingText.trim() || editingText.length > MAX_TEXT_LENGTH}
                      >
                        保存
                      </button>
                      <button
                        onClick={cancelEdit}
                        className={styles.cancelButton}
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.taskContent}>
                    <span className={styles.taskText}>{task.text}</span>
                    <div className={styles.taskButtons}>
                      <button
                        onClick={() => startEdit(task)}
                        className={styles.editButton}
                      >
                        編集
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className={styles.deleteButton}
                      >
                        削除
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {tasks.length > 0 && (
          <button
            onClick={handleClearAll}
            className={styles.clearButton}
          >
            すべて削除
          </button>
        )}

        <button
          onClick={onBackToMain}
          className={styles.backButton}
        >
          メイン画面に戻る
        </button>
      </div>
    </div>
  );
};

export default TaskManageView;
