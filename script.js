const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');
const leftScoreEl = document.getElementById('left-score');
const rightScoreEl = document.getElementById('right-score');

// Game objects
const paddleWidth = 12, paddleHeight = 90;
const ballRadius = 12;
const canvasWidth = canvas.width, canvasHeight = canvas.height;

// Left paddle (player)
let leftPaddleY = (canvasHeight - paddleHeight) / 2;

// Right paddle (AI)
let rightPaddleY = (canvasHeight - paddleHeight) / 2;
let rightPaddleSpeed = 4;

// Ball
let ballX = canvasWidth / 2, ballY = canvasHeight / 2;
let ballSpeedX = 5 * (Math.random() > 0.5 ? 1 : -1);
let ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);

// Score
let leftScore = 0, rightScore = 0;

// Mouse control for left paddle
canvas.addEventListener('mousemove', (evt) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = evt.clientY - rect.top;
    leftPaddleY = mouseY - paddleHeight / 2;
    // Clamp paddle position
    leftPaddleY = Math.max(0, Math.min(canvasHeight - paddleHeight, leftPaddleY));
});

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw paddles
    ctx.fillStyle = "#fff";
    ctx.fillRect(10, leftPaddleY, paddleWidth, paddleHeight); // Left
    ctx.fillRect(canvasWidth - paddleWidth - 10, rightPaddleY, paddleWidth, paddleHeight); // Right

    // Draw ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw center line
    ctx.strokeStyle = "#444";
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);
    ctx.stroke();
    ctx.setLineDash([]);
}

// Update game state
function update() {
    // Ball movement
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Top/bottom wall collision
    if (ballY - ballRadius < 0) {
        ballY = ballRadius;
        ballSpeedY = -ballSpeedY;
    } else if (ballY + ballRadius > canvasHeight) {
        ballY = canvasHeight - ballRadius;
        ballSpeedY = -ballSpeedY;
    }

    // Left paddle collision
    if (
        ballX - ballRadius <= 10 + paddleWidth &&
        ballY + ballRadius >= leftPaddleY &&
        ballY - ballRadius <= leftPaddleY + paddleHeight
    ) {
        ballX = 10 + paddleWidth + ballRadius;
        ballSpeedX = -ballSpeedX;
        // Add a little randomness
        ballSpeedY += (Math.random() - 0.5) * 2;
    }

    // Right paddle collision
    if (
        ballX + ballRadius >= canvasWidth - paddleWidth - 10 &&
        ballY + ballRadius >= rightPaddleY &&
        ballY - ballRadius <= rightPaddleY + paddleHeight
    ) {
        ballX = canvasWidth - paddleWidth - 10 - ballRadius;
        ballSpeedX = -ballSpeedX;
        // Add a little randomness
        ballSpeedY += (Math.random() - 0.5) * 2;
    }

    // Score check
    if (ballX - ballRadius < 0) {
        rightScore++;
        resetBall(-1);
    } else if (ballX + ballRadius > canvasWidth) {
        leftScore++;
        resetBall(1);
    }

    // AI paddle movement
    const targetY = ballY - paddleHeight / 2;
    if (rightPaddleY < targetY) {
        rightPaddleY += rightPaddleSpeed;
        if (rightPaddleY > targetY) rightPaddleY = targetY;
    } else if (rightPaddleY > targetY) {
        rightPaddleY -= rightPaddleSpeed;
        if (rightPaddleY < targetY) rightPaddleY = targetY;
    }
    // Clamp
    rightPaddleY = Math.max(0, Math.min(canvasHeight - paddleHeight, rightPaddleY));

    // Update score display
    leftScoreEl.textContent = leftScore;
    rightScoreEl.textContent = rightScore;
}

// Reset ball after score
function resetBall(direction) {
    ballX = canvasWidth / 2;
    ballY = canvasHeight / 2;
    ballSpeedX = 5 * direction;
    ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);
}

// Main game loop
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

// Start game
loop();

