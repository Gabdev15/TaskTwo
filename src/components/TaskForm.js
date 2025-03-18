import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Moyen',
    status: 'En attente'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Moyen',
      status: 'En attente'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">Nouvelle Tâche</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            placeholder="Entrez le titre de la tâche"
            className="w-full px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Décrivez votre tâche"
            className="w-full px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date d'échéance</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priorité</label>
          <div className="select-container">
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full"
            >
              <option value="Bas">Bas</option>
              <option value="Moyen">Moyen</option>
              <option value="Haut">Haut</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
        >
          Ajouter la tâche
        </button>
      </form>
    </div>
  );
}

export default TaskForm; 