import React, { useRef, useEffect } from 'react';

// Utility to generate random stars
function createStars(count, width, height) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.2 + 0.3,
    speed: Math.random() * 0.2 + 0.05,
    alpha: Math.random() * 0.5 + 0.5,
  }));
}

// Utility to generate random AI nodes
function createNodes(count, width, height) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2 + 2,
  }));
}

// Utility to connect nodes
function connectNodes(ctx, nodes, maxDist) {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        ctx.save();
        ctx.globalAlpha = 0.1 + 0.3 * (1 - dist / maxDist);
        ctx.strokeStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

export default function SpaceAIGlowBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const starsRef = useRef([]);
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars and nodes
    starsRef.current = createStars(120, width, height);
    nodesRef.current = createNodes(18, width, height);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (let star of starsRef.current) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#aaf0ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Move star
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }

      // Draw AI nodes
      for (let node of nodesRef.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 16;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.restore();
      }
      // Connect nodes
      connectNodes(ctx, nodesRef.current, 180);

      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = createStars(120, width, height);
      nodesRef.current = createNodes(18, width, height);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 60% 40%, #0a0a23 60%, #000 100%)',
      }}
      aria-hidden="true"
    />
  );
} 