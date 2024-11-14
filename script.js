let arrow = document.getElementById('below');
arrow.addEventListener('mouseenter',function(){
    arrow.setAttribute('class','dim')

})
arrow.addEventListener('mouseleave',function(){
    arrow.classList.remove('class','dim')

})
// addEventListener('mou')
// JavaScript to gradually change background color while scrolling
window.addEventListener('scroll', function() {
    const section2 = document.querySelector('#page2');
    const section2Top = section2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Calculate how much of section 2 is visible in percentage
    const scrollProgress = Math.max(0, Math.min(1, (windowHeight - section2Top) / (windowHeight / 1.3)));

    // Adjust the background color of the first section based on scroll progress
    document.querySelector('#vid').style.backgroundColor = `rgba(00, 0, 0, ${scrollProgress})`;
});


// Select the circle element
const circle = document.querySelector('.circle');

// Update the circle's position to follow the mouse
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const circleSize = 19; // The width and height of the circle (adjust if you change the size)
    const offsetX = circleSize /2.3;
    const offsetY = circleSize / 2.3;

    // Move the circle to the mouse's position, accounting for the offset
    circle.style.left = (mouseX  - offsetX) + 'px';
    circle.style.top = (mouseY - offsetY) + 'px';
});

// Optionally, if you want the circle to smoothly follow the mouse, 
// you can uncomment the below code for a smoother transition.
// This creates a delay effect when the circle follows the cursor.
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function followMouse() {
    posX += (mouseX -9- posX) * 0.1; // Adjust the speed here
    posY += (mouseY -8- posY) * 0.1;
    circle.style.left = posX + 'px';
    circle.style.top = posY + 'px';
    requestAnimationFrame(followMouse);
}

followMouse();


// Select the circle element
const circle2 = document.querySelector('.big-circle');

// Update the circle's position to follow the mouse
document.addEventListener('mousemove', (e) => {
    const mouseX2 = e.clientX;
    const mouseY2 = e.clientY;
    const circleSize2 = 509; // The width and height of the circle (adjust if you change the size)
    const offsetX2 = circleSize2 /5;
    const offsetY2 = circleSize2 / 2.3;

    // Move the circle to the mouse's position, accounting for the offset
    circle2.style.left = (mouseX2  - offsetX2) + 'px';
    circle2.style.top = (mouseY2 - offsetY2) + 'px';
});

// Optionally, if you want the circle to smoothly follow the mouse, 
// you can uncomment the below code for a smoother transition.
// This creates a delay effect when the circle follows the cursor.
let mouseX2 = 0, mouseY2 = 0, posX2 = 0, posY2 = 0;

document.addEventListener('mousemove', (e) => {
    mouseX2 = e.clientX;
    mouseY2 = e.clientY;
});

function followMouse2() {
    posX2 += (mouseX2 -230-  posX2) * 0.02; // Adjust the speed here
    posY2 += (mouseY2 -230- posY2) * 0.02;
    circle2.style.left = posX2 + 'px';
    circle2.style.top = posY2 + 'px';
    requestAnimationFrame(followMouse2);
}

followMouse2();
    // Select all elements that should trigger the circle size change
    const triggerElements = document.querySelectorAll('img, a,.lb,.looped-text,.prs-box-c');
    const crcl = document.querySelector('.circle');
    
    // Function to change crcl size
    function enlargecrcl() {
        crcl.style.width = '60px';
        crcl.style.height = '60px';
        crcl.style.backgroundColor = 'transparent';
        crcl.style.border = '1px solid white';
    }
    
    // Function to reset crcl size
    function resetcrcl() {
        crcl.style.width = '19px';
        crcl.style.height = '19px';
        crcl.style.backgroundColor = '#95C11E';
        crcl.style.border = 'none';
    }
    
    // Add event listeners to all trigger elements
    triggerElements.forEach(element => {
        element.addEventListener('mouseenter', enlargecrcl);
        element.addEventListener('mouseleave', resetcrcl);
    });
    
    window.addEventListener('scroll', function() {
        const section3 = document.querySelector('#page2');
        const section3Top = section3.getBoundingClientRect().top;
        const windowHeight2 = window.innerHeight;
    
        // Calculate how much of section 2 is visible in percentage
        const scrollProgress2 = Math.max(0, Math.min(1, (windowHeight2-50 - section3Top) / (windowHeight2 / 3)));
    
        // Adjust the background color of the first section based on scroll progress
        document.querySelector('.header').style.background = `linear-gradient(rgba(0, 0, 0, ${scrollProgress2}),rgba(0, 0, 0, 0)`;
        document.querySelector('.header').style.top = `-0px`
    });

// let prsContent1 = document.getElementById('prs-content-1');
// let prsBox1 = document.getElementById('empt-1');
// prsBox1.addEventListener('mouseenter',function(){
//     prsContent1.style.opacity = '100%'
//     // prsContent1.style.zIndex = '5'
//     console.log('enterd')
// })
// prsBox1.addEventListener('mouseleave',function(){
//     prsContent1.style.opacity = '0%'
//     // prsContent1.style.zIndex = '1'

// })

// let prsContent2 = document.getElementById('prs-content-2');
// let prsBox2 = document.getElementById('empt-2');
// prsBox2.addEventListener('mouseenter',function(){
//     prsContent2.style.opacity = '100%'
//     console.log('enterd')
// })
// prsBox2.addEventListener('mouseleave',function(){
//     prsContent2.style.opacity = '0%'
// })

// let prsContent3 = document.getElementById('prs-content-3');
// let prsBox3 = document.getElementById('empt-3');
// prsBox3.addEventListener('mouseenter',function(){
//     prsContent3.style.opacity = '100%'
//     console.log('enterd')
// })
// prsBox3.addEventListener('mouseleave',function(){
//     prsContent3.style.opacity = '0%'
// })




// const prsPrs = document.querySelector('div');
// const prsPrs2 = document.querySelector('#prs-box-1');

// document.addEventListener('mousemove', (e) => {
//     const prsMouseX2 = e.clientX;
//     const prsMouseY2 = e.clientY;
//     const prsPrsSize2 = 509; // The width and height of the prsPrs (adjust if you change the size)
//     // const offsetX2 = prsPrsSize2 /5;
//     // const offsetY2 = prsPrsSize2 / 2.3;

//     // Move the prsPrs to the mouse's position, accounting for the offset
//     // prsPrs2.style.left = (prsMouseX2  - offsetX2) + 'px';
//     // prsPrs2.style.top = (prsMouseY2 - offsetY2) + 'px';
//     document.querySelector('low-black').addEventListener('mousemove',function(){
//         `prsPrs2.style.transform = rotate3d(${prsMouseX2 - prsMouseY2},${prsMouseX2 - prsMouseY2},${prsMouseX2-100},20deg)`
        

//     })
//     document.addEventListener('mouseleave',function(){
//         prsPrs2.style.transform = `rotate3d(0,0,0,0deg)
// `
//     })
// });

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    document.querySelectorAll(".prs-box,.prs-box-c").forEach(box => {
        const boxRect = box.getBoundingClientRect();
        
        // Calculate the center of each box
        const boxCenterX = boxRect.left + boxRect.width / 2;
        const boxCenterY = boxRect.top + boxRect.height / 2;

        // Calculate rotation angles
        const rotateX = (y - boxCenterY) / 300; // Adjust the divisor to change rotation intensity
        const rotateY = (boxCenterX - x) / 50;

        // Apply rotation
        box.style.transform = `rotateX(${rotateX-(rotateX *2)}deg) rotateY(${rotateY-(rotateX *2)}deg)`;
    });
    
});
