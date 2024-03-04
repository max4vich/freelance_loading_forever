import React, { useEffect } from 'react';
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

function Neon() {
    useEffect(() => {
        neonCursor({
            el: document.getElementById('app'),
            shaderPoints: 16,
            curvePoints: 80,
            curveLerp: 0.5,
            radius1: 5,
            radius2: 250,
            velocityTreshold: 10,
            sleepRadiusX: 180,
            sleepRadiusY: 180,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025,
        });
    }, []);

    return (
        <div id="app">
            {/* Your React app content goes here */}
        </div>
    );
}

export default Neon;
