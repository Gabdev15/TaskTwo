import React, { useState } from 'react';

function SubTaskList({ taskId, subtasks = [], onUpdateSubtask, onAddSubtask, onDeleteSubtask }) {
  const [newSubtask, setNewSubtask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSubtask.trim()) {
      onAddSubtask(taskId, newSubtask.trim());
      setNewSubtask('');
    }
  };

  const progress = subtasks.length > 0
    ? (subtasks.filter(st => st.completed).length / subtasks.length) * 100
    : 0;

  return (
    <div className="subtask-list">
      <div className="subtask-header">
        <h4 className="text-sm font-medium text-gray-700">Sous-tâches</h4>
        <span className="subtask-count">
          {subtasks.filter(st => st.completed).length}/{subtasks.length} terminées
        </span>
      </div>

      <div className="subtask-progress mb-4">
        <div 
          className="subtask-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-2">
        {subtasks.map((subtask, index) => (
          <div
            key={index}
            className={`subtask-item ${subtask.completed ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              checked={subtask.completed}
              onChange={() => onUpdateSubtask(taskId, index, !subtask.completed)}
              className="subtask-checkbox"
            />
            <span className="flex-1 text-sm">{subtask.text}</span>
            <button
              onClick={() => onDeleteSubtask(taskId, index)}
              className="subtask-delete-btn"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="subtask-form">
        <input
          type="text"
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
          placeholder="Ajouter une sous-tâche..."
          className="subtask-input"
        />
        <button type="submit" className="subtask-add-btn">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default SubTaskList; 