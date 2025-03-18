import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import BackgroundParticles from './components/BackgroundParticles';
import LandingPage from './components/LandingPage';

function App() {
  // Initialiser les tâches depuis le localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error('Erreur lors du chargement des tâches:', error);
      return [];
    }
  });

  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [hasAccessedApp, setHasAccessedApp] = useState(false);

  // Sauvegarder les tâches dans le localStorage à chaque modification
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des tâches:', error);
    }
  }, [tasks]);

  const handleAddTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      subtasks: [],
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleUpdateStatus = (taskId, newStatus) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleAddSubtask = (taskId, subtaskText) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? {
              ...task,
              subtasks: [...(task.subtasks || []), { 
                text: subtaskText, 
                completed: false,
                id: Date.now() + Math.random()
              }]
            }
          : task
      )
    );
  };

  const handleUpdateSubtask = (taskId, subtaskIndex, completed) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask, index) =>
                index === subtaskIndex ? { ...subtask, completed } : subtask
              )
            }
          : task
      )
    );
  };

  const handleDeleteSubtask = (taskId, subtaskIndex) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.filter((_, index) => index !== subtaskIndex)
            }
          : task
      )
    );
  };

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'all') return true;
      return task.status === filter;
    })
    .filter(task => {
      if (priorityFilter === 'all') return true;
      return task.priority === priorityFilter;
    })
    .sort((a, b) => {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  const handleAccessApp = () => {
    setHasAccessedApp(true);
  };

  if (!hasAccessedApp) {
    return <LandingPage onAccessApp={handleAccessApp} />;
  }

  return (
    <div className="min-h-screen p-8">
      <BackgroundParticles />
      <div className="container mx-auto px-4 py-8">
        <h1 className="main-title">TaskTwo</h1>
        <p className="subtitle">Organisez vos tâches efficacement</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TaskFilter 
              filter={filter} 
              setFilter={setFilter}
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
            />
            <TaskList 
              tasks={filteredTasks}
              onUpdateStatus={handleUpdateStatus}
              onDelete={handleDeleteTask}
              onAddSubtask={handleAddSubtask}
              onUpdateSubtask={handleUpdateSubtask}
              onDeleteSubtask={handleDeleteSubtask}
            />
          </div>
          <div className="lg:col-span-1">
            <TaskForm onSubmit={handleAddTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
