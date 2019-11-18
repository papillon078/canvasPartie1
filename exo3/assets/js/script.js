$(function(){
//déclaration du contexte et lien avec la zone du canvas
let canvas = document.getElementById('canvas1');
let context = canvas.getContext('2d');

//carosserie de la voiture
context.fillStyle = '#00A550';
context.fillRect(80, 120, 240, 60);
context.fillRect(20, 180, 360, 60);
//roue arriere de la voiture
context.beginPath();
context.fillStyle = '#CECECE';
context.strokeStyle = '#737373';
context.arc(60, 280, 40, 0, Math.PI*2);
context.stroke();
context.fill();
context.closePath();
//roue arriere de la voiture
context.beginPath();
context.fillStyle = '#CECECE';
context.strokeStyle = '#737373';
context.arc(340, 280, 40, 0, Math.PI*2);
context.stroke();
context.fill();
context.closePath();
});
