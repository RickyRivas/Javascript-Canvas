let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

// context.fillRect is a shorthand
// full square
// context.fillStyle = 'orangered'
// context.fillRect(100, 100, 400, 400)

// New Shape => stroke of square
// context.fillStyle = 'orange'
// context.lineWidth = 4;
// context.beginPath();
// context.rect(100, 100, 400, 400);
// context.stroke();


// Circle
// context.beginPath();
// context.arc(300, 300, 100, 0, Math.PI * 2);
// context.stroke();

const gravity = 9.81;
let velocity = 0.0
const width = 60;
const height = 60;
const gap = 20;
let x, y;

// Squares
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
         x = 100 + (width + gap) * i;
        y = 100 + (height + gap) * j;

        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();
        if (Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + 8, y + 8, width - 16, height - 16);
            context.stroke();
        }
    }
}
// random number between 1 , 0
// Math.random()


// let years = [2040, 2021, 2022];
// const menu = ['starter', 'main', 'dessert', 'drinks', 'sides'];

// years.forEach((year, i) => {
//     menu.push('Added New Item')
//     console.log(year, i)
// })

// console.log(menu)