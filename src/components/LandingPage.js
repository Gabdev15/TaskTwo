import React from 'react';

function LandingPage({ onAccessApp }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Particules de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 -bottom-20 -right-20"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Gestionnaire de Tâches
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Organisez vos tâches efficacement avec notre application intuitive. 
          Gérez vos projets, suivez votre progression et atteignez vos objectifs plus facilement.
        </p>

        <div className="space-y-8">
          {/* Fonctionnalités principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-3xl mb-4">📋</div>
              <h3 className="text-lg font-semibold mb-2">Gestion Simple</h3>
              <p className="text-gray-600">Créez et organisez vos tâches en quelques clics</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Suivi de Progression</h3>
              <p className="text-gray-600">Visualisez votre avancement en temps réel</p>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-indigo-600 text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Productivité Maximale</h3>
              <p className="text-gray-600">Optimisez votre temps et votre efficacité</p>
            </div>
          </div>

          {/* Bouton d'accès */}
          <button
            onClick={onAccessApp}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            <span className="relative z-10">Accéder à l'Application</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 