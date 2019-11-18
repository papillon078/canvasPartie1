$(function(){
let x = Math.round(Math.hypot(100,100));
//déclaration du contexte et lien avec la zone du canvas
let canvas = document.getElementById('canvas1');
let context = canvas.getContext('2d');

//toit
context.translate(200,40);
context.rotate(Math.PI/4);
context.fillStyle = '#CD853F';
context.fillRect(0, 0, x, x);
context.setTransform(1,0,0,1,0,0);
context.translate(0,0);

//façade
context.fillStyle = '#ADD8E6';
context.fillRect(100,140,200,200);
//fenetre de gauche
context.fillStyle = '#CACACA';
context.fillRect(120,160,40,40);
context.fillRect(240,160,40,40);
context.fillRect(180,260,40,80);
});
