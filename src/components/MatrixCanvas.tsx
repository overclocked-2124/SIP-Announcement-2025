'use client';

import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  density: number;
  size: number;
  baseColor: string;
  color: string;
  draw: () => void;
  update: () => void;
}

const MatrixCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouse = { x: -200, y: -200 };
    let particles: Particle[] = [];
    const spacing = 30;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.9;

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      density: number;
      size: number;
      baseColor: string;
      color: string;

      constructor(x: number, y: number) {
        this.x = x + (Math.random() - 0.5) * 10;
        this.y = y + (Math.random() - 0.5) * 10;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;
        this.size = 2;
        this.baseColor = 'rgba(107, 114, 128, 0.4)'; // gray-500
        this.color = this.baseColor;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 120;
        let force = (maxDistance - distance) / maxDistance;
        
        if (force < 0) force = 0;

        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x += directionX * 0.1;
          this.y += directionY * 0.1;
          this.size = 3.5;
          this.color = 'rgba(237, 94, 74, 1)'; // primary color
        } else {
          if (this.x !== this.baseX) {
            let dxReturn = this.x - this.baseX;
            this.x -= dxReturn / 20;
          }
          if (this.y !== this.baseY) {
            let dyReturn = this.y - this.baseY;
            this.y -= dyReturn / 20;
          }
          this.size = 2;
          this.color = this.baseColor;
        }
      }
    }

    function init() {
      if (!canvas) return;
      particles = [];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.9;
      const cols = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);
      const xOffset = (canvas.width - (cols * spacing)) / 2 + spacing/2;
      const yOffset = (canvas.height - (rows * spacing)) / 2 + spacing/2;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          particles.push(new ParticleImpl(x * spacing + xOffset, y * spacing + yOffset));
        }
      }
    }

    let animationFrameId: number;
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseOut = () => {
      mouse.x = -200;
      mouse.y = -200;
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.9;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
};

export default MatrixCanvas;
