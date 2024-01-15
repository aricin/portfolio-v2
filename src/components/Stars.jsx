'use client'

import React, { useRef, useEffect } from 'react';

const Stars = () => {
  const canvasRef = useRef(null);
  let timeoutId;

  // Function to update star opacity smoothly
  const updateOpacity = (star, opacityChangeSpeed = 0.05) => {
    if (Math.abs(star.opacity - star.targetOpacity) < opacityChangeSpeed) {
      star.targetOpacity = Math.random();
    } else {
      star.opacity += star.opacity < star.targetOpacity ? opacityChangeSpeed : -opacityChangeSpeed;
    }
  };

  // Function to draw stars with smooth opacity transition
  const drawStars = (ctx, stars) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    stars.forEach(star => {
      updateOpacity(star);
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    });
  };

  // Animation function
  const animateStars = (ctx, stars) => {
    drawStars(ctx, stars);
    timeoutId = setTimeout(() => animateStars(ctx, stars), 50);
  };

  useEffect(() => {
    // Ensure 'window'
    if (typeof window !== 'undefined') {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Initialize star properties
      const stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        targetOpacity: Math.random(),
        blur: 10
      }));

      // Function to set canvas size
      const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      setCanvasSize();

      // Handle window resize
      window.addEventListener('resize', () => {
        setCanvasSize();
        drawStars(ctx, stars); // Redraw stars when window is resized
      });

      // Start the star animation
      animateStars(ctx, stars);

      // Clean up on component unmount
      return () => {
        window.removeEventListener('resize', setCanvasSize);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className='fixed w-full h-screen'>
      <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full z-10'></canvas>
    </div>
  );
};

export default Stars;