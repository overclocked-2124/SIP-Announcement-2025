'use client'

import { useEffect, useRef } from 'react'

interface DotMatrixProps {
  dotColor?: string
}

const DotMatrix: React.FC<DotMatrixProps> = ({ dotColor = 'rgba(237, 94, 74, 0.5)' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    const mouse = {
      x: -200,
      y: -200,
    }

    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = 2
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 1
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = dotColor
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.closePath()
          ctx.fill()
        }
      }

      update() {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxDistance = 100
        const force = (maxDistance - distance) / maxDistance
        const directionX = forceDirectionX * force * this.density
        const directionY = forceDirectionY * force * this.density

        if (distance < maxDistance) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }
    }

    function init() {
      if (!canvas) return
      particles = []
      const gap = 20
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          particles.push(new Particle(x, y))
        }
      }
    }

    let animationFrameId: number
    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < particles.length; i++) {
          particles[i].update()
          particles[i].draw()
        }
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }

    const handleMouseOut = () => {
      mouse.x = -200
      mouse.y = -200
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseOut)
    window.addEventListener('resize', handleResize)

    handleResize()
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseOut)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [dotColor])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default DotMatrix
