"use client";

import { useEffect, useRef } from "react";

/** A decorative sphere that opens into a wave field as the visitor scrolls. */
export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const count = window.innerWidth < 760 ? 1800 : 3600;
    const columns = Math.ceil(Math.sqrt(count * 2));
    const rows = Math.ceil(count / columns);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const points = Array.from({ length: count }, (_, index) => {
      const y = 1 - (2 * (index + 0.5)) / count;
      const radius = Math.sqrt(1 - y * y);
      return {
        x: Math.cos(goldenAngle * index) * radius * 1.7,
        y: y * 1.7,
        z: Math.sin(goldenAngle * index) * radius * 1.7,
        fieldX: ((index % columns) / columns - 0.5) * 13,
        fieldZ: (Math.floor(index / columns) / rows - 0.5) * 7,
        seed: (index * 0.61803398875) % 1,
      };
    });
    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let lastPaint = 0;
    let color = "";
    let pointer = { x: -1000, y: -1000 };
    const started = performance.now();

    function draw(now: number) {
      if (!context || !canvas) return;
      const time = motion.matches ? 2 : (now - started) / 1000;
      const progress = Math.min(1, window.scrollY / (height * 1.1));
      const end = Math.max(
        0,
        Math.min(1, (window.scrollY - (root.scrollHeight - height * 2.2)) / (height * 1.2)),
      );
      const morph = progress * (1 - end);
      const angle = time * 0.07 + morph * 0.6;
      const tilt = 0.25 + morph * 0.1;
      const cos = Math.cos(angle),
        sin = Math.sin(angle);
      const tiltCos = Math.cos(tilt),
        tiltSin = Math.sin(tilt);
      const mobile = width < 760;
      const camera = mobile ? 9.5 : 6.8;
      const focal = height / (2 * Math.tan(Math.PI / 8));
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      canvas.style.opacity = String(Math.max(0.22, 1 - progress * 0.78));

      for (const point of points) {
        const noise = Math.sin(point.x * 1.7 + time * 0.6 + point.seed * 6) * 0.05;
        const x = point.x * (1 + noise) * (1 - morph) + point.fieldX * morph;
        const y =
          point.y * (1 + noise) * (1 - morph) +
          (Math.sin(point.fieldX * 0.9 + time * 0.5) + Math.cos(point.fieldZ * 1.3 - time * 0.4)) *
            0.35 *
            morph;
        const z = point.z * (1 + noise) * (1 - morph) + point.fieldZ * morph;
        const rotatedX = x * cos + z * sin;
        const rotatedZ = z * cos - x * sin;
        const rotatedY = y * tiltCos - rotatedZ * tiltSin;
        const depth = camera - (y * tiltSin + rotatedZ * tiltCos);
        let screenX = width / 2 + (rotatedX * focal) / depth;
        let screenY = height / 2 - ((rotatedY + (mobile ? 1.4 : 0)) * focal) / depth;
        const dx = screenX - pointer.x,
          dy = screenY - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (!motion.matches && distance < 100 && distance > 0) {
          const force = (1 - distance / 100) * 18;
          screenX += (dx / distance) * force;
          screenY += (dy / distance) * force;
        }
        const size = Math.max(0.6, ((1.1 + point.seed * 1.7) * 2.5) / depth);
        context.globalAlpha = (0.3 + 0.7 * point.seed) * 0.7;
        context.fillRect(screenX, screenY, size, size);
      }
      context.globalAlpha = 1;
    }

    function loop(now: number) {
      if (now - lastPaint >= 32) {
        draw(now);
        lastPaint = now;
      }
      frame = requestAnimationFrame(loop);
    }
    function restart() {
      cancelAnimationFrame(frame);
      if (document.hidden) return;
      draw(performance.now());
      if (!motion.matches) frame = requestAnimationFrame(loop);
    }
    function resize() {
      if (!canvas || !context) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(performance.now());
    }
    function updateColor() {
      color = getComputedStyle(root).getPropertyValue("--ink").trim();
      draw(performance.now());
    }
    function move(event: PointerEvent) {
      pointer = { x: event.clientX, y: event.clientY };
    }
    function leave() {
      pointer = { x: -1000, y: -1000 };
    }
    function scroll() {
      if (motion.matches) draw(performance.now());
    }
    const observer = new MutationObserver(updateColor);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    updateColor();
    resize();
    restart();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("visibilitychange", restart);
    motion.addEventListener("change", restart);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("visibilitychange", restart);
      motion.removeEventListener("change", restart);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
