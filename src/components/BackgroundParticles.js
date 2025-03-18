import React, { useEffect, useState } from 'react';

function BackgroundParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      return {
        size,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `${delay}s`
      };
    };

    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }, createParticle);
    setParticles(newParticles);
  }, []);

  return (
    <div className="background-particles">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            animationDuration: particle.duration,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundParticles; 