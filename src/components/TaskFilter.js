import React from 'react';

function TaskFilter({ filter, setFilter, priorityFilter, setPriorityFilter }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">Tous</option>
            <option value="En attente">En attente</option>
            <option value="En cours">En cours</option>
            <option value="Terminée">Terminée</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priorité</label>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">Toutes</option>
            <option value="Bas">Bas</option>
            <option value="Moyen">Moyen</option>
            <option value="Haut">Haut</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TaskFilter; 