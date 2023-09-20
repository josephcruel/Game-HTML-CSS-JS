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


