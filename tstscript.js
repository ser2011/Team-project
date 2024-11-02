

const arrow = document.getElementById('arrow');
let isDragging = false;
let offsetX, offsetY;

arrow.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - arrow.getBoundingClientRect().left;
    offsetY = event.clientY - arrow.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const posX = event.clientX - offsetX;
        const posY = event.clientY - offsetY;
        arrow.style.left = `${posX}px`;
        arrow.style.top = `${posY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('keydown', (event) => {
    const currentWidth = parseInt(window.getComputedStyle(arrow).width);
    const currentHeight = parseInt(window.getComputedStyle(arrow).height);

    if (event.key === 'ArrowUp') {
        // Увеличиваем высоту
        arrow.style.height = `${currentHeight + 5}px`;
    } else if (event.key === 'ArrowDown') {
        // Уменьшаем высоту
        arrow.style.height = `${Math.max(currentHeight - 5, 5)}px`; // Минимум 5px
    } else if (event.key === 'ArrowRight') {
        // Увеличиваем ширину
        arrow.style.width = `${currentWidth + 5}px`;
    } else if (event.key === 'ArrowLeft') {
        // Уменьшаем ширину
        arrow.style.width = `${Math.max(currentWidth - 5, 5)}px`; // Минимум 5px
        
    
    }
});