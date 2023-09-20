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
    speed: 4,  // Animation Speed props 
    dx: 4, // Animation Direction 
    dy: -4 // Animation Direction with (-) so it does not move down the bottom line of our screens
 }

 // Create Paddle 

 const paddle = {}

 // Create Brick 

 const brickInfo = {}

 // Create brick array 

 const bricks = []


