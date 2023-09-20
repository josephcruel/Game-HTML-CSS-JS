//TODO - 

/**
 1. Create Canvas Context
 2. Create and draw ball
 3. Create a Paddle
 4. Create bricks
 5. Create score window
 6. Add Update Function
 7. Rules Functions
 8. Rules for the animation
 9. Move paddle 
 10. Keyboard events with the paddle
 11. Moving ball
 12. Setup Wall Boundaries
 13. Score Updates
 14. When the ball break the bricks
 15. Lose- redrew the bricks and reset the score.
 * 
 */


// ANCHOR - DOM Selectors
 const rulesBtn = document.getElementById('rules-btn')
 const closeBtn = document.getElementById('close-btn')
 const rules = document.getElementById('rules')

 // ANCHOR - Canvas DOM Selector
 const canvas = document.getElementById('canvas')
 const ctx = canvas.getContext('2d')

 let score = 0 //setting out scoreboard to zero 

 const brickRowCount = 9 
 const brickColumnCount = 5

 const ball = {
    x: canvas.width / 2, //Start displaying in the middle of the screen
    y: canvas.height / 2, //Start displaying in the middle of the screen
    size: 10, // Ball size
    speed: 4,  // Animation Speed properties
    dx: 4, // Animation Direction 
    dy: -4 // Animation Direction with (-) so it does not move down the bottom line of our screens
 }

 // Create Paddle 
 const paddle = {
    x: canvas.width / 2 -40, // We are taking half width of the paddle 
    y: canvas.height / -20, // Center this paddle in the middle.
    w: 80,
    h: 10,
    speed: 8,
    dx: 0, // Only moving on the X-axis
 }

 // Create Brick 
 const brickInfo = {
    w: 70, // Bricks will share the same properties 
    h: 20,
    padding: 10,
    offsetX: 45, 
    offsetY: 60,
    visible: true
 }

 // Create brick array 
 const bricks = [] //initiate bricks array 
 for(let i = 0; i < brickRowCount; i++) { // loop through the array row 
    bricks[i] = [] // Set the row bricks iteration to an empty array
    for(let j = 0; j < brickColumnCount; j++) { // loop through the array column
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX // i is the row iteration for each brick
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY // we are looping and setting/getting position of bricks 
        bricks[i][j] = {x,y, ...brickInfo} // copy and take the array 2D and give it the values of x,y 
    }
 }

 console.log(bricks)

// Create and Draw the ball on the canvas
function dreaBall() {
    ctx.beginPath() // We are going to create a path 
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2) // Drew an arc to build a ball
    ctx.fillStyle = '#0095dd' // Style the ball arc property
    ctx.fill()
    ctx.closePath()
}

//Create and Draw Paddle on the canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#0095dd'
    ctx.fill
    ctx.closePath()
}

// Draw and Design the score board 
function drawScore() {
    ctx.font = '20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30)
}

// Bricks Design on the canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
                ctx.rect(brick.x, brick.y, brick.w, brick.h)
                ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent' // This will be conditional
                ctx.fill()
                ctx.closePath()  
        })
    })
}

//NOTE - Move the paddle on canvas
function movePaddle() { //Every time you start playing on the canvas 
    paddle.x += paddle.dx // Paddle with not move until we use the keyboard events.

    //Wall selection
    if(paddle.x + paddle.w > canvas.width) {
        paddle.x = canvas.width - paddle.w
    }
}



