const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.forEach(segment => {
        ctx.fillStyle = 'green';
        ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
    });
}

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);
    snake.pop();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') direction = { x: 0, y: -1 };
    if (event.key === 'ArrowDown') direction = { x: 0, y: 1 };
    if (event.key === 'ArrowLeft') direction = { x: -1, y: 0 };
    if (event.key === 'ArrowRight') direction = { x: 1, y: 0 };
});

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
