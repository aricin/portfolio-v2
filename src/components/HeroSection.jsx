'use client'

// components/HeroSection.client.jsx
import React, { useRef, useEffect } from 'react';

const HeroSection = () => {
  const canvasRef = useRef(null);
  let animationFrameId;

  // Function to draw stars
  const drawStars = (ctx, count) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < count; i++) {
      const x = Math.random() * ctx.canvas.width;
      const y = Math.random() * ctx.canvas.height;
      const radius = Math.random() * 1.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.fillStyle = 'white';
      ctx.fill();
    }
  };

  // Animation function
  const animateStars = (ctx) => {
    drawStars(ctx, 200); // Adjust the number of stars
    animationFrameId = requestAnimationFrame(() => animateStars(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Handle window resize
    window.addEventListener('resize', setCanvasSize);

    // Start animation
    // animateStars(ctx);
    drawStars(ctx, 200);

    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed w-full h-screen">
      <canvas ref={canvasRef} className=""></canvas>
      {/* Additional content for your hero section */}
    </div>
  );
};

export default HeroSection;
