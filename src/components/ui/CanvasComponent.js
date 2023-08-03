import React, { useRef, useEffect, useState, useContext } from 'react';
import * as datGui from 'dat.gui';
import { SettingsContext } from '../../context/SettingsContext';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const { settings } = useContext(SettingsContext);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let aproxPhoneWidth = 500;

    // Create a new dat.gui instance with the updated settings
    const gui = new datGui.GUI();
    gui.hide();

    // Use add() without chaining and manually set min, max, and step for FPS
    const fpsCtrl = gui.add(settings, 'fps');
    const fpsMin = 1;
    const fpsMax = 120;
    const fpsStep = 1;
    fpsCtrl.__min = fpsMin;
    fpsCtrl.__max = fpsMax;
    fpsCtrl.__step = fpsStep;
    fpsCtrl.updateDisplay();

    gui.addColor(settings, 'animationTextColor');
    gui.add(settings, 'charset');
    const sizeCtrl = gui.add(settings, 'size').min(1).max(120).step(1);

    let w, h, p;
    const resize = () => {
      w = canvasRef.current.width = window.innerWidth;
      h = canvasRef.current.height = window.innerHeight;

      p = Array(Math.ceil(w / settings.size)).fill(0);
    };
    if (window.innerWidth > aproxPhoneWidth) {
      window.addEventListener('resize', resize);
    }
    window.addEventListener('orientationchange', resize);
    sizeCtrl.onFinishChange((s) => resize());
    resize();

    const random = (items) => items[Math.floor(Math.random() * items.length)];

    const draw = () => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = settings.backgroundColor;
      if (!settings.animation) {
        return;
      }
      // ctx.fillStyle = 'rgba(0,0,0,.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = settings.animationTextColor;

      ctx.font = settings.size + 'px sans-serif';
      for (let i = 0; i < p.length; i++) {
        let v = p[i];
        ctx.fillText(random(settings.charset), i * settings.size, v);
        p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + settings.size;
      }
    };

    // Clear the previous interval, if any
    if (intervalId) {
      clearInterval(intervalId);
    }
    // Set a new interval for the canvas animation
    const newIntervalId = setInterval(draw, 1000 / settings.fps);
    setIntervalId(newIntervalId);

    // Cleanup the dat.gui instance and event listeners when the component is unmounted
    return () => {
      gui.destroy();
      window.removeEventListener('resize', resize);
      window.removeEventListener('orientationchange', resize);
      // Clear the interval when the component is unmounted
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
    // eslint-disable-next-line
  }, [settings]);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
  );
};

export default CanvasComponent;
