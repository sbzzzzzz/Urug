(function() {
    // 1. Crear el Joystick visual
    const joy = document.createElement('div');
    joy.style = "position:fixed; bottom:30px; left:30px; width:120px; height:120px; background:rgba(255,255,255,0.2); border-radius:50%; border:2px solid #fff; z-index:999999;";
    document.body.appendChild(joy);

    // 2. Lógica para las teclas
    function press(key) { document.dispatchEvent(new KeyboardEvent('keydown', {key: key})); }
    function release(key) { document.dispatchEvent(new KeyboardEvent('keyup', {key: key})); }

    // 3. Detectar movimiento táctil
    joy.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const rect = joy.getBoundingClientRect();
        const x = touch.clientX - rect.left - 60;
        const y = touch.clientY - rect.top - 60;

        // Limpiar teclas antes de nuevas
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].forEach(release);
        
        if (y < -20) press('ArrowUp');
        if (y > 20) press('ArrowDown');
        if (x < -20) press('ArrowLeft');
        if (x > 20) press('ArrowRight');
    });

    joy.addEventListener('touchend', () => {
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].forEach(release);
    });
})();
