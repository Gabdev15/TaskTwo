import React, { useState } from 'react';
import SubTaskList from './SubTaskList';

function TaskList({ tasks, onUpdateStatus, onUpdateSubtask, onAddSubtask, onDeleteSubtask, onDelete }) {
  const [deletingTaskId, setDeletingTaskId] = useState(null);

  const handleDelete = (taskId) => {
    setDeletingTaskId(taskId);
    setTimeout(() => {
      onDelete(taskId);
    }, 500);
  };

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <div className="card p-8 text-center animate-fadeIn">
          <p className="text-gray-500 text-lg">Aucune tâche à afficher</p>
          <p className="text-gray-400 text-sm mt-2">Ajoutez une nouvelle tâche pour commencer</p>
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
              deletingTaskId === task.id ? 'task-delete' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-600 mt-1">{task.description}</p>
                {task.dueDate && (
                  <p className="text-sm text-gray-500 mt-1">
                    Date d'échéance : {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                  {task.status}
                </span>
              </div>
            </div>

            <SubTaskList
              taskId={task.id}
              subtasks={task.subtasks || []}
              onUpdateSubtask={onUpdateSubtask}
              onAddSubtask={onAddSubtask}
              onDeleteSubtask={onDeleteSubtask}
            />

            <div className="mt-4 flex justify-end space-x-2">
              <div className="select-container">
                <select
                  value={task.status}
                  onChange={(e) => onUpdateStatus(task.id, e.target.value)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="En attente">En attente</option>
                  <option value="En cours">En cours</option>
                  <option value="Terminée">Terminée</option>
                </select>
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function getPriorityColor(priority) {
  switch (priority) {
    case 'Haut':
      return 'bg-red-100 text-red-800';
    case 'Moyen':
      return 'bg-yellow-100 text-yellow-800';
    case 'Bas':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getStatusColor(status) {
  switch (status) {
    case 'Terminée':
      return 'bg-green-100 text-green-800';
    case 'En cours':
      return 'bg-blue-100 text-blue-800';
    case 'En attente':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default TaskList; 