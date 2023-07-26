import React, { useRef, useEffect } from 'react';
import * as datGui from 'dat.gui';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const state = {
      fps: 23,
      color: '#8a7f7f',
      charset: 'M',
      size: 10,
    };

    const gui = new datGui.GUI();
    const fpsCtrl = gui.add(state, 'fps').min(1).max(120).step(1);
    gui.addColor(state, 'color');
    gui.add(state, 'charset');
    const sizeCtrl = gui.add(state, 'size').min(1).max(120).step(1);

    let w, h, p;
    const resize = () => {
      w = canvasRef.current.width = window.innerWidth;
      h = canvasRef.current.height = window.innerHeight;

      p = Array(Math.ceil(w / state.size)).fill(0);
    };
    window.addEventListener('resize', resize);
    sizeCtrl.onFinishChange((s) => resize());
    resize();

    const random = (items) => items[Math.floor(Math.random() * items.length)];

    const draw = () => {
      const ctx = canvasRef.current.getContext('2d');

      ctx.fillStyle = 'rgba(0,0,0,.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = state.color;

      ctx.font = state.size + 'px sans-serif';
      for (let i = 0; i < p.length; i++) {
        let v = p[i];
        ctx.fillText(random(state.charset), i * state.size, v);
        p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
      }
    };

    let interval = setInterval(draw, 1000 / state.fps);
    fpsCtrl.onFinishChange((fps) => {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(draw, 1000 / fps);
    });

    // Cleanup the dat.gui instance when the component is unmounted
    return () => {
      gui.destroy();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full'/>;
};

export default CanvasComponent;
